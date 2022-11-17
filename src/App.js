import './App.css';
import Navbar from './component/Navbar';
import CountriesList from './component/CountriesList';
import CountryDetails from './component/CountryDetails';
import axios from 'axios';
import {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

function App() {

const [countries, setCountries] = useState([])


  const getFromApi = async () => {
    try {
      const response = await axios.get(`https://ih-countries-api.herokuapp.com/countries`);
      setCountries(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {

   getFromApi()

  }, [])
  
  return (
    <div className="App">

        <Navbar/>
        <div className="appBody">
        <CountriesList countries={countries}/>
        
 <Routes>
      <Route path="/:countryId" element={ <CountryDetails /> } />
</Routes>
    </div>  </div>
  );
}

export default App;
