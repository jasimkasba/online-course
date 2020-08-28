import React from 'react';
import logo from './logo.png'

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
  <a className="navbar-brand" href="#barnd"><img style={{height:"30px"}} src={logo} alt=""/>Programming Hero</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
    <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
      <li className="nav-item active">
        <a className="nav-link" href="#home">Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#course">Courses</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#blog">Blog</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search"/>
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
    );
}

export default Navbar;