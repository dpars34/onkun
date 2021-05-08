import React from "react"
import styles from "./Styles/Header.module.css"
import logo from "./Images/onkun_logo4.png"

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.flexContainer}>
                {/*<a href="top" className={styles.navLink}>About</a> */}
                <img src={logo} alt="logo" className={styles.logo}/>
            </div>
            
        </header>
    )
}

export default Header