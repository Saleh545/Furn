import React from "react";
import Spinner from "../../Components/spinner/Spinner";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import { Link } from "react-router-dom";
import { FaComments, FaRegComments, FaUser } from "react-icons/fa";
import "./blog.css"
import { IoSearchOutline } from "react-icons/io5";

const Blog = () => {
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
                  blog{" "}
                </h1>
                <nav aria-label="breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <Link to="/">Home </Link>
                    </li>
                    <li className="breadcrumb-item">
                      <Link to="/card">Blog</Link>
                    </li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog_area section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mb-5 mb-lg-0">
              <div className="blog_left_sidebar">
                <div className="blog_item">
                  <div className="blog_item_img">
                    <img
                      className="card-img rounded-0"
                      src="https://preview.colorlib.com/theme/furn/assets/img/blog/single_blog_1.png"
                      alt=""
                    />
                    <Link className="blog_item_date">
                      <h3>15</h3>
                      <p>Jan</p>
                    </Link>
                  </div>
                  <div className="blog_details">
                    <Link>
                      <h2 className="blog-head">
                        Google inks pact for new 35-storey office
                      </h2>
                    </Link>
                    <p>
                      That dominion stars lights dominion divide years for
                      fourth have don't stars is that he earth it first without
                      heaven in place seed it second morning saying.
                    </p>
                    <ul className="blog-info-link">
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
                  </div>
                </div>
                <div className="blog_item">
                  <div className="blog_item_img">
                    <img
                      className="card-img rounded-0"
                      src="https://preview.colorlib.com/theme/furn/assets/img/blog/single_blog_2.png"
                      alt=""
                    />
                    <Link className="blog_item_date">
                      <h3>15</h3>
                      <p>Jan</p>
                    </Link>
                  </div>
                  <div className="blog_details">
                    <Link>
                      <h2 className="blog-head">
                        Google inks pact for new 35-storey office
                      </h2>
                    </Link>
                    <p>
                      That dominion stars lights dominion divide years for
                      fourth have don't stars is that he earth it first without
                      heaven in place seed it second morning saying.
                    </p>
                    <ul className="blog-info-link">
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
                  </div>
                </div>
                <div className="blog_item">
                  <div className="blog_item_img">
                    <img
                      className="card-img rounded-0"
                      src="https://preview.colorlib.com/theme/furn/assets/img/blog/single_blog_3.png"
                      alt=""
                    />
                    <Link className="blog_item_date">
                      <h3>15</h3>
                      <p>Jan</p>
                    </Link>
                  </div>
                  <div className="blog_details">
                    <Link>
                      <h2 className="blog-head">
                        Google inks pact for new 35-storey office
                      </h2>
                    </Link>
                    <p>
                      That dominion stars lights dominion divide years for
                      fourth have don't stars is that he earth it first without
                      heaven in place seed it second morning saying.
                    </p>
                    <ul className="blog-info-link">
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
                  </div>
                </div>
                <div className="blog_item">
                  <div className="blog_item_img">
                    <img
                      className="card-img rounded-0"
                      src="https://preview.colorlib.com/theme/furn/assets/img/blog/single_blog_4.png"
                      alt=""
                    />
                    <Link className="blog_item_date">
                      <h3>15</h3>
                      <p>Jan</p>
                    </Link>
                  </div>
                  <div className="blog_details">
                    <Link>
                      <h2 className="blog-head">
                        Google inks pact for new 35-storey office
                      </h2>
                    </Link>
                    <p>
                      That dominion stars lights dominion divide years for
                      fourth have don't stars is that he earth it first without
                      heaven in place seed it second morning saying.
                    </p>
                    <ul className="blog-info-link">
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="blog_right_sidebar">
                <div className="single_sidebar_widget search_widget">
                  <form action="#">
                    <div className="form-group">
                      <div className="input-group mb-3">
                        <input type="text" class="form-control" placeholder="Search Keyword" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Search Keyword'"></input>
                        <div className="input-group-append">
                          <button class="btns" type="button"><IoSearchOutline />
</button>
                        </div>
                      </div>
               </div>
              <button class="button rounded-0 primary-bg w-100 btn_1 boxed-btn" type="submit">Search</button>     
                  </form>
                </div>

                <div className="single_sidebar_widget post_category_widget">
                  <h4 class="widget_title" >Category</h4>
                  <ul className="list cat-list">
                    <li><Link className="d-flex"><p>Resaurant food</p><p>(54)</p></Link></li>
                    <li><Link className="d-flex"><p>Travel news</p><p>(23)</p></Link></li>
                    <li><Link className="d-flex"><p>Modern technology</p><p>(15)</p></Link></li>
                    <li><Link className="d-flex"><p>Product</p><p>(1)</p></Link></li>
                    <li><Link className="d-flex"><p>Inspiration</p><p>(45)</p></Link></li>
                    <li><Link className="d-flex"><p>Health Care </p><p>(21)</p></Link></li>
                  </ul>
                </div>

                <div className="single_sidebar_widget popular_post_widget">
                  <h3 class="widget_title" >Recent Post</h3>
                  <div className="media post_item">
                    <img src="https://preview.colorlib.com/theme/furn/assets/img/post/post_1.png" alt="" />
                    <div className="media-body">
                      <Link><h3>From life was you fish...</h3></Link>
                  <p>January 12, 2019</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="https://preview.colorlib.com/theme/furn/assets/img/post/post_2.png" alt="" />
                    <div className="media-body">
                      <Link><h3>The Amazing Hubble</h3></Link>
                  <p>06 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="https://preview.colorlib.com/theme/furn/assets/img/post/post_3.png" alt="" />
                    <div className="media-body">
                      <Link><h3>Astronomy Or Astrology</h3></Link>
                  <p>04 Hours ago</p>
                    </div>
                  </div>
                  <div className="media post_item">
                    <img src="https://preview.colorlib.com/theme/furn/assets/img/post/post_4.png" alt="" />
                    <div className="media-body">
                      <Link><h3>Asteroids telescope</h3></Link>
                  <p>01 Hours ago</p>
                    </div>
                  </div>
                </div>

                <div className="single_sidebar_widget tag_cloud_widget">
                  <h4 class="widget_title" >Tag Clouds</h4>
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
                  <h4 class="widget_title" >Instagram Feeds</h4>
                  <ul class="instagram_row flex-wrap">
                    <li>
                      <Link><img className="img-fluid"  src="https://preview.colorlib.com/theme/furn/assets/img/post/post_5.png" alt="" /></Link>
                    </li>
                    <li>
                      <Link><img className="img-fluid"src="https://preview.colorlib.com/theme/furn/assets/img/post/post_1.png" alt="" /></Link>
                    </li>
                    <li>
                      <Link><img className="img-fluid"src="https://preview.colorlib.com/theme/furn/assets/img/post/post_2.png" alt="" /></Link>
                    </li>
                    <li>
                      <Link><img className="img-fluid"src="https://preview.colorlib.com/theme/furn/assets/img/post/post_3.png" alt="" /></Link>
                    </li>
                    <li>
                      <Link><img className="img-fluid"src="https://preview.colorlib.com/theme/furn/assets/img/post/post_4.png" alt="" /></Link>
                    </li>
                    <li>
                      <Link><img className="img-fluid"src="https://preview.colorlib.com/theme/furn/assets/img/post/post_1.png" alt="" /></Link>
                    </li>
                  </ul>
                </div>

                <div className="single_sidebar_widget newsletter_widget">
                  <h4 class="widget_title" >Newsletter</h4>
                  <form action="#">
                    <div class="form-group">
                      <input type="email" class="form-control" onfocus="this.placeholder = ''" onblur="this.placeholder = 'Enter email'" placeholder="Enter email" required></input>
                    </div>
                    <button class="button rounded-0 primary-bg w-100 btn_1 boxed-btn" type="submit">Subscribe</button>
                  </form>
                </div>
              </div>
            </div>



            
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
