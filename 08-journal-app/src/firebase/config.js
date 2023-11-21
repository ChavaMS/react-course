// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAz5-y4te__7Pw85KCBBpo9zor-PpmJgfA",
    authDomain: "react-cursos-f733f.firebaseapp.com",
    projectId: "react-cursos-f733f",
    storageBucket: "react-cursos-f733f.appspot.com",
    messagingSenderId: "83893974846",
    appId: "1:83893974846:web:7fc1af79bcbcb082695e6f"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);

export const FirebaseAuth = getAuth(FirebaseApp);

export const FirebaseDB = getFirestore(FirebaseApp);