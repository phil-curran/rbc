import React from 'react';
import rbcLogo from '../assets/images/rbcLogo_smol_white.svg';

class NavbarComponent extends React.Component {
  render() {
    return (
      <nav className="navbar sticky-top navbar-expand-sm navbar-dark bg-dark">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <a className="navbar-brand" href="#"><img src={rbcLogo} /></a>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNavAltMarkup">
            <div className="navbar-nav nav-fill">
              <a className="nav-item nav-link active" href="#">Home</a>
              <a className="nav-item nav-link" href="#onTap">On Tap</a>
              <a className="nav-item nav-link" href="#events">Events</a>
              <a className="nav-item nav-link" href="#about">About Us</a>
              <a className="nav-item nav-link" href="#contact">Contact Us</a>
            </div>
          </div>
      </nav>
      );
      }
    };
    
export default NavbarComponent;