document.addEventListener("DOMContentLoaded", function() {
    const messages = {
        "en": "Sorry for the inconvenience! Our website is currently undergoing maintenance to enhance your browsing experience. <br> We'll be back up and running shortly. Thank you for your patience!",
        "ru": "Извините за неудобства! Наш сайт в настоящее время находится на техническом обслуживании для улучшения вашего веб-опыта. <br> Мы скоро снова заработаем. Спасибо за ваше терпение!",
        "es": "¡Disculpe las molestias! Nuestro sitio web está actualmente en mantenimiento para mejorar su experiencia de navegación. <br> Estaremos de vuelta en funcionamiento en breve. ¡Gracias por su paciencia!",
        "it": "Spiacenti per l'inconveniente! Il nostro sito web è attualmente in fase di manutenzione per migliorare la vostra esperienza di navigazione. <br> Torneremo presto online. Grazie per la vostra pazienza!",
        "el": "Λυπούμαστε για την ταλαιπωρία! Η ιστοσελίδα μας βρίσκεται υπό συντήρηση για να βελτιώσουμε την εμπειρία σας στο διαδίκτυο. <br> Θα είμαστε ξανά σε λειτουργία σύντομα. Σας ευχαριστούμε για την υπομονή σας!"
    };

    const languageOptions = document.querySelectorAll(".lang-option");
    const messageDiv = document.getElementById("message");
    let currentCharacterIndex = 0;
    let typingInterval;

    function updateMessage(clickedOption) {
        const selectedLanguage = clickedOption.dataset.lang;
        const message = messages[selectedLanguage];
        clearInterval(typingInterval);
        messageDiv.innerHTML = ""; // Clear the messageDiv

        // Split message by <br> tags and create <span> elements for each line
        const lines = message.split("<br>");
        lines.forEach((line, index) => {
            const span = document.createElement("span");
            span.innerHTML = line;
            if (index !== lines.length - 1) {
                span.innerHTML += "<br>"; // Add <br> except for the last line
            }
            messageDiv.appendChild(span);
        });

        // Start typing animation
        typingInterval = setInterval(function() {
            if (currentCharacterIndex < message.length) {
                const span = messageDiv.children[currentCharacterIndex];
                span.style.display = "inline"; // Display each character one by one
                currentCharacterIndex++;
            } else {
                clearInterval(typingInterval);
                currentCharacterIndex = 0;
            }
        }, 50); // Typing speed

        // Remove 'active' class from all language options
        languageOptions.forEach(function(option) {
            option.classList.remove('active');
        });
        // Add 'active' class to the clicked language option
        clickedOption.classList.add('active');
    }

    languageOptions.forEach(function(option) {
        option.addEventListener("click", function() {
            updateMessage(this);
        });
    });

    // Initial message display
    updateMessage(languageOptions[0]); // Display message for the first language initially
});






/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '90px',
    duration: 3000,
})

sr.reveal(`.home__data`, {origin: 'top', delay: 400})
sr.reveal(`.home__img`, {origin: 'bottom', delay: 600})
sr.reveal(`.home__footer`, {origin: 'bottom', delay: 800})
