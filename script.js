const navbar_btn = document.querySelector('.navbar-btn');
const nav_header = document.querySelector('.header');

const toggleNavbar = () => {
    nav_header.classList.toggle("active1");
};

navbar_btn.addEventListener('click', () => toggleNavbar());