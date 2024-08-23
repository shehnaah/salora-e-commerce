import React, { useEffect } from 'react'

function Nav() {
  // to enable collapsed toggle button 
  useEffect(()=>{
    const handleScroll = () => {
      const navbar = document.querySelector('.navbar');
      if (window.pageYOffset > 50) {
        navbar.classList.add('sticky');
      } else {
        navbar.classList.remove('sticky');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
<div>
<nav class="navbar navbar-expand-lg bg-transparent fixed-top">
  <div class="container-fluid">
    {/* offset navbar in collapsed screen */}
    <a class="navbar-brand" href="#">Salora</a>
    <button class="navbar-toggler d-lg-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="offcanvas offcanvas-end d-lg-none" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
      <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="offcanvasNavbarLabel" style={{paddingLeft:'50px',fontSize:'1.8rem'}} >Salora</h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
      </div>
      <div class="offcanvas-body">
        <ul class="navbar-nav justify-content-end flex-grow-1 pe-3 text-black">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Contact Us</a>
          </li>
        </ul>
        <button class="btn btn-light navbar-button disabled text-dark mt-3">
          <i class="fa-solid fa-phone-flip fa-sm"></i> (205) 444-0100
        </button>
      </div>
    </div>
{/* normal navbar in large screensizes */}
    <div class="collapse navbar-collapse d-none d-lg-flex justify-content-between" id="navbarSupportedContent">
      <ul class="navbar-nav mb-2 mb-lg-0 text-black">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Product</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Blog</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact Us</a>
        </li>
      </ul>
      <button class="btn btn-light navbar-button disabled text-dark">
        <i class="fa-solid fa-phone-flip fa-sm"></i> (205) 444-0100
      </button>
    </div>
  </div>
</nav>
  
</div>  )
}

export default Nav
