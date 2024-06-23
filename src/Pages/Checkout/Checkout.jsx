import React from "react";
import Spinner from "../../Components/spinner/Spinner";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import CategoriesArea from "../../Components/Categories area/CategoriesArea";
import { Link } from "react-router-dom";
import "./checkout.css";

const Checkout = () => {
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
                  Checkout{" "}
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/card">Checkout</Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="checkout_area section-padding40">
        <div className="container">
          <div className="returning_customer">
            <div className="check_title">
              <h2>
                Returning Customer? <Link>Click here to login</Link>
              </h2>
            </div>
            <p>
              If you have shopped with us before, please enter your details in
              the boxes below. If you are a new customer, please proceed to the
              Billing & Shipping section.
            </p>
            <form action="" className="row contact_form">
              <div className="col-md-6 form-group p_star">
                <input
                  type="text"
                  class="form-control"
                  id="name"
                  name="name"
                  value=" "
                />
                <span
                  class="placeholder"
                  data-placeholder="Username or Email"
                ></span>
              </div>
              <div className="col-md-6 form-group p_star">
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  name="password"
                />
                <span class="placeholder" data-placeholder="Password"></span>
              </div>

              <div className="col-md-12 form-group d-flex flex-wrap">
                <div className="hero-btn" data-aos="fade-up">
                  <Link className=" hero_btn"> log in</Link>
                </div>
                <div className="checkout-cap ml-5">
                  <input type="checkbox" id="fruit01" name="keep-log" />
                  <label for="fruit01">Create an account?</label>
                </div>
              </div>
            </form>
          </div>
          <div className="cupon_area">
            <div className="check_title">
              <h2>
                {" "}
                Have a coupon? <Link>Click here to enter your code</Link>
              </h2>
              <input type="text" placeholder="Enter coupon code" />
              <div className="hero-btn" data-aos="fade-up">
                <Link className=" hero_btn">Apply Coupon</Link>
              </div>
            </div>
          </div>

          <div className="billing_details">
            <div className="row">
              <div className="col-lg-8">
                <h3>Billing Details</h3>
                <form action="" className="row  contact_form">
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="first"
                      name="name"
                    ></input>
                    <span
                      class="placeholder"
                      data-placeholder="First name"
                    ></span>{" "}
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="last"
                      name="name"
                    ></input>
                    <span
                      class="placeholder"
                      data-placeholder="Last name"
                    ></span>
                  </div>

                  <div className="col-md-12 form-group">
                    <input
                      type="text"
                      class="form-control"
                      id="company"
                      name="company"
                      placeholder="Company name"
                    ></input>
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="number"
                      name="number"
                    ></input>
                    <span class="placeholder" data-placeholder="Phone number">
                      …
                    </span>{" "}
                  </div>
                  <div className="col-md-6 form-group p_star">
                    <input
                      type="text"
                      className="form-control"
                      id="email"
                      name="compemailany"
                    ></input>
                    <span class="placeholder" data-placeholder="Email Address">
                      …
                    </span>{" "}
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <div className="select-categories">
                      <select className="nice-select">
                        <option value>Country</option>
                        <option value>Baku</option>
                        <option value>Shuvelan</option>
                        <option value>Merdekan</option>
                        <option value>Sagan</option>
                        <option value>Zire</option>
                        <option value>Turkan</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="add1"
                      name="add1"
                    ></input>
                    <span
                      class="placeholder"
                      data-placeholder="Address line 01"
                      >
                                        </span>{" "}
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="add2"
                      name="add2"
                    ></input>
                    <span
                      class="placeholder"
                      data-placeholder="Address line 02"
                    ></span>{" "}
                  </div>
                  <div className="col-md-12 form-group p_star">
                    <input
                      type="text"
                      class="form-control"
                      id="city"
                      name="city"
                    ></input>
                    <span class="placeholder" data-placeholder="Town/City">
                      
                    </span>{" "}
                  </div>
                  <div className="col-md-12 form-group p_star">
                  <div className="select-categories">
                        <select className="nice-select">
                          <option value>District</option>
                          <option value>Sofa</option>
                          <option value>Table</option>
                          <option value>Chair</option>
                          <option value>Bed</option>
                          <option value>Lighting</option>
                          <option value>Decor</option>
                        </select>
                      </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <input type="text" class="form-control" id="zip" name="zip" placeholder="Postcode/ZIP"></input>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="checkout-cap">
                      <input type="checkbox" id="fruit1" name="keep-log"></input>
                  <label for="fruit1">Create an account?</label>  
                  </div>
                  </div>
                  <div className="col-md-12 form-group">
                    <div className="creat_account">
                      <h3>Shipping Details</h3>
                      <div className="checkout-cap">
                        <input type="checkbox" id="f-option3" name="selector"></input>
                     <label for="f-option3">Ship to a different address?</label> </div>
                     <textarea class="form-control" name="message" id="message" rows="1" placeholder="Order Notes"></textarea>
                    </div>
                  </div>
                </form>
              </div>

              <div className="col-lg-4">
                <div className="order_box">
                  <h2>Your Order</h2>
                  <ul className="list">
                    <li><Link>Product<span>Total</span></Link></li>
                    <li><Link>Fresh Blackberry
                    <span className="middle">x 02</span>
                    <span class="last">$720.00</span>
                    </Link></li>
                    <li><Link>Fresh Tomatoes
                    <span className="middle">x 02</span>
                    <span class="last">$720.00</span>
                    </Link></li>
                    <li><Link>Fresh Brocoli
                    <span className="middle">x 02</span>
                    <span class="last">$720.00</span>
                    </Link></li>
                  </ul>
                  <ul className="list list_2">
                    <li><Link>Subtotal <span>$2160.00</span></Link></li>
                    <li><Link>Shipping <span>Flat rate: $50.00</span></Link></li>
                    <li><Link>Total <span>$2210.00</span></Link></li>
                  </ul>
                  <div className="payment_item">
                    <div className="radion_btn">
                      <input type="radio" id="f-option5" name="selector"></input>
                 <label for="f-option5">Check payments</label>
                 <div className="check">
                  </div>   </div>
                  <p> Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode. </p>
                  </div>
                  <div className="payment_item active">
                    <div className="radion_btn">
                      <input type="radio" id="f-option6" name="selector"></input>
                  <label for="f-option6">Paypal </label>
                  <img src="https://preview.colorlib.com/theme/furn/assets/img/gallery/card.jpg" alt="" />  
                  <div className="check"></div>
                  </div>
                  <p> Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode. </p>
                  </div>
                  <div className="creat_account checkout-cap">
                    <input type="checkbox" id="f-option8" name="selector"></input>
               <label for="f-option8">
               I’ve read and accept the <Link>terms & conditions*</Link>
                </label>   </div>
                <div className="hero-btn" data-aos="fade-up">
                  <Link className=" hero_btn"> Proceed to Paypal</Link>
                </div>
                </div>
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

export default Checkout;
