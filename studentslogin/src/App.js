import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./pages/Home";
import Register from "./pages/Register";
import Signin from "./pages/Signin";

import Navbar from "./components/Navbar";

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="register/" element={<Register />} />
          <Route path="signin/" element={<Signin />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
