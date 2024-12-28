import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import backgroundImg from '../assets/b1.png'; 

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/home'); // Navigate to the Home page
  };

  return (
    // Main container with the background image
    <div style={{ backgroundImage: `url(${backgroundImg})`, backgroundPosition: 'center', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px'}} >
      <div className="text-center text-white mb-4" style={{ position: 'absolute',top: '10%',left: '50%',transform: 'translateX(-50%)',fontFamily: 'Sevillana'}}>
        <h1 style={{ fontSize: '3rem' }}>WELCOME TO BOOKHUB</h1>
      </div>
      {/* Login card */}
      <div className="card p-4 shadow"style={{maxWidth: '400px', width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.9)', // Add transparency 
      borderRadius: '10px',}}>
        <h2 className="text-center mb-4">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label"> Email</label>
            <input type="email"id="email"className="form-control"value={email}onChange={(e) => setEmail(e.target.value)}required/>
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label"> Password </label><input type="password" id="password" className="form-control" value={password}onChange={(e) =>setPassword(e.target.value)}required/>
          </div>
          <button type="submit" className="btn btn-warning w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
