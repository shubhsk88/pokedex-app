import React from 'react';

import './App.css';
import PokemonsList from './components/PokemonsList';
import PokemonDetails from './components/PokemonDetails';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
function App() {
  return (
    <Router>
      <div className="app max-w-screen-xl mx-auto">
        <Link to="/">
          <header>Pokemon</header>
        </Link>{' '}
        <header className=""></header>
        <Switch>
          <Route exact path="/" component={PokemonsList} />
          <Route exact path="/:id" component={PokemonDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
