import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
    apiKey: "AIzaSyA4rd1L0WFxMAq6bT0LxQdPTEDn2zxac70",
    authDomain: "fas-alumni.firebaseapp.com",
    databaseURL: "https://fas-alumni-default-rtdb.firebaseio.com",
    projectId: "fas-alumni",
    storageBucket: "fas-alumni.appspot.com",
    messagingSenderId: "402854277128",
    appId: "1:402854277128:web:936028ef873e2eb1b861bd",
    measurementId: "G-464NEGJZ6R"
  };

const fireDB = firebase.initializeApp(firebaseConfig);

export default fireDB.database().ref();