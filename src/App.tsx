import React from 'react';
import {  
  BrowserRouter as Router,
  Switch,
  Route,
  Link} from 'react-router-dom';

import Instructions from './components/Instruct';
import Upload from './components/Upload';

import './App.css';

// import Async from './csv-handler/Async';

function App() {

  // let x = new Async();

  return (
    <div className="App">
      <Router>
        <div id='nav'>
          <Link to='/'>
            Home
          </Link>
          <Link to='/instructions'>
            Instructions
          </Link>
          <Link to='/upload'>
            Upload
          </Link>
        </div>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path='/upload'>
            <Upload />
          </Route>
          <Route exact path='/instructions'>
            <Instructions />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

function Home() { return <div>Home</div> }