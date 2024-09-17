function toggleSubMenu(menuId) {
    hideSubMenus();
    const menu = document.getElementById(menuId);
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    document.getElementById('back-button').style.display = 'block';
}

function toggleSubSubMenu(subMenuId) {
    const subMenu = document.getElementById(subMenuId);
    subMenu.style.display = subMenu.style.display === 'block' ? 'none' : 'block';
}

function hideSubMenus() {
    const subMenus = document.querySelectorAll('.sub-menu, .sub-sub-menu');
    subMenus.forEach(menu => menu.style.display = 'none');
    document.getElementById('back-button').style.display = 'none';
}

function showContent(id) {
    const titleElement = document.getElementById('content-title');
    const areaElement = document.getElementById('content-area');
    let content = '';

    switch (id) {
        case 'lecon1-part1':
            titleElement.textContent = 'Level 1 - Fall';
            content = `
               
                <!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sélection des Cours</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
        
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        h1 {
            margin-bottom: 20px;
            font-size: 2em;
            color: #4a4a4a;
        }
        .course-list {
            width: 100%;
            max-width: 600px;
            margin: 20px 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .course-item {
            padding: 15px;
            border: 2px solid #6f5dfb;
            border-radius: 8px;
            background-color: #fff;
            text-align: center;
            text-decoration: none;
            color: #333;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .course-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .course-item:active {
            transform: translateY(2px);
        }
    </style>
</head>
<body>

    <h1>Sélectionner des Cours</h1>
    <div class="course-list">
        <a href="page_cours_1.html" class="course-item">FR-FA23-ICT1101  PC Hardware Assembly</a>
         <a href="page_cours_1.html" class="course-item">FR-FA23-MTH1101 Analyse réelle I</a>
          <a href="page_cours_1.html" class="course-item">FR-FA23-ICT1112 Methode de recherche pour les ingénieurs </a>
           <a href="page_cours_1.html" class="course-item">FR-FA23-EGL1100 Anglais pour débutants I</a>
            <a href="page_cours_1.html" class="course-item">FR-FA23-ICT1102 Algorithmes et structures de données I</a>
             <a href="page_cours_1.html" class="course-item">FR-FA23-ICT1115 Informatique et societé</a>
    </div>

</body>
</html>

            `;
            break;
        case 'lecon1-part2':
            titleElement.textContent = 'Level 1 - Spring';
            content = `
                         <!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sélection des Cours</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
        
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        h1 {
            margin-bottom: 20px;
            font-size: 2em;
            color: #4a4a4a;
        }
        .course-list {
            width: 100%;
            max-width: 600px;
            margin: 20px 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .course-item {
            padding: 15px;
            border: 2px solid #6f5dfb;
            border-radius: 8px;
            background-color: #fff;
            text-align: center;
            text-decoration: none;
            color: #333;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .course-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .course-item:active {
            transform: translateY(2px);
        }
    </style>
</head>
<body>

    <h1>Sélectionner des Cours</h1>
    <div class="course-list">
          <a href="page_cours_7.html" class="course-item">FR-SP24-ICT-ICT1210 Programmation orientée objet avec C++</a>
        <a href="page_cours_8.html" class="course-item">FR-SP24-ICT-ICT1222 Algorithmes et structures de données II</a>
        <a href="page_cours_9.html" class="course-item">FR-SP24-ICT-MTH1244 Algebre linéaire</a>
        <a href="page_cours_10.html" class="course-item">FR-SP24-ICT-MTH1245 Analyse réelle  II</a>
        <a href="page_cours_10.html" class="course-item">FR-SP24-ICT-MTH1245 Mathématiques discrètes</a>
        <a href="page_cours_10.html" class="course-item">FR-SP24-ICT-MTH1245 Introduction aux réseaux</a>
    </div>
<script src="main.js"></script>
</body>
</html>
            `;
            break;
        case 'lecon2-part1':
            titleElement.textContent = 'Level 2 - Fall ';
            content = `
                <!DOCTYPE html>
<html lang="fr">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sélection des Cours</title>
    <style>
        body {
            font-family: 'Arial', sans-serif;
            margin: 0;
            padding: 0;
        
            color: #333;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
        }
        h1 {
            margin-bottom: 20px;
            font-size: 2em;
            color: #4a4a4a;
        }
        .course-list {
            width: 100%;
            max-width: 600px;
            margin: 20px 0;
            display: flex;
            flex-direction: column;
            gap: 10px;
        }
        .course-item {
            padding: 15px;
            border: 2px solid #6f5dfb;
            border-radius: 8px;
            background-color: #fff;
            text-align: center;
            text-decoration: none;
            color: #333;
            transition: transform 0.3s, box-shadow 0.3s;
        }
        .course-item:hover {
            transform: translateY(-5px);
            box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
        }
        .course-item:active {
            transform: translateY(2px);
        }
    </style>
</head>
<body>

    <h1>Sélectionner des Cours</h1>
    <div class="course-list">  
     <a href="./cours dynamiques/page de cours dynamique.html?element=element1" class="course-item">FA24--ICT2002 Technical writing for engineers</a>
     <a href="./cours dynamiques/page de cours dynamique.html?element=element2" class="course-item">FA24--ICT2140 Introduction to software engineering</a>
     <a href="./cours dynamiques/page de cours dynamique.html?element=element3" class="course-item">FA24--ICT2110 Computer organization and architecture</a>
     <a href="./cours dynamiques/page de cours dynamique.html?element=element4" class="course-item">FA24--ICT2113  java programming I</a>
     <a href="./cours dynamiques/page de cours dynamique.html?element=element5" class="course-item">FA24--ICT2130 Programming in python</a>
     <a href="./cours dynamiques/page de cours dynamique.html?element=element6" class="course-item">FA24--MTH2001  Probability and statistics</a>   
    </div>

</body>
</html>
            `;
            break;
        case 'lecon2-part2':
            titleElement.textContent = 'Level 2 - Spring'; 
            content = `
            Contenu indisponible pour le moment !

            `;
            break;
        default:
            titleElement.textContent = 'Sélectionnez un élément';
            content = 'Contenu indisponible pour le moment !.';
    }

    areaElement.innerHTML = content;
}




        // Display user's name
        auth.onAuthStateChanged(user => {
            if (user) {
                document.getElementById('welcome-message').textContent = `WELCOME, ${user.displayName}`;
            }
        });

        function logout() {
            auth.signOut().then(() => {
                console.log('User signed out.');
            }).catch(error => {
                console.error('Sign out error', error);
            });
        }
        document.querySelector('.profile-menu img').addEventListener('click', function() {
    const dropdown = document.querySelector('.dropdown-content');
    dropdown.classList.toggle('show');
});


// chargement dynamique de ma page de cours


document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const topic = urlParams.get('topic');
    loadContent(topic);
});

function loadContent(topic) {
    fetch('content.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération du fichier JSON');
            }
            return response.json();
        })
        .then(data => {
            const contentDiv = document.getElementById('content');
            const topicData = data[topic];
            
            if (topicData) {
                contentDiv.innerHTML = `
                    <div class="topic">
                        <h2>${topicData.title}</h2>
                        <a href="${topicData.pdfLink}" class="pdf-link" target="_blank">
                            <img src="https://img.icons8.com/ios-filled/50/000000/pdf.png" alt="PDF" width="24">
                            ${topicData.linkText}
                        </a>
                        <p>${topicData.description}</p>
                    </div>
                `;
            } else {
                contentDiv.innerHTML = '<p>Contenu non trouvé.</p>';
            }
        })
        .catch(error => {
            console.error('Erreur lors du chargement du contenu :', error);
        });
}

// Ensuite, vous chargez le script `main.js`
const script = document.createElement('script');
script.src = 'main.js';
document.body.appendChild(script);



        const tooltip = document.getElementById('tooltip');

document.querySelectorAll('[data-tooltip]').forEach(element => {
    element.addEventListener('mouseover', function(e) {
        tooltip.textContent = e.target.getAttribute('data-tooltip');
        tooltip.style.opacity = '1';
        tooltip.style.visibility = 'visible';
        tooltip.style.left = `${e.pageX}px`;
        tooltip.style.top = `${e.pageY + 20}px`; // Ajuste pour ne pas couvrir le curseur
    });
    element.addEventListener('mouseout', function() {
        tooltip.style.opacity = '0';
        tooltip.style.visibility = 'hidden';
    });
});



function setLanguage(language) {
    // Sauvegarder la langue dans localStorage
    localStorage.setItem('selectedLanguage', language);

    // Appliquer les traductions
    document.querySelector('[data-translate="dashboard"]').textContent = translations[language].dashboard;
    document.querySelector('[data-translate="courses"]').textContent = translations[language].courses;
    document.querySelector('[data-translate="library"]').textContent = translations[language].library;
    document.querySelector('[data-translate="certificates"]').textContent = translations[language].certificates;
    document.querySelector('[data-translate="faq"]').textContent = translations[language].faq;
    document.querySelector('[data-translate="profile"]').textContent = translations[language].profile;
    document.querySelector('[data-translate="calendar"]').textContent = translations[language].calendar;
    document.querySelector('[data-translate="preferences"]').textContent = translations[language].preferences;
    document.querySelector('[data-translate="logout"]').textContent = translations[language].logout;
  }

  window.onload = function() {
    const savedLanguage = localStorage.getItem('selectedLanguage') || 'fr';
    setLanguage(savedLanguage);
    document.getElementById('language-dropdown').value = savedLanguage;
  };




  // Fonction de recherche optimisée avec Firestore
async function searchContent() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    
    // Interroger Firestore pour les documents correspondants
    const resultsContainer = document.getElementById('search-results');
    resultsContainer.innerHTML = ''; // Vider les résultats précédents

    try {
        // Rechercher dans la collection "cours" dans Firestore (ajustez la collection selon vos besoins)
        const snapshot = await db.collection('cours')
            .where('keywords', 'array-contains', query)  // Requête basée sur un tableau de mots-clés dans Firestore
            .get();
        
        if (snapshot.empty) {
            resultsContainer.innerHTML = '<p>Aucun résultat trouvé</p>';
        } else {
            snapshot.forEach(doc => {
                const data = doc.data();
                // Ajouter dynamiquement le contenu correspondant dans la zone de résultats
                const resultItem = document.createElement('div');
                resultItem.classList.add('result-item');
                resultItem.innerHTML = `
                    <h3>${data.titre}</h3>
                    <p>${data.description}</p>
                    <a href="${data.url}" target="_blank">Voir plus</a>
                `;
                resultsContainer.appendChild(resultItem);
            });
        }
    } catch (error) {
        console.error("Erreur lors de la recherche :", error);
        resultsContainer.innerHTML = '<p>Erreur lors de la recherche</p>';
    }
}




const translations = {
    fr: {
      dashboard: 'Tableau de Bord',
      courses: 'Mes Cours',
      library: 'Bibliothèque De Contenu',
      certificates: 'Mes Certificats',
      faq: 'FAQ',
      profile: 'Profil',
      calendar: 'Calendrier',
      preferences: 'Préférences',
      language: 'Langue',
      logout: 'Déconnexion',
      searchPlaceholder: 'Rechercher du contenu...',
    },
    en: {
      dashboard: 'Dashboard',
      courses: 'My Courses',
      library: 'Content Library',
      certificates: 'My Certificates',
      faq: 'FAQ',
      profile: 'Profile',
      calendar: 'Calendar',
      preferences: 'Preferences',
      language: 'Language',
      logout: 'Logout',
      searchPlaceholder: 'Search for content...',
    }
  };

  


  // Fonction pour charger les messages
  function loadMessages() {
      db.collection("messages").orderBy("timestamp").get().then((querySnapshot) => {
          const chatContent = document.getElementById('chatContent');
          chatContent.innerHTML = '';
          querySnapshot.forEach((doc) => {
              const msg = doc.data();
              const messageElement = document.createElement('div');
              messageElement.className = 'message-bubble';
              messageElement.innerHTML = `
                  <div class="d-flex align-items-center">
                      <img src="${msg.profilePic}" alt="Profil" class="profile-pic">
                      <strong>${msg.user}</strong>
                  </div>
                  <p>${msg.text}</p>
                  <small>${new Date(msg.timestamp.toDate()).toLocaleTimeString()}</small>
              `;
              chatContent.appendChild(messageElement);
          });
      });
  }

  // Fonction pour envoyer un message
  function sendMessage(user, text, profilePic) {
      db.collection("messages").add({
          user: user,
          text: text,
          profilePic: profilePic,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      });
  }


  window.addEventListener('sroll',
     function(){
        const navbar =  document.querySelector('navbar');
                            if (window.scrollY > 50) {
navbar.classList.add('scrolled');
             }else{
                navbar.classList.remove('scrolled');
             }
     }
    
    );