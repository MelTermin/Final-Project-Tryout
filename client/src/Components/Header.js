import React, { useContext } from 'react'
import UserContext from '../Context/user';
import { Link, useHistory } from 'react-router-dom';
import {auth} from '../firebase'

function Header() {
  const { user, setUser } = useContext(UserContext);
  const history = useHistory();

  const handleSignOut = () => {
    localStorage.removeItem('currentUser');
    setUser(null);
    auth.signOut();
    history.push('/sign-in-and-sign-up');
  };
  return (
    <header className="header">
    <nav className="navbar">
      <Link className="navLink" to="/">
        <h1 className="logoText">Fitness</h1>
      </Link>
      {user ? (
        <ul className="navItems">
          <li className="navItem">
            <Link className="navLink" to="/dashboard">
              {user.displayName}
            </Link>
          </li>
          <li className="navItem" onClick={handleSignOut}>
            Logout
          </li>
        </ul>
      ) : null}
    </nav>
  </header>
  )
}

export default Header
