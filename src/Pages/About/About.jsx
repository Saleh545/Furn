import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../Components/Header/Header'
import Footer from '../../Components/Footer/Footer'
import CategoriesArea from '../../Components/Categories area/CategoriesArea'
import InstagramArea from '../../Components/instagram/InstagramArea'
import "./about.css"

const About = () => {
  return (
    <div>
      <Header/>
       <div className="single-slider hero-overly2  slider-height2 d-flex align-items-center slider-bg2 slick-slide slick-current slick-active">
        <div className="container">
          <div className="row">
            <div className="col-xl-6 col-lg-8 col-md-8">
              <div className="hero__caption hero__caption2">
                <h1  data-aos="fade-up" data-delay="6s"  >ABOUT</h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home </Link></li>
                    <li className="breadcrumb-item"><Link>About</Link></li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="about-area section-padding40">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-tittle mb-60 text-center pt-10">
                <h2>Our Story</h2>
                <p className='pera'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="about-img pb-3">
                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/about1.png" className="w-100" alt="" />
              </div>
            </div>
          </div>
        
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-tittle mb-60 text-center pt-10">
                <h2>JOURNEY START FROM</h2>
                <p className='pera'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
            <div className="col-lg-12">
              <div className="about-img pb-3">
                <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/about2.png" className="w-100" alt="" />
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="section-tittle mb-60 text-center pt-10">
                <h2>2020</h2>
                <p className='pera'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
              </div>
            </div>
           
          </div>
        
        </div>
      </div>
      <InstagramArea/>
      <CategoriesArea/>
      <Footer/>
    </div>
  )
}

export default About