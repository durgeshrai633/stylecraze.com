var item = JSON.parse(localStorage.getItem("itemData")) || [];
console.log(item);
var img = document.getElementById("smainImg");
img.src = item.image_url;
var nam = document.getElementById("snam");
nam.textContent = item.name;
var prod_id = document.getElementById("sprod_id");
prod_id.textContent = `PRODUCT ID : ${item.id}`;
var price = document.getElementById("spayable");
price.innerHTML = `<span>&#8377;${item.price}<\span>`;
var realPrice = document.getElementById("smrp");
realPrice.innerHTML = `<span>${item.realPrice}<\span>`;

var cart = JSON.parse(localStorage.getItem("cartItems")) || [];

var cartbtn = document.getElementById("saddToCart");
cartbtn.addEventListener("click", function() {
  addToCart(item);
  alert("Item Added To Cart")
});
function addToCart(item) {
  cart.push(item);
  localStorage.setItem("cartItems", JSON.stringify(cart));
}

var buyNow = document.getElementById("sbuyNow");
buyNow.addEventListener("click", function() {
  addToCart(item);
  window.location.href = "finalcart.html";
});
