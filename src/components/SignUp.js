import React, { useState } from "react";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../firebase.config";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [displayName, setDisplayName] = useState("");

  const onChangeHandler = (e) => {
    const { name, value } = e.currentTarget;
    if (name === "userEmail") {
      setEmail(value);
    }
    if (name === "userPassword") {
      setPassword(value);
    }
    if (name === "displayName") {
      setDisplayName(value);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        updateProfile(userCredential.user, {
          displayName
        })
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="displayName">Pseudo :</label>
        <input
          id="displayName"
          name="displayName"
          type="text"
          value={displayName}
          onChange={(event) => onChangeHandler(event)}
        />
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <label htmlFor="password">Mot de passe</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <input type="submit" value="S'enregistrer" />
      </form>
    </div>
  );
};

export default SignUp;
