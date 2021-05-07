import React from "react"
import styles from "./Styles/ResultCard.module.css"

function ResultCard(props) {
    return(
        <div>
            <h1 className={styles.kanjiTitle}>{props.data.kanji}</h1>
            <p>{props.data.on_readings}</p>
        </div>
    )
}

export default ResultCard
