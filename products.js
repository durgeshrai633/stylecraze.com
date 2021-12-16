    //import showProduct function 
    import showProduct from "./scripts/showProducts.js";
    let get_data;
    //GET DATA and Display
    let container = document.getElementById("DproductCont")
    async function getProduct() {
      
      let get_product = await fetch(`http://127.0.0.1:5000/api/products`,{
        method: "GET",
        headers:{
          "content-Type": "application/json"
        }
      })
      get_data = await get_product.json();
      console.log(get_data);
      showProduct(get_data,container);
    }
    getProduct();

    //Change a/c to selected category
    var filterData;
    let selectcateg = "Category"
   document.getElementById("Dcateg").addEventListener("change",displayProduct);
  function displayProduct() {

    noMorespan.innerText = null;
      selectcateg = document.getElementById("Dcateg").value;
      console.log(selectcateg);
      container.innerHTML = null;
      if(selectcateg!=="Category")
      {
        filterData = get_data.filter(data =>data.category===selectcateg)
        showProduct(filterData,container)
      }
      else{
        showProduct(get_data,container)
      }
  }

  //when click on load More
  let moreData; var k=11;
  let loadMore = document.getElementById("dVloadMore");
  loadMore.addEventListener("click",loadmore)
  let noMorespan = document.getElementById("dVnowMoredata");
  let clicked = 0;

  let filtIDs = [] 
  function loadmore() {

    if(selectcateg!= "Category")
    {
      let ids= JSON.parse(localStorage.getItem("ids")) || [];
      filtIDs.push(...ids)
      console.log(`filtIDs,83`,filtIDs);
      console.log(`ids,84`,ids);
      moreData = filterData.filter(data => !filtIDs.includes(data.id))
      console.log(`ids: `,ids);
      console.log(`84`,moreData);
    }
    else{
    clicked += 12;
    moreData = get_data.filter(data => data.id >clicked)
    }
    console.log(moreData);
    console.log(`selectCateg`,selectcateg);
    if(moreData.length===0)
    {
     
      noMorespan.textContent = `NO MORE DATA FOUND`
      // alert("No data")
    }
    else
    {
      console.log(`checkMore`,moreData);
    showProduct(moreData,container);
    // alert("Data")
    }
  }