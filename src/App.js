import { signOut } from "firebase/auth";
import React from "react";
import { Route, Routes } from "react-router-dom";
import SignIn from "./components/SignIn";
import { auth } from "./firebase.config";
import Home from "./pages/Home";
import Profil from "./pages/Profil";

const App = () => {
  
  const disconnected = (e) => {
    signOut(auth).then(() => {
  console.log('Vous êtes deconnecté')
}).catch((error) => {
  console.log("Vous n'êtes pas deconnecté")
});
  }
  


  return (
    <div>
      <button onClick={disconnected}>Se deconnecter</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sign-in" element={<SignIn/>} />
        <Route path="/profil" element={<Profil />} />
      </Routes>
    </div>
  );
};

export default App;
