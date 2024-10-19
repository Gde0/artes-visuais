
function scrollToSection(sectionId) {
    document.querySelector(sectionId).scrollIntoView({ behavior: 'smooth' });
}
let lastScrollTop = 0; // Última posição de rolagem
const header = document.getElementById("header");
const toggleButton = document.getElementById("toggleButton");
const nav = document.getElementById("nav");

// Função para mostrar/ocultar o header
function handleScroll() {
const currentScroll = window.pageYOffset || document.documentElement.scrollTop;

if (currentScroll > lastScrollTop) {
// Rolando para baixo
header.classList.add("hidden");
} else {
// Rolando para cima
header.classList.remove("hidden");
}

lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // Para evitar valores negativos
}

// Adiciona evento de rolagem
window.addEventListener("scroll", handleScroll);

// Função para alternar o menu
toggleButton.addEventListener("click", () => {
nav.querySelector('ul').classList.toggle('show');
});

// Estilo para mostrar o menu
const showMenuStyle = document.createElement('style');
showMenuStyle.innerHTML = `
nav ul.show {
display: flex; /* Exibe as opções quando a classe 'show' é adicionada */
flex-direction: column; /* Exibe opções em coluna no mobile */
}
`;
document.head.appendChild(showMenuStyle);
const galleryItems = document.querySelectorAll('.gallery-item');
let currentIndex = 0;

const galleryImage = document.getElementById('galleryImage');
const imageCaption = document.getElementById('imageCaption');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

// Atualiza a imagem e a legenda
function updateImage() {
    const currentItem = galleryItems[currentIndex];
    galleryImage.src = currentItem.dataset.img;
    imageCaption.textContent = currentItem.dataset.caption;

    // Remove a classe "active" de todos os itens
    galleryItems.forEach(item => item.classList.remove('active'));

    // Adiciona a classe "active" ao item atual
    currentItem.classList.add('active');
}

// Lida com o clique no botão "Anterior"
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : galleryItems.length - 1;
    updateImage();
});

// Lida com o clique no botão "Próximo"
nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < galleryItems.length - 1) ? currentIndex + 1 : 0;
    updateImage();
});

// Inicializa com a primeira imagem
updateImage();
