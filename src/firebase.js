import firebase from "firebase/app";
import "firebase/firebase-messaging";

var firebaseConfig = {
  apiKey: "AIzaSyA-8-uflQtrwIsXpilyc1VN_1af-LtjpLY",
  authDomain: "testing-firebase-7fb22.firebaseapp.com",
  projectId: "testing-firebase-7fb22",
  storageBucket: "testing-firebase-7fb22.appspot.com",
  messagingSenderId: "670638450803",
  appId: "1:670638450803:web:eea0f1a9ad084f565a2206",
  measurementId: "G-G78H29Q88Y",
};

firebase.initializeApp(firebaseConfig);

export default firebase.messaging();
