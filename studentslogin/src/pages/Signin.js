import React from "react";
import { Link } from "react-router-dom";

function Signin() {
  return (
    <div className="w-50 p-3 container mt-5">
      <div className="row d-flex justify-content-center align-items-center bg-dark">
        <div className="row justify-content-center bg-dark">
          <div className="col-xl-10 order-2 order-lg-1 ">
            <p className="text-center h1 fw-bold mt-5 mb-1 mx-1 mx-md-4 text-white">
              Sign in
            </p>

            <form className="mx-1 mx-md-4">
              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <label className=" text-whiteform-label" htmlFor="email">
                    Your Email
                  </label>
                  <input type="email" id="email" className="form-control" />
                </div>
              </div>

              <div className="d-flex flex-row align-items-center mb-4">
                <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                <div className="form-outline flex-fill mb-0">
                  <label className="form-label text-white" htmlFor="password">
                    Your Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="form-control"
                  />
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <button type="button" className="mb-2 btn btn-primary btn-lg">
                  Sign in
                </button>
              </div>

              <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                <Link to="/register">
                  Don't Have an account yet? Register Now
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signin;
