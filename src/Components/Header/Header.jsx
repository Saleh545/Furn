import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <header>
        <div className="header-area">
          <div className="container-fluid">
            <div className="row d-flex menu-wrapper align-items-center ">
              <div className="header-left d-flex align-items-center">
                <div className="logo">
                  <img
                    src="https://preview.colorlib.com/theme/furn/assets/img/logo/logo.png"
                    alt="Logo"
                  />
                </div>
                <div className="main-menu d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/product">Product</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/page">Page</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/login">Login</Link>
                          </li>
                          <li>
                            <Link to="/card">Card</Link>
                          </li>
                          <li>
                            <Link to="/categories">Categories</Link>
                          </li>
                          <li>
                            <Link to="/checkout">Checkout</Link>
                          </li>
                          <li>
                            <Link to="product-details">Product Details</Link>
                          </li>
                        </ul>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                        <ul className="submenu">
                          <li>
                            <Link to="/blog">Blog</Link>
                          </li>
                          <li>
                            <Link to="/blog-details">Blog Details</Link>
                          </li>
                          <li>
                            <Link to="/elements">Elements</Link>
                          </li>
                        
                        </ul>
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right d-flex align-items-center">
                <div className="search">
                  <ul className="d-flex align-items-center">
                    <li>
                      <form
                        action=""
                        className="form-box f-right position-relative"
                      >
                        <input
                          type="text"
                          placeholder="Search products"
                          name="Search"
                        />
                        <IoIosSearch className="search-icon" />
                      </form>
                    </li>
                    <li>
                      <Link className="account-btn" to="/login" target="blank">
                        My Account
                      </Link>
                    </li>
                    <li>
                      <div className="card-stor">
                        <img
                          src="https://preview.colorlib.com/theme/furn/assets/img/icon/card.svg"
                          alt="Cart"
                        />
                        <span>0</span>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-12 mobile-bar">
                <div className="mobile_menu d-block d-lg-none">
                  <div className="slicknav_menu">
                    <div className="toggle-menu">
                      <button
                        onClick={toggleMenu}
                        className="slicknav_btn"
                        role="button"
                      >
                        <span className="slicknav_menutxt">MENU</span>
                        <RxHamburgerMenu className="slicknav_icon" />
                      </button>
                    </div>
                    <ul className={`slicknav_nav ${isMenuOpen ? "open" : ""}`}>
                      <li>
                        <Link to="/">Home</Link>
                      </li>
                      <li>
                        <Link to="/product">Product</Link>
                      </li>
                      <li>
                        <Link to="/about">About</Link>
                      </li>
                      <li>
                        <Link to="/page">Page</Link>
                      </li>
                      <li>
                        <Link to="/blog">Blog</Link>
                      
                      </li>
                      <li>
                        <Link to="/contact">Contact</Link>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
