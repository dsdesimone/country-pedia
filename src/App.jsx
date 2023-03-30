import './App.css'
import axios from 'axios'
import CardCountry from './components/CardCountry'
import { useState, useEffect } from 'react'
import SearchButton from './components/SearchButton'
import Error from './components/Error'
 
function App() {
  
  const [country, setCountry] = useState()
  const [inputValue, setInputValue] = useState('argentina')
  const [hasError, setHasError] = useState(false)

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/${inputValue}`
    axios.get(url)
    .then(res => {
      setCountry(res.data[0])
      setHasError(false)
    })
    .catch(err => {
      console.log(err)
      setHasError(true)
    })
  }, [inputValue])
  
  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(e.target.nameCountry.value)
  }
  console.log(country)
  return (
    <div className="App">
      <SearchButton handleSubmit={handleSubmit}/>
      {
        hasError  
          ? <Error />
          : <CardCountry country={country}/>
      }
    </div>
  )
}

export default App
