let DK_credit = document.getElementById("DK_credit");
let DK_first = document.getElementById("DK_first");
let DK_lowerarrow = document.getElementById("DK_lowerarrow");
let DK_upperarrow = document.getElementById("DK_upperarrow");

let DK_btn = document.getElementById("DK_btn");
DK_btn.addEventListener("click", DK_orderplaced);

DK_credit.addEventListener("click", DK_showfnc);
let count = 0;

function DK_showfnc() {
    count++;
    if (count % 2 == 1) {
        DK_first.style.display = "block";
        DK_upperarrow.style.display = "inline-block";
        DK_lowerarrow.style.display = "none";


    } else {
        DK_first.style.display = "none";
        DK_upperarrow.style.display = "none";
        DK_lowerarrow.style.display = "inline-block";
    }
}

function DK_orderplaced() {

    let DK_cardNumber = document.getElementById("DK_cardNumber").value;
    let DK_ccv = document.getElementById("DK_ccv").value;
    let DK_name = document.getElementById("DK_name").value;
    let DK_select = document.getElementById("DK_select").value;
    let DK_year = document.getElementById("DK_year").value;


    if ((DK_cardNumber.length == 16) && (DK_ccv.length == 3)) {

        alert("Your order is placed");
    } else {
        alert("Please enter valid creditials");
    }

}