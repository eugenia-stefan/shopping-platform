import React from "react";
import Navbar from "./Navbar";

export default function Management() {
  return (
    <>
      <Navbar />
      <div className="container col-xxl-8 px-4 py-5">
        <div className="row flex-lg-row-reverse g-5 py-5 justify-content-md-center">
          <div className="col-lg-6">
            <h1 className="display-5 fw-bold lh-1 mb-3 text-center">
              Shop manager
            </h1>
            <p className="lead"></p>
            <div className="d-md-flex justify-content-md-center">
              <button
                type="button"
                className="btn btn-lg btn-secondary fw-bold border-white bg-black"
              >
                <a className="white" href="/shop-details">
                  Shop details
                </a>
              </button>
              <button
                type="button"
                className="btn btn-lg btn-secondary fw-bold border-white bg-black"
              >
                <a className="white" href="/shop-inventory">
                  Inventory
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
