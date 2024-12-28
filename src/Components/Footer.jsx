import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div style={{marginTop:'150px',backgroundColor:'black'}} className='w-100 p-3 '>
    <div style={{height:'350px',width:'100%'}} className='container mt-5 w-100 '>
      <div className='d-flex justify-content-between flex-wrap w-100'>
        <div style={{width:'400px'}}>
       <h5> <i className='fa-solid fa-book'></i>&nbsp;BookHub</h5>
          <p className='text-white'>"Step into a sanctuary of stories and imagination. From the wisdom of ancient tomes to the thrill of modern adventures, BookHub opens the door to countless worlds. Every book is a new journey, every page a step closer to wonder. Dive in, explore, and let your curiosity guide you through the magic of reading."</p>
          <p className='text-white'>code liscensed luminar,</p>
          <p className='text-white'>Curently v5.3.2</p>
        </div>
        <div className='d-flex flex-column'>
          <h5>Links</h5>
          <Link to={'/'} style={{textDecoration:'none',color:'white'}}>Landing</Link>
          <Link to={'/login'} style={{textDecoration:'none',color:'white'}}>Login</Link>
          <Link to={'/home'} style={{textDecoration:'none',color:'white'}}>Home</Link>
        </div>
        <div className='d-flex flex-column'>
          <h5>Guids</h5>
          <Link to={''} style={{textDecoration:'none',color:'white'}}>React</Link>
          <Link to={''} style={{textDecoration:'none',color:'white'}}>React Bootstrap</Link>
          <Link to={''} style={{textDecoration:'none',color:'white'}}>React Router</Link>
        </div>

        <div className='d-flex flex-column'>
          <h5>Contact Us</h5>
          <div className='d-flex'>
            <input className='form-center' type="text" placeholder="enter the email" />
            <button className='btn btn-dark ms-2'><i class="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className='d-flex justify-content-between mt-5'>

             <a href=''className='text-white fs-5'><i class="fa-brands fa-facebook"></i></a>
             <a href=''className='text-white fs-5'><i class="fa-brands fa-twitter"></i></a>
             <a href=''className='text-white fs-5'><i class="fa-brands fa-instagram"></i></a>
             <a href=''className='text-white fs-5'><i class="fa-brands fa-linkedin"></i></a>
             <a href=''className='text-white fs-5'><i class="fa-brands fa-github"></i></a>
             <a href=''className='text-white fs-5'><i class="fa-solid fa-phone"></i></a>

          </div>
        </div>

      </div>
      <p className='text-center mt-4 fw-bold text-white'>Copyright &copy; Aug24 batch 2024, Media Player .Built with react</p>
    </div>
    </div>
  )
}

export default Footer