{% extends 'base.html' %}

{% block content %}
  <h1>Meu site</h1>

  <script src="{% static 'script.js' %}"></script>
<script>
// Função para rolar suavemente até a seção clicada no menu
function smoothScroll(target) {
    const element = document.querySelector(target);
    window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth"
    });
}

// Adicionando evento de clique nos itens do menu
const menuItems = document.querySelectorAll("nav ul li a");
menuItems.forEach(item => {
    item.addEventListener("click", (event) => {
        event.preventDefault();
        const target = item.getAttribute("href");
        smoothScroll(target);
    });
});

// Função para exibir/esconder o formulário de contato
function toggleContactForm() {
    const form = document.getElementById("contact-form");
    form.classList.toggle("show");
}

// Adicionando evento de clique no botão de contato
const contactButton = document.getElementById("contact-button");
contactButton.addEventListener("click", toggleContactForm);
 <script>
// Simulated login status (replace with your actual authentication check)
        const isLoggedIn = true; // Change this to true/false based on actual login status

        // Check if the user is logged in
        if (!isLoggedIn) {
            // If the user is not logged in, redirect them to the login page or show a login modal
            window.location.href = "login

        // Simulated login status (replace with your actual authentication check)
        const isLoggedIn = true; // Change this to true/false based on actual login status

        // Check if the user is logged in
        if (!isLoggedIn) {
            // If the user is not logged in, redirect them to the login page or show a login modal
            window.location.href = "login.html"; // Change "login.html" to your actual login page
        }
    </script>