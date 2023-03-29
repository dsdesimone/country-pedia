import React from 'react'

const SearchButton = ({ handleSubmit }) => {
  return (
    <div className='search__button'>
        <h1 className='btn__title'><span className='country'>Country</span><span className='pedia'>PEDIA</span></h1>
        <form className='form' onSubmit={handleSubmit}>
            <input className='submit__entry' id='nameCountry' type="text" />
            <button className='submit__btn'>search</button>
        </form>
    </div>
  )
}

export default SearchButton