document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const element = urlParams.get('element');
    loadContent(element);
});

function loadContent(element) {
    fetch('content.json')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur lors de la récupération du fichier JSON');
            }
            return response.json();
        })
        .then(data => {
            const contentDiv = document.getElementById('content');
            const elementData = data[element];
            
            if (elementData) {
                contentDiv.innerHTML = elementData.topics.map(topic => `
                    <div class="topic">
                        <h2>${topic.title}</h2>
                        <a href="${topic.pdfLink}" class="pdf-link" target="_blank">
                            <img src="https://img.icons8.com/ios-filled/50/000000/pdf.png" alt="PDF" width="24">
                            ${topic.linkText}
                        </a>
                        <p>${topic.description}</p>
                    </div>
                `).join('');
            } else {
                contentDiv.innerHTML = '<p>Contenu non trouvé.</p>';
            }
        })
        .catch(error => {
            console.error('Erreur lors du chargement du contenu :', error);
            document.getElementById('content').innerHTML = '<p>Erreur lors du chargement du contenu.</p>';
        });
}