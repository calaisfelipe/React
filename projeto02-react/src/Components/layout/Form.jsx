import styles from './Form.module.css'
import NewYear from '../../img/NewYear.jpg'


import Title from './title'


function Form({setTitle, setDate, handleColor , getUrl, action}){


  
    return(

        <div className={styles.backgroundContainer} style={{backgroundImage: `url(${NewYear})` }}>
          <div className={styles.container}>
          <Title title='Monte a sua contagem regressiva' />
          
          <div className={styles.formContainer}>

            <form onSubmit={action}>
          
                  <label htmlFor="titulo">Titulo:</label>

                  <input onChange={(e) => setTitle(e.target.value)}  type="text" name="titulo" id="titulo" required placeholder='Digite o titulo do evento'/>

                  <label htmlFor="eventData">Data do evento:</label>
                  <input  type="date" name="eventData" id="eventData" onChange={(e) => setDate(e.target.value)} required placeholder='mm/dd/yyyy'/>

                  <label htmlFor="imgbackground">Imagem:</label>
                  <input type="text" name="imgbackground" id="imgbackground" onInput={(e) => getUrl(e.target.value)}  placeholder='Insira a URL da imagem'/>

                  <label htmlFor="themeColor">Cor do tema:</label>
                  <input type="color" name="themeColor" id="themeColor" onInput={(e) => handleColor(e.target.value)}/>
          
                          <div><button className={styles.btnForm} type='submit'>Criar</button></div>
          
            </form>
          </div>
          </div>
        </div>
    )
}

export default Form