import React, { useEffect, useState } from 'react'
import earing from '../img/lady-image.jpg'
import Aos from 'aos'

function Special() {
    const products = [
        { id: 1, title: 'Lashi Golden Necklace', price: '$400' },
        { id: 2, title: 'Monochrom Rings', price: '$200' },
        { id: 3, title: 'Special Golden Earrings', price: '$300' },
        { id: 4, title: 'Miro Jewelry Bracelets', price: '$260' },
      ];
      // to apply card in screensize less than870
      const [isLargeScreen, setIsLargeScreen] = useState (window.innerWidth > 870);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth > 870);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);
  return (
      <section className="special">
        <div className="special-products">
          <div className="head">
            <p className="subtitle">FOR YOU</p>
            <h1>Special Product</h1>
          </div>
   <div className="product-grid">
      {products.map((product) =>
        isLargeScreen ? (
          <div key={product.id} className="product-item" data-aos="zoom-in-up">
            <div className="product-info">
              <span className="discount">OFF 60%</span>
              <h2>{product.title}</h2>
              <p className="price">{product.price}</p>
            </div>
            <div className="product-image">
            <button href="#" className="cta-link">
                Get Started <i className="fa-solid fa-right-long"></i>
              </button>
              <div
                className='product-img'
              />
            </div>
          </div>
        ) : (
          <div key={product.id} className="card" data-aos="zoom-in" style={{ width: '100%' }}>
            <img
              className="card-img-top"
              src={earing}
              alt={product.title}
              style={{position:'relative'}}
            />
              <button href="#" className="cta-link img-btn">
                Get Started <i className="fa-solid fa-right-long"></i>
              </button>

            <div className="product-info" style={{ padding: '30px', width: '100%' }}>
              <span className="discount">OFF 60%</span>
              <h2 style={{ width: '100%' }}>{product.title}</h2>
              <p className="price">{product.price}</p>
            </div>
          </div>
        )
      )}
    </div>
    </div> 

</section>
  );}

export default Special
