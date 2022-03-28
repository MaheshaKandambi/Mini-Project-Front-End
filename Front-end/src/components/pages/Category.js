import React from "react";
import '../babyProducts/Category.css';
import Navbar from "../Navbar";
import Footer from "../Footer";


function Category() {
    return (
      <>
         <Navbar /><br/><br/>
        <div id="carouselExampleCaptions" className="my-carousel carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="images/MainBanner/Category-Slideshow_1.jpg" className="d-block w-100" height="100%" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Gentle & Safe Diapers</h5>
              <p>Gentle on baby skin U-shaped absorbent core to protect toddlers from leaks during active play moments</p>
              <div className="slider-btn">
                  <button className="btn btn-1">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src="images/MainBanner/Category-Slideshow_2.jpg" className="d-block w-100" height="100%" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Best Toys for Babies</h5>
              <p>We deals in wide range of toys, soft toys, Musical toys, Learning and educational toys </p>
              <div className="slider-btn">
                  <button className="btn btn-1">Shop Now</button>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <img src='images/MainBanner/Girls_Mobile.jpg' className="d-block w-100" height="100%" alt="..."/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Clothing & Shoes</h5>
              <p>Highest quality clothes and shoes for newborn, infant and toddlers at affordable price</p>
              <div className="slider-btn">
                  <button className="btn btn-1">Shop Now</button>
              </div>
            </div>
          </div>
         
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
       
     
<section className = "icons-container">
    <div className="icon">
        <img src = 'images/Icons/icon-1.png' alt=""/>
        <div className="info">
            <h3>Free Delivery</h3>
            <span>On all orders</span>
        </div>
    </div>


    <div className="icon">
        <img src = 'images/Icons/icon-2.png' alt=""/>
        <div className="info">
            <h3>10 Days Returns</h3>
            <span>Moneyback Guarantee</span>
        </div>
    </div>

    <div className="icon">
        <img src ='images/Icons/icon-3.png' alt=""/>
        <div className="info">
            <h3>Offers & Gifts</h3>
            <span>On all orders</span>
        </div>
    </div>

    <div className="icon">
        <img src = 'images/Icons/icon-4.png' alt=""/>
        <div className="info">
            <h3>Secure Payments</h3>
            <span>For all orders</span>
        </div>
    </div>

</section>


<h3 className="main-head2">All Categories</h3>
 <section className="categories">
     <div className="container-fluid">
         <div className="row">
             <div className="col-lg-6 p-0">
                 <div className="category_item category_large_item">
                     <img src='images/Products/Category1.jpg' alt="" className="img-fluid"/>
                     <div className="categories_text">
                                <h1>Baby Girl's Fashion</h1>
                                <p>358 items</p>
                                <a href="/baby_girl">Buy Now</a>
                     </div>
                 </div>
             </div>
            
            <div className="col-lg-6">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                        <div className="category_item">
                            <img src='images/Products/Category2.jpg' alt="" className="img-fluid"/> 
                            <div className="categories_text">
                                <h4>Baby Boy's Fashion</h4>
                                <p>358 items</p>
                                <a href="/baby_boy">Buy Now</a>
                            </div>
                        </div>   
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                        <div className="category_item">
                            <img src='images/Products/Category3.jpg' alt="" className="img-fluid"/> 
                            <div className="categories_text">
                                <h4>Diapering</h4>
                                <p>358 items</p>
                                <a href="/diapering">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                        <div className="category_item">
                            <img src='images/Products/Category4.jpg' alt="" className="img-fluid"/> 
                            <div className="categories_text">
                                <h4>Bath & Skin Care</h4>
                                <p>358 items</p>
                                <a href="/bath-And-SkinCares">Buy Now</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 p-0">
                        <div className="category_item">
                            <img src='images/Products/Category5.jpg' alt="" className="img-fluid"/> 
                            <div className="categories_text">
                                <h4>Toys</h4>
                                <p>358 items</p>
                                <a href="toys">Buy Now</a>
                            </div>
                        </div>
                    </div>
                </div>   
            </div>
         </div>
     </div>

 </section>


 <section className="sub-banner-product">
<div class="sub-banner-image">
  <div class="sub-banner-text">
    <h1>Find out perfect things for your baby...</h1>
    <h2>Happy Shopping !</h2><br/>
  </div>
</div>
</section>


<section className="saleProduct">
<h3 className="main-head2">On Sale Products</h3>
<div class="row product">
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img class="img-1" src='images/Products/Product1.png'/>
                    <img class="img-2" src='images/Products/Product2.png'/>
                </a>
                <span class="product-hot-label">-30%</span>
                <ul class="product-links">
                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
                <a href="#" class="product-view"><i class="fa fa-search"></i></a>
            </div>
            <div class="product-content">
                <ul class="rating">
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star disable"></li>
                    <li class="disable">(1 reviews)</li>
                </ul>
                <h3 class="title"><a href="#">MummaSmile Elephant with Monkey <br/>Stuffed Soft Toy Grey</a></h3>
                <span class="price">LKR 1820&nbsp;&nbsp;&nbsp;</span><p className="price-muted">LKR2600</p>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img class="img-1" src='images/Products/Product3.png'/>
                    <img class="img-2" src='images/Products/Product4.png'/>
                </a>
                <span class="product-hot-label">-50%</span>
                <ul class="product-links">
                    {/* <li><a href="#"><i class="fa fa-heart"></i></a></li>
                    <li><a href="#"><i class="fa fa-random"></i></a></li> */}
                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
                <a href="#" class="product-view"><i class="fa fa-search"></i></a>
            </div>
            <div class="product-content">
                <ul class="rating">
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star disable"></li>
                    <li class="fas fa-star disable"></li>
                    <li class="disable">(3 reviews)</li>
                </ul>
                <h3 class="title"><a href="#">Zyamalox Transparent Bus</a></h3>
                <span class="price">LKR 1175&nbsp;&nbsp;&nbsp;</span><p className="price-muted">LKR2350</p>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img class="img-1" src='images/Products/Product5.png'/>
                    <img class="img-2" src='images/Products/Product6.png'/>
                </a>
                <span class="product-hot-label">-30%</span>
                <ul class="product-links">
                    {/* <li><a href="#"><i class="fa fa-heart"></i></a></li>
                    <li><a href="#"><i class="fa fa-random"></i></a></li> */}
                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
                <a href="#" class="product-view"><i class="fa fa-search"></i></a>
            </div>
            <div class="product-content">
                <ul class="rating">
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star disable"></li>
                    <li class="fas fa-star disable"></li>
                    <li class="disable">(3 reviews)</li>
                </ul>
                <h3 class="title"><a href="#">FunBlast Cartoon Musical Mobile Phone Toy</a></h3>
                <span class="price">LKR 1070&nbsp;&nbsp;&nbsp;</span><p className="price-muted">LKR1400</p>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img class="img-1" src='images/Products/Product7.png'/>
                    <img class="img-2" src='images/Products/Product8.png'/>
                </a>
                <span class="product-hot-label">-30%</span>
                <ul class="product-links">
                    {/* <li><a href="#"><i class="fa fa-heart"></i></a></li>
                    <li><a href="#"><i class="fa fa-random"></i></a></li> */}
                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
                <a href="#" class="product-view"><i class="fa fa-search"></i></a>
            </div>
            <div class="product-content">
                <ul class="rating">
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star disable"></li>
                    <li class="fas fa-star disable"></li>
                    <li class="disable">(9 reviews)</li>
                </ul>
                <h3 class="title"><a href="#">Zyamalox Cartoon Tricycle Stunt Toy</a></h3>
                <span class="price">LKR 1250&nbsp;&nbsp;&nbsp;</span><p className="price-muted">LKR1800</p>
            </div>
        </div>
    </div>
</div>

<div class="row product2">
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img class="img-1" src='images/Products/Product9.png'/>
                    <img class="img-2" src='images/Products/Product10.png'/>
                </a>
                <span class="product-hot-label">-40%</span>
                <ul class="product-links">
                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
                <a href="#" class="product-view"><i class="fa fa-search"></i></a>
            </div>
            <div class="product-content">
                <ul class="rating">
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star disable"></li>
                    <li class="disable">(4 reviews)</li>
                </ul>
                <h3 class="title"><a href="#">Babyhug Baby Penguin Soft Toy Blue</a></h3>
                <span class="price">LKR 2100&nbsp;&nbsp;&nbsp;</span><p className="price-muted">LKR3500</p>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img class="img-1" src='images/Products/Product11.png'/>
                    <img class="img-2" src='images/Products/Product12.png'/>
                </a>
                <span class="product-hot-label">-30%</span>
                <ul class="product-links">
                    {/* <li><a href="#"><i class="fa fa-heart"></i></a></li>
                    <li><a href="#"><i class="fa fa-random"></i></a></li> */}
                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
                <a href="#" class="product-view"><i class="fa fa-search"></i></a>
            </div>
            <div class="product-content">
                <ul class="rating">
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star disable"></li>
                    <li class="fas fa-star disable"></li>
                    <li class="disable">(12 reviews)</li>
                </ul>
                <h3 class="title"><a href="#">Ratnas Shape Sorter Ball Multi Color</a></h3>
                <span class="price">LKR 700&nbsp;&nbsp;&nbsp;</span><p className="price-muted">LKR1000</p>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img class="img-1" src='images/Products/Product13.png'/>
                    <img class="img-2" src='images/Products/Product14.png'/>
                </a>
                <span class="product-hot-label">-10%</span>
                <ul class="product-links">
                    {/* <li><a href="#"><i class="fa fa-heart"></i></a></li>
                    <li><a href="#"><i class="fa fa-random"></i></a></li> */}
                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
                <a href="#" class="product-view"><i class="fa fa-search"></i></a>
            </div>
            <div class="product-content">
                <ul class="rating">
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star disable"></li>
                    <li class="fas fa-star disable"></li>
                    <li class="disable">(6 reviews)</li>
                </ul>
                <h3 class="title"><a href="#">Enorme Alphabets And Numbers Puzzle <br/> Foam Mat Multicolour</a></h3>
                <span class="price">LKR 855&nbsp;&nbsp;&nbsp;</span><p className="price-muted">LKR950</p>
            </div>
        </div>
    </div>
    <div class="col-md-3 col-sm-6">
        <div class="product-grid">
            <div class="product-image">
                <a href="#" class="image">
                    <img class="img-1" src='images/Products/Product15.png'/>
                    <img class="img-2" src='images/Products/Product16.png'/>
                </a>
                <span class="product-hot-label">-30%</span>
                <ul class="product-links">
                    {/* <li><a href="#"><i class="fa fa-heart"></i></a></li>
                    <li><a href="#"><i class="fa fa-random"></i></a></li> */}
                    <li><a href="#"><i class="fa fa-shopping-cart"></i></a></li>
                </ul>
                <a href="#" class="product-view"><i class="fa fa-search"></i></a>
            </div>
            <div class="product-content">
                <ul class="rating">
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star"></li>
                    <li class="fas fa-star disable"></li>
                    <li class="fas fa-star disable"></li>
                    <li class="disable">(8 reviews)</li>
                </ul>
                <h3 class="title"><a href="#">Sanjary 5 Layer Roll Ball Drop and <br/>Roll Swirl Tower </a></h3>
                <span class="price">LKR 890&nbsp;&nbsp;&nbsp;</span><p className="price-muted">LKR1200</p>
            </div>
        </div>
    </div>
</div>

</section>




      <Footer/>
      </>
      
    );
}

export default Category;