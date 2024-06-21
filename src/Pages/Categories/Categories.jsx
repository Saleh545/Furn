import React, { useState } from "react";
import Spinner from "../../Components/spinner/Spinner";
import { Link } from "react-router-dom";
import Header from "../../Components/Header/Header";
import { IoFilterSharp } from "react-icons/io5";
import { Range, getTrackBackground } from "react-range";
import "./categories.css"; // Stil dosyasını unutmayın
import Footer from "../../Components/Footer/Footer";

const Categories = () => {
  const [values, setValues] = useState([20, 80]);
  const STEP = 1;
  const MIN = 0;
  const MAX = 100;
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
                  Categories{" "}
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/card">Categories</Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="category-area">
        <div className="container">
          <div className="row">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div className="section-tittle mb-50">
                <h2>Shop with us</h2>
                <p>Browse from 230 latest items</p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-3 col-lg-3 col-md-4 ">
              <div className="row">
                <div className="col-12">
                  <div className="small-tittle mb-45">
                    <div className="ion">
                      <IoFilterSharp />
                    </div>
                    <h4>Filter Product</h4>
                  </div>
                </div>
              </div>
              <div className="category-listing mb-50">
                <div className="categories-wrapper">
                  <div className="row">
                    <div className="col-12">
                      <div className="select-categories">
                        <select className="nice-select">
                          <option value>Type</option>
                          <option value>Sofa</option>
                          <option value>Table</option>
                          <option value>Chair</option>
                          <option value>Bed</option>
                          <option value>Lighting</option>
                          <option value>Decor</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="select-categories">
                        <select className="nice-select">
                          <option value>Size</option>
                          <option value>1.5ft</option>
                          <option value>3.2ft</option>
                          <option value>6.1ft</option>
                          <option value>7.8ft</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="select-categories">
                        <select className="nice-select">
                          <option value>Color</option>
                          <option value>White</option>
                          <option value>Green</option>
                          <option value>Blue</option>
                          <option value>Sky Blue</option>
                          <option value>Gray</option>
                          <option value>Decor</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="select-categories">
                        <select className="nice-select">
                          <option value>Price range</option>
                          <option value="$10 to $20">$10 to $20</option>
                          <option value="$20 to $30">$20 to $30</option>
                          <option value="$30 to $40">$30 to $40</option>
                          <option value="$40 to $50">$40 to $50</option>
                          <option value="$50 to $60">$50 to $60</option>
                          <option value="$60 to $70">$60 to $70</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="range-slider mt-50">
                  <div className="small-tittle small-tittle2">
                    <h4>Price Range</h4>
                  </div>
                  <div className="range_item">
                    <Range values={values}step={STEP}min={MIN}max={MAX}onChange={setValues}
                      renderTrack={({ props, children }) => (
                        <div
                          onMouseDown={props.onMouseDown}
                          onTouchStart={props.onTouchStart}
                          style={{
                            ...props.style,
                            height: "36px",
                            display: "flex",
                            width: "100%",
                          }}
                        >
                          <div
                            className="range-line"
                            ref={props.ref}
                            style={{
                              height: "5px",
                              width: "100%",
                              borderRadius: "4px",
                              alignSelf: "center",
                            }}
                          >
                            {children}
                          </div>
                        </div>
                      )}
                      renderThumb={({ props, isDragged }) => (
                        <div className="circle-range"
                          {...props}
                          style={{
                            ...props.style,
                          
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                         
                        </div>
                      )}
                    />
                    <div style={{ marginTop: "20px", fontSize: "24px" }} className="range-price">
                      <span>
                    Price: 

                      </span>
                      <p>

                    {values[0]} to {values[1]}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="select-checkbox mt-30 mb-30">
                  <div className="small-tittle">
                    <h4>Latest Product</h4>
                  </div>
                  <label className="container">
                    Any
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label className="container">
                  Today
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label className="container">
                  Last 2 days
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label className="container">
                  Last 5 days
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label className="container">
                  Last 10 days
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                  <label className="container">
                  Last 15 days
                    <input type="checkbox" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
            </div>
            
            <div className="col-xl-9 col-lg-9 col-md-8 ">
              <div className="row">
                <div className="col-lg-12">
                  <div className="count-job mb-35">
                    <span>39, 782 Product found</span>
                    <div className="select-cat">
                      <span>Sort by</span>
                      <div className="select-categories">
                        <select className="nice-select">
                          <option value>Sofa</option>
                          <option value>Table</option>
                          <option value>Chair</option>
                          <option value>Bed</option>
                          <option value>Lighting</option>
                          <option value>Decor</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="new-arrival new-arrival3">
                <div className="row">
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="single-new-arrival mb-50 text-center">
                      <div className="popular-img">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular2.png" alt="" />
                      </div>
                      <div className="popular-caption">
                        <h3><Link>Bly Microfiber / Microsuede 56" Armless Loveseat</Link></h3>
                        <span>$367</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="single-new-arrival mb-50 text-center">
                      <div className="popular-img">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular3.png" alt="" />
                      </div>
                      <div className="popular-caption">
                        <h3><Link>Bly Microfiber / Microsuede 56" Armless Loveseat</Link></h3>
                        <span>$367</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="single-new-arrival mb-50 text-center">
                      <div className="popular-img">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular4.png" alt="" />
                      </div>
                      <div className="popular-caption">
                        <h3><Link>Bly Microfiber / Microsuede 56" Armless Loveseat</Link></h3>
                        <span>$367</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="single-new-arrival mb-50 text-center">
                      <div className="popular-img">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular5.png" alt="" />
                      </div>
                      <div className="popular-caption">
                        <h3><Link>Bly Microfiber / Microsuede 56" Armless Loveseat</Link></h3>
                        <span>$367</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="single-new-arrival mb-50 text-center">
                      <div className="popular-img">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular6.png" alt="" />
                      </div>
                      <div className="popular-caption">
                        <h3><Link>Bly Microfiber / Microsuede 56" Armless Loveseat</Link></h3>
                        <span>$367</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="single-new-arrival mb-50 text-center">
                      <div className="popular-img">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular7.png" alt="" />
                      </div>
                      <div className="popular-caption">
                        <h3><Link>Bly Microfiber / Microsuede 56" Armless Loveseat</Link></h3>
                        <span>$367</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="single-new-arrival mb-50 text-center">
                      <div className="popular-img">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular8.png" alt="" />
                      </div>
                      <div className="popular-caption">
                        <h3><Link>Bly Microfiber / Microsuede 56" Armless Loveseat</Link></h3>
                        <span>$367</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="single-new-arrival mb-50 text-center">
                      <div className="popular-img">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular9.png" alt="" />
                      </div>
                      <div className="popular-caption">
                        <h3><Link>Bly Microfiber / Microsuede 56" Armless Loveseat</Link></h3>
                        <span>$367</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-4 col-lg-6 col-md-6 col-sm-6">
                    <div className="single-new-arrival mb-50 text-center">
                      <div className="popular-img">
                        <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular1.png" alt="" />
                      </div>
                      <div className="popular-caption">
                        <h3><Link>Bly Microfiber / Microsuede 56" Armless Loveseat</Link></h3>
                        <span>$367</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="room-btn mt-20">
                    <Link class="border-btn mt-4 aos-init aos-animate" data-aos="fade-up" href="/product">
                    Browse More
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Categories;
