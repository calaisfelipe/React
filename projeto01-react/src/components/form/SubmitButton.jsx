import styles from './SubmitButton.module.css'

function SubmitButton({Text}){

    return(
        <div className={styles.divBtnCriarProjeto}>
               
                <button className={styles.btnCriarProjeto} type="submit">{Text}</button>
            </div>

    )

}


export default SubmitButton