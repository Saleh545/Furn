import React, { useState, useEffect } from "react";
import "./spinner.css";

const Spinner = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading && (
        <div id="preloader-active">
          <div className="preloader d-flex align-items-center justify-content-center">
            <div className="preloader-inner position-relative">
              <div className="preloader-circle"></div>
              <div className="preloader-img pere-text">
                <img src="https://preview.colorlib.com/theme/furn/assets/img/logo/loder.png"alt=""
                />
              </div>
            </div>
          </div>
        </div>
      )}
  
    </>
  );
};

export default Spinner;
