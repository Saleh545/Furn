import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./home.css";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { TfiInstagram } from "react-icons/tfi";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(1);

  const handleClick1 = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <Header />
      <main>
        <div className="slider-area">
          <div className="container">
            <div className="row">
              <div className="col-xl-6 col-lg-8 col-md-8">
                <div className="hero__caption">
                  <span>70% Sale off </span>
                  <h1 data-aos="fade-up">Furniture at Cost</h1>
                  <p data-aos="fade-up">
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </p>
                  <div className="hero-btn" data-aos="fade-up">
                    <NavLink className=" hero_btn">Discover More</NavLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="properties new-arrival fix">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div
                className="section-tittle mb-60 text-center wow fadeInUp"
                data-aos="fade-up"
              >
                <h2>Popular products</h2>
                <p>
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-xl-12">
              <div className="properties__button text-center">
                <nav>
                  <div className="nav nav-tabs" id="nav-tab">
                    <button
                      className={
                        activeIndex === 1 ? " tabs active-content" : "tabs"
                      }
                      onClick={() => handleClick1(1)}
                    >
                      Sofa
                    </button>

                    <button
                      className={
                        activeIndex === 2 ? " tabs active-content" : "tabs"
                      }
                      onClick={() => handleClick1(2)}
                    >
                      Table
                    </button>

                    <button
                      className={
                        activeIndex === 3 ? " tabs active-content" : "tabs"
                      }
                      onClick={() => handleClick1(3)}
                    >
                      Chair
                    </button>

                    <button
                      className={
                        activeIndex === 4 ? " tabs active-content" : "tabs"
                      }
                      onClick={() => handleClick1(4)}
                    >
                      Bed
                    </button>

                    <button
                      className={
                        activeIndex === 5 ? " tabs active-content" : "tabs"
                      }
                      onClick={() => handleClick1(5)}
                    >
                      Lightning
                    </button>
                    <button
                      className={
                        activeIndex === 6 ? " tabs active-content" : "tabs"
                      }
                      onClick={() => handleClick1(6)}
                    >
                      Decore
                    </button>
                  </div>
                  <div className="popular-content">
                    <div
                      className={
                        activeIndex === 1 ? " favorite-flex " : "active-content"
                      }
                    >
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular1.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular2.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular3.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        activeIndex === 2 ? " favorite-flex " : "active-content"
                      }
                    >
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular4.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular5.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular6.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        activeIndex === 3 ? " favorite-flex " : "active-content"
                      }
                    >
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular7.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular8.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular9.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div
                      className={
                        activeIndex === 4 ? " favorite-flex " : "active-content"
                      }
                    >
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular8.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular6.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular2.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        activeIndex === 5 ? " favorite-flex " : "active-content"
                      }
                    >
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular2.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular4.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular1.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div
                      className={
                        activeIndex === 6 ? " favorite-flex " : "active-content"
                      }
                    >
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular7.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular3.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                      <div className="sofa-card col-lg-4 col-md-6 col-sm-6">
                        <div className="favorite-img">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular2.png"
                            alt=""
                          />
                          <div className="sofa-text">
                            <Link to="/product">
                              Bly Microfiber / Microsuede 56" Armless Loveseat
                            </Link>{" "}
                            <p>$545</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="visit-tailor-area fix">
        <div className="tailor-offers"></div>
        <div className="tailor-details">
          <h2>
            Best Furniture <br /> manufacturer
          </h2>
          <p>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla.
          </p>
          <p>
            Suspendisse varius enim in eros elementum tristique. Duis cursus, mi
            quis viverra ornare, eros dolor interdum nulla.
          </p>
          <div className="hero-btn" data-aos="fade-up">
            <NavLink className=" hero_btn" to="/product">
              Discover More
            </NavLink>
          </div>
        </div>
      </div>

      <div class="new-arrival new-arrival2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-6 col-lg-8 col-md-10">
              <div
                className="section-tittle mb-60 text-center wow  "
                data-aos="fade-up"
              >
                <h2>Products you may like</h2>
                <p>
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>
              </div>
            </div>
          </div>
          <div className="row  ">
            <div className="like-flex">
              <div
                className="sofa-card col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
              >
                <div className="favorite-img">
                  <img
                    src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular4.png"
                    alt=""
                  />
                  <div className="sofa-text">
                    <Link to="/product">
                      Bly Microfiber / Microsuede 56" Armless Loveseat
                    </Link>{" "}
                    <p>$545</p>
                  </div>
                </div>
              </div>{" "}
              <div
                className="sofa-card col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
              >
                <div className="favorite-img">
                  <img
                    src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular5.png"
                    alt=""
                  />
                  <div className="sofa-text">
                    <Link to="/product">
                      Bly Microfiber / Microsuede 56" Armless Loveseat
                    </Link>{" "}
                    <p>$545</p>
                  </div>
                </div>
              </div>{" "}
              <div
                className="sofa-card col-lg-4 col-md-6 col-sm-6"
                data-aos="fade-up"
              >
                <div className="favorite-img">
                  <img
                    src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular6.png"
                    alt=""
                  />
                  <div className="sofa-text">
                    <Link to="/product">
                      Bly Microfiber / Microsuede 56" Armless Loveseat
                    </Link>{" "}
                    <p>$545</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="row  justify-content-center ">
            <Link className="border-btn mt-4" data-aos="fade-up" to="/product">
              Discover More
            </Link>
          </div>
        </div>
      </div>
      <div className="instagram-area">
        <div className="container-fluid">
          <div className="row align-items-center d-flex">
            <div className="col-xl-3 col-lg-4 col-md-6">
              <div className="instra-tittle mb-40">
                <div className="section-tittle">
                  <img
                    src="https://preview.colorlib.com/theme/furn/assets/img/gallery/insta.png"
                    alt=""
                  />
                  <h2>Get Inspired with Instagram</h2>
                  <p>
                    Suspendisse varius enim in eros elementum tristique. Duis
                    cursus, mi quis viverra ornare, eros dolor interdum nulla.
                  </p>
                  <Link className="border-btn" to="/product">
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-9 col-lg-8">
              <div className="row no-gutters">
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="single-instagram">
                    <img
                      className="w-100"
                      src="https://preview.colorlib.com/theme/furn/assets/img//gallery/instra1.png"
                      alt=""
                    />
                    <Link>
                      <TfiInstagram className="ti-instagram" />
                    </Link>
                  </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6 col-sm-6">
                  <div className="single-instagram">
                    <img
                      className="w-100"
                      src="https://preview.colorlib.com/theme/furn/assets/img//gallery/instra2.png"
                      alt=""
                    />

                    <Link>
                      <TfiInstagram className="ti-instagram" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="new-arrival new-arrival2">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-xl-7 col-lg-8 col-md-10">
              <div
                className="section-tittle mb-60 text-center wow fadeInUp"
                data-aos="fade-up"
              >
                <h2>Top Pick</h2>
                <p>
                  Suspendisse varius enim in eros elementum tristique. Duis
                  cursus, mi quis viverra ornare, eros dolor interdum nulla.
                </p>
              </div>
            </div>
          </div>
          <div className="row ">
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-new-arrival mb-50 text-center wow fadeInUp"
                data-aos="fade-up"
              >
                <div className="popular-img">
                  <img
                    src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular7.png"
                    alt=""
                  />
                </div>
                <div className="popular-caption">
                  <Link>Bly Microfiber / Microsuede 56" Armless Loveseat</Link>
                  <span>$545</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-new-arrival mb-50 text-center wow fadeInUp"
                data-aos="fade-up"
              >
                <div className="popular-img">
                  <img
                    src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular8.png"
                    alt=""
                  />
                </div>
                <div className="popular-caption">
                  <Link>Bly Microfiber / Microsuede 56" Armless Loveseat</Link>
                  <span>$545</span>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
              <div
                className="single-new-arrival mb-50 text-center wow fadeInUp"
                data-aos="fade-up"
              >
                <div className="popular-img">
                  <img
                    src="https://preview.colorlib.com/theme/furn/assets/img/gallery/popular9.png"
                    alt=""
                  />
                </div>
                <div className="popular-caption">
                  <Link>Bly Microfiber / Microsuede 56" Armless Loveseat</Link>
                  <span>$545</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <Link className="border-btn" to="/product">
              Discover More
            </Link>
          </div>
        </div>
      </div>

      <div className="categories-area section-padding40 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-cat mb-50 wow fadeInUp">
                <div className="cat-icon">
                  <img src="https://preview.colorlib.com/theme/furn/assets/img/icon/services1.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>Fast & Free Delivery</h5>
                  <p>Free delivery on all orders</p>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-cat mb-50 wow fadeInUp">
                <div className="cat-icon">
                  <img src="https://preview.colorlib.com/theme/furn/assets/img/icon/services2.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>Secure Payment</h5>
                  <p>Free delivery on all orders</p>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-cat mb-50 wow fadeInUp">
                <div className="cat-icon">
                  <img src="https://preview.colorlib.com/theme/furn/assets/img/icon/services3.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>Money Back Guarantee</h5>
                  <p>Free delivery on all orders</p>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-cat mb-50 wow fadeInUp">
                <div className="cat-icon">
                  <img src="https://preview.colorlib.com/theme/furn/assets/img/icon/services4.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>Online Support</h5>
                  <p>Free delivery on all orders</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default Home;
