// js/script.js

// Animação de Scroll (opcional - com ScrollReveal.js)
// ScrollReveal().reveal('.banner', { delay: 300 });

// Dropdown Menu (se precisar de mais interatividade)
const dropdown = document.querySelector('.dropdown');
const dropdownContent = document.querySelector('.dropdown-content');

if (dropdown && dropdownContent) {
    dropdown.addEventListener('mouseover', () => {
        dropdownContent.style.display = 'block';
    });

    dropdown.addEventListener('mouseout', () => {
        dropdownContent.style.display = 'none';
    });
}

// Smooth scrolling para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
