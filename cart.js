// cart.js// �������� ������ �� ��������� ��� �������const cartItems = document.getElementById('cart-items');const cartTotal = document.getElementById('cart-total');// ������� ��� �������� ��������� �������function loadCartItems() {    // ���� ������ ��� �������� ��������� �������, ��������, �� Local Storage    // ������:    // const cartData = JSON.parse(localStorage.getItem('cartData'));    // if (cartData) {    //     cartData.forEach(item => {    //         const newItem = document.createElement('li');    //         newItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;    //         cartItems.appendChild(newItem);    //         updateCartTotal(item.price);    //     });    // }}// ������� ��� ���������� ����� ��������� �������function updateCartTotal(price) {    const currentTotal = parseFloat(cartTotal.textContent);    cartTotal.textContent = (currentTotal + price).toFixed(2);}// �������� ��������� ������� ��� �������� ��������loadCartItems();