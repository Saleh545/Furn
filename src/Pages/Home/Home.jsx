import React, { useEffect } from "react";
import Header from "../../Components/Header/Header";
import "./home.css";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home = () => {
 
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
                    <Link className=" hero_btn">Discover More</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
