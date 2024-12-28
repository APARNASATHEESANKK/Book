import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; 
import View from "../Components/View";
import backgroundImg from "../assets/th.jpg";
import Add from "../Components/Add";


function Home() {
  const [addVideoResponse, setAddVideoRsponse] = useState("");
  const navigate = useNavigate(); // useNavigate for programmatic navigation

  const handleLogout = () => {
    // Clear user authentication data
    localStorage.removeItem("authToken"); 
    sessionStorage.clear();

    // Navigate to login  page
    navigate("/login");
  };

  return (
    <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundPosition: "center", minHeight: "100vh", marginTop: "-48px",}}>
      <div className="container my-5 d-flex justify-content-between align-items-center">
        <Add setAddVideoRsponse={setAddVideoRsponse} />
        <div className="d-flex align-items-center">
     <Link to={"/"} className="text-decoration-none  me-4 " style={{ fontSize: "18px", color: "white",padding:'8px',backgroundColor:'green' }} >Back To</Link>
          <button onClick={handleLogout}className="btn btn-danger"style={{ fontSize: "18px" }}>Logout</button>
        </div>
      </div>

      <div className="container my-5 row p-5">
        <div className="col-lg-6">
          <h3 className="text-info">Books</h3>
          <View addVideoResponse={addVideoResponse} />
        </div>
      </div>
    </div>
  );
}

export default Home;
