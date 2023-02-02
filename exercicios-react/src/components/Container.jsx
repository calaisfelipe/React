import styles from './Container.module.css'


function Container({children , custom}){

    return(
        <div className={ `${styles.container} ${styles[custom]}`}>

            {children}
            {console.log(children)}
            </div>

    )


}

export default Container