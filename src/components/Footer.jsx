import React from 'react'

function Footer() {
  return (
    <div>
<div className="footer">
  <div className="salora">
    <h5>Salora</h5>
    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi magnam accusantium tempora explicabo adipisci, atque </p>
    <h6>Copyright &copy; 2021 Salora</h6>
  </div>
  <div className="touch">
<div><h5>Get in Touch</h5>
</div>    
<div>
      <i className="fa-solid fa-location-dot fa-lg" style={{color: '#ceb592'}}></i>
      <p>8819 Ohio St. South Gate, CA 90280</p>
    </div>
    <div>
      <i className="fa-solid fa-envelope fa-lg" style={{color: '#ceb592'}}></i>
      <p>email@salora.com</p>
    </div>
    <div><i className="fa-solid fa-phone fa-lg" style={{color: '#ceb592'}}></i>
    <p>(205) 555-0100 </p>
  </div>
  </div>
  <div className="social">
    <div className="icons">
<div className="facebook"><i className="fa-brands fa-facebook-f fa-sm" style={{color:'white'}}></i>
</div>      
<div className="facebook"><i className="fa-brands fa-instagram fa-sm" style={{color:'white'}}></i>
</div>      
<div className="facebook"><i className="fa-brands fa-twitter fa-sm" style={{color:'white'}}></i> 
</div>      
<div className="facebook">
  <i className="fa-brands fa-linkedin-in fa-sm" style={{color:'white'}}></i>  
</div>    </div>
    <p>
      Lorem ipsum dolor sit amet, consec tetur adipiscing elit, sed do eiusmod.
    </p>
  </div>
  <div className="news">
    <h5>Subscribe Newsletter</h5>
    <p>Your email</p>
    <input type="text" placeholder="Enter your email..." value=""/>
    <button>SUBSCRIBE</button>
  </div>
<div className='copy'>    
  <h6>Copyright &copy; 2021 Salora</h6>
</div>
</div>

    </div>
  )
}

export default Footer
