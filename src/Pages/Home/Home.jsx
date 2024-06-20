import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./home.css";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import Footer from "../../Components/Footer/Footer";
import CategoriesArea from "../../Components/Categories area/CategoriesArea";
import PopularProducts from "../../Components/PopularProducts/PopularProducts";
import InstagramArea from "../../Components/instagram/InstagramArea";
import Spinner from "../../Components/spinner/Spinner";

const Home = () => {
 
  return (
    <div>
      <Spinner/>
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

    <PopularProducts/>

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

      <div className="new-arrival new-arrival2">
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
     <InstagramArea/>
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

     <CategoriesArea/>
      <Footer/>
    </div>
  );
};

export default Home;
