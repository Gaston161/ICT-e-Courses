
  
function showDocument(index) {
    const documents = [
        { url: "page1.html", info: "Ceci est le document 1." },
        { url: "page2.html", info: "Ceci est le document 2." },
        { url: "page3.html", info: "Ceci est le document 3." },
    ];

    // Rediriger vers la page correspondante
    window.location.href = documents[index].url;
}

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




