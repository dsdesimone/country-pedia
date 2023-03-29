import './App.css'
import axios from 'axios'
import CardCountry from './components/CardCountry'
import { useState, useEffect } from 'react'
import SearchButton from './components/SearchButton'
 
function App() {
  
  const [country, setCountry] = useState()
  const [inputValue, setInputValue] = useState('argentina')

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/name/${inputValue}`
    axios.get(url)
    .then(res => setCountry(res.data[0]))
    .catch(err => console.log(err))
  }, [inputValue])
  
  const handleSubmit = e => {
    e.preventDefault()
    setInputValue(e.target.nameCountry.value)
  }
  console.log(country)
  return (
    <div className="App">
      <SearchButton handleSubmit={handleSubmit}/>
      <CardCountry country={country}/>
    </div>
  )
}

export default App
