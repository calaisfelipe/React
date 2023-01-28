import styles from './Input.module.css'


function Input({ name, labelText, Text, tipo, handleOnChange, values }) {

    return (
        <div className={styles.formItem}>
            <label htmlFor={name}>{labelText}</label>
            <input 
            className={styles.inputStyle} 
            type={tipo} 
            name={name} 
            id={name} 
            placeholder={Text} 
            onChange={handleOnChange} 
            value={values} 
            />
        </div>
    )
}

export default Input