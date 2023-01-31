import styles from './Modal.module.css'

function Modal({event, btnText}){

    return(
        <div className={styles.ModalContainer}>
            <h1>Front Begginers Modal</h1>

            <div>
                <button className={styles.btnModal} onClick={event}>{btnText}</button>
            </div>
        </div>
    )
}

export default Modal