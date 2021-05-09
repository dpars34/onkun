import React from 'react'
import styles from './Styles/NoResults.module.css'

function NoResults() {
    return(
        <div className={styles.noResultsArea}>
            <h1>No results found</h1>
            <p>Make sure your search includes kanji characters.</p>
            <p>Currently you cannot search for characters in English. Hopefully this will be coming soon!</p>
        </div>
    )
}

export default NoResults