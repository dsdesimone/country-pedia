import React from 'react'

const CardCountry = ({ country }) => {    

  return (
    <div className='card__country'>
        <div className='card__country__name'>
          <img className='img__flag' src={country?.flags.svg} alt="" />
          <h1 className='country__name'>{country?.name.common}</h1>
        </div>
        <p><b>Capital: </b>{country?.capital}</p>
        <p><b>Area: </b>{country?.area} km2</p>
        <p><b>Population: </b>{country?.population}</p>
        <p><b>Continent: </b>{country?.continents}</p>
    </div>
  )
}

export default CardCountry