import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar(){
    return(

        <div className={styles.NavbarContainer}>
            <div>
                <img src="../src/img/costs_logo.png" alt="Costs Logo" />
            </div>

            <div>
                <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/newproject" >Novo Projeto</Link></li>
                <li><Link to="/contact" >Contato</Link></li>
                <li><Link to="/company" >Empresa</Link></li>
                      </ul>
            </div>
        </div>
    )
}


export default Navbar