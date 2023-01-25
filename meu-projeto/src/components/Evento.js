import Button from "./Button"


function Evento() {

    function meuEvento(){
        console.log(`fui ativado`)
    }

    function meuEvento2(){
        console.log('evento2')
    }

    return(
        <div>
            <p>Clique para disparar um evento:</p>
            
            <Button event={meuEvento} text={'CLIQUE AQUI!!'}/>
            <Button event={meuEvento2} text={'Não clique'}/>

        </div>
    )
}


export default Evento