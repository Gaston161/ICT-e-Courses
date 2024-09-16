// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

// Configurer Firebase
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
  const app = firebase.initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);