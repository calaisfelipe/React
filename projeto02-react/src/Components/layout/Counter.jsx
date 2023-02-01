import styles from './Counter.module.css'

function  Counter({title, number}){

  
    return(
            <div >
                
                <p className={styles.counterNumber}>{number}</p>
                <h3 className={styles.counterText}>{title}</h3>


            </div>


    )


}

export default Counter