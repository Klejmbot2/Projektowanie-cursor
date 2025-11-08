// Obsługa animacji przy scrollowaniu
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Obserwuj wszystkie sekcje
document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        observer.observe(section);
    });
});

// Obsługa formularza kontaktowego
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Pobierz wartości z formularza
        const formData = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            message: document.getElementById('message').value
        };
        
        // Tutaj możesz dodać logikę wysyłania formularza
        // Na przykład przez API lub email service
        console.log('Formularz wysłany:', formData);
        
        // Wyświetl komunikat sukcesu
        alert('Dziękuję za wiadomość! Odpowiem najszybciej jak to możliwe.');
        
        // Wyczyść formularz
        contactForm.reset();
    });
}

