const addToCartButtons = document.querySelectorAll('.add-to-cart');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Item added to cart');
    });
});
// Select all the add to cart buttons
const addToCartButtons1 = document.querySelectorAll('.add-to-cart-button');

// Add event listener to each button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Add code here to add the product to the cart
    console.log
  })
})
const addToCartButtons2 = document.querySelectorAll('.add-to-cart');
const cartContainer = document.querySelector('.cart-container');
const viewCartButton = document.querySelector('.view-cart');

addToCartButtons.forEach((button) => {
    button.addEventListener('click', () => {
        const itemContainer = button.parentNode;
        const itemName = itemContainer.querySelector('h3').innerText;
        const itemPrice = itemContainer.querySelector('p').innerText;

        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.innerHTML = `
            <h3>${itemName}</h3>
            <p>${itemPrice}</p>
        `;
        cartContainer.appendChild(cartItem);
        cartContainer.style.display = 'block';
    });
});

viewCartButton.addEventListener('click', () => {
    cartContainer.style.display = 'block';
});