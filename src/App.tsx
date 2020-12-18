import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

import './App.css';

function App(): React.ReactNode {
  return (
    <div className="App">
      <header>
        <Header />
      </header>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/register"  component={Register} />
      </Switch>
      <footer className="App-footer">This is Footer</footer>
    </div>
  );
}

export default App;
