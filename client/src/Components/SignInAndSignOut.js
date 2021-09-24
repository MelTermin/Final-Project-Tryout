import React, {useContext,useState} from 'react'
import UserContext from '../Context/user'
import { Redirect } from 'react-router-dom';
import {auth, signInWithGoogle} from '../firebase'

function SignInAndSignOut() {
  const {user,setUser}=useContext(UserContext)

  const [isSignIn, setIsSignIn] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

 

  const handleSubmit = async e => {
    e.preventDefault();

    if (email === '' || password === '') return;

    let currentUser;

    try {
      if (isSignIn) {
        const { user: authUser } = await auth.signInWithEmailAndPassword(email, password);
        currentUser = authUser;
      } else {
        const { user: newUser } = await auth.createUserWithEmailAndPassword(email, password);
        currentUser = newUser;
      }

      setUser({ displayName: currentUser.email, email: currentUser.email });
      localStorage.setItem(
        'currentUser',
        JSON.stringify({ displayName: currentUser.email, email: currentUser.email })
      );
    } catch (err) {
      console.log(err);
    }
  };

  if (user) return <Redirect to="/dashboard" />;
  return (


<div >
      <div >
        <h1>{isSignIn ? 'Sign In' : 'Sign Up'}</h1>

        <form  onSubmit={handleSubmit}>
          <label >
            <span >Email</span>
            <input
             
              type="email"
              name="email"
              onChange={e => setEmail(e.target.value)}
            />
          </label>
          <label>
            <span c>Password</span>
            <input
              
              type="password"
              name="password"
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          <div >
            <button >{isSignIn ? 'Sign In' : 'Sign Up'}</button>
            <button  type="button" onClick={signInWithGoogle}>
              Sign In with Google
            </button>
          </div>
        </form>
        <div >
          <span>Already have an account?</span>
          <button  onClick={() => setIsSignIn(!isSignIn)}>
            {isSignIn ? 'Sign Up' : 'Sign In'}!
          </button>
        </div>
      </div>
    </div>

    
 

   
  )
}

export default SignInAndSignOut
