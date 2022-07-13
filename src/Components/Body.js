import React from "react";
import email from "../img/email.png";

export default function Body() {
  return (
    <>
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
          <div className="col-10 col-sm-8 col-lg-6">
            <img
              src={email}
              className="d-block mx-lg-auto img-fluid"
              alt="Bootstrap Themes"
              width="700"
              height="500"
              loading="lazy"
            />
          </div>
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3">
              You're one account away from your successful online business
            </h1>
            <p className="lead">
              Start quickly to manage your own online store and add your
              products by creating an account on our site. You don't have to
              worry about anything but the development of your business.
            </p>
            <div className="d-md-flex justify-content-md-center">
              <button
                type="button"
                className="btn btn-lg btn-secondary fw-bold border-white bg-black"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
