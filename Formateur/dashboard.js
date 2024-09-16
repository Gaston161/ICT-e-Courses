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

// Référence à Firestore
const db = firebase.firestore();

// Informations sur les cours (pour l'exemple)
const courses = [
    { id: 'course1', name: 'Technical Writing for Engineers', progress: 58 },
    { id: 'course2', name: 'Computer Organization and Architecture', progress: 12 },
    { id: 'course3', name: 'Java Programming I', progress: 0 }
];

// Charger les cours
function loadCourses() {
    const courseList = document.getElementById('course-list');
    courses.forEach(course => {
        const courseDiv = document.createElement('div');
        courseDiv.classList.add('course');
        courseDiv.innerHTML = `
            <h4>${course.name}</h4>
            <div class="progress">
                <div class="progress-bar" style="width: ${course.progress}%;"></div>
            </div>
            <p>${course.progress}% complete</p>
            <button onclick="viewCourse('${course.id}')">View Course</button>
        `;
        courseList.appendChild(courseDiv);
    });
}

// Afficher les détails du cours
function viewCourse(courseId) {
    alert(`Displaying details for ${courseId}`);
    // Ici vous pouvez rediriger vers une nouvelle page ou afficher les détails du cours
}

// Charger les cours au démarrage
loadCourses();