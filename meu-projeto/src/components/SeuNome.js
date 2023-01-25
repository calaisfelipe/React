
function SeuNome({setNome}){
    
    return (
        
        <div>
            <label htmlFor="itext"> Digite o seu nome:</label>
            <input type="text" placeholder="Qual é o seu nome?" onChange={(e) => setNome(e.target.value)}></input>
        </div>

    )
}


export default SeuNome