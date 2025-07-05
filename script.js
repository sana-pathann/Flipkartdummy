

function showDetails(productId) {
   
    fetch(`https://dummyjson.com/products/${productId}`)
        .then(response => response.json())
        .then(product => {
            document.getElementById('modalid').innerText = product.id;
            document.getElementById('modalTitle').innerText = product.title;
             document.getElementById('image').innerHTML = product.images.map(image => 
                    `<img src="${image}" alt="${product.title}" style="max-width: 100px; max-height: 100px; margin: 5px;">`).join('');
            
        
            document.getElementById('modalDescription').innerText = product.description;
            document.getElementById('modalPrice').innerText = `$${product.price}`;
            document.getElementById('modalCategory').innerText = product.category;
            document.getElementById('discount').innerText = product.discountPercentage;
            document.getElementById('modalrating').innerText = product.rating;
            document.getElementById('modalStock').innerText = product.stock;
            document.getElementById('modaltags').innerText = product.tags;
            document.getElementById('modalbrand').innerText = product.brand;
            document.getElementById('modaldimensions').innerText = product.dimensions;
            document.getElementById('modal').style.display = 'block';
        })
        .catch(error => {
            console.error('Error fetching product details:', error);
            alert('Failed to load product details.');
        });
}


function closeModal() {
    document.getElementById('modal').style.display = 'none';
}
function wish(){
    window.location .href="wish.html";
}
function fr(){
    window.location .href="fragrances.html";
}
function el(){
    window.location .href="beauty.html";
}
function fur(){
    window.location .href="furniture.html";
}
function gr(){
    window.location .href="groceries.html";
}
function b(){
    window.location .href="smart.html";
}
function cart(){
    window.location .href="cart.html";
}

function redirectToLogin() {
    window.location.href = "login.html"; 
}
function reverse() {
    window.location.href = 'signup.html';
}
function add() {
    const btn = document.getElementById('fetchItemsBtn');
}
function home(){
    window.location.href = 'home.html';
}
function profile(){
    window.location.href = 'profile.html'
}

function addToCart(productId, title, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = {
        id: productId,
        title: title,
        price: price,
        image: image,
    };
    const existingProductIndex = cart.findIndex(item => item.id === productId);
    if (existingProductIndex >= 0) {
        alert('This item is already in your cart!');
    } else {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart!');
    }
}

function isUserLoggedIn() {
    return localStorage.getItem('user') !== null;
}

function addProductToCart(productId, title, price, image) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    const product = {
        id: productId,
        title: title,
        price: price,
        image: image,
    };
    const existingProductIndex = cart.findIndex(item => item.id === productId);
    if (existingProductIndex >= 0) {
        alert('This item is already in your cart!');
    } else {
        cart.push(product);
        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Item added to cart!');
    }
}

function isUserLoggedIn() {
    return localStorage.getItem('userData') !== null;
}





