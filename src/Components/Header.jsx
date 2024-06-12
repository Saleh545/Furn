import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <header>
        <div className="header-area">
          <div className="container-fluid">
            <div className="row menu-wrapper align-items-center justify-content-between">
              <div className="header-left d-flex align-items-center">
                <div className="logo">
                  <img
                    src="https://preview.colorlib.com/theme/furn/assets/img/logo/logo.png"
                    alt=""
                  />
                </div>
                <div className="main-menu  d-none d-lg-block">
                  <nav>
                    <ul id="navigation">
                      <li>
                        <Link>Home</Link>
                      </li>
                      <li>
                        <Link>Product</Link>
                      </li>
                      <li>
                        <Link>About</Link>
                      </li>
                      <li>
                        <Link>Page</Link>
                      </li>
                      <li>
                        <Link>Blog</Link>
                      </li>
                      <li>
                        <Link>Contact</Link>
                      </li>
                    </ul>
                  </nav>
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
