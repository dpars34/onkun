import React from "react"
import styles from "./Styles/ResultCard.module.css"

function ResultCard(props) {
    return(
        <div className={styles.resultCard}>
            <div className={styles.topDisplay}>
                <div className={styles.gridContainer}>

                    <div className={styles.mainKanjiBox}>
                        <h1 className={styles.kanjiTitle}>{props.data.kanji}</h1>
                    </div>

                    <div className={styles.kanjiInfo}>
                        <p className={styles.topDisplayText}>JLPT: N{props.data.jlpt}</p>
                        <p className={styles.topDisplayText}>Grade: {props.data.grade}</p>
                    </div>

                    <div className={styles.kanjiInfo}>
                        <p className={styles.topDisplayText}>Strokes: {props.data.stroke_count}</p>
                        
                    </div>
                </div>
            </div>

            <div className={styles.middleDisplay}>
                <div className={styles.onkunBox}>
                    <div className={styles.onYomiArea}>
                        {props.data.on_readings.map((reading, index) => {
                            return <p className={styles.onkunBoxData}>{reading}
                            {index === (props.data.on_readings.length - 1) ? null : "、"　/* This code makes sure last comma doesnt appear */}</p>
                        })}
                    </div>

                    <div className={styles.kunYomiArea}>
                        {props.data.kun_readings.map((reading, index) => {
                            return <p className={styles.onkunBoxData}>{reading}
                            {index === (props.data.kun_readings.length - 1) ? null : "、"　/* This code makes sure last comma doesnt appear */}</p>
                        })}
                    </div>
                    
                </div>
            </div>


        </div>
    )
}

export default ResultCard
