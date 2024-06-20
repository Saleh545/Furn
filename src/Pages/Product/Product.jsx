import React from "react";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CategoriesArea from "../../Components/Categories area/CategoriesArea";
import { Link } from "react-router-dom";
import "./product.css"
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import Spinner from '../../Components/spinner/Spinner'


const Product = () => {
  return (
    <div>
            <Spinner/>

      <Header />


      <div className="single-slider hero-overly2  slider-height2 d-flex align-items-center slider-bg2 slick-slide slick-current slick-active">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-8">
              <div className="hero__caption hero__caption2">
                <h1  data-aos="fade-up" data-delay="6s"  >Products</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home </Link></li>
                    <li className="breadcrumb-item"><Link>Products</Link></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <PopularProducts/>
      <CategoriesArea/>
      <Footer/>
    </div>
  );
};

export default Product;
