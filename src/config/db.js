import * as firebase from 'firebase';

 let config = {
    apiKey: "AIzaSyDufLhEkLa1h636551IGebdXAOTDhzoqf0",
    authDomain: "react-native-firebase-216d4.firebaseapp.com",
    databaseURL: "https://react-native-firebase-216d4-default-rtdb.firebaseio.com/",
    projectId: "react-native-firebase-216d4",
    storageBucket: "react-native-firebase-216d4.appspot.com",
    messagingSenderId: "623718101855",
    appId: "1:623718101855:web:aeedab042aa53e42edfcea"
  };
let app = firebase.initializeApp(config);
export const db = app.database();