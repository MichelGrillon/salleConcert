document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    let currentSlideIndex = 0;

    function defile() {
        slides[currentSlideIndex].style.display = "none";
        currentSlideIndex = (currentSlideIndex + 1) % slides.length;
        slides[currentSlideIndex].style.display = "block";
        mettreAJourIndicateurs(currentSlideIndex);
    }

    // Cache tous les slides sauf le premier
    for (let i = 1; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // Démarre le diaporama
    setInterval(defile, 3000);

    // Code pour les indicateurs du diaporama
    const indicateurs = document.querySelectorAll(".indicateur");
    indicateurs.forEach((indicateur, index) => {
        indicateur.addEventListener("click", function() {
            afficherImage(index);
        });
    });

    function afficherImage(index) {
        // Masque toutes les images du diaporama
        for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }

        // Affiche l'image correspondante
        slides[index].style.display = "block";
        mettreAJourIndicateurs(index);
    }

    function mettreAJourIndicateurs(index) {
        indicateurs.forEach((indicateur, i) => {
            if (i === index) {
                indicateur.classList.add("actif");
            } else {
                indicateur.classList.remove("actif");
            }
        });
    }

    // Ajout le code pour la flèche de retour en haut de la page
    const retourHaut = document.getElementById("retour-haut");

    // Écoutez le défilement de la page
    window.addEventListener("scroll", function() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            retourHaut.style.display = "block";
        } else {
            retourHaut.style.display = "none";
        }
    });

    // Ajout un gestionnaire d'événements pour le clic sur la flèche
    retourHaut.addEventListener("click", function() {
        document.body.scrollTop = 0; // Pour les navigateurs Chrome, Safari
        document.documentElement.scrollTop = 0; // Pour les navigateurs Firefox, IE, Opera
    });

    // Ajout du code pour afficher un message d'erreur lorsque le champ email est vide
    const envoyerEmailButton = document.getElementById("envoyer-email");
    const emailInput = document.getElementById("mail");
    const messageErreur = document.getElementById("message-erreur");

    envoyerEmailButton.addEventListener("click", function() {
        const emailValue = emailInput.value.trim();
        if (emailValue === "") {
            messageErreur.style.display = "block";
        } else {
            messageErreur.style.display = "none";
            // Ici, vous pouvez ajouter le code pour traiter l'envoi du formulaire si nécessaire.
        }
    });

    // Gestionnaire d'événements pour le pop-up de cookies
    const popup = document.getElementById("popup");
    const accepterCookie = document.getElementById("accepter-cookie");
    const refuserCookie = document.getElementById("refuser-cookie");

    if (document.cookie.indexOf("accepte_cookie=true") === -1) {
        popup.style.display = "block";
    }

    accepterCookie.addEventListener("click", function() {
        popup.style.display = "none";
        document.cookie = "accepte_cookie=true; expires=Sun, 1 Jan 2023 00:00:00 UTC; path=/";
    });

    refuserCookie.addEventListener("click", function() {
        popup.style.display = "none";
        // On peut ajouter son propre code pour gérer le refus des cookies ici.
    });
});
