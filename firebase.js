// Importez les services Firebase que vous souhaitez utiliser
import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";


  // Configurer Firebase
 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBD8vDGeQa9XKGFjcpIvve3zDzebxxWSJ4",
  authDomain: "ict-learning-81af7.firebaseapp.com",
  projectId: "ict-learning-81af7",
  storageBucket: "ict-learning-81af7.appspot.com",
  messagingSenderId: "122269149930",
  appId: "1:122269149930:web:79797b1bcf54db78138593",
  measurementId: "G-9SS7K68FGG"
};

// Initialiser Firebase
const app = initializeApp(firebaseConfig);
// Utilisation des services Firebase
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore();

// Utiliser les émulateurs Firebase en local
if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9100");
  connectFirestoreEmulator(db, "localhost", 8081);
}

// Connexion avec Google
document.querySelector('.get-started').addEventListener('click', () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      console.log("Utilisateur connecté :", result.user);
      // Redirection après connexion
      window.location.href = "last examinations.html";
    })
    .catch((error) => {
      console.error("Erreur de connexion :", error);
    });
});

