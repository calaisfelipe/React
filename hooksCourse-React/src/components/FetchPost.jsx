import React, { useEffect, useState } from 'react'


function FetchPost() {

    const [user, setUser] = useState({ userId: '', id: 101, title: '', body: '' })
    const [message, setMessage] = useState(false)

    const Fetching = async (comment) => {

        await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: { 'Content-Type': 'Application/json' },
            body: JSON.stringify(comment)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                setMessage(true)
            })
            .catch((err) => console.log(err))

    }

    function handleForm(e) {

        setUser({ ...user, [e.target.name]: e.target.value })

    }

    function submitForm(e) {
        setMessage(false)
        e.preventDefault()
        console.log(user)
        Fetching(user)


    }

    return (
        <div>
            <form onSubmit={submitForm}>

                <input type="text" name='title' id='title' placeholder='titulo' onChange={handleForm} value={user.title} /><br />
                <textarea name="body" id="body" cols="30" rows="10" placeholder='Comentario' onChange={handleForm} value={user.body}></textarea>
                <br />
                <input type="submit" value="Enviar" />

            </form>
            {message && 'Post enviado'}
        </div>
    )
}

export default FetchPost