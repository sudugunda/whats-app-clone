// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDvchaPF_6NHQ-j7eiOVFlkPnh5dl7ftjU",
    authDomain: "whats-app-clone-513f9.firebaseapp.com",
    projectId: "whats-app-clone-513f9",
    storageBucket: "whats-app-clone-513f9.appspot.com",
    messagingSenderId: "18982677333",
    appId: "1:18982677333:web:d7dc240abe56439241dddc",
    measurementId: "G-G43QHYY5JX"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export { auth, provider };
  export default db;