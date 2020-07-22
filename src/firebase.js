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
var refLink = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/prueba-firebase-d772c.appspot.com/o/anonimo%2F07%20Sombrero.mp3?alt=media&token=57d92c30-395f-4666-a49e-9ef284156806');
var lol = refLink.getDownloadURL().then(function(url){
    console.log(url);
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'blob';
    xhr.onload = function(event){
        var blob = xhr.response;
        console.log(event,' ', blob);
    };
    xhr.open('GET',url);
    xhr.send();
});
export {anonimo};
export {db};
export {fire};
export {provider};
export {storage};
export {refLink};
export {lol};
