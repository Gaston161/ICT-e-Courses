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

// Références à Firestore
const db = firebase.firestore();
const storage = firebase.storage();

// Fonction pour charger les cours
async function loadCourses() {
    const courseList = document.getElementById('course-list');
    const snapshot = await db.collection('courses').get(); // Remplacez 'courses' par le nom de votre collection

    snapshot.forEach(doc => {
        const data = doc.data();
        const courseItem = document.createElement('div');
        courseItem.className = 'course-item';
        courseItem.innerHTML = `
            <div>${data.name}</div>
            <div class="progress">
                <div class="progress-bar" style="width: ${data.progress}%"></div>
            </div>
            <span>${data.progress}% complete</span>
            <button onclick="viewChapters('${doc.id}')">Voir Chapitres</button>
        `;
        courseList.appendChild(courseItem);
    });
}

// Fonction pour voir les chapitres d'un cours
async function viewChapters(courseId) {
    const chapterDetails = document.getElementById('chapter-details');
    const fileList = document.getElementById('file-list');
    fileList.innerHTML = ""; // Réinitialiser la liste des fichiers

    const chaptersSnapshot = await db.collection('courses').doc(courseId).collection('chapters').get(); // Remplacez 'chapters' par le nom de votre sous-collection

    chaptersSnapshot.forEach(chapterDoc => {
        const chapterData = chapterDoc.data();
        const chapterItem = document.createElement('div');
        chapterItem.className = 'file-item';
        chapterItem.innerHTML = `<strong>${chapterData.title}</strong>`;
        
        chapterData.files.forEach(file => {
            const fileItem = document.createElement('div');
            fileItem.innerHTML = `
                ${file.name} 
                <button class="download-btn" onclick="downloadDocument('${file.path}')">Télécharger</button>
            `;
            chapterItem.appendChild(fileItem);
        });

        fileList.appendChild(chapterItem);
    });

    document.getElementById('chapter-title').innerText = "Chapitre du cours";
    chapterDetails.style.display = "block";
    document.querySelector('.dashboard').style.display = "none";
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

// Fonction pour retourner à la liste des cours
function goBack() {
    document.getElementById('chapter-details').style.display = "none";
    document.querySelector('.dashboard').style.display = "block";
}

// Charger les cours au démarrage
loadCourses();