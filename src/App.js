import React from 'react';
import './App.css';
import { Route, Switch, Link } from 'react-router-dom';
import Beers from './components/Beers';
import RandomBeer from './components/RandomBeer';
import NewBeer from './components/NewBeer';

function App() {
  return (
    <div className="App">
      <Link to="/beers">Beers</Link> 
      <Link to="/random-beer">RandomBeer</Link>
      <Link to="/new-beer">NewBeer</Link>

      <Switch>
        <Route exact path='/beers' render={(props) => <Beers {...props} />} />
        <Route exact path="/random-beer" render={(props) => <RandomBeer {...props} />} />
        <Route exact path="/new-beer" render={(props) => <NewBeer {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
