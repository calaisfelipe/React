

function Nota({num, handleNota}){
    
    return(
        <div>
            <h3>Nota {num}:</h3>

            <input type="text" name={`nota${num}`} id='nota'   onChange={handleNota} />

        </div>

    )
}

export default Nota