import React from 'react';

import './App.css';
import PokemonsList from './components/PokemonsList';
import PokemonDetails from './components/PokemonDetails';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="max-w-screen-xl mx-auto">
        <Link to="/">
          <img 
          className="mx-auto"
            src="https://fontmeme.com/permalink/200813/f8f73e756aa50df22b90934ed92ecb4e.png"
            alt="pokemon-font"
            
          />
        </Link>{' '}
        <Switch>
          <Route exact path="/" component={PokemonsList} />
          <Route exact path="/:id" component={PokemonDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
