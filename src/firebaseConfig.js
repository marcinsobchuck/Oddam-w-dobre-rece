import * as firebase from "firebase/app";
import "firebase/auth";

const fire = firebase.initializeApp({
  apiKey: "AIzaSyBSial0zDlYo0DX60ovh-XujBl4cULQEKw",
  authDomain: "oddam-w-dobre-rece-f702d.firebaseapp.com",
  databaseURL: "https://oddam-w-dobre-rece-f702d.firebaseio.com",
  projectId: "oddam-w-dobre-rece-f702d",
  storageBucket: "oddam-w-dobre-rece-f702d.appspot.com",
  messagingSenderId: "757672521159",
  appId: "1:757672521159:web:19b67f1bca36649727fde2",
  measurementId: "G-2P9J2DZWBY",
});

export default fire;
