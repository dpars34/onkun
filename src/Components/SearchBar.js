import React from "react"
import styles from "./Styles/SearchBar.module.css"
import { GoSearch } from 'react-icons/go'

function SearchBar(props) {
    return (
        <div className={styles.searchBox}>
            <span className={styles.searchIcon}><GoSearch/ ></span>
            <form className={styles.searchForm} onSubmit={props.handleClick}>
                <input className={styles.searchBar} type="search" onChange={props.handleChange} value={props.search} placeholder="Search for kanji..."/>
            </form>
        </div>
    )
}

export default SearchBar