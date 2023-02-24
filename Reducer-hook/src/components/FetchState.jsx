import React, {useState, useEffect} from 'react'


function FetchState() {
    const url = 'https://jsonplaceholder.typicode.com/'

    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [data,setData] = useState({})

async function getComents(){

    await fetch(`${url}posts`, {
        method: 'GET',
        headers: { 'Content-Type': 'application/json'}
    } )
    .then((resp) => resp.json())
    .then((data) => {
        console.log(data)
        setData(data)
        setLoading(false)
        setError('')
    })
    .catch((err) => {
        console.log(err)
        setError('something went wrong !!')
        setLoading(false)
        setData({})
    })

}

useEffect( () => getComents , [])

  return (
    <div>
        {loading ? 'carregando...' : (data.length > 0 ? (data.map((item) => <p key={item.id}>id:{item.id} comentario:{item.title}</p> )) : (<p>Não há comentarios a serem exibidos</p>))}

        {error ? error : null}

    </div>
  )
}

export default FetchState