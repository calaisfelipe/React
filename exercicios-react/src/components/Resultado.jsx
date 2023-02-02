

function Resultado({soma}){

    return(
        <div>
            <h3>Resultado:{soma}</h3>
            <p>{soma > 60 ? 'aprovado' : 'reprovado'}</p>
           
            

        </div>

    )
}

export default Resultado