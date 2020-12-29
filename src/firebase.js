import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAW6pWsrElZpsI1J31NwMBHgM2y3x9-mnM",
  authDomain: "whatsapp-clone-7fab5.firebaseapp.com",
  projectId: "whatsapp-clone-7fab5",
  storageBucket: "whatsapp-clone-7fab5.appspot.com",
  messagingSenderId: "753177620526",
  appId: "1:753177620526:web:dc7aea1e3cdff22dbb2fbf",
  measurementId: "G-CLF1R2435M",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { provider, auth };
export default db;
