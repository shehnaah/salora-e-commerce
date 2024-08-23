import React from 'react'
import earing from '../img/lady-image.jpg'

function Collections() {
  return (
    <div>
      <section className="collections">

<div className="grid-collection">
        <div className="itm itm1">
        <div className="background-shapes ">
        <div className='side1' ></div>
  <img className='bgimg' src={earing} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
  <div className='side2' ></div>
  </div>
        </div>
        <div className="itm itm2" >
        <div className='collection-content'>
        <p className="subtitle">THE TEAM THAT MADE OUR JOB</p>
        <h1>Jewelry for Everybody</h1>
        <p className="description">We have a range of products to treat and protect your skin including: Skin care products for the face, neck and scalp.</p>
        <ul className="features-list">
            <li><i className="fa-solid fa-check fa-sm" style={{color:'#359e2e'}}></i> Nonstop Jewelry</li>
            <li><i className="fa-solid fa-check fa-sm" style={{color:'#359e2e'}}></i> Style And Form</li>
            <li><i className="fa-solid fa-check fa-sm" style={{color:'#359e2e'}}></i> Jewelry For Everybody</li>
        </ul>
  
</div>  
        </div>
        <div className="itm itm3">
        <div className="background-shapes ">
        <div className='side2' ></div>
        <img src={earing} alt="" style={{width:'100%',height:'100%',objectFit:'cover'}}/>
        <div className='side1' ></div>

  </div>
        </div>
    </div>

</section>

    </div>
  )
}

export default Collections
