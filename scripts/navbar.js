function navbar() {
  return `
  <div id="user-login-icon-div">
        <span id="open-model"><i class="far fa-user"></i></span>
      </div>
      <div id="modal-container">
      <div id="modal">
        <div class="form-div" id="log-in-form-div">
          <label for="uname"><b>Username:</b></label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
            id="uname"
          />
          <label for="psw"><b>Password:</b></label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
            id="psw"
          />
          <button id="logInUser">Login</button>

          <div><p>New User? <span id="register-link">Register here</span></p></div>
        </div>
        <div class = "form-div" id="sign-up-form-div">
        <label for="sname"><b>Username:</b></label>
<input
  type="text"
  placeholder="Enter Username"
  name="sname"
  required
  id="sname"
/>
<label for="smobile"><b>Mobile No:</b></label>
<input
  type="number"
  placeholder="Enter Mobile No"
  name="smobile"
  id="smobile"
  required
/>
<label for="address"><b>Address:</b></label>
<input
  type="text"
  placeholder="Address"
  name="address"
  id="address"
  required
/>
<label for="pin"><b>Pin Code:</b></label>
<input
  type="number"
  placeholder="Pin Code"
  name="Pin Code"
  id="pin"
  required
/>

<label for="spsw"><b>Password:</b></label>
<input
  type="password"
  placeholder="Enter Password"
  name="spsw"
  id="spsw"
  required
/>
<button id="signUpUser">Sign Up</button>

<div><p>Already a User? <span id="login-link">Log in here</span></p></div>
        </div>
        <i class="far fa-times-circle" id="closeModel"></i>
      </div>
    </div>
  <div id="dr-left-menu">
    <div class="dr-hamburger-div">
      <span"><i class="fas fa-bars"></i></span>
    </div>
    <div class="dr-left-menu-div">
      <ul>
        <li>
          <a href="makeup.html">Make Up</a>
          <div>
            <ul>
               <li><a href="bridalmakeup.html">Bridal Makeup</a></li>
              <li><a href="calebrity.html">Celebrity Makeup</a></li>
              <li><a href="eyemakeup.html">Eye Make up</a></li>
              <li><a href="face.html">Face Makeup</a></li>
              <li><a href="lipmakeup.html">Lip Make up</a></li>
              <li><a href="makeupidea.html">Makeup Ideas</a></li>
              <li><a href="mehndi.html">Mehandi Designs</a></li>
              <li><a href="nailart.html">Nail Art</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="">Hair Care</a>
          <div>
            <ul>
              <li><a href="">Bascic Hair Care</a></li>
              <li><a href="">Dandruff</a></li>
              <li><a href="">Dry Hair Care</a></li>
              <li><a href="">Hair Care Ideas</a></li>
              <li><a href="">Hair Care Solutions</a></li>
              <li><a href="">Hair Colour</a></li>
              <li><a href="">Hair Fall</a></li>
            </ul>
          </div>
        </li>
        <li>
          <a href="">Skin Care</a>
          <div></div>
        </li>
        <li>
          <a href="">Hair Styles</a>
          <div></div>
        </li>
        <li>
          <a href="">Health & Wellness</a>
          <div></div>
        </li>
        <li>
          <a href="">News</a>
          <div></div>
        </li>
        <li>
          <a href="">Tools</a>
          <div></div>
        </li>
        <li>
          <a href="">Products</a>
          <div></div>
        </li>
        <li>
          <a href="">About us</a>
          <div></div>
        </li>
      </ul>
    </div>
  </div>
  <div class="dr-top-nav">
    <div>
      <img
        src="https://cdn2.stylecraze.com/wp-content/themes/buddyboss-child/images/sc-logo.png"
        alt="stylecraze logo text"
      />
    </div>
    <div class="dr-nav-search">
      <input type="text" placeholder="Search" />
      <span><i class="fas fa-search"></i></span>
    </div>
  </div>
  <nav>
    <div class="dr-container">
      <ul>
        <li>
          <a id = "nav-first-link"
            href="makeup.html"
            >Make up</a
          >
          <div class="dr-flex dr-dropdown-div" id="makeup-dropdown">
            <ul class="dr-flex">
              <li>
                <a href="bridalmakeup.html" id = "bridal-makeup">Bridal Makeup</a>
              </li>
              <li>
                <a href="celebrity.html" id="celebrity-makeup">Celebrity Makeup</a>
              </li>
              <li><a href="eyemakeup.html" id="eye-makeup">Eye Make up</a></li>
              <li><a href="face.html" id="face-make-up">Face Makeup</a></li>
              <li><a href="lipmakeup.html">Lip Make up</a></li>
              <li><a href="makeupidea.html">Makeup Ideas</a></li>
              <li><a href="mehndi.html">Mehandi Designs</a></li>
              <li><a href="nailart.html">Nail Art</a></li>
            </ul>
            <ul class="dr-flex" id="make-up-submenu">
              <li>
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
              </li>
            </ul>
            <a href="" class="findmore">Find More</a>
          </div>
        </li>
        <li>
          <a
            href="haircare.html"
            id = "second-nav-link"
            >hair care</a
          >
          <div class="dr-flex dr-dropdown-div" id="haircare-dropdown">
            <ul class="dr-flex">
              <li><a href="">Basic Hair Care</a></li>
              <li><a href="">Dandruff</a></li>
              <li><a href="">Dry Hair Care</a></li>
              <li><a href="">Hair Care Ideas</a></li>
              <li><a href="">Hair Care Solutions</a></li>
              <li><a href="">Hair Colour</a></li>
              <li><a href="">Hair Fall</a></li>
              <li><a href="">Hair Growth</a></li>
            </ul>
            <ul class="dr-flex">
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/Top-5-Hair-Products-For-Indian-Hair-1-267x300.jpg"
                    alt=""
                  /><span
                    >5 Best Hair Products For Indian Hair To Try In
                    2021</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/03/Hair-Straightening-Vs--Hair-Smoothing-Differences-Side-Effects-And-Maintenance-Tips--267x300.jpg"
                    alt=""
                  /><span
                    >Hair Straightening Vs. Hair Smoothing: Differences,
                    Side Effects, And..</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2015/02/Best-Shower-Tips-To-Keep-Your-Hair-Healthy-267x300.jpg"
                    alt=""
                  /><span
                    >Best Shower Tips To Keep Your Hair Healthy</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/How-To-Pamper-Your-Hair-With-A-Hot-Oil-Massage-To-Prevent-Hair-Loss-267x300.jpg"
                    alt=""
                  /><span
                    >How To Pamper Your Hair With A Hot Oil Massage To
                    Prevent Hair Loss</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/3159_How-To-Take-Proper-Care-Of-Your-Hair_iS-267x300.jpg"
                    alt=""
                  /><span>How To Take Proper Care Of Your Hair?</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/How-To-Use-Amla-For-Hair-Growth-4-267x300.jpg"
                    alt=""
                  /><span>How To Use Amla For Hair Growth</span></a
                >
              </li>
            </ul>
            <a href="" class="findmore">Find More</a>
          </div>
        </li>
        <li>
          <a
            href="skincare.html"
            id="third-nav-link"
            >skin care</a
          >
          <div class="dr-flex dr-dropdown-div" id="skincare-dropdown">
            <ul class="dr-flex">
              <li><a href="">Acne</a></li>
              <li><a href="">Anti Ageing</a></li>
              <li><a href="">Beauty Secrets</a></li>
              <li><a href="">Dry Skin</a></li>
              <li><a href="">Face Care Tips</a></li>
              <li><a href="">Homemade Tips</a></li>
              <li><a href="">Oily Skin</a></li>
              <li><a href="">Perfumes</a></li>
              <li><a href="">Skin Care Ideas</a></li>       
            </ul>
            <ul class="dr-flex">
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/01/Top-10-Acne-Control-Products-267x300.jpg.webp"
                    alt=""
                  /><span>Top 5 VLCC Bridal Makeup Packages</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2012/12/1639-Bust-Away-Pimples-6-Drugstore-Face-Packs-For-Pimple-Prone-Skin--267x300.jpg.webp"
                    alt=""
                  /><span
                    >How To Apply Bridal Eye Makeup Perfectly?</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/10/How-To-Get-Rid-Of-Heat-Pimples-Naturally-1-267x300.jpg.webp"
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
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2018/11/15-Best-Pimple-Patches-For-Pimple-Free-Spotless-Skin-Banner-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Bridal Makeup Packages In India</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2013/12/40-Top-10-Topical-Medicinal-Creams-To-Treat-Your-Pimples_237515920-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Lakme Bridal Salon Packages</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/11/7-Simple-Ways-To-Use-Banana-Peel-To-Treat-Acne-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Best Bridal Makeup Kits Available In India - Our Top
                    10</span
                  ></a
                >
              </li>
            </ul>
            <a href="" class="findmore">Find More</a>
          </div>
        </li>
        <li>
          <a
            href="hairstyles.html"
            id="fourth-nav-link"
            >hair styles</a
          >
          <div class="dr-flex dr-dropdown-div" id="hairstyle-dropdown">
            <ul class="dr-flex">
              <li><a href="">Bridal Makeup</a></li>
              <li><a href="">Celebrity Makeup</a></li>
              <li><a href="">Eye Make up</a></li>
              <li><a href="">Face Makeup</a></li>
              <li><a href="">Lip Make up</a></li>
              <li><a href="">Makeup Ideas</a></li>
              <li><a href="">Mehandi Designs</a></li>
              <li><a href="">Nail Art</a></li>
            </ul>
            <ul class="dr-flex">
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2015/03/10-Stylish-Bob-Hairstyles-For-Oval-Faces-1-267x300.jpg.webp"
                    alt=""
                  /><span>Top 5 VLCC Bridal Makeup Packages</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/02/Top-10-Japanese-Short-Bob-Hairstyles-You-Should-Try-267x300.jpg.webp"
                    alt=""
                  /><span
                    >How To Apply Bridal Eye Makeup Perfectly?</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/Latest-And-Most-Popular-Messy-Bob-Hairstyles-For-Women-267x300.jpg.webp"
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
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/50-Most-Popular-Bob-Shaped-Hairstyles-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Bridal Makeup Packages In India</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/01/20-Stunning-Bob-Haircuts-With-Bangs-1-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Lakme Bridal Salon Packages</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2015/05/Chic-Feathered-Hairstyles-Banner-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Best Bridal Makeup Kits Available In India - Our Top
                    10</span
                  ></a
                >
              </li>
            </ul>
            <a href="" class="findmore">Find More</a>
          </div>
        </li>
        <li>
          <a
          id="fifth-nav-link"
            href="health.html"
            >health and wellness</a
          >
          <div class="dr-flex dr-dropdown-div" id="health-dropdown">
            <ul class="dr-flex">
              <li><a href="bridalmakeup.html">Bridal Makeup</a></li>
              <li><a href="">Celebrity Makeup</a></li>
              <li><a href="eyemakeup.html">Eye Make up</a></li>
              <li><a href="">Face Makeup</a></li>
              <li><a href="">Lip Make up</a></li>
              <li><a href="makeupidea.html">Makeup Ideas</a></li>
              <li><a href="mehndi.html">Mehandi Designs</a></li>
              <li><a href="nailart.html">Nail Art</a></li>
            </ul>
            <ul class="dr-flex">
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2020/08/11-Best-Exercise-Bikes-For-Seniors1-267x300.jpg.webp"
                    alt=""
                  /><span>Top 5 VLCC Bridal Makeup Packages</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2021/08/11-Best-Tennis-Shoes-For-Women-With-Wide-Feet--2021-267x300.jpg.webp"
                    alt=""
                  /><span
                    >How To Apply Bridal Eye Makeup Perfectly?</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/Yoga-And-Exercises-To-Relieve-Constipation-1-1-267x300.jpg.webp"
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
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2020/09/10-Best-Comfortable-Shoes-For-Jumping-Rope-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Bridal Makeup Packages In India</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2014/03/9-Best-Ayurvedic-Products-For-Increasing-Height-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Lakme Bridal Salon Packages</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2020/06/11-Best-Fitness-Trackers-For-Kids-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Best Bridal Makeup Kits Available In India - Our Top
                    10</span
                  ></a
                >
              </li>
            </ul>
            <a href="" class="findmore">Find More</a>
          </div>
        </li>
        <li>
          <a
          id="sixth-nav-link"
            href="news.html"
            >news</a
          >
          <div class="dr-flex dr-dropdown-div" id="news-dropdown">
            <ul class="dr-flex">
              <li><a href="">Bridal Makeup</a></li>
              <li><a href="">Celebrity Makeup</a></li>
              <li><a href="">Eye Make up</a></li>
              <li><a href="">Face Makeup</a></li>
              <li><a href="">Lip Make up</a></li>
              <li><a href="">Makeup Ideas</a></li>
              <li><a href="">Mehandi Designs</a></li>
              <li><a href="">Nail Art</a></li>
            </ul>
            <ul class="dr-flex">
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/hayu-banner-267x300.jpg.webp"
                    alt=""
                  /><span>Top 5 VLCC Bridal Makeup Packages</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/Himalaya-banner-267x300.jpg.webp"
                    alt=""
                  /><span
                    >How To Apply Bridal Eye Makeup Perfectly?</span
                  ></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/5-Travel-Essentials-Every-Woman-Must-Carry-267x300.jpg.webp"
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
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/Himalaya_article_banner_final-1-1-2-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Bridal Makeup Packages In India</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2020/02/Use-Himalaya-Fresh-Start-Oil-Clear-Face-Wash-Every-Morning-To-Get-Rid-Of-Your-Oily-Skin-1-267x300.jpg.webp"
                    alt=""
                  /><span>Top 10 Lakme Bridal Salon Packages</span></a
                >
              </li>
              <li>
                <a href=""
                  ><img
                    src="https://cdn2.stylecraze.com/wp-content/uploads/2021/12/Himalaya_article_banner_final-1-1-1-267x300.jpg.webp"
                    alt=""
                  /><span
                    >Best Bridal Makeup Kits Available In India - Our Top
                    10</span
                  ></a
                >
              </li>
            </ul>
            <a href="" class="findmore">Find More</a>
          </div>
        </li>
        <li>
          <a href="tools.html">tools</a>
        </li>
        <li><a href="products.html">products</a></li>
        <li>
          <a
            href="about-us.html"
            id="last-nav-link"
            >about us</a
          >
          <div class="about-us-div" id="about-us-dropdown">
            <ul class="dr-about-us">
              <li><a href="team.html">Our team</a></li>
              <li><a href="about-us.html">Editorial policy</a></li>
              <li><a href="about-us.html">medical review board</a></li>
              <li><a href="about-us.html">expert panel</a></li>
              <li><a href="about-us.html">contact us</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </nav>`;
}

export default navbar;
