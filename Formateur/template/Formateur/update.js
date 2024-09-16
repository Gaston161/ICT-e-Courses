function goBack() {
    // Logique pour revenir à la vue précédente
    $('#sideTabs a:first').tab('show');
}

$(document).ready(function() {
    $('#sideTabs a').on('click', function() {
        // Logique pour charger le contenu de l'onglet sélectionné
    });
});