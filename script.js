// script.js

// Получаем ссылку на контейнер для контента
const contentContainer = document.getElementById('content');

// Обработчики событий для навигации между страницами
document.querySelector('a[href="index.html"]').addEventListener('click', function (event) {
    event.preventDefault();
    loadPage('index.html');
});

document.querySelector('a[href="products.html"]').addEventListener('click', function (event) {
    event.preventDefault();
    loadPage('products.html');
});

document.querySelector('a[href="about.html"]').addEventListener('click', function (event) {
    event.preventDefault();
    loadPage('about.html');
});

document.querySelector('a[href="contacts.html"]').addEventListener('click', function (event) {
    event.preventDefault();
    loadPage('contacts.html');
});

// Функция для загрузки страницы
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            contentContainer.innerHTML = data;
        });
}

// Загрузка главной страницы при старте
loadPage('index.html');
