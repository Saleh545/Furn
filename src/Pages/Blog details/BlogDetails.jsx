import React from "react";
import Spinner from "../../Components/spinner/Spinner";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import {
  FaBehance,
  FaComments,
  FaDribbble,
  FaFacebookF,
  FaHeart,
  FaRegComments,
  FaTwitter,
  FaUser,
} from "react-icons/fa";
import "./blog-details.css";
import { IoSearchOutline } from "react-icons/io5";
const BlogDetails = () => {
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
                  blog details{" "}
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/card">Blog details</Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog_area single-post-area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 posts-list">
              <div className="single-post">
                <div className="feature-img">
                  <img
                    className="img-fluid"
                    src="https://preview.colorlib.com/theme/furn/assets/img/blog/single_blog_1.png"
                    alt=""
                  />
                </div>
                <div className="blog_details">
                  <h2>
                    Second divided from form fish beast made every of seas all
                    gathered us saying he our
                  </h2>
                  <ul className="blog-info-link mt-3 mb-4">
                    <li>
                      <Link>
                        <FaUser /> Travel, Lifestyle
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <FaComments />
                        03 Comments
                      </Link>
                    </li>
                  </ul>
                  <p class="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower
                  </p>{" "}
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training. who has the willpower to actually
                  </p>
                  <div className="quote-wrapper">
                    <div className="quotes">
                      MCSE boot camps have its supporters and its detractors.
                      Some people do not understand why you should have to spend
                      money on boot camp when you can get the MCSE study
                      materials yourself at a fraction of the camp price.
                      However, who has the willpower to actually sit through a
                      self-imposed MCSE training.
                    </div>
                  </div>
                  <p class="excert">
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower
                  </p>{" "}
                  <p>
                    MCSE boot camps have its supporters and its detractors. Some
                    people do not understand why you should have to spend money
                    on boot camp when you can get the MCSE study materials
                    yourself at a fraction of the camp price. However, who has
                    the willpower to actually sit through a self-imposed MCSE
                    training. who has the willpower to actually
                  </p>
                </div>
              </div>
              <div className="navigation-top">
                <div className="d-sm-flex justify-content-between text-center">
                  <p className="like-info">
                    <span class="align-middle">
                      <FaHeart />
                    </span>
                    Lily and 4 people like this
                  </p>
                  <div class="col-sm-4 text-center my-2 my-sm-0"> </div>

                  <ul class="social-icons">
                    <li>
                      <Link>
                        <FaFacebookF />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <FaTwitter />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <FaDribbble />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <FaBehance />
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="navigation-area">
                  <div className="row">
                    <div className="col-lg-6 col-md-6 col-12 nav-left flex-row d-flex justify-content-start align-items-center">
                      <div className="thumb">
                        <Link>
                          <img
                            className="img-fluid"
                            src="https://preview.colorlib.com/theme/furn/assets/img/post/preview.png"
                            alt=""
                          />
                        </Link>
                      </div>
                      <div className="detials">
                        <p>Prev Post</p>
                        <Link>
                          <h4>Space The Final Frontier</h4>
                        </Link>
                      </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 nav-right flex-row d-flex justify-content-end align-items-center">
                      <div className="detials">
                        <p>Next Post</p>
                        <Link>
                          <h4>Telescopes 101</h4>
                        </Link>
                      </div>
                      <div className="thumb">
                        <img
                          className="img-fluid"
                          src="https://preview.colorlib.com/theme/furn/assets/img/post/next.png"
                          alt=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="blog-author">
                <div className="media align-items-center">
                  <img
                    src="https://preview.colorlib.com/theme/furn/assets/img/blog/author.png"
                    alt=""
                  />
                  <div className="media-body">
                    <Link>
                      <h4>Harvard milan</h4>
                    </Link>
                    <p>
                      Second divided from form fish beast made. Every of seas
                      all gathered use saying you're, he our dominion twon
                      Second divided from
                    </p>
                  </div>
                </div>
              </div>

              <div className="comments-area">
                <h4>05 Comments</h4>
                <div className="comment-list">
                  <div className="single-comment justify-content-between d-flex">
                    <div className="user justify-content-between d-flex">
                      <div className="thumb">
                        <img
                          src="https://preview.colorlib.com/theme/furn/assets/img/blog/comment_1.png"
                          alt=""
                        />
                      </div>
                      <div className="desc">
                        <p className="comment">
                          Multiply sea night grass fourth day sea lesser rule
                          open subdue female fill which them Blessed, give fill
                          lesser bearing multiply sea night grass fourth day sea
                          lesser
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <h5><Link>Emilly Blunt</Link></h5>
                       <p class="date">December 4, 2017 at 3:12 pm </p>
                          </div>
                      <div class="reply-btn">
                     <Link class="btn-reply text-uppercase">reply</Link>   </div>  </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-list">
                  <div className="single-comment justify-content-between d-flex">
                    <div className="user justify-content-between d-flex">
                      <div className="thumb">
                        <img
                          src="https://preview.colorlib.com/theme/furn/assets/img/blog/comment_2.png"
                          alt=""
                        />
                      </div>
                      <div className="desc">
                        <p className="comment">
                          Multiply sea night grass fourth day sea lesser rule
                          open subdue female fill which them Blessed, give fill
                          lesser bearing multiply sea night grass fourth day sea
                          lesser
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <h5><Link>Emilly Blunt</Link></h5>
                       <p class="date">December 4, 2017 at 3:12 pm </p>
                          </div>
                      <div class="reply-btn">
                     <Link class="btn-reply text-uppercase">reply</Link>   </div>  </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="comment-list">
                  <div className="single-comment justify-content-between d-flex">
                    <div className="user justify-content-between d-flex">
                      <div className="thumb">
                        <img
                          src="https://preview.colorlib.com/theme/furn/assets/img/blog/comment_3.png"
                          alt=""
                        />
                      </div>
                      <div className="desc">
                        <p className="comment">
                          Multiply sea night grass fourth day sea lesser rule
                          open subdue female fill which them Blessed, give fill
                          lesser bearing multiply sea night grass fourth day sea
                          lesser
                        </p>
                        <div className="d-flex justify-content-between">
                          <div className="d-flex align-items-center">
                            <h5><Link>Emilly Blunt</Link></h5>
                       <p class="date">December 4, 2017 at 3:12 pm </p>
                          </div>
                      <div class="reply-btn">
                     <Link class="btn-reply text-uppercase">reply</Link>   </div>  </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="comment-form">
                <h4>Leave a Reply</h4>
           <form class="form-contact comment_form" action="#" id="commentForm">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                  <textarea class="form-control w-100" name="comment" id="comment" cols="30" rows="9" placeholder="Write Comment"></textarea>

                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input class="form-control" name="name" id="name" type="text" placeholder="Name"></input>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input class="form-control" name="email" id="email" type="email" placeholder="Email"></input>
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input class="form-control" name="website" id="website" type="text" placeholder="Website"></input>
                </div>
              </div>
            </div>
            <div className="form-group">
              <button type="submit" class="button button-contactForm btn_1 boxed-btn">Post Comment</button>
            </div>
           </form>
              </div>
            </div>

            <p className="col-lg-4">
              <div className="blog_right_sidebar">
                <div className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input
                          type="text"
                          class="form-control"
                          placeholder="Search Keyword"
                          onfocus="this.placeholder = ''"
                          onblur="this.placeholder = 'Search Keyword'"
                        ></input>
                        <div className="input-group-append">
                          <button class="btns" type="button">
                            <IoSearchOutline />
                          </button>
                        </div>
                      </div>
                    </div>
                    <button
                      class="button rounded-0 primary-bg w-100 btn_1 boxed-btn"
                      type="submit"
                    >
                      Search
                    </button>
                  </form>
                </div>

                <div className="single_sidebar_widget post_category_widget">
                  <h4 class="widget_title">Category</h4>
                  <ul className="list cat-list">
                    <li>
                      <Link className="d-flex">
                        <p>Resaurant food</p>
                        <p>(54)</p>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex">
                        <p>Travel news</p>
                        <p>(23)</p>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex">
                        <p>Modern technology</p>
                        <p>(15)</p>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex">
                        <p>Product</p>
                        <p>(1)</p>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex">
                        <p>Inspiration</p>
                        <p>(45)</p>
                      </Link>
                    </li>
                    <li>
                      <Link className="d-flex">
                        <p>Health Care </p>
                        <p>(21)</p>
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="single_sidebar_widget popular_post_widget">
                  <h3 class="widget_title">Recent Post</h3>
                  <div className="media post_item">
                    <img
                      src="https://preview.colorlib.com/theme/furn/assets/img/post/post_1.png"
                      alt=""
                    />
                    <div className="media-body">
                      <Link>
                        <h3>From life was you fish...</h3>
                      </Link>
                      <p>January 12, 2019</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img
                      src="https://preview.colorlib.com/theme/furn/assets/img/post/post_2.png"
                      alt=""
                    />
                    <div className="media-body">
                      <Link>
                        <h3>The Amazing Hubble</h3>
                      </Link>
                      <p>06 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img
                      src="https://preview.colorlib.com/theme/furn/assets/img/post/post_3.png"
                      alt=""
                    />
                    <div className="media-body">
                      <Link>
                        <h3>Astronomy Or Astrology</h3>
                      </Link>
                      <p>04 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img
                      src="https://preview.colorlib.com/theme/furn/assets/img/post/post_4.png"
                      alt=""
                    />
                    <div className="media-body">
                      <Link>
                        <h3>Asteroids telescope</h3>
                      </Link>
                      <p>01 Hours ago</p>
                    </div>
                  </div>
                </div>

                <div className="single_sidebar_widget tag_cloud_widget">
                  <h4 class="widget_title">Tag Clouds</h4>
                  <ul class="list">
                    <li>
                      <Link>project</Link>
                    </li>
                    <li>
                      <Link>love</Link>
                    </li>
                    <li>
                      <Link>technology</Link>
                    </li>
                    <li>
                      <Link>travel</Link>
                    </li>
                    <li>
                      <Link>restaurant</Link>
                    </li>
                    <li>
                      <Link>life style</Link>
                    </li>
                    <li>
                      <Link>design</Link>
                    </li>
                    <li>
                      <Link>illustration</Link>
                    </li>
                  </ul>
                </div>

                <div className="single_sidebar_widget instagram_feeds">
                  <h4 class="widget_title">Instagram Feeds</h4>
                  <ul class="instagram_row flex-wrap">
                    <li>
                      <Link>
                        <img
                          className="img-fluid"
                          src="https://preview.colorlib.com/theme/furn/assets/img/post/post_5.png"
                          alt=""
                        />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img
                          className="img-fluid"
                          src="https://preview.colorlib.com/theme/furn/assets/img/post/post_1.png"
                          alt=""
                        />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img
                          className="img-fluid"
                          src="https://preview.colorlib.com/theme/furn/assets/img/post/post_2.png"
                          alt=""
                        />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img
                          className="img-fluid"
                          src="https://preview.colorlib.com/theme/furn/assets/img/post/post_3.png"
                          alt=""
                        />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img
                          className="img-fluid"
                          src="https://preview.colorlib.com/theme/furn/assets/img/post/post_4.png"
                          alt=""
                        />
                      </Link>
                    </li>
                    <li>
                      <Link>
                        <img
                          className="img-fluid"
                          src="https://preview.colorlib.com/theme/furn/assets/img/post/post_1.png"
                          alt=""
                        />
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="single_sidebar_widget newsletter_widget">
                  <h4 class="widget_title">Newsletter</h4>
                  <form action="#">
                    <div class="form-group">
                      <input
                        type="email"
                        class="form-control"
                        onfocus="this.placeholder = ''"
                        onblur="this.placeholder = 'Enter email'"
                        placeholder="Enter email"
                        required
                      ></input>
                    </div>
                    <button
                      class="button rounded-0 primary-bg w-100 btn_1 boxed-btn"
                      type="submit"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogDetails;
