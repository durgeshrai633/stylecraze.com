import showProducts1 from "./scripts/showproducts1.js";

let dVproducts1_cont = document.getElementById("dVproducts1_cont");
let localData = JSON.parse(localStorage.getItem("makeup")) || []
async function products()
{
    try{
    let url = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`;
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    localStorage.setItem("makeup", JSON.stringify(data))
    showProducts1(data,dVproducts1_cont)
    }
    catch(err){
        console.log(`err: `,err);
    }
}
products()

let brands = document.getElementById("dVbrands");
brands.addEventListener("click",showbrands);
let countBrand = 0;
function showbrands()
{
    countBrand++;
   let brandName= document.getElementById("dVshowBrand");
    if(countBrand%2===1)
   {  
            brandName.style.display="none";
            // console.log(`open`, count);
    }
    else{
         brandName.style.display="block"; 
        // console.log(`close`,count);
    }   
}

let dVbrand = document.getElementsByClassName("dVbrand");
for(let k=0;k<dVbrand.length; k++)
{
    //console.log(dVbrand[k].textContent);
    dVbrand[k].addEventListener("click",showCategory)
    dVbrand[k].myParam =  dVbrand[k].textContent
}
let selectCateg = `maybelline`;
 async function showCategory(evt){
   
    try{
   selectCateg = evt.currentTarget.myParam;
   let categurl = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${selectCateg}`
   let res = await fetch(categurl);
   let categData = await res.json();
   dVproducts1_cont.innerHTML = null;
   if(categData.length>0)
   showProducts1(categData,dVproducts1_cont)
    else
    dVproducts1_cont.innerHTML = '<center><h1>No Product Found</h1></center>';
    }
    catch(err){
        console.log(err);
        dVproducts1_cont.innerHTML = '<h1>No Product Found</h1>';
    }
   
}

let dVtypes = document.getElementById("dVtype");
dVtypes.addEventListener("click",showType);
let count_tpye = 0;
function showType()
{
    count_tpye++;
   let dVshowType= document.getElementById("dVshowType");
    if(count_tpye%2===1)
   {  
       dVshowType.style.display="none";
            // console.log(`open`, count);
    }
    else{
        dVshowType.style.display="block"; 
        // console.log(`close`,count);
    }   
}

let dVtype = document.getElementsByClassName("dVtype");
for(let k=0;k<dVtype.length; k++)
{
    //console.log(dVbrand[k].textContent);
    dVtype[k].addEventListener("click",showTypes)
    dVtype[k].myParam =  dVtype[k].textContent
}
 async function showTypes(evt){
   
    try{
   let selectType = evt.currentTarget.myParam;
   let categurl = `http://makeup-api.herokuapp.com/api/v1/products.json?brand=${selectCateg}&product_type=${selectType}`
   let res = await fetch(categurl);
   let categData = await res.json();
   dVproducts1_cont.innerHTML = null;
   if(categData.length>0)
   showProducts1(categData,dVproducts1_cont)
   else
   dVproducts1_cont.innerHTML = '<h1>No Product Found</h1>';
    }
    catch(err){
        console.log(err);
        dVproducts1_cont.innerHTML = '<h1>No Product Found</h1>';
    }
   
}

