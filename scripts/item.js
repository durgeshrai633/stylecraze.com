var item = JSON.parse(localStorage.getItem("iData")) || [];
console.log(item);
var img = document.getElementById("smainImg");
img.src = item.image_link;
var nam = document.getElementById("snam");
nam.textContent = item.name;
var prod_id = document.getElementById("sprod_id");
prod_id.textContent = `PRODUCT ID : ${item.id}`;
var price = document.getElementById("spayable");
price.innerHTML = `<span>Price: $${item.price}<\span>`;


var buyNow = document.getElementById("sbuyNow");
buyNow.addEventListener("click", function() {
  let cartItms = JSON.parse(localStorage.getItem("cartItm")) || []
  cartItms.push(item)
  localStorage.setItem("cartItm",JSON.stringify(cartItms))
  window.location.href = "cart.html";
});
