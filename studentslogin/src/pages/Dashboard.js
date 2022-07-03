import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from 'react-router';


function Dashboard() {
  const navigate = useNavigate();

  const [info, setInfo] = useState({
    name: '',
    email: '',
    phone: ''
  })


  useEffect(() => {
    // declare the data fetching function
    const fetchData = async () => {
      let url = 'http://localhost:5000/api/auth/dashboard';

      let options = {
        method: 'GET',
        url: url,
        headers: {
          authToken: localStorage.getItem('authToken')
        }
      }

      try {
        let response = await axios(options);
        console.log(response);
        setInfo({
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone
        })
      } catch (error) {
        navigate('/')
      }
    }

    // call the function
    fetchData()
  })

  return (
    <div className="w-50 p-3 container mt-2 w-100 p-3">
      <div className="row d-flex justify-content-center align-items-center bg-dark">
        <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1 ">
          <p className="text-center h1 mt-2 mb-1 text-white">Welcome, {info.name}</p>

          <p className="text-center h1 fw-bold mt-2 mb-1 text-white"></p>

          <p className="text-center fw-bold mt-2 mb-1 text-white">
            Your phone is {info.phone}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
