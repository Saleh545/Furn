import React, { useState } from "react";
import Spinner from "../../Components/spinner/Spinner";
import Header from "../../Components/Header/Header";
import { Link, NavLink } from "react-router-dom";
import "./card.css";
import { FiMinus } from "react-icons/fi";
import { FaCaretDown, FaPlus } from "react-icons/fa";
import Footer from "../../Components/Footer/Footer";
import CategoriesArea from "../../Components/Categories area/CategoriesArea";

const Card = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("Bangladesh");

  const handleSelectChange = (value) => {
    setSelectedCountry(value);
    setIsOpen(false);
  };

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
                  Cart List
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/card">Cart List</Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="cart_area section-padding40">
        <div className="container">
          <div className="cart_inner">
            <div className="table-responsive">
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Product</th>
                    <th scope="col">Price</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Total</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/card2.png"
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$121.00</h5>
                    </td>
                    <td>
                      <div className="product_count">
                        <span
                          className="input-number-decrement"
                          onClick={() => setCount(Math.max(count - 1, 0))}
                        >
                          <FiMinus />
                        </span>
                        <input
                          className="input-number"
                          type="text"
                          value={count}
                          min="0"
                          max="10"
                          readOnly
                        />
                        <span
                          className="input-number-increment"
                          onClick={() => setCount(count + 1)}
                        >
                          <FaPlus />
                        </span>
                      </div>
                    </td>
                    <td>
                      <h5>${360.0 * count}</h5>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div className="media">
                        <div className="d-flex">
                          <img
                            src="https://preview.colorlib.com/theme/furn/assets/img/gallery/card1.png"
                            alt=""
                          />
                        </div>
                        <div className="media-body">
                          <p>Minimalistic shop for multipurpose use</p>
                        </div>
                      </div>
                    </td>
                    <td>
                      <h5>$360.00</h5>
                    </td>
                    <td>
                      <div className="product_count">
                        <span
                          className="input-number-decrement"
                          onClick={() => setCount(Math.max(count - 1, 0))}
                        >
                          <FiMinus />
                        </span>
                        <input
                          className="input-number"
                          type="text"
                          value={count}
                          min="0"
                          max="10"
                          readOnly
                        />
                        <span
                          className="input-number-increment"
                          onClick={() => setCount(count + 1)}
                        >
                          <FaPlus />
                        </span>
                      </div>
                    </td>
                    <td>
                      <h5>${360.0 * count}</h5>
                    </td>
                  </tr>

                  <tr className="bottom_button">
                    <td>
                    <NavLink className=" hero_btn">Update Cart</NavLink>
                        </td>
                    <td></td>
                    <td></td>
                    <td >
                      <div className="cupon_text float-right">

                    <NavLink className=" hero_btn">Close Coupon</NavLink>
                      </div>
                              </td>
                  </tr>

                  <tr>
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Subtotal</h5>
                    </td>
                    <td>
                      <h5>$2160.00</h5>
                    </td>
                  </tr>
                  <tr className="shipping_area">
                    <td></td>
                    <td></td>
                    <td>
                      <h5>Shipping</h5>
                    </td>
                    <td>
                      <div className="shipping_box">
                        <ul className="list">
                          <li>Flat Rate: $5.00<input type="radio" aria-label="Radio button for following text input"></input></li>
                          <li>Free Shipping<input type="radio" aria-label="Radio button for following text input"></input></li>
                          <li>Flat Rate: $10.00<input type="radio" aria-label="Radio button for following text input"></input></li>
                          <li>Local Delivery: $2.00<input type="radio" aria-label="Radio button for following text input"></input></li>
                        </ul>
                        <h6>Calculate Shipping <FaCaretDown /></h6>
                        <div
                          className="nice-select shipping_select"
                          onClick={() => setIsOpen(!isOpen)}
                        >
                          <span className="current">{selectedCountry}</span>
                          {isOpen && (
                            <ul className="list">
                              <li
                                data-value="Bangladesh"
                                className="option"
                                onClick={() =>
                                  handleSelectChange("Bangladesh")
                                }
                              >
                                Bangladesh
                              </li>
                              <li
                                data-value="India"
                                className="option"
                                onClick={() => handleSelectChange("India")}
                              >
                                India
                              </li>
                              <li
                                data-value="Pakistan"
                                className="option"
                                onClick={() => handleSelectChange("Pakistan")}
                              >
                                Pakistan
                              </li>
                            </ul>
                          )}
                        </div>
                        <input class="post_code" type="text" placeholder="Postcode/Zipcode" />
                        <NavLink className=" hero_btn">                        Update Details</NavLink>

                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
              <div className="checkout_btn_inner float-right">
              <NavLink className=" hero_btn">Continue Shopping</NavLink>
              <NavLink className=" hero_btn">Proceed to checkout</NavLink>

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

export default Card;
