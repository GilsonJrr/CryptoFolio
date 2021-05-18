import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
    apiKey: "AIzaSyDIqBTGTOgnrTqz9b4R_vJyv_ufNjNDcGc",
    authDomain: "cryptofolio-f4e2c.firebaseapp.com",
    projectId: "cryptofolio-f4e2c",
    storageBucket: "cryptofolio-f4e2c.appspot.com",
    messagingSenderId: "75462062500",
    appId: "1:75462062500:web:76487dba21249397f91131",
    measurementId: "G-0DEXB882NZ"
  };
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  