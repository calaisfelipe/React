import styles from './Title.module.css'


function Title({title, color}){

    return(
        <h1 style={{color: color}}>{title}</h1>

    )

}

export default Title