import styles from './ServiceCard.module.css'
import { BsFillTrashFill } from 'react-icons/bs'
import ButtonCard from './ButtonCard'



function ServiceCard({name , cost, description, id , handleRemove}){

function remove(e) {

    e.preventDefault()
    handleRemove(id, cost)
    
}

    return(
        <div className={styles.servicesContainer}>
            <div key={id} className={styles.cardTitle}>
            <h3>{name}</h3>
                </div>
            
                <div className={styles.orcamentoContainer}>
                <p>Custo: </p>R$ {cost}
                </div>

                <div className={styles.orcamentoContainer}>
                {description}
                </div>

                <div className={styles.orcamentoContainer}>
                    <ButtonCard text='Excluir' action={remove} icon={<BsFillTrashFill/>}/>
                </div>
        </div>
    )


}


export default ServiceCard