import React, { useState } from "react";
import Spinner from "../../Components/spinner/Spinner";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CategoriesArea from "../../Components/Categories area/CategoriesArea";
import { Link } from "react-router-dom";
import "./product-details.css";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TiSocialTwitter } from "react-icons/ti";

const ProductDetails = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <Spinner />
      <Header />
      <div className="single-slider hero-overly2 slider-height2 d-flex align-items-center slider-bg2 slick-slide slick-current slick-active">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-8">
              <div className="hero__caption hero__caption2">
                <h1 data-aos="fade-up" data-delay="6s">
                  Product details{" "}
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/card">Product details</Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product_image_area section-padding40">
        <div className="container">
          <div className="row s_product_inner">
            <div className="col-lg-5">
              <div className="product_slider_img">
                <div className="big-img">
                  <img
                    src="https://preview.colorlib.com/theme/furn/assets/img/gallery/product-details1.png"
                    alt=""
                  />
                </div>
                <div className="lSPager lSGallery">
                  <ul className="lSPager lSGallery">
                    <li>
                      {" "}
                      <img
                        src="https://preview.colorlib.com/theme/furn/assets/img/gallery/product-details1.png"
                        alt=""
                      />
                    </li>
                    <li>
                      {" "}
                      <img
                        src="https://preview.colorlib.com/theme/furn/assets/img/gallery/product-details2.png"
                        alt=""
                      />
                    </li>
                    <li>
                      {" "}
                      <img
                        src="https://preview.colorlib.com/theme/furn/assets/img/gallery/product-details3.png"
                        alt=""
                      />
                    </li>
                    <li>
                      {" "}
                      <img
                        src="https://preview.colorlib.com/theme/furn/assets/img/gallery/product-details4.png"
                        alt=""
                      />
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="s_product_text">
                <h3>Faded SkyBlu Denim Jeans</h3>
                <h2>$149.99</h2>
                <ul className="list">
                  <li>
                    <Link>
                      <span>Category</span> : Household
                    </Link>
                  </li>
                  <li>
                    <Link>
                      <span>Availibility</span> : In Stock
                    </Link>
                  </li>
                </ul>
                <p>
                  Mill Oil is an innovative oil filled radiator with the most
                  modern technology. If you are looking for something that can
                  make your interior look awesome, and at the same time.
                </p>
                <div className="card_area">
                  <div className="product_count ">
                    <p className="number-decrement"onClick={() => setCount(Math.max(count - 1, 0))}><LuMinus /></p>
                    <span>{count}</span>
                    <p className="number-increment"onClick={() => setCount(count + 1)}><LuPlus /></p>
                  </div>
                  <div className="add_to_cart">
                  <Link className=" hero_btn">Add To Cart</Link>
                  <IoHeartOutline />
                  </div>
                  <div className="social_icon">
                  <FaFacebookF  class="fb"/>
                  <TiSocialTwitter class="fw"/>
                  <FaLinkedinIn class="li"/>



                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> 
      </div>

      <CategoriesArea />
      <Footer />
    </div>
  );
};

export default ProductDetails;
