// Configuration Firebase
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
firebase.initializeApp(firebaseConfig);

// Référence à Firestore et Storage
const db = firebase.firestore();
const storage = firebase.storage();

// Fonction pour charger la vidéo
async function loadVideo() {
    const videoRef = storage.ref('videos/nom_de_la_video.mp4'); // Remplacez par le chemin de votre vidéo
    const videoUrl = await videoRef.getDownloadURL();
    document.getElementById('video-source').src = videoUrl;
    document.getElementById('course-video').load();
}

// Fonction pour télécharger la vidéo
function downloadVideo() {
    const videoRef = storage.ref('videos/nom_de_la_video.mp4'); // Remplacez par le chemin de votre vidéo
    videoRef.getDownloadURL().then((url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = 'nom_de_la_video.mp4'; // Nom du fichier lors du téléchargement
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Écouteur d'événement pour le bouton de téléchargement
document.getElementById('download-button').addEventListener('click', downloadVideo);

// Charger la vidéo au démarrage
loadVideo();