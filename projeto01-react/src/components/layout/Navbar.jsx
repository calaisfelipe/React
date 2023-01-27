import {Link} from 'react-router-dom'
import styles from './Navbar.module.css'

function Navbar(){
    return(

        <nav className={styles.NavbarContainer}>
            <div>
                <img src="../src/img/costs_logo.png" alt="Costs Logo" />
            </div>

            <div>
                <ul>
                <li><Link to="/" >Home</Link></li>
                <li><Link to="/projects" >Projetos</Link></li>    
                <li><Link to="/company" >Empresa</Link></li>
                <li><Link to="/contact" >Contato</Link></li>
                      </ul>
            </div>
        </nav>
    )
}


export default Navbar