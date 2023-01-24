import Frase from "./Frase";


function HelloWord(){
    return (
        <div>
            <Frase texto="texto2" />
            <h1>Meu primeiro componente</h1>
            <Frase texto="texto1"/>
        </div>
        )
}

export default HelloWord;