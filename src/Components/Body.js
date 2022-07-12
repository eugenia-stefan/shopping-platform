import React from "react";
import email from "../img/email.png"

export default function Body() {
  return (
    <body>
  <div class="container col-xxl-8 px-4 py-5">
    <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
      <div class="col-10 col-sm-8 col-lg-6">
        <img src={email} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy"/>
      </div>
      <div class="col-lg-6">
        <h1 class="display-5 fw-bold lh-1 mb-3">You're one account away from your successful online business</h1>
        <p class="lead">Start quickly to manage your own online store and add your products by creating an account on our site. 
        You don't have to worry about anything but the development of your business.</p>
        <div class="d-md-flex justify-content-md-center">
          <button type="button" class="btn btn-lg btn-secondary fw-bold border-white bg-black">Get started</button>
        </div>
      </div>
    </div>
  </div>
  
    </body>
  );
}
      /* <main class="display-5 fw-bold lh-1 mb-3">
    <h1>
	  You're one account away from your successful online business.</h1>
    <p className="lead">Get started with your online shop.</p>
    <p className="lead">
      <a href="#" className="btn btn-lg btn-secondary fw-bold border-white bg-black">Get started</a>
    </p>
    <div className="">
    <img src={email} className="img-fluid" alt=""/>
    </div>
  </main> */