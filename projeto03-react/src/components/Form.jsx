import SecondaryTitle from '../layout/SecondaryTitle'
import Input from '../layout/Input'
import styles from '../components/Form.module.css'

export default function Form() {
  return (
    <div>
        <SecondaryTitle text='Insira sua próxima tarefa:' />
        <form  onSubmit=''>
            <Input txtlabel='O que você vai fazer?' type='text' placeholderText='Titulo da tarefa' name='taskName' />

            <Input txtlabel='Duração:' type='number' placeholderText='Tempo estimado (em horas)' name='taskDuration'/>

            <div className={styles.btnContainer}>

                <input className={styles.btnForm} type="submit" value="Criar Tarefa" />
                
            </div>



            
        </form>

    </div>
  )
}
