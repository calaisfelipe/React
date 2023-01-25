

function Saudacao({nome}){


    function gerarSaudacao(algumnome){
        return `Olá , SR . ${algumnome}`
    }


    return(
        <div>
            <p> {gerarSaudacao(nome)} </p>


        </div>


    )
}

export default Saudacao