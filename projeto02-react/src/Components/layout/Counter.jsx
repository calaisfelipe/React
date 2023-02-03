import styles from './Counter.module.css'

function  Counter({title, number, color}){

 
    return(
            <div >
                
                <p className={styles.counterNumber} style={{backgroundColor: color}}>{number}</p>
                <h3 className={styles.counterText} style={{color: color}}>{title}</h3>


            </div>


    )


}

export default Counter