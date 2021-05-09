import React, { useEffect, useState } from 'react'
import styles from './Components/Styles/App.module.css'
import SearchBar from './Components/SearchBar'
import Results from './Components/Results'
import Header from './Components/Header'
import Welcome from './Components/Welcome'
import NoResults from './Components/NoResults'
import Loading from './Components/Loading'
import Footer from './Components/Footer'

function App() {

  const [ data, setData ] = useState([])
  const [ search, setSearch ] = useState("")
  const [ query, setQuery ] = useState("")
  const [ searched, setSearched ] = useState(false)
  const [ isLoading, setIsLoading ] = useState(false)
  const [ failed, setFailed ] = useState(false)

  useEffect(() => {
    const getData = async () => {
      try {

        setIsLoading(true)
        const allKanjiData = []

        for(let i = 0; i < query.length; i++) {
          const response = await fetch(`https://kanjiapi.dev/v1/kanji/${query[i]}`)
          const dataRecieved = await response.json()
          allKanjiData.push(dataRecieved)
        }
        setData(allKanjiData)
        setIsLoading(false)
        setFailed(false)
      } 
      catch (e) {
        console.log(e)
        setIsLoading(false)
        setFailed(true)
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
    <div className={styles.pageContainer}>
      
      <Header />

      <div className={styles.contentWrap}>
        <SearchBar handleClick={handleClick} handleChange={handleChange} search={search}/>
        {!searched ? <Welcome /> : isLoading ? <Loading /> : failed ? <NoResults /> : <Results data={data} /> } 
      </div>

    <Footer />
      
    </div>
      
    )
  }

export default App;
