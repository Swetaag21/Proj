
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
const firebaseConfig = {
  //apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  apiKey:"AIzaSyCItn94AjsAIPO5a0Rx_zPC_5Hngh_1yEM" ,
    authDomain: "fir-8afd1.firebaseapp.com",
  projectId: "fir-8afd1",
  storageBucket: "fir-8afd1.firebasestorage.app",
  messagingSenderId: "1002801568180",
  appId: "1:1002801568180:web:e0afec9b3af6ea5822fae1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export {auth , provider}