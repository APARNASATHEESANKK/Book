import React from 'react'
import { Link } from 'react-router-dom'
import landingImg from '../assets/b2.webp'

function Landing() {
  return (
   
   <div className='container mt-5'>
      <img style={{marginLeft:'-120px',width:'1528px',height:'100vh', marginTop:'-48px'}} src={landingImg} alt="" />
     <div className='col-lg-5'>
    
      <h3 style={{fontFamily:"Sevillana", marginTop:'-600px', color:'white',fontSize:'60px'}}>Welcome to <span className='text-warning'>BookHub</span> </h3>
      <p style={{fontSize:'25px',color:'white'}}>"Immerse yourself in a world of stories, knowledge, and imagination. Explore timeless classics, discover new favorites, and let the pages take you on unforgettable journeys. Whether you're a lifelong reader or just beginning your literary adventure, BookHub is your ultimate gateway to the world of books."</p>
      <Link to={'/login'}> <button style={{fontSize:'30px'}} className="btn btn-warning">Login</button></Link>
      </div>
   </div>
   
  )
}

export default Landing