import ring from '../img/holding.png'
import necklace from '../img/necklace.png'
import bracelet from '../img/bracelet (2).png'
import earing from '../img/earings.png'
import React, { useEffect } from 'react'
import Aos from 'aos'

function Category() {
  
  useEffect(()=>{
    Aos.init();
      })
    
  return (
    <div>
      <section className="category">
    <div className="grid-container">
        <div className="item item1 " data-aos="fade-right">
            <div className='necklace'>
            <h5>Necklace</h5>
            <p>Modern Style</p>
            <a className="btn">Get Started<i className="fa-solid fa-right-long"></i></a>
            </div>
            <img src={necklace} alt="" style={{width:'100%',height:'100%'}} />
        </div>
        <div className="item item2" data-aos="fade-down">
        <div className='bracelet'>
            <h5>Bracelets</h5>
            <p>Modern Style</p>
            <a className="btn">Get Started<i className="fa-solid fa-right-long"></i></a>
            </div>
            <div style={{width:'100%',height:'100%'}}><img src={bracelet} alt=""  /></div>
        </div>
        <div className="item item3" data-aos="fade-left">
          <div className='earing'>
                <h5>Earings</h5>
                <p>Modern Style</p>
                <a className="btn">Get Started<i className="fa-solid fa-right-long"></i></a> 
                </div>
                <img src={necklace} alt="" />
        </div>
        <div className="item item4" data-aos="fade-up">
                    <div className='ring'>
                    <h5>Rings</h5>
                    <p>Modern Style</p>
                    <a className="btn">Get Started<i className="fa-solid fa-right-long"></i></a>    
                    </div>                
<div><img src={ring} alt="" style={{width:'100%',height:'100%'}}/></div>

        </div>
    </div>
</section>

    </div>
  )
}

export default Category
