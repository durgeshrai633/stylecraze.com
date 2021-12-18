import navbar from "./navbar.js";
var header = document.getElementById("dr-header");
header.innerHTML = navbar();
// alert("Ijto navbar");
var makeup = document.getElementById("makeup-dropdown");
var haircare = document.getElementById("haircare-dropdown");
var skincare = document.getElementById("skincare-dropdown");
var hairstyle = document.getElementById("hairstyle-dropdown");
var health = document.getElementById("health-dropdown");
var news = document.getElementById("news-dropdown");
var aboutus = document.getElementById("about-us-dropdown");

// Makeup eventlistener
var navfirstlink = document.getElementById("nav-first-link");
console.log(navfirstlink.textContent);
navfirstlink.addEventListener("mouseover", () => {
  toggleMakeUp(makeup);
});
navfirstlink.addEventListener("mouseout", () => {
  toggleMakeUpOff(makeup);
});

// hair care eventlistener
var secondNavLink = document.getElementById("second-nav-link");
console.log(navfirstlink.textContent);
secondNavLink.addEventListener("mouseover", () => {
  toggleMakeUp(haircare);
});
secondNavLink.addEventListener("mouseout", () => {
  toggleMakeUpOff(haircare);
});

// skin care eventlistener
var thirdNavLink = document.getElementById("third-nav-link");
console.log(navfirstlink.textContent);
thirdNavLink.addEventListener("mouseover", () => {
  toggleMakeUp(skincare);
});
thirdNavLink.addEventListener("mouseout", () => {
  toggleMakeUpOff(skincare);
});

// hairstyle eventlistener
var fourthNavLink = document.getElementById("fourth-nav-link");
console.log(navfirstlink.textContent);
fourthNavLink.addEventListener("mouseover", () => {
  toggleMakeUp(hairstyle);
});
fourthNavLink.addEventListener("mouseout", () => {
  toggleMakeUpOff(hairstyle);
});

// health listener
var fifthNavLink = document.getElementById("fifth-nav-link");
fifthNavLink.addEventListener("mouseover", () => {
  toggleMakeUp(health);
});
fifthNavLink.addEventListener("mouseout", () => {
  toggleMakeUpOff(health);
});

var sixthNavLink = document.getElementById("sixth-nav-link");
sixthNavLink.addEventListener("mouseover", () => {
  toggleMakeUp(news);
});
sixthNavLink.addEventListener("mouseout", () => {
  toggleMakeUpOff(news);
});

// login sign up form area start from here
var registerButton = document.getElementById("register-link");
var loginForm = document.getElementById("log-in-form-div");
var signUpForm = document.getElementById("sign-up-form-div");

registerButton.addEventListener("click", () => {
  loginForm.style.display = "none";
  signUpForm.style.display = "flex";
});

var loginButton = document.getElementById("login-link");

loginButton.addEventListener("click", () => {
  loginForm.style.display = "flex";
  signUpForm.style.display = "none";
});

var modal = document.getElementById("modal-container");
var closeModel = document.getElementById("closeModel");
closeModel.addEventListener("click", () => {
  modal.style.display = "none";
});

var openModal = document.getElementById("open-model");
openModal.addEventListener("click", () => {
  modal.style.display = "flex";
});

// sign up of a user
var users = JSON.parse(localStorage.getItem("users")) || [];

var signUpUserButton = document.getElementById("signUpUser");
signUpUserButton.addEventListener("click", () => {
  var user = {
    username: document.getElementById("sname").value,
    mobile: document.getElementById("smobile").value,
    password: document.getElementById("spsw").value,
  };

  if (user.username == "" || user.mobile == "" || user.password == "") {
    alert("Please enter required details!");
  } else {
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
    alert("You are successfully registered .Please Login Now!");
  modal.style.display = "none";

  }
});


// log in of a user

var logInUserButton = document.getElementById("logInUser");
logInUserButton.addEventListener("click",()=>{
  var username = document.getElementById("uname").value;
  var password = document.getElementById("psw").value;
  console.log(username);
  var flag =false;
  for(var i = 0; i < users.length;i++){
    if(users[i].username == username && users[i].password == password){
      document.getElementById("open-model").innerHTML = `<i class="fas fa-user"></i>`;
      modal.style.display = "none";
      localStorage.setItem("currentUser",username);
      flag = true;
      break;
    }
  }
  if(!flag){
    alert("User Not Registered.Please Do Sign-up ")
  }
})
var currentUser = localStorage.getItem("currentUser");
if(currentUser == null){

}else{
  document.getElementById("open-model").innerHTML = `<i class="fas fa-user"></i>`;
}

// login signup area ends here

var lastNavLink = document.getElementById("last-nav-link");
console.log(navfirstlink.textContent);
lastNavLink.addEventListener("mouseover", () => {
  toggleMakeUp(aboutus);
});
lastNavLink.addEventListener("mouseout", () => {
  toggleMakeUpOff(aboutus);
});

var bridalMakeUp = document.getElementById("bridal-makeup");
bridalMakeUp.addEventListener("mouseover", () => {
  addBridal();
});

var celebritymakeup = document.getElementById("celebrity-makeup");
celebritymakeup.addEventListener("mouseover", () => {
  addCelebrity();
});

var eyemakeup = document.getElementById("eye-makeup");
eyemakeup.addEventListener("mouseover", () => {
  addEye();
});

var facemakeup = document.getElementById("face-make-up");
facemakeup.addEventListener("mouseover", () => {
  addFace();
});

function toggleMakeUp(element) {
  element.style.display = "block";
  element.addEventListener("mouseover", () => {
    element.style.display = "block";
  });
  element.addEventListener("mouseout", () => {
    element.style.display = "none";
  });

  // event.originalTarget.nextElementSibling.onmouseover = () => {
  //   event.originalTarget.nextElementSibling.style.display = "block";
  // };
  // event.originalTarget.nextElementSibling.onmouseout = () => {
  //   event.originalTarget.nextElementSibling.style.display = "none";
  // };
}

function toggleMakeUpOff(element) {
  element.style.display = "none";
}

// adding Make up submenus

// var makeUpSubMenu = document.getElementById("make-up-submenu");

function addCelebrity() {
  var makeUpSubMenu = document.getElementById("make-up-submenu");

  makeUpSubMenu.innerHTML = celebrityHtml();
}

function addBridal() {
  var makeUpSubMenu = document.getElementById("make-up-submenu");

  makeUpSubMenu.innerHTML = bridalHtml();
}

function addEye() {
  var makeUpSubMenu = document.getElementById("make-up-submenu");

  makeUpSubMenu.innerHTML = eyeHtml();
}

function addFace() {
  var makeUpSubMenu = document.getElementById("make-up-submenu");

  makeUpSubMenu.innerHTML = faceHtml();
}

function faceHtml() {
  return `<li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/04/1274-10-Best-Foundations-For-Asian-Skin-Tone-ss-267x300.jpg.webp"
                    alt=""
                  /><span>10 best foundations for asian skin tone</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/08/3197-What-Is-A-Tinted-Moisturizer-And-What-Are-Its-Benefits-267x300.jpg.webp"
                    alt=""
                  />
                  <span>What is A tinted moisturizer and what are its..</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2017/05/1927_Cetaphil-Oily-Skin-Cleanser-Review-267x300.jpg.webp"
                    alt=""
                  /><span
                    >cetaphil oily skin cleanser review</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/1432-How-To-Apply-Compact-Perfectly-267x300.jpg.webp"
                    alt=""
                  /><span
                    >how to apply compact easily</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/How-To-Choose-The-Right-Concealer-%E2%80%93-Tips-On-Shades-And-Formulas-267x300.jpg.webp"
                    alt=""
                  /><span>how to choose the right concealer - tips on shades </span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/How-To-Apply-Foundation-Perfectly-1-267x300.jpg.webp"
                    alt=""
                  /><span>how to apply foundation perfectly</span></a
                >
              </li>`;
}

function eyeHtml() {
  return `<li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2015/04/6-Best-Makeup-Colors-For-Blue-Green-Eyes-1-267x300.jpg.webp"
                    alt=""
                  /><span>6 best makeup colors for blue-green eyes</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/08/Formal-Eye-Makeup-%E2%80%93-A-Step-By-Step-Tutorial-267x300.jpg.webp"
                    alt=""
                  />
                  <span>formal eye makeup - a step by step tutorial</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/02/20-Amazing-Eye-Makeup-Pictures-To-Inspire-You-2-267x300.jpg.webp"
                    alt=""
                  /><span
                    >20 amazing eye makeup pictures to inspire you</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/3204-7-Steps-To-Follow-To-Create-This-Stunning-Arabic-Eye-Makeup-SS-267x300.jpg.webp"
                    alt=""
                  /><span
                    >7 steps to follow to create this stunning arabic eye..</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/2290-Vaseline-The-Best-Eye-Makeup-Remover-267x300.jpg.webp"
                    alt=""
                  /><span>vaseline: the best eye makeup remover</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/02/1905_How-To-Make-Small-Eyes-Look-Bigger-Using-An-Eyeliner-%E2%80%93-Step-By-Step-Tutorial-With-Images-267x300.jpg.webp"
                    alt=""
                  /><span>how to make small eyes look bigger using an eyeliner</span></a
                >
              </li>`;
}

function bridalHtml() {
  return `<li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/46-Top-5-VLCC-Bridal-Makeup-Packages-ss-267x300.jpg.webp"
                    alt=""
                  /><span>Top 5 VLCC Bridal Makeup Packages</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/How-To-Apply-Bridal-Eye-Makeup-Perfectly-1-267x300.jpg"
                    alt=""
                  /><span
                    >How To Apply Bridal Eye Makeup Perfectly?</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/10/Look-Perfect-For-Your-Special-Day-Bridal-Makeup-Tips-For-Dry-Skin-267x300.jpg"
                    alt=""
                  /><span
                    >Look Perfect For Your Special Day – Bridal Makeup Tips
                    For Dry Skin!</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2015/08/1513_Top-10-Bridal-Makeup-Packages-In-India-267x300.jpg"
                    alt=""
                  /><span>Top 10 Bridal Makeup Packages In India</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/750-Top-10-Lakme-Bridal-Salon-Packages-267x300.jpg"
                    alt=""
                  /><span>Top 10 Lakme Bridal Salon Packages</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/09/1300-Best-Bridal-Makeup-Kits-Available-In-India-Our-Top-10-ss-267x300.jpg"
                    alt=""
                  /><span
                    >Best Bridal Makeup Kits Available In India - Our Top
                    10</span
                  ></a
                >
              </li>`;
}

function celebrityHtml() {
  return `<li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/06/2436-Madonna-Without-Makeup-267x300.jpg.webp"
                    alt=""
                  /><span>9 Pictures of Moddanna without makeup</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/2181-Famous-Celebrities-With-Beauty-Marks-267x300.jpg.webp"
                    alt=""
                  /><span
                    >10 famous celebrities with beauty marks</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/Top-15-Sensational-Real-Life-Pictures-of-Sunny-Leone-Without-Makeup-1-267x300.jpg.webp"
                    alt=""
                  /><span
                    >top 15 sensetional real life pictures of sunny leone</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/07/2423-Pictures-Of-Megan-Fox-Without-Makeup-267x300.jpg.webp"
                    alt=""
                  /><span>15 rare pictures of mogan fox without makeup</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/12/184-15-bollywood-stars-without-makeup-267x300.jpg.webp"
                    alt=""
                  /><span>30 bollywood actresses without makeup</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2015/02/2051-Celebrities-With-Tattooed-Eyebrows-267x300.jpg.webp"
                    alt=""
                  /><span
                    >5 celebrities with tatooed eyebrows</span
                  ></a
                >
              </li>`;
}
