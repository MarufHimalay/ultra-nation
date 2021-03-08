import './App.css';
import { useEffect, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import CountryDetail from './components/CountryDetail/CountryDetail';

function App() {

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(data => setCountries(data))
  }, [])
  return (
    <>
      
      <Router>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/name/:countryName">
            <CountryDetail></CountryDetail>
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
