
import React from 'react'
import { Switch, Route } from 'react-router-dom';
import ProtectedRoute from './Components/ProtectedRoute';
import SignInAndSignOut from './Components/SignInAndSignOut';
import {auth, signInWithGoogle} from './firebase'
import Header from './Components/Header';
import Home from './Components/Home';
import Dashboard from './Components/Dashboard';
import './App.css';


function App() {
 
  return (
    <>
    <Header></Header>

  <Switch>
     <Route exact path="/" component={Home} />
     <Route  path="/sign-in-and-sign-up" component={SignInAndSignOut} />
     <ProtectedRoute  path="/dashboard" component={Dashboard} />

  </Switch>
      
  </>
  );
}

export default App;
