// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDPNmDuD9QF8iZnqseoBYEwlwdwF1CJ84",
  authDomain: "auth-react-97b67.firebaseapp.com",
  projectId: "auth-react-97b67",
  storageBucket: "auth-react-97b67.appspot.com",
  messagingSenderId: "500176652567",
  appId: "1:500176652567:web:92baf792633f49f7544f52"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export default app;