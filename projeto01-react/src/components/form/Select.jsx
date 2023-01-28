import styles from './Select.module.css'

function Select({name, labelText, options, handleOnChange, value}) {


    return (

        <div className={styles.formItem}>
            <label htmlFor={name} >{labelText}</label>

            <select className="selectForm"  name={name} id={name} onChange={handleOnChange} value={value || ''} >

                <option>Selecione uma opção </option>

                {options.map((option) => (

                   <option value={option.id} 
                   key={option.id}>{option.name}</option>

                   )
                    
                    )}


            </select>
        </div>
    )
}

export default Select