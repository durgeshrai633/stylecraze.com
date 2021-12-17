async function showProducts1(data, location)
{
   console.log(data);
   let cartItms = [];
   let i=0;
    data.forEach(el => {
            if(i <= 28)
            {
            let makeupDiv = document.createElement("div");
            
            let img = document.createElement("img");
            
            img.src = el.image_link;
            img.addEventListener("click",function goToCart(){
                localStorage.setItem("iData",JSON.stringify(el))
                window.location.href="item.html";
            });
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
                    // console.log(shadeArr[sh].hex_value,`shade`);
                    shades.append(shade)
                }
            }
            
            let wish_buyDiv = document.createElement("div");
            wish_buyDiv.setAttribute("id","wish_buyDiv")
            let heart = document.createElement("button");
            heart.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 23 20"><title>Heart icon</title><path class="heart-icon-path" fill="#fff" stroke="currentColor" d="M11.4967297,19.0021565 C12.1501607,18.4744665 15.7313591,16.1461023 16.6556949,15.4660553 C20.4639993,12.6642314 22.5,9.83806845 22.500204,6.31427989 C22.4080534,3.08900922 19.7336922,0.5 16.5,0.5 C14.6798666,0.5 13.0132876,1.30878098 11.8904344,2.71234752 L11.5,3.20039053 L11.1095656,2.71234752 C9.98671236,1.30878098 8.32013337,0.5 6.5,0.5 C3.16873226,0.5 0.5,3.08355995 0.5,6.3 C0.5,9.87466924 2.55294628,12.7216506 6.38828771,15.5301224 C7.34346545,16.229562 10.7334347,18.4195137 11.4967297,19.0021565 Z"></path></svg>'
            
            heart.setAttribute("id","dVheart")
            let buyBtn = document.createElement("button")
            buyBtn.innerText = `Buy Now`;
            buyBtn.setAttribute("id","dVbuyBtn");
            buyBtn.addEventListener("click",function goToCart(){
                cartItms = JSON.parse(localStorage.getItem("cartItm")) || []
                cartItms.push(el)
                localStorage.setItem("cartItm",JSON.stringify(cartItms))
                window.location.href="cart.html";
            });
            wish_buyDiv.append(heart,buyBtn)

            makeupDiv.append(img,name,price,starsDiv,shades,wish_buyDiv)
            location.append(makeupDiv)
            i++; 
          } 
    });

}


export default showProducts1
