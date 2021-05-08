import React, { useEffect, useState } from 'react'
import './App.css';
import SearchBar from "./Components/SearchBar"
import Results from "./Components/Results"
import Header from "./Components/Header"

function App() {

  const [ data, setData ] = useState([])
  const [ search, setSearch ] = useState("")
  const [ query, setQuery ] = useState("")
  const [ searched, setSearched ] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {

        const allKanjiData = []

        for(let i = 0; i < query.length; i++) {
          const response = await fetch(`https://kanjiapi.dev/v1/kanji/${query[i]}`)
          const dataRecieved = await response.json()
          allKanjiData.push(dataRecieved)
        }
        setData(allKanjiData)
      } 
      catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [query])

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const handleClick = e => {
    e.preventDefault()

    const kanjiRegex = /[一-龯]/g
    const kanjiFound = search.match(kanjiRegex)
    
    setQuery(kanjiFound)
    setSearched(true)
  }

  return (
    <div>
      <Header />
      <SearchBar handleClick={handleClick} handleChange={handleChange} search={search}/>
      {searched ? <Results data={data} /> : <p>You haven't searched anything yet!</p>}
    </div>
      
    )
  }


export default App;
