let ecran = document.getElementById('ecran');

function ajouter(valeur) {
    ecran.value += valeur;
}

function effacer() {
    ecran.value = '';
}

function calculer() {
    try {
        if (ecran.value.includes('/0')) {
            ecran.value = 'Erreur';
            return;
        }
        ecran.value = eval(ecran.value);
    } catch {
        ecran.value = 'Erreur';
    }
}