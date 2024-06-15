import React, { useState } from "react";
import Header from "../../Components/Header/Header";
import "./home.css";
import { Link, NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

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
                    <NavLink className=" hero_btn">Discover More</NavLink>
                  </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
