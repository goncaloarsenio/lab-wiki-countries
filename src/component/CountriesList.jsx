
import React from 'react'
import { Link } from 'react-router-dom'

function CountriesList(props) {
    const {countries} = props
  return (
    <div>
        <div className="container">

        <div className="row">

          <div className="col-5">
            <div className="list-group">

            {countries.map((eachCountry)=>{
        return (
            <div>
            <Link className="list-group-item list-group-item-action" to={`/${eachCountry.alpha3Code}`}> 
             <img src={`https://flagpedia.net/data/flags/icon/72x54/${eachCountry.alpha2Code.toLowerCase()}.png`} alt="" />
           <p>{eachCountry.name.common}</p> </Link>
            </div>
        )
        
      })}

            </div>
          </div>

            </div>
          </div>
    </div>
  )
}

export default CountriesList