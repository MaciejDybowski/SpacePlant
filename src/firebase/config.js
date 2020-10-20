import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

export var firebaseConfig = {
    apiKey: "AIzaSyAjEF1TTNRohpvP4AhxUIvul2ME9wqlekI",
    authDomain: "spaceplant-4a3e5.firebaseapp.com",
    databaseURL: "https://spaceplant-4a3e5.firebaseio.com",
    projectId: "spaceplant-4a3e5",
    storageBucket: "spaceplant-4a3e5.appspot.com",
    messagingSenderId: "659576859839",
    appId: "1:659576859839:web:54606f2197e9e1edc4aa0a",
    measurementId: "G-SS0J7ZW5YF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;