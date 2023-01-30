import styles from './ProjectCard.module.css'
import { BsCircleFill, BsPencil, BsFillTrashFill } from 'react-icons/bs'
import ButtonCard from './ButtonCard'
import { Link } from 'react-router-dom'

function ProjectCard({id, name, budget, categoryName,categoryID, handleRemove}){

   
    function remove(){
        handleRemove(id)
    }


    return(
        <div key={id} className={styles.cardContainer}>
            <div className={styles.cardTitle}>
                <h3>{name}</h3>
            </div>

            <div className={styles.orcamentoContainer}>
                <p>Orçamento: </p>R$ {budget}
            </div>

            <div className={styles.categoryContainer}>
                <span><BsCircleFill className={`${styles[`category${categoryID}`]}`}/></span> {categoryName}
            </div>

            <div className={styles.buttonContainer}>

                <Link className={styles.linkCard} to={`/project/${id}`} ><BsPencil /> Editar</Link>

                <ButtonCard text='Excluir' action={remove} icon={<BsFillTrashFill/>}/>
            </div>
        </div>
    )

}

export default ProjectCard