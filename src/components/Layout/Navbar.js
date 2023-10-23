import React from "react";
import Navbar from "react-bootstrap/Navbar";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Navbarcustom = ({ icon, title }) => {
  return (
    <nav
      expand="lg"
      style={{ backgroundColor: "#002147", 
      boxShadow: "1px 1px 7px #002147",
      position: 'sticky',  
      top: 0,             
      left: 0,            
      right: 0,           
      zIndex: 1000        
    }}
      
      className="navbar navbar-light border"
    >
    
    <Navbar.Brand href="#home" style={{ fontSize: "1rem", color: "white" }}>
        <i style={{ fontSize: "1.5rem", color: "white" }} className={icon}></i>
        {title}
    </Navbar.Brand>

      <ul>
        <li style={{ display: "inline" }}>
          <Link to="/" style={{ color: "white", marginRight: '20px'}}>
            Home
          </Link>
        </li>
        <li style={{ display: "inline" }} className="ml-4">
          <Link to="/about" style={{ color: "white", marginRight: '10px' }}>
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
};

Navbarcustom.defaultProps = {
  title: "InsightHub Searcher ",
  icon: "fa fa-github",
};

Navbarcustom.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Navbarcustom;
