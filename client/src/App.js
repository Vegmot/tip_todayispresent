import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Header from './components/Header';
import HomeScreen from './screens/home/HomeScreen';
import LoginScreen from './screens/login/LoginScreen';
import RegisterScreen from './screens/register/RegisterScreen';
import GFeedScreen from './screens/gfeed/GFeedScreen';
import AboutScreen from './screens/about/AboutScreen';
import ContactScreen from './screens/contact/ContactScreen';

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
            <Route exact path='/register' component={RegisterScreen} />
            <Route exact path='/gfeed' component={GFeedScreen} />
            <Route exact path='/about' component={AboutScreen} />
            <Route exact path='/contact' component={ContactScreen} />
          </Switch>
        </main>
      </Router>
    </>
  );
};

export default App;
