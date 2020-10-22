import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCIAv5XJM_7MqmIoijNgb9a8Ar6BUbvFgw",
    authDomain: "todo-vuetify-7891d.firebaseapp.com",
    databaseURL: "https://todo-vuetify-7891d.firebaseio.com",
    projectId: "todo-vuetify-7891d",
    storageBucket: "todo-vuetify-7891d.appspot.com",
    messagingSenderId: "291848262247",
    appId: "1:291848262247:web:0f15c0c8c1f5e572fb7ac2",
    measurementId: "G-P2BSCBLX2S"
  };
  firebase.initializeApp(firebaseConfig);

  const db=firebase.firestore();


  export default db;