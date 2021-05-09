import React from 'react'
import ResultCard from './ResultCard'
import styles from './Styles/Results.module.css'

function Results(props) {
    return(
        <div>
            <h1 className={styles.resultsHeader}>Results</h1>
            {props.data.map((kanjiData) => {
                return <ResultCard key={kanjiData.unicode} data={kanjiData} />
            })}
        </div>
    ) 
}

export default Results