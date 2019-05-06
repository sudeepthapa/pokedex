import React from 'react';
import './App.css';
import NavigationBar from './components/NavigationBar';
import PokemonList from './components/PokemonList'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import PokemonDetails from './components/PokemonDetails'

function App() {
  return (
    <div className="wrapper">

        <BrowserRouter>
          <Switch>
            <Route path= '/' exact component={PokemonList} />
            <Route path= '/pokemon/:pokeIndex' exact component={PokemonDetails} />
           <PokemonList/>
          </Switch>
        </BrowserRouter>
    </div>
  )
}

export default App;
