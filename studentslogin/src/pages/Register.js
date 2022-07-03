import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from 'axios';



function Register() {

  const history = useHistory();

  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });




  //the following function will change the state of current but remove the state of previous element
  // const inputHandler = (e) =>{
  //   setInputField({[e.target.name]:e.target.value});
  // }


  //this will work properly
  const inputHandler = (e) =>{
    setInputField({...inputField, [e.target.name]:e.target.value});
  }


  const singUpButton = async () => {
    console.log(inputField)
    let url = 'http://localhost:5000/api/auth/signup';

    let options = {
      method: 'POST',
      url: url,
      headers:{

      },
      data:inputField
    }

    try {
      let response = await axios(options);
      console.log(response);      
    } catch (error) {
      console.log("Could'nt send data to server: " + error.message);
    }

    
  }

  return (
    <div className="w-50 p-3 container mt-2">
      <div className="row d-flex justify-content-center align-items-center bg-dark">
        <div className="col-xl-10 order-2 order-lg-1 ">
          <p className="text-center h1 fw-bold mt-5 mb-1 mx-1 mx-md-4 text-white">
            Sign up
          </p>

          <form className="mx-1 mx-md-4">
            <div className="d-flex flex-row align-items-center mb-2 float-left">
              <i className="fas fa-user fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <label className="form-label text-white" htmlFor="name">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="form-control"
                  name="name"
                  placeholder="Type your first last name"
                  value={inputField.name}
                  onChange={inputHandler}
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-2 float-left">
              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <label className=" text-white form-label" htmlFor="email">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="form-control"
                  name="email"
                  placeholder="e.g. example@example"
                  value={inputField.email}
                  onChange={inputHandler}
                />
              </div>
            </div>
            <div className="d-flex flex-row align-items-center mb-2">
              <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <label className="form-label text-white" htmlFor="email">
                  Your Phone
                </label>
                <input
                  type="tel"
                  className="form-control"
                  name="phone"
                  placeholder="e.g. 03124567890"
                  value={inputField.phone}
                  onChange={inputHandler}
                />
              </div>
            </div>

            <div className="d-flex flex-row align-items-center mb-4">
              <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
              <div className="form-outline flex-fill mb-0">
                <label className="form-label text-white" htmlFor="password">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="form-control"
                  name="password"
                  placeholder="Password must be strong"
                  value={inputField.password}
                  onChange={inputHandler}
                />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button onClick={singUpButton} type="button" className="mb-2 btn btn-primary btn-lg">
                Sign up
              </button>
            </div>

            <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
              <Link to="/signin">Already have an account? Sign in</Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
