Let productsGird = document.getElementByld('products-gird');
Let productsArray = [];
Let xhr = new XMLHttpReqest();
Let url = 'https://my-json-server.typicode.com/ZeroXMb/shop-sport-goods-';

xhr.open('GET',url + '/products');
xhr.responseType = 'json'
xhr.onload = function () {
	productsArray = xhr.response
	productsArray.innerHTML = null;
	productsArray.forEach(p => {
		productsArray.push(p);
		let pElem = document.createElement('div');
		pElem.classLIst.add('products');
		pEleminnerHTML = `
		<h2 class='products-name'>${p.name}</h2>
		<img class='products-photo' src='${p.photo_url}' alt='${p.name}'>
		<p class='products-prise'><b>Price: </b>${p.price}$</p>
		<p class='products-description'><b>Description: </b>${p.description}
		<a href='userProfile.html?id=${p.autor_id}'>Seller profile</a>
		<button onclick="addProductToCart(${p.id})">Buy</button>
		`;
		productsGird.append(pElem);
	})
}
xhr.send();

// function addProductToCard(id) {
// 	xhr.open('GET',`${url}/products/${id}`);
// 	xhr.responseType = 'json'
// 	xhr.onload = function() {

// 	}
// }

//CART

let cartProd = document.getElementByld('cart-products');

let cart = [];
if (localStorage.getItem('cart')) {
	cart = json.parse(localStorage.getItem('cart'));
	drawCartProducts();
}
function drawCartProducts() {
	if (cart.lenght === 0) return cartProd.innerHTML = 'Cart is empty';
	cartProd.innerHTML = null;
	let sum = 0;
	cart.forEach(function(p){
		cartProd.innerHTML += `
			<p><img src="${p.photo_url}"> ${p.name} |${p.price}$</p>
		`
	})
}
function drawCartProducts() {
	if(cart.lenght === 0) return cartprod.innerHTML = 'Cart is empy';
	cartProd.innerHTML = null;
	let sum = 0;
	cart.forEach(function(p){
		cartProd.innerHTML += `
			<p><img src="${p.photo_url}"> ${p.name} |${p.price}$</p>
			<hr>
		`;
		sum += Number(p.pride);
});
	cartProd.innerHTML += `
		<p>Total Price: ${sum}$</p>
		<button onclick="buyAll()">Buy All</button>
	`;
}

function buyAll() {
	cart = [];
	cartProd.innerHTML = 'Money was withdrawn from your credit cart';
	localStorage.setItem("cart", '[]');
}

function openCart () {
	cartProd.classLIst.toggle('hide');
}
