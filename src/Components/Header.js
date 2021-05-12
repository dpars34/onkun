import React from "react"
import styles from "./Styles/Header.module.css"
import logo from "./Images/onkun_logo4.png"

function Header() {
    return(
        <header className={styles.header}>
            <div className={styles.flexContainer}>
                {/*<a href="top" className={styles.navLink}>About</a> */}
                <a href="top">
                    <img src={logo} alt="logo" className={styles.logo}/>
                </a>
                <a className={styles.navLink} href="top" >Welcome</a>
                <a className={styles.navLink} href="https://www.danpdev.com/" target="_blank" rel="noreferrer">Who made this site?</a>
                <a className={styles.navLink} href="https://kanjiapi.dev/" target="_blank" rel="noreferrer">About the API</a>
            </div>
        </header>
    )
}

export default Header