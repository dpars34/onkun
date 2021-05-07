import React from "react"
import styles from "./Styles/SearchBar.module.css"
import { GoSearch } from 'react-icons/go';

function SearchBar(props) {
    return (
        <form className={styles.searchForm} onSubmit={props.handleClick}>
            <input className={styles.searchBar} type="text" onChange={props.handleChange} value={props.search} placeholder="Search for kanji..."/>
            <button className={styles.searchButton} type="submit">Search</button>
        </form>
    )
}

export default SearchBar