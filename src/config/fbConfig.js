import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

//Initialise Firebase
var config = {
    apiKey: "AIzaSyBf1Yjw8yM6STeQ8bv8QNwesHn6vQJKjGs",
    authDomain: "projectplan-webapp.firebaseapp.com",
    databaseURL: "https://projectplan-webapp.firebaseio.com",
    projectId: "projectplan-webapp",
    storageBucket: "projectplan-webapp.appspot.com",
    messagingSenderId: "930454470488"
  };

  firebase.initializeApp(config);
  firebase.firestore().settings({ timestampsInSnapshots: true })

  export default firebase;
