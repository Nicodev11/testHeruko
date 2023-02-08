import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase.config";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        navigate('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  return (
    <div>
      <form>
        <div>
          <label htmlFor="email-address">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            required
            placeholder="Email address"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            required
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button onClick={onLogin}>Login</button>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
