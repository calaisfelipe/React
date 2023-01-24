function Evento({numero}) {

    function meuEvento(){
        console.log(`fui ativado ${numero}`)
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            <button type="button" onClick={meuEvento}>Clique aqui</button>

        </div>
    )
}


export default Evento