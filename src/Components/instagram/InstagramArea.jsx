import React from 'react'
import { TfiInstagram } from "react-icons/tfi";
import { Link } from 'react-router-dom';

const InstagramArea = () => {
  return (
    <div>  <div className="instagram-area pb-5">
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
  </div></div>
  )
}

export default InstagramArea