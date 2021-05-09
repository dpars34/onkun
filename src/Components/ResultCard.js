import React from "react"
import styles from "./Styles/ResultCard.module.css"

function ResultCard(props) {
    return(
        <li className={styles.resultList}>
            <div className={styles.resultCard}>
                <div className={styles.topDisplay}>
                    <div className={styles.flexContainer}>

                        <div className={styles.mainKanjiBox}>
                            <h1 className={styles.kanjiTitle}>{props.data.kanji}</h1>
                        </div>

                        <div className={styles.kanjiInfo}>
                            <p className={styles.topDisplayText}>JLPT: N{props.data.jlpt ? props.data.jlpt : "one"}</p>
                            <p className={styles.topDisplayText}>Grade: {props.data.grade ? props.data.grade : "None"}</p>
                        </div>

                        <div className={styles.kanjiInfo}>
                            <p className={styles.topDisplayText}>Strokes: {props.data.stroke_count}</p>

                        </div>
                    </div>
                </div>

                {/* Middle section below */}

                <div className={styles.middleDisplay}>
                    <div className={styles.onkunBox}>
                        <div className={styles.onYomiArea}>
                            {props.data.on_readings.map((reading, index) => {
                                return <p className={`${styles.onkunBoxData} ${index % 2 === 0 ? styles.evenResult : styles.oddResult}`}>{reading} {/*Result will get different classname depending on whether it is odd or even*/}
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

                {/* Bottom section below */}
                
                <div className={styles.bottomDisplay}>
                <div className={styles.translationArea}>Translation: {props.data.meanings.map((translation, index)=> {
                        return(<p key={translation}className={styles.onkunBoxData}>{translation}{index === (props.data.meanings.length - 1) ? null : ', '}</p>)
                    })}</div>
                </div>

            </div>
        </li>
    )
}

export default ResultCard
