import React, { useState } from "react";
import Spinner from "../../Components/spinner/Spinner";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CategoriesArea from "../../Components/Categories area/CategoriesArea";
import { Link } from "react-router-dom";
import "./product-details.css";
import { LuMinus, LuPlus } from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";
import { FaFacebookF, FaLinkedinIn, FaStar } from "react-icons/fa";
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
                    <p
                      className="number-decrement"
                      onClick={() => setCount(Math.max(count - 1, 0))}
                    >
                      <LuMinus />
                    </p>
                    <span>{count}</span>
                    <p
                      className="number-increment"
                      onClick={() => setCount(count + 1)}
                    >
                      <LuPlus />
                    </p>
                  </div>
                  <div className="add_to_cart">
                    <Link className=" hero_btn">Add To Cart</Link>
                    <IoHeartOutline />
                  </div>
                  <div className="social_icon">
                    <FaFacebookF class="fb" />
                    <TiSocialTwitter class="fw" />
                    <FaLinkedinIn class="li" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="product_description_area">
        <div className="container">
          <ul className="nav nav-tabs">
            <li className="nav-item">
              <Link className="nav-link">Description</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Specification</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link">Comments</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link  active show">Reviews</Link>
            </li>
          </ul>
          <div className="tab-content">
            <div className="tab-pane fade active show">
              <div class="row">
                <div className="col-lg-6">
                  <div className="row total_rate">
                    <div className="col-6">
                      <div className="box_total">
                        <h5>Overall</h5>
                        <h4>4.0</h4>
                        <h6>(03 Reviews)</h6>{" "}
                      </div>
                    </div>
                    <div className="col-6">
                      <div className="rating_list">
                        <h3>Based on 3 Reviews</h3>
                        <ul class="list">
                          <li>
                            <Link>
                              5 Star
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              01
                            </Link>
                          </li>
                          <li>
                            <Link>
                              4 Star
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              01
                            </Link>
                          </li>
                          <li>
                            <Link>
                              3 Star
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              01
                            </Link>
                          </li>
                          <li>
                            <Link>
                              2 Star
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              01
                            </Link>
                          </li>
                          <li>
                            <Link>
                              1 Star
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              <FaStar />
                              01
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="review_list">
                    <div className="review_item">
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/review-1.png"
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <h4>Blake Ruiz</h4>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />


                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>{" "}
                    </div>
                    <div className="review_item">
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/review-2.png"
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <h4>Blake Ruiz</h4>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />


                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>{" "}
                    </div>
                    <div className="review_item">
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/review-3.png"
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <h4>Blake Ruiz</h4>
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />
                          <FaStar />


                        </div>
                      </div>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit, sed do eiusmod tempor incididunt ut labore et
                        dolore magna aliqua. Ut enim ad minim veniam, quis
                        nostrud exercitation ullamco laboris nisi ut aliquip ex
                        ea commodo
                      </p>{" "}
                    </div>
                  
                  
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="review_box">
                    <h4>Add a Review</h4>
                    <p>Your Rating:</p>
                    <ul class="list">
                      <li>
                        <Link>
                          <FaStar />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaStar />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaStar />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaStar />
                        </Link>
                      </li>
                      <li>
                        <Link>
                          <FaStar />
                        </Link>
                      </li>
                    </ul>
                    <p>Outstanding</p>
                    <form
                      class="row contact_form"
                      action="contact_process.php"
                      method="post"
                      novalidate="novalidate"
                    >
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            placeholder="Your Full name"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="email"
                            class="form-control"
                            name="name"
                            placeholder="Email Address"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <input
                            type="text"
                            class="form-control"
                            name="name"
                            placeholder="Phone Number"
                          />
                        </div>
                      </div>
                      <div className="col-md-12">
                        <div className="form-group">
                          <textarea
                            class="form-control"
                            name="message"
                            rows="1"
                            placeholder="Review"
                          ></textarea>
                        </div>
                      </div>
                      <div className="col-md-12 text-right">
                      <Link className=" hero_btn">Submit NOw</Link>
                      </div>
                    </form>
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
