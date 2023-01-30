import styles from './ButtonCard.module.css'

function ButtonCard({icon, text, action, theme}){

    return(
        <>  
            <button className={`${styles.btnCard} ${styles[theme]}`}
            type='button' onClick={action}>{icon}{text}</button>
        
        </>


    )
}

export default ButtonCard