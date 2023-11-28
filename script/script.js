document.addEventListener("DOMContentLoaded", function () {
    // Obtén todas las tarjetas
    var cards = document.querySelectorAll('.card');

    // Agrega un eventListener a cada tarjeta
    cards.forEach(function (card) {
        card.addEventListener('click', function (event) {
            // Obtiene el texto de la tarjeta clicada
            var cardText = card.innerText;

            // Almacena el valor en localStorage
            localStorage.setItem('selectedCard', cardText);
        });
    });
});
