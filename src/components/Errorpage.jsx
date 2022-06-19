import React from "react";
import { Link } from "react-router-dom";


 function Errorpage() {
  return (
    <>
      <div className="error-container ">
        <div className="aside-container">
          <img src="https://res.cloudinary.com/ajain8479/image/upload/v1649662035/undraw_under_construction_-46-pa_p5a1tg.svg"
            alt="e-pics"
          />
        </div>
        <div className="md-grid grid justify-center mt-8">
          <div className="error-heading ">404 Not Found</div>
          <div className="error-sub-heading ">
            Looks like you have followed a broken / invalid link
          </div>
          <Link className="error-redirect" to="/">
           <b> Explore Products</b>
          </Link>
        </div>
      </div>
    </>
  );
}
export default Errorpage;