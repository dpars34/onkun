import React from 'react'
import styles from './Styles/Loading.module.css'

function Loading() {
    return(
        <div className={styles.loadingArea}>
            <h1 className={styles.mainText}>Loading...</h1>
        </div>
    )
}

export default Loading