import styles from './Input.module.css'

export default function Input({txtlabel,type,placeholderText,name, action, content}) {


  function handleChange(e){

    action(e.target.value)

  }



  return (

    <div className={styles.inputContainer}>

        <div className={styles.itensContainer}>
            <label className={styles.labelStyle} htmlFor={name}>{txtlabel}</label>
            
            <input className={styles.inputForm} type={type} name={name} id={name} placeholder={placeholderText}  onChange={handleChange} value={content || ''}/>
        </div>

    </div>
  )
}
