import React, {useState, useEffect} from 'react'

function DataFetching() {

    const [dados, setDados] = useState([])
    const url = 'https://jsonplaceholder.typicode.com/'


    useEffect(() => {

        fetch(`${url}posts`, {
            method: 'GET',
            headers: { 'Content-type':'application/json'}
        } )
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            setDados(data)
        })
        .catch((err) => console.log(err))

    }, [])


  return (

    <div>
        {dados.map((dado) => <p key={dado.id}>ID: {dado.id} - COMENT: {dado.title}</p>)}
    </div>
  )
}

export default DataFetching