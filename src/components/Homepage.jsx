import Aos from 'aos'
import React, { useEffect } from 'react'
function Homepage() {
  useEffect(()=>{
Aos.init();
  })
  return (
<div class="home">
            <div class="left pb-5">
        <h1 class=" me-5 mt-3">Exceedingly <br /> Good Jewelry</h1>
            <div class=" me-5 mt-5 texts">
            <p> We have a range of products to treat and protect your skin including: Skin care products for the face, neck and scalp.      
</p>            
</div>
<div>
        <button class="get btn  me-5 mt-3">Get Started <i class="fa-solid fa-right-long"></i></button>
    
</div>            
<div id="testimonialCarousel" class="carousel slide   mt-3" data-bs-ride="carousel">
    <div class="carousel-inner">
  
      <div class="carousel-item active">
        <div class="testimonial">
          <div class="line"></div>
          <div class="review">
            <div class="star">
              <ul>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
              </ul>
            </div>
            <p>"It's the perfect solution for our business. Definitely worth the investment. This is unbelievable!"</p>
            <h5>Prince Jennings</h5>
            <h6>Designer</h6>
          </div>
        </div>
      </div>
  
      <div class="carousel-item">
        <div class="testimonial">
          <div class="line"></div>
          <div class="review">
            <div class="star">
              <ul>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
              </ul>
            </div>
            <p>"It's the perfect solution for our business. Definitely worth the investment. This is unbelievable!"</p>
            <h5>Alexis Johnson</h5>
            <h6>Developer</h6>
          </div>
        </div>
      </div>
  
      <div class="carousel-item">
        <div class="testimonial">
          <div class="line"></div>
          <div class="review">
            <div class="star">
              <ul>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
                <li><i class="fa-solid fa-star fa-sm" style={{color: '#FFD43B'}}></i></li>
              </ul>
            </div>
            <p>"It's the perfect solution for our business. Definitely worth the investment. This is unbelievable!"</p>
            <h5>Jordan Lee</h5>
            <h6>Manager</h6>
          </div>
        </div>
      </div>
  
    </div>
  
  </div>      
<button class="last-btn btn me-5 mt-3">Get Started <i class="fa-solid fa-right-long"></i></button>
</div>  

</div>
  )
}

export default Homepage
