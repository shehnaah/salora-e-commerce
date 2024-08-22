import React from 'react'
import earing from '../img/lady-image.jpg'
import Aos from 'aos'
function Bridge() {
  return (
    <div>
      <div className="bridge">
  <div className="container3">
    <div className="header">
        <p className="subtitle">The Features</p>
        <h1>Bridge That Gap With Jewelry</h1>
    </div>
      <div className="grids">
    <div className="grid-item" data-aos="zoom-in">
        <div className="icon"><i className="fa-solid fa-bars fa-2xl" style={{color:'white'}}></i></div>
        <h2>Soft Material</h2>
        <p>The versatile space makes it easy to keep a fresh supply of ingredients</p>
    </div>
    <div className="grid-item" data-aos="zoom-in">
        <div className="icon"><i className="fas fa-gem fa-2xl"></i></div>
        <h2>Gold Quality</h2>
        <p>The versatile space makes it easy to keep a fresh supply of ingredients</p>
    </div>
    <div className="grid-item" data-aos="zoom-in">
        <div className="icon"><i className="fas fa-ruler-combined fa-2xl"></i></div>
        <h2>Unique Design</h2>
        <p>The versatile space makes it easy to keep a fresh supply of ingredients</p>
    </div>
    <div className="testimonial2" data-aos="zoom-in">
      <div className="review2">
        <div className="star2">
          <ul>
            <li><i className="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
            <li><i className="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
            <li><i className="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
            <li><i className="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
            <li><i className="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
          </ul>
        </div>
        <p>"It's the perfect solution for our business. Definitely worth the investment. This is simply unbelievable!"</p>
<div className='author'>
          <img src={earing} alt="" style={{width:'50px',height:'50px',borderRadius:'100%'}}/>
          <div>
            <h5>Alexis Johnson</h5>
            <h6>Developer</h6> 
</div>
</div>     
 </div>
    </div>

</div>

  </div>
</div>
</div>

  )
}

export default Bridge
