import Form from '../Components/layout/Form'
import { useState } from 'react'
import Contador from '../Components/layout/Contador'


function Home() {

    const [titulo, setTitulo] = useState('')
    const [date, setDate] = useState('')
    const [showForm, setShowForm] = useState(false)
    const [showContador, setShowContador] = useState(false)


    function sendCounter(e){
        e.preventDefault()
        setShowForm(true)
        setShowContador(true)
    }

    return(
       <>
            {!showForm && (<Form setDate={setDate}  setTitle={setTitulo} action={sendCounter}/>) }

            
            {showContador && <Contador tittle={titulo} data={date}/> }
            

     </>
        

    )



}


export default Home