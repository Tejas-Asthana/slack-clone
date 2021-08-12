import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDwqKnu6wSCwmxzrGq14AFB8li8EbFg6HM",
  authDomain: "slack-clone-302d8.firebaseapp.com",
  projectId: "slack-clone-302d8",
  storageBucket: "slack-clone-302d8.appspot.com",
  messagingSenderId: "601652330240",
  appId: "1:601652330240:web:244b257497c109ed5e3de5",
  measurementId: "G-N75RDMQEX6",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
