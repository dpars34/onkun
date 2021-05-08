import React from 'react'
import ResultCard from './ResultCard'

function Results(props) {
    return(
        <div>
            <h1>Results</h1>
            {props.data.map((kanjiData) => {
                return <ResultCard data={kanjiData} />
            })}
        </div>
    ) 
}

export default Results