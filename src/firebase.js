import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDZtscA5ZYyS3kyYt1dbNS-8WDW6btSKYY",
  authDomain: "discord-clone-abeer.firebaseapp.com",
  projectId: "discord-clone-abeer",
  storageBucket: "discord-clone-abeer.appspot.com",
  messagingSenderId: "78044594643",
  appId: "1:78044594643:web:b2c87c0e44d2ac9c4e2f26",
};

const app = firebase.initializeApp(firebaseConfig);

const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider, db };
