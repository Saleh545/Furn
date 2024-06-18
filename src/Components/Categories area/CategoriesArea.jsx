import React from 'react'
import  "./CategoriesArea.css"

const CategoriesArea = () => {
  return (
    <div>
         <div className="categories-area section-padding40 gray-bg">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-cat mb-50 wow fadeInUp">
                <div className="cat-icon">
                  <img src="https://preview.colorlib.com/theme/furn/assets/img/icon/services1.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>Fast & Free Delivery</h5>
                  <p>Free delivery on all orders</p>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-cat mb-50 wow fadeInUp">
                <div className="cat-icon">
                  <img src="https://preview.colorlib.com/theme/furn/assets/img/icon/services2.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>Secure Payment</h5>
                  <p>Free delivery on all orders</p>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-cat mb-50 wow fadeInUp">
                <div className="cat-icon">
                  <img src="https://preview.colorlib.com/theme/furn/assets/img/icon/services3.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>Money Back Guarantee</h5>
                  <p>Free delivery on all orders</p>
                  
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="single-cat mb-50 wow fadeInUp">
                <div className="cat-icon">
                  <img src="https://preview.colorlib.com/theme/furn/assets/img/icon/services4.svg" alt="" />
                </div>
                <div className="cat-cap">
                  <h5>Online Support</h5>
                  <p>Free delivery on all orders</p>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoriesArea