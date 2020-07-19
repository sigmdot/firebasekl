import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA409acydzaTC4Hsejuh4nzb9oXC-5Y3Ik",
    authDomain: "prueba-firebase-d772c.firebaseapp.com",
    databaseURL: "https://prueba-firebase-d772c.firebaseio.com",
    projectId: "prueba-firebase-d772c",
    storageBucket: "prueba-firebase-d772c.appspot.com",
    messagingSenderId: "680933598678",
    appId: "1:680933598678:web:319799f30d49aafd77f077",
    measurementId: "G-ZRC4E4DKRC"
});

const db = firebaseApp.firestore();
const fire = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebaseApp.storage();
const anonimo = firebaseApp.firestore().collection('anonimo');

export {anonimo};
export {db};
export {fire};
export {provider};
export {storage};
