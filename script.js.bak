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

// Слушатель события для кнопки "Добавить в корзину"
const addToCartButtons = document.querySelectorAll('.add-to-cart');
addToCartButtons.forEach(button => {
    button.addEventListener('click', addToCart);
});

// Функция для добавления товара в корзину
function addToCart(event) {
    const product = event.target.closest('.product');
    const productName = product.querySelector('h3').textContent;
    const productPrice = parseFloat(product.querySelector('.price').textContent.replace('$', ''));

    const cartItems = document.getElementById('cart-items');
    const newItem = document.createElement('li');
    newItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
    cartItems.appendChild(newItem);

    updateCartTotal(productPrice);
}

// Функция для обновления общей стоимости корзины
function updateCartTotal(price) {
    const cartTotal = document.getElementById('cart-total');
    const currentTotal = parseFloat(cartTotal.textContent);
    cartTotal.textContent = (currentTotal + price).toFixed(2);
}

// Слушатель события для кнопки "Оформить заказ"
document.querySelector('.checkout').addEventListener('click', function () {
    alert('Заказ оформлен!'); // Ваша логика оформления заказа может быть добавлена здесь
});

// Загрузка главной страницы при старте
loadPage('index.html');
