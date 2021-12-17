//Show Product

async function showProduct(data,location) {
    let i=0, Addids=[];   
    console.log(data);
    data.forEach(el => {
        if(i <12)
        {
          Addids.push(el.id)  
        let prodDiv = document.createElement("div");
        let img = document.createElement("img");
        img.src = el.prodUrl;
        let category = document.createElement("h2");
        let categ = el.category;
        category.innerText = `${categ}`
        category.setAttribute("class","dVproduct_categ")
        let title = document.createElement("a");
        title.innerText = el.title;
        title.setAttribute("class","dVproduct_title")

        let desc = document.createElement("h3");
        desc.innerText = el.desc;
        desc.setAttribute("class","dVproduct_desc")

        let readMore = document.createElement("a");
        readMore.innerText = "GO TO SHOP"
        readMore.href="products1.html"
        readMore.setAttribute("class","dVproduct_readMore")

        prodDiv.append(img,category,title,desc,readMore);
        location.append(prodDiv)
        i++;
        }
    });
    console.log(`AddId's`,Addids);
    localStorage.setItem("ids",JSON.stringify(Addids))
}

export default showProduct