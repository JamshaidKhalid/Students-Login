import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Signin() {

  const navigate = useNavigate();

  const [inputField, setInputField] = useState({
    email: "",
    password: ""
  });

  const inputHandler = (e) => {
    setInputField({ ...inputField, [e.target.name]: e.target.value });
  }


  const logInButton = async () => {
    console.log(inputField)
    let url = 'http://localhost:5000/api/auth/login';

    let options = {
      method: 'POST',
      url: url,
      headers: {

      },
      data: inputField
    }

    try {
      let response = await axios(options);
      console.log(response);
      if (response.status === 200) {
        toast.success("Login success!");
        localStorage.setItem("authToken", response.data.authToken);
        setTimeout(() => {
          navigate('/dashboard')
        }, 1500);
      }
    } catch (error) {
      console.log("Could'nt send data to server: " + error.message);
      // toast.error(error.message);
      toast.error("Invalid Credentials");
    }
  }



  return (
    <div className="w-50 p-3 container mt-5">
      <ToastContainer />
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
                  <label className=" text-white form-label" htmlFor="email">
                    Your Email
                  </label>
                  <input type="email" id="email" className="form-control" name="email" value={inputField.email} onChange={inputHandler} />
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
                    name="password" value={inputField.password}
                    onChange={inputHandler}
                  />
                </div>
              </div>

              <div className="d-flex justify-content-center">
                <button type="button" className="mb-2 btn btn-primary btn-lg" onClick={logInButton}>
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
