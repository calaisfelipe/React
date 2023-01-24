
function Form(){

    function envioForm(e){
        e.preventDefault()
        console.log('enviou')
    }

    return(
        <div>
            <h1>Cadastro:</h1>
            <form onSubmit={envioForm}>
                <div>
                    <label for="itexto" >Escreva seu nome:</label>
                    <input type="text" id="itexto" placeholder="Seu nome"></input>
                </div>
                <input type="submit" value="Enviar"></input>
            </form>
        </div>

    )
}

export default Form