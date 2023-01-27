import { BsInstagram, BsFacebook, BsLinkedin  } from "react-icons/bs";

import styles from './Footer.module.css'

function Footer(){
    return(
            <footer className={styles.footerContainer}>
                <div className={styles.socialContainer}>
                    <BsInstagram />
                    <BsFacebook />
                    <BsLinkedin />
                </div>
                <div>
                    <span>Costs</span> &copy; 2023
                </div>

            </footer>
    )

}

export default Footer