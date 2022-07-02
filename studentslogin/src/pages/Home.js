import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="w-50 p-3 container mt-5">
      <div className="row d-flex justify-content-center align-items-center bg-dark">
        <div className="row justify-content-center bg-dark">
          <div className="col-xl-10 order-2 order-lg-1 ">
            <p className="text-center h1 fw-bold mt-5 mb-1 mx-1 mx-md-4 text-white">
              Welcome
            </p>

            <form className="mx-1 mx-md-4">
              <div className="d-flex justify-content-center mx-4 mt-5 mb-lg-4">
                <Link to="/signin">
                  <button type="button" className="m-2 btn btn-primary btn-lg">
                    Sign in
                  </button>
                </Link>

                <Link to="/register">
                  <button type="button" className="m-2 btn btn-primary btn-lg">
                    Sign up
                  </button>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
