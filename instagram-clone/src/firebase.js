import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC4MjuUwXizu8updKOOj2L0oWZrcACpiJ8",
    authDomain: "instagram-clone-146b8.firebaseapp.com",
    projectId: "instagram-clone-146b8",
    storageBucket: "instagram-clone-146b8.appspot.com",
    messagingSenderId: "457002916036",
    appId: "1:457002916036:web:4e46a946f45e760ba2d191",
    measurementId: "G-ZNSYRGLLF4"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };
