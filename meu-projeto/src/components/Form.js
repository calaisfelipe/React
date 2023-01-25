import { useState } from 'react'


function Form(){

    function envioForm(e){
        e.preventDefault()
        console.log(name)
        console.log(password)
        console.log('enviou')
    }

    const [name, setName] = useState()
    const [password, setPassword] = useState()

    return(
        <div>
            <h1>Cadastro:</h1>
            <form onSubmit={envioForm}>

                <div>
                    <label htmlFor="itexto" >Escreva seu nome:</label>
                    <input type="text" id="itexto" name="itexto" placeholder="Seu nome"
                    onChange={(e) => setName(e.target.value)} />
                </div>
                <div>
                    <label htmlFor="ipass" >Senha:</label>
                    <input type="password" id="ipass" name="ipass" placeholder="Senha"
                    onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                <input type="submit" value="Enviar"></input>
            </form>
        </div>

    )
}

export default Form