import earing from '../img/lady-image.jpg'
import lady from '../img/lady-jwl.jpg'
import React, { useEffect } from 'react'
import Aos from 'aos'

function Last() {
  useEffect(()=>{
    Aos.init();
      })

  return (
    <div>
<div className='last-div'>
  <div className="last-grid">
    <div className="last last1">
      <div className="img-grid" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
        <img src={earing} alt="" />
      </div>
      <div className="img-grid">
      <img src={lady} alt="" />

      </div>
      <div className="img-grid"  >
      <img src={lady} alt="" />
      </div>
      <div className="img-grid" data-aos="flip-left"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" >
      <img src={earing} alt="" />
      </div>
    </div>
    <div className="last last2">
    <div class="last-container" style={{width:'100%'}}>
  <div class="content">
      <p class="subtitle">The Features</p>
      <h1>Jewelry, The Clever Way</h1>
      <button class="btn">Get Started
        <i class="fa-solid fa-right-long"></i>
      </button>
  </div>
</div>

    </div>
    <div className="last last3">
      <div className="img-grid">
        <img src={earing} alt="" />
      </div>
      <div className="img-grid"  data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
      <img src={lady} alt="" />

      </div>
      <div className="img-grid" data-aos="flip-right"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000">
      <img src={lady} alt="" />
      </div>
      <div className="img-grid"  >
      <img src={earing} alt="" />
      </div>
    </div>

  </div>
</div>
    </div>
  )
}

export default Last
