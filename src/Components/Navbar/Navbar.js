import React from 'react';
import logo from "../../images/emart_logo.webp";
import './Navbar.css';
const Navbar = () => {
    return (
        <div className="d-flex justify-content-around">
              <div>
                  <img className='logo' src={logo}/>
              </div>
              <div className="d-flex gap-4">
                 <p>Demo</p>
                 <p>Demo</p>
                 <p>Demo</p>
                 <p>Demo</p>

              </div>
              <div className="d-flex gap-4">
                 <p>Demo</p>
                 <p>Demo</p>
                 <p>Demo</p>
                 <p>Demo</p>
              </div>
        </div>
    );
};

export default Navbar;