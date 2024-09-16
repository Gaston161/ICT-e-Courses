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

// Références à Firestore et Storage
const db = firebase.firestore();
const storage = firebase.storage();

// Fonction pour charger les documents
async function loadDocuments() {
    const documentsList = document.getElementById('documents-list');
    const snapshot = await db.collection('documents').get(); // Remplacez 'documents' par le nom de votre collection

    snapshot.forEach(doc => {
        const data = doc.data();
        const docItem = document.createElement('div');
        docItem.className = 'document-item';
        docItem.innerHTML = `
            <span>${data.title}</span>
            <span>${data.date}</span>
            <button onclick="downloadDocument('${data.filePath}')">Télécharger</button>
        `;
        documentsList.appendChild(docItem);
    });
}

// Fonction pour télécharger le document
function downloadDocument(filePath) {
    const fileRef = storage.ref(filePath);
    fileRef.getDownloadURL().then((url) => {
        const link = document.createElement('a');
        link.href = url;
        link.download = filePath.split('/').pop();
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
}

// Charger les documents au démarrage
loadDocuments();