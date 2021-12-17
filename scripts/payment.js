var paynow = document.getElementById("payNow")
paynow.addEventListener("click",openThankyou)

var paymentDetails = JSON.parse(localStorage.getItem("paydetails"));
paynow.textContent = "Pay:" + "  " +paymentDetails + "$";


function openThankyou(){
    window.open("thankyou.html")
}
