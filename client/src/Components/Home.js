import React, {useContext} from 'react'

import { Redirect } from 'react-router-dom';
import UserContext from '../Context/user';
import {auth,signInWithGoogle} from '../firebase'


function Home() {
  const {user}=useContext(UserContext);


  return !!user ?<Redirect to="/dashboard"/> :<Redirect to="/sign-in-and-sign-up"/>



}

export default Home;
