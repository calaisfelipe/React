import styles from 'Form.module.css'

import Title from './title'

function Form(){

    return(

        <div className="container">
        <Title title='Monte a sua contagem regressiva' />
        
        <div className='formContainer'>
          <form >
           
                <label htmlFor="titulo">Titulo:</label>
                <input type="text" name="titulo" id="titulo" required placeholder='Digite o titulo do evento'/>
                <label htmlFor="eventData">Data do evento:</label>

                <input type="date" name="eventData" id="eventData" required placeholder='mm/dd/yyyy'/>
                <label htmlFor="imgbackground">Imagem:</label>

                <input type="text" name="imgbackground" id="imgbackground" placeholder='Insira a URL da imagem'/>
                <label htmlFor="themeColor">Cor do tema:</label>
                <input type="color" name="themeColor" id="themeColor" />
                          
                            <div><button className='btnForm' type="submit">Criar</button></div>
              
          </form>
        </div>
        </div>
    )
}

export default Form