import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen';
import RegisterScreen from './screens/register/RegisterScreen';

import './bootstrap.min.css';
import './App.css';

const App = () => {
  return (
    <>
      <Router>
        <Header />
        <main>
          <Switch>
            <Route exact path='/' component={HomeScreen} />
            <Route exact path='/login' component={LoginScreen} />
            <Route exact path='/Register' component={RegisterScreen} />
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;
