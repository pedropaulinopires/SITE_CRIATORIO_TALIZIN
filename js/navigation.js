const sobre_navigation = [...document.querySelectorAll('[data-navigation="sobre"]')];
const inicio_navigation = [...document.querySelectorAll('[data-navigation="inicio"]')];
const contato_navigation = [...document.querySelectorAll('[data-navigation="contato"]')];
const aves_navigation = [...document.querySelectorAll('[data-navigation="aves"]')];



sobre_navigation.map((ele) => {
    ele.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-navigation');
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 90,  // Compensa a altura do menu fixo
            behavior: 'smooth'
        });
    });
});

inicio_navigation.map((ele) => {
    ele.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-navigation');
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 90,  // Compensa a altura do menu fixo
            behavior: 'smooth'
        });
    });
});


contato_navigation.map((ele) => {
    ele.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-navigation');
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 90,  // Compensa a altura do menu fixo
            behavior: 'smooth'
        });
    });
});


aves_navigation.map((ele) => {
    ele.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-navigation');
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 90,  // Compensa a altura do menu fixo
            behavior: 'smooth'
        });
    });
});


const srcollTop = document.getElementById("scroll-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 400)
        srcollTop.classList.add("active");
    else
        srcollTop.classList.remove("active");
});

let toTop = () => window.scrollTo(0, 0);

srcollTop.addEventListener('click', () => toTop())


