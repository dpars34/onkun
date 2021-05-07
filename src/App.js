import React, { useEffect, useState } from 'react'
import './App.css';
import SearchBar from "./Components/SearchBar"
import ResultCard from "./Components/ResultCard"
import Header from "./Components/Header"

function App() {

  const [ data, setData ] = useState([])
  const [ search, setSearch ] = useState("")
  const [ query, setQuery ] = useState("")

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(`https://kanjiapi.dev/v1/kanji/${query}`)
        const data = await response.json()
        setData(data)
        console.log(data)
      } 
      catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [query])

  const handleChange = e => {
    setSearch(e.target.value)
    console.log(e.target.value)
  }

  const handleClick = e => {
    e.preventDefault()
    setQuery(search)
  }

  return (
    <div>
      <Header />
      <SearchBar handleClick={handleClick} handleChange={handleChange} search={search}/>
      <ResultCard data={data}/>
    </div>
      
    )
  }


export default App;
