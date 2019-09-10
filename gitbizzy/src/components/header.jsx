import React, { Component } from 'react'

export default class Header extends Component {
  render() {
    return (

      <div className="container-fluid">
       <div className="row align-items-center justify-content-center">
         <div className>
           <nav className="site-navigation position-relative text-right" role="navigation">
             <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
               <li><a href="#home-section" className="nav-link">Home</a></li>
               <li><a href="#about-section" className="nav-link">About</a></li>
               <li><a href="#services-section" className="nav-link">Blogs</a></li>
             </ul>
           </nav>
         </div>
         <div className=" text-center mx-5">
           <h1 className="m-0 site-logo"><a href="index.html">Dillon</a></h1>
         </div>
         <div className="text-left">
           <nav className="site-navigation position-relative" role="navigation">
             <ul className="site-menu main-menu js-clone-nav mr-auto d-none d-lg-block">
               <li><a href="#portfolio-section" className="nav-link">Projects</a></li>
               <li><a href="#blog-section" className="nav-link">Articles</a></li>
               <li><a href="#contact-section" className="nav-link">Contact</a></li>
             </ul>
           </nav>
           <div className="d-inline-block d-lg-none" style={{position: 'relative', top: '3px'}}><a href="#" className="site-menu-toggle js-menu-toggle float-right"><span className="icon-menu h3" /></a></div>
         </div>
       </div>
     </div>

      )
    }
  }
