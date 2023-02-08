import { onAuthStateChanged } from 'firebase/auth';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import NotConnected from '../components/NotConnected';
import SignUp from '../components/SignUp';
import { auth } from '../firebase.config';
import Profil from './Profil';

const Home = () => {

  const [user, setUser] = useState(null);

  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });

  return (
    <div >
      <h1>Home</h1>
      <SignUp />
      <p>Vous avez dèja un compte ? <Link to='/sign-in'>Identifiez-vous</Link></p>
        {user ? <Profil user={user} /> : <NotConnected />}
    </div>
  )
}

export default Home;