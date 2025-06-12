// script.js

// Aguarda o carregamento completo do DOM para TODO o seu JavaScript
document.addEventListener('DOMContentLoaded', function() {

    // Lógica do Carrossel
    var myCarousel = document.querySelector('#carouselExampleIndicators');
    if (myCarousel) {
        var carousel = new bootstrap.Carousel(myCarousel, {
            interval: 5000,
            wrap: true
        });
    }

    // Lógica dos botões "Continuar Lendo"
    const readMoreButtons = document.querySelectorAll('.read-more-btn');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetId = this.dataset.target;
            const shortText = document.getElementById(`shortText${targetId}`);
            const fullText = document.getElementById(`fullText${targetId}`);

            if (fullText.style.display === 'none' || fullText.style.display === '') {
                shortText.style.display = 'none';
                fullText.style.display = 'block';
                this.textContent = 'Ver Menos';
            } else {
                shortText.style.display = 'block';
                fullText.style.display = 'none';
                this.textContent = 'Continuar Lendo';
            }
        });
    });
});