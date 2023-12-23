// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getEnvironments } from "../helpers/getEnvironments";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

const {
  VITE_APIKEY,
  VITE_AUTHDOMAIN,
  VITE_PROJECTID,
  VITE_STORAGEBUCKET,
  VITE_MESSAGINGSENDERID,
  VITE_APPID,
} = getEnvironments();

// Your web app's Firebase configuration
// DEV/PROD
/*const firebaseConfig = {
    apiKey: "AIzaSyAz5-y4te__7Pw85KCBBpo9zor-PpmJgfA",
    authDomain: "react-cursos-f733f.firebaseapp.com",
    projectId: "react-cursos-f733f",
    storageBucket: "react-cursos-f733f.appspot.com",
    messagingSenderId: "83893974846",
    appId: "1:83893974846:web:7fc1af79bcbcb082695e6f"
};*/

// TESTING
/*const firebaseConfig = {
  apiKey: "AIzaSyAygj_JnhNTvY4D9otCZDEwJ3-ZXOLH5fw",
  authDomain: "testing-52067.firebaseapp.com",
  projectId: "testing-52067",
  storageBucket: "testing-52067.appspot.com",
  messagingSenderId: "668718280169",
  appId: "1:668718280169:web:a210bf4a59342e1b242f78",
};*/

const firebaseConfig = {
  apiKey: VITE_APIKEY,
  authDomain: VITE_AUTHDOMAIN,
  projectId: VITE_PROJECTID,
  storageBucket: VITE_STORAGEBUCKET,
  messagingSenderId: VITE_MESSAGINGSENDERID,
  appId: VITE_APPID,
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);
