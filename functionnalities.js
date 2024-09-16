function loadContent(section) {
    const contentDisplay = document.getElementById('content-display');

    switch(section) {
        case 'manual':
            contentDisplay.innerHTML = `
                <h2>Manual Labour</h2>
                <div class="video-thumbnail">
                    <div>
                        <iframe src="https://www.youtube.com/embed/XYZ1" allowfullscreen></iframe>
                        <p>Lesson 1: Manual Work Techniques</p>
                    </div>
                    <div>
                        <iframe src="https://www.youtube.com/embed/XYZ2" allowfullscreen></iframe>
                        <p>Lesson 2: Tools and Safety</p>
                    </div>
                </div>
            `;
            break;
        case 'sports':
            contentDisplay.innerHTML = `
                <h2>Physical Education</h2>
                <div class="video-thumbnail">
                    <div>
                        <iframe src="https://www.youtube.com/embed/XYZ3" allowfullscreen></iframe>
                        <p>Lesson 1: Sports Basics</p>
                    </div>
                    <div>
                        <iframe src="https://www.youtube.com/embed/XYZ4" allowfullscreen></iframe>
                        <p>Lesson 2: Fitness Training</p>
                    </div>
                </div>
            `;
            break;
        case 'computer':
            contentDisplay.innerHTML = `
                <h2>Computer Science</h2>
                <div class="video-thumbnail">
                    <div>
                        <iframe src="https://www.youtube.com/embed/XYZ5" allowfullscreen></iframe>
                        <p>Lesson 1: Introduction to Algorithms</p>
                    </div>
                    <div>
                        <iframe src="https://www.youtube.com/embed/XYZ6" allowfullscreen></iframe>
                        <p>Lesson 2: Programming Basics</p>
                    </div>
                </div>
            `;
            break;
        default:
            contentDisplay.innerHTML = `<h2>Bienvenue dans la plateforme eLearning</h2>`;
    }
}

function loadTerm(term) {
    alert('Chargement du contenu pour le ' + term);
}

function setMode(mode) {
    alert('Mode ' + mode + ' activé');
}

function selectCategory(category) {
    alert('Catégorie ' + category + ' sélectionnée');
}

function selectSubCategory(subCategory) {
    alert('Sous-catégorie ' + subCategory + ' sélectionnée');
}




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
                titleElement.textContent = 'Leçon 1 - Partie 1';
                content = `
                     <div class="document-grid">
        <div class="document-item" onclick="showDocument(0)">
            <img src="https://via.placeholder.com/150" alt="Document 1" />
            <div class="document-title">Document 1</div>
            <div class="document-info">Téléversé par User1</div>
            <div class="document-info">83% (6 évaluations)</div>
        </div>
        <div class="document-item" onclick="showDocument(1)">
            <img src="https://via.placeholder.com/150" alt="Document 2" />
            <div class="document-title">Document 2</div>
            <div class="document-info">Téléversé par User2</div>
            <div class="document-info">93% (122 évaluations)</div>
        </div>
        <div class="document-item" onclick="showDocument(2)">
            <img src="https://via.placeholder.com/150" alt="Document 3" />
            <div class="document-title">Document 3</div>
            <div class="document-info">Téléversé par User3</div>
            <div class="document-info">96% (10 évaluations)</div>
        </div>
    </div>

    <div class="document-container" id="documentContainer">
        <div id="documentContent"></div>
        <button class="close-button" onclick="closeDocument()">Fermer</button>
        <button onclick="openFullDocument()">En savoir plus</button>
    </div>

    <script>
        const documents = [
            { url: "", info: "Ceci est le document 1." },
            { url: "https://drive.google.com/uc?id=ID_DU_FICHIER_2", info: "Ceci est le document 2." },
            { url: "https://drive.google.com/uc?id=ID_DU_FICHIER_3", info: "Ceci est le document 3." },
        ];

        let currentIndex = 0;

        function showDocument(index) {
            currentIndex = index;
            document.getElementById("documentContent").innerHTML = ''; // Réinitialiser le contenu
            loadPdf(documents[index].url);
            document.getElementById("documentContainer").style.display = 'block';
        }

        async function loadPdf(url) {
            const loadingTask = pdfjsLib.getDocument(url);
            try {
                const pdf = await loadingTask.promise;
                for (let i = 1; i <= pdf.numPages; i++) {
                    const page = await pdf.getPage(i);
                    const viewport = page.getViewport({ scale: 1 });
                    const canvas = document.createElement('canvas');
                    const context = canvas.getContext('2d');
                    canvas.height = viewport.height;
                    canvas.width = viewport.width;
                    await page.render({ canvasContext: context, viewport: viewport }).promise;
                    document.getElementById("documentContent").appendChild(canvas);
                }
            } catch (error) {
                document.getElementById("documentContent").innerText = "Erreur lors du chargement du document : " + error.message;
            }
        }

        function openFullDocument() {
            window.open(documents[currentIndex].url, '_blank');
        }

        function closeDocument() {
            document.getElementById("documentContainer").style.display = 'none';
            document.getElementById("documentContent").innerHTML = ''; // Réinitialiser le contenu
        }
    
                `;
                break;
            case 'lecon1-part2':
                titleElement.textContent = 'Leçon 1 - Partie 2';
                content = `
                    <h3>Contenu de la Partie 2</h3>
                    <p>Voici le contenu détaillé de la Partie 2 de la Leçon 1.</p>
                `;
                break;
            case 'lecon2':
                titleElement.textContent = 'Leçon 2';
                content = `
                    <h3>Introduction à la Leçon 2</h3>
                    <p>Contenu détaillé de la Leçon 2.</p>
                `;
                break;
            case 'video1':
                titleElement.textContent = 'Vidéo 1';
                content = `
                    <h3>Vidéo 1</h3>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/vidéo1"></iframe>
                `;
                break;
            case 'video2':
                titleElement.textContent = 'Vidéo 2';
                content = `
                    <h3>Vidéo 2</h3>
                    <iframe width="100%" height="400px" src="https://www.youtube.com/embed/vidéo2"></iframe>
                `;
                break;
            default:
                titleElement.textContent = 'Sélectionnez un élément';
                content = 'Le contenu apparaîtra ici.';
        }

        areaElement.innerHTML = content;
    }

   function toggleComments() {
    const drawer = document.getElementById('comment-drawer');
    const button = document.getElementById('toggle-comments');
    // Basculer l'état du tiroir ouvert ou fermé
    drawer.classList.toggle('open');
    button.classList.toggle('close');



    function addComment() {
    const commentSection = document.getElementById('comment-section');
    const newComment = document.getElementById('new-comment').value;

    if (newComment.trim() === '') {
        alert("Veuillez écrire un commentaire.");
        return;
    }

    // Créer un élément de commentaire
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');

    // Obtenir l'heure actuelle
    const now = new Date();
    const dateString = now.toLocaleDateString();
    const timeString = now.toLocaleTimeString();

    // Ajouter le contenu du commentaire
    commentElement.innerHTML = `
        <div class="user-info">Utilisateur enregistré - ${dateString}, ${timeString}</div>
        <div class="message">${newComment}</div>
    `;

    // Ajouter le nouveau commentaire à la section
    commentSection.appendChild(commentElement);

    // Réinitialiser le champ de texte
    document.getElementById('new-comment').value = '';
}

}
        // Display user's name
        auth.onAuthStateChanged(user => {
            if (user) {
                document.getElementById('welcome-message').textContent = `Bonjour, ${user.displayName}`;
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


