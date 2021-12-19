var cartItems = JSON.parse(localStorage.getItem("cartItm")) ||  [];

var mainDiv = document.getElementById("itemsdiv");
display()

function display(){

    
  cartItems.forEach(el => {
    let makeupDiv = document.createElement("div");
    makeupDiv.setAttribute("class","makeupDiv")
    let img = document.createElement("img");
    img.src = el.image_link;
    let name = document.createElement("p");
    name.innerText = el.name;
    let price = document.createElement("p");
    let priceValue = el.price;
    price.setAttribute("class","price")
    price.innerText = `Price: ${priceValue} $`;
    let starsDiv = document.createElement("div");
    starsDiv.setAttribute("id","starsDiv")
    for(let st = 0;st<5;st++)
    {
        let star = document.createElement("div");
        star.innerHTML = '<span class="star-wrap"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M12 17.42L6.25 21.54C6.1816 21.5921 6.09823 21.6207 6.01227 21.6217C5.9263 21.6227 5.8423 21.596 5.77272 21.5455C5.70314 21.495 5.65169 21.4234 5.62598 21.3413C5.60027 21.2593 5.60168 21.1712 5.63 21.09L7.77 14.35L2.08 10.15C2.01515 10.0984 1.96747 10.0283 1.94325 9.94905C1.91902 9.86979 1.91938 9.78505 1.94429 9.706C1.9692 9.62695 2.01747 9.5573 2.08276 9.50624C2.14805 9.45518 2.22728 9.42511 2.31 9.41999L9.38 9.36999L11.62 2.65999C11.6463 2.57996 11.6972 2.51028 11.7654 2.46088C11.8337 2.41148 11.9158 2.38489 12 2.38489C12.0842 2.38489 12.1663 2.41148 12.2346 2.46088C12.3028 2.51028 12.3537 2.57996 12.38 2.65999L14.62 9.36999L21.69 9.41999C21.7727 9.42511 21.852 9.45518 21.9172 9.50624C21.9825 9.5573 22.0308 9.62695 22.0557 9.706C22.0806 9.78505 22.081 9.86979 22.0568 9.94905C22.0325 10.0283 21.9848 10.0984 21.92 10.15L16.23 14.35L18.37 21.09C18.3983 21.1712 18.3997 21.2593 18.374 21.3413C18.3483 21.4234 18.2969 21.495 18.2273 21.5455C18.1577 21.596 18.0737 21.6227 17.9877 21.6217C17.9018 21.6207 17.8184 21.5921 17.75 21.54L12 17.42Z" fill="black"></path></svg></span>'
        starsDiv.append(star)
    }
    let shades = document.createElement("div");
    shades.setAttribute("id","shades")
    let shadeArr= el.product_colors;
    if(shadeArr.length>0)
    {
        for(let sh =0; sh < shadeArr.length;sh++)
        {
            let shade = document.createElement("div");
            shade.style.backgroundColor = shadeArr[sh].hex_value
            shades.append(shade)
        }

    } 
    
    var deletebtn = document.createElement("button");
    deletebtn.textContent = "delete";
    deletebtn.innerHTML = "<i class='far fa-trash-alt fa-2x'></i>"
    deletebtn.addEventListener("click",function(){
    let index = findIndex(el,cartItems)
    cartItems.splice(index,1);
    localStorage.setItem("cartItm",JSON.stringify(cartItems))
    mainDiv.innerHTML = null
    var Bill = cartItems.reduce(function(acc,cv){
        return acc + Number(cv.price);
    },0);
    var Numberofitem = cartItems.length
document.getElementById("itemqty").textContent=  Numberofitem
    document.getElementById("itemprice").textContent= Bill.toFixed(2) +"$"
    document.getElementById("totalprice").textContent= Bill.toFixed(2) +"$"
    display()    
       
    });
           
   makeupDiv.append(img,name,price,starsDiv,shades,deletebtn);
   itemsdiv.append(makeupDiv)
  });
    
   
    function findIndex(el,cart) {
        for(var i=0;i<cart.length;i++)
        {
            if(el===cart[i])
            {
                return i
            }
        }
    }
  }

var paymentDetails = JSON.parse(localStorage.getItem("paydetails"))||[];
var Bill = cartItems.reduce(function(acc,cv){
return acc + Number(cv.price);
},0);

var Numberofitem = cartItems.length
document.getElementById("itemqty").textContent=  Numberofitem

document.getElementById("itemprice").textContent= Bill .toFixed(2)+"$"
document.getElementById("totalprice").textContent= Bill.toFixed(2) +"$"

var promo = document.getElementById("back")
promo.addEventListener("click",applypromo)
function applypromo(){
 var A = document.getElementById("couponinput").value
 if(A == "style30"){
     NewBill = Bill - (Bill*30)/100;
     document.getElementById("itemprice").textContent= NewBill.toFixed(2) +"$"
     document.getElementById("totalprice").textContent= NewBill.toFixed(2) +"$"
     localStorage.setItem("paydetails",JSON.stringify(NewBill))
 }
}

localStorage.setItem("paydetails",JSON.stringify(Bill))
var checkout =document.getElementById("checkout")
checkout.addEventListener("click",goToPay)
function goToPay(){
window.open("payment.html");
}




  //To find Index of product in array

