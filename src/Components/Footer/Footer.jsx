import React from "react";
import { FaHeart, FaPinterestP, FaTwitter } from "react-icons/fa";
import { TiSocialFacebook } from "react-icons/ti";
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="footer-wrapper">
          <div className="footer-area footer-padding">
            <div className="container ">
              <div className="row justify-content-between">
                <div className="col-xl-4 col-lg-3 col-md-8 col-sm-8">
                  <div className="single-footer-caption mb-30">
                    <div className="footer-logo mb-35">
                      <Link to="/">
                        <img
                          src="https://preview.colorlib.com/theme/furn/assets/img/logo/logo2_footer.png"
                          alt=""
                        />
                      </Link>
                    </div>
                    <div className="footer-tittle">
                      <p>
                        Suspendisse varius enim in eros elementum tristique.
                        Duis cursus, mi quis viverra ornare, eros dolor interdum
                        nulla.
                      </p>
                    </div>
                    <div className="footer-social">
                      <Link>
                        <FaTwitter />
                      </Link>
                      <Link>
                        <TiSocialFacebook />
                      </Link>
                      <Link>
                        <FaPinterestP />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Quick links</h4>
                      <ul>
                        <li>
                          <Link>Image Licensin</Link>
                        </li>
                        <li>
                          <Link>Style Guide</Link>
                        </li>
                        <li>
                          <Link>Privacy Policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Shop Category</h4>
                      <ul>
                        <li>
                          <Link>Image Licensin</Link>
                        </li>
                        <li>
                          <Link>Style Guide</Link>
                        </li>
                        <li>
                          <Link>Privacy Policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-xl-2 col-lg-2 col-md-4 col-sm-4">
                  <div className="single-footer-caption mb-50">
                    <div className="footer-tittle">
                      <h4>Pertners</h4>
                      <ul>
                        <li>
                          <Link>Image Licensin</Link>
                        </li>
                        <li>
                          <Link>Style Guide</Link>
                        </li>
                        <li>
                          <Link>Privacy Policy</Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-bottom-area">
            <div className="container">
              <div className="footer-border">
                <div className="row d-flex align-items-center">
                  <div className="col-xl-12 ">
                    <div className="footer-copy-right text-center">
                      <p>Copyright ©2024 All rights reserved | This template is made with <FaHeart />by <Link>Saleh</Link></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
