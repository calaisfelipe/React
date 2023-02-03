import Form from '../Components/layout/Form'
import { useState } from 'react'
import Contador from '../Components/layout/Contador'


function Home() {

    const [titulo, setTitulo] = useState('')
    const [date, setDate] = useState('')
    const [color, setColor] = useState('')
    const [url, setUrl] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [showContador, setShowContador] = useState(false)


    function sendCounter(e){
        e.preventDefault()
        setShowForm(true)
        setShowContador(true)
    }

    return(
       <>
            {!showForm && (<Form setDate={setDate}  setTitle={setTitulo} handleColor={setColor} action={sendCounter} getUrl={setUrl}/>) }

            
            {showContador && <Contador tittle={titulo} data={date} styleColor={color} putUrl={url}/> }
            

     </>
        

    )



}


export default Home