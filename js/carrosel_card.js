// script.js
const cards = document.getElementById('cards_carrosel');
let isDown = false;
let startX;
let scrollLeft;

function handleMouseDown(e) {
    isDown = true;
    cards.classList.add('active');
    startX = e.pageX - cards.offsetLeft;
    scrollLeft = cards.scrollLeft;
    cards.style.cursor = 'grabbing'; // Muda o cursor durante o arrasto
}

function handleMouseLeave() {
    isDown = false;
    cards.classList.remove('active');
    cards.style.cursor = 'grab'; // Restaura o cursor
}

function handleMouseUp() {
    isDown = false;
    cards.classList.remove('active');
    cards.style.cursor = 'grab'; // Restaura o cursor
}

function handleMouseMove(e) {
    if (!isDown) return; // Se o botão não estiver pressionado, não faz nada
    e.preventDefault(); // Evita a seleção de texto
    const x = e.pageX - cards.offsetLeft;
    const walk = (x - startX) * 1; // Ajusta a velocidade do scroll
    cards.scrollLeft = scrollLeft - walk; // Atualiza a posição do scroll
}

// Para suportar dispositivos de toque (mobile)
function handleTouchStart(e) {
    isDown = true;
    startX = e.touches[0].pageX - cards.offsetLeft;
    scrollLeft = cards.scrollLeft;
    cards.style.cursor = 'grabbing'; // Muda o cursor durante o arrasto
}

function handleTouchEnd() {
    isDown = false;
    cards.style.cursor = 'grab'; // Restaura o cursor
}

function handleTouchMove(e) {
    if (!isDown) return;
    const x = e.touches[0].pageX - cards.offsetLeft;
    const walk = (x - startX) * 1; // Ajusta a velocidade do scroll
    cards.scrollLeft = scrollLeft - walk; // Atualiza a posição do scroll
}

// Adicionando eventos de mouse
cards.addEventListener('mousedown', handleMouseDown);
cards.addEventListener('mouseleave', handleMouseLeave);
cards.addEventListener('mouseup', handleMouseUp);
cards.addEventListener('mousemove', handleMouseMove);

// Adicionando eventos de toque
cards.addEventListener('touchstart', handleTouchStart);
cards.addEventListener('touchend', handleTouchEnd);
cards.addEventListener('touchmove', handleTouchMove);
