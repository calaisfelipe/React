import styles from './Pessoa.module.css'
import PropTypes from 'prop-types'

function Pessoa({nome,idade,profissao,foto}){
    return(
        <div className={styles.pessoaContainer}>
            <img src={foto} alt={nome}></img>
            <h1>{nome}</h1>
            <p className={styles.pessoaContent}>{idade}</p>
            <p className={styles.pessoaContent}>{profissao}</p>
          
        </div>
    )

} 

Pessoa.propTypes = {
    nome: PropTypes.string.isRequired ,
    idade: PropTypes.number,
    profissao: PropTypes.string,
    foto: PropTypes.string
}

Pessoa.defaultProps = {
    nome: 'faltou o nome',
    idade: 0,
    profissao: 'faltou profissao',
    foto: 'Sem foto'
}

export default Pessoa