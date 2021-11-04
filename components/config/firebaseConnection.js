import firebase from "firebase/compat/app";
import 'firebase/compat/database';

const firebaseConfig = {
  apiKey: "AIzaSyD5PQqcobX33kNPVNGzowQA-N5vi2rVpSY",
  authDomain: "firereact1native.firebaseapp.com",
  projectId: "firereact1native",
  storageBucket: "firereact1native.appspot.com",
  messagingSenderId: "809089007683",
  appId: "1:809089007683:web:e9de697924a872d2e294f6",
  measurementId: "G-CHTVF1RC9N"
};

if(!firebase.app.length == 0){
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
}

export default firebase;