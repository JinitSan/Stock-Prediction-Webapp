import React from 'react';
import Navbar from './components/Navbar';
import Homepage from './components/pages/Homepage';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import News from './components/pages/News';
import Table from './components/pages/Table'

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/table' component={Table} />
          <Route path='/news' component={News} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
