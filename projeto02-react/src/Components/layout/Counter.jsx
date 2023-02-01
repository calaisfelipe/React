import styles from './Counter.module.css'

function  Counter({title, number}){


    return(
            <div className='counter' >

                <p className="counterNumber">{number}</p>
                <h3 className="counterText">{title}</h3>


            </div>


    )


}

export default Counter