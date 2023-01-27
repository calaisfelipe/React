
import styles from './FormProjeto.module.css'

function FormProjeto() {
    return (
        <form >
            <div className={styles.formItem}>
            <label htmlFor="projectNameInput">Nome do projeto:</label>
            <input type="text" name="projectNameInput" id="projectNameInput" required placeholder="Insira o nome do projeto" /></div>

            <div className={styles.formItem}>
            <label htmlFor="projectOrcInput">Orçamento do projeto:</label>
            <input type="number" name="projectOrcInput" id="projectOrcInput" required placeholder="Insira o orçamento total:" /></div>

            <div className={styles.formItem}>
            <label htmlFor="selectCategoria">Selecione a categoria</label>
            
                <select name="selectCategoria" id="selectCategoria">
                    <option value="" selected >Selecione uma opção </option>
                    <option value="Infra">Infra</option>
                    <option value="Desenv">Desenvolvimento</option>
                    <option value="Design">Design</option>
                    <option value="Planejamento">Planejamento</option>
                </select>

                <div className={styles.divBtnCriarProjeto}>
                    <input className={styles.btnCriarProjeto} type="submit" value="Criar projeto" />
                </div>

            </div>

            
            

        </form>
    )


}


export default FormProjeto 