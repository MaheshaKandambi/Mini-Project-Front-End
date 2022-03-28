import React, {useState, useEffect} from "react";
import ProductCategoriesBathAndCares from "./ProductCategoriesBathAndCares";
import './BabyProduct.css';
import Navbar from "../Navbar";
import Footer from "../Footer";


const BathAndSkinCare = () => {
        const [data,setData]=useState(ProductCategoriesBathAndCares);
        const filterResult=(catItem)=>{
            const result=ProductCategoriesBathAndCares.filter((curData)=>{
                return curData.category===catItem;
            });
            setData(result);
        }


    return(
        <>
      <Navbar/><br/><br/>

      {/* carousel slider */}
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
      <img src="images/MainBanner/Girls_Mobile.jpg" className="d-block w-100" height="100%" alt="..."/>
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
{/* carousel Slide end */}



         <h3 className="main-head2">Shop by Categories</h3><br></br>

        {/* Size Button starts */}
        <div className="buttons d-flex justify-content-center mb-5 pb-5">
        <button className="btn btn me-2" onClick={()=>setData(ProductCategoriesBathAndCares)}>All</button>
        <button className="btn btn me-2" onClick={()=>filterResult('Bathing Accessories')}>Bathing Accessories</button>
        <button className="btn btn me-2" onClick={()=>filterResult('Soap')}>Soap & Shampoo</button>
        <button className="btn btn me-2" onClick={()=>filterResult('Shampoo & Body Wash')}>Oils & Powders</button>
        <button className="btn btn me-2" onClick={()=>filterResult('Baby cream')}>Baby cream</button>
        </div>
        {/* Size Button ends */}

 
        <section className="saleProduct">
            <div className="row productGirl">
                {data.map((values)=>{
                const {id, name, price, productPicture1, productPicture2, reviews, size}=values;
                   return(
                   <>
                    <div className="col-md-3 col-sm-6" key={id}>
                        <div className="productGirl-grid">
                            <div className="product-image">
                                <a href="#" className="image">
                                <img className="img-1" src={productPicture1}/>
                                <img className="img-2" src={productPicture2}/>
                                </a>
                                   <ul className="product-links">
                                      <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                   </ul>
                                   <a href="#" className="product-view"><i className="fa fa-search"></i></a>
                            </div>
                            <div className="product-content">
                                    <ul className="rating">
                                        <li className="fas fa-star"></li>
                                        <li className="fas fa-star"></li>
                                        <li className="fas fa-star"></li>
                                        <li className="fas fa-star"></li>
                                        <li className="fas fa-star disable"></li>
                                        <li className="disable">{reviews}</li>
                                    </ul>
                                    <h3 className="title"><a href="#">{name}</a></h3>
                                    <div className="price">{price}</div>
                                    <div class="size">{size}</div>
                                    <br/><br></br>
                            </div>
                        </div>
                    </div>
                   </>
                   )
                })}
            </div>
        </section>
     

       <br/><br/><br/><br/>
     <Footer/>

     </>
    );
}

export default BathAndSkinCare;

