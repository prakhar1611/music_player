import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import * as ReactBootstrap from "react-bootstrap";
import Navbar from "react-bootstrap/Navbar";
import "./styles.css";
const Navbarr = () => {
  return (
    <div>
      <Navbar className="navbarrrr" fixed="top" bg="">
        <Navbar.Brand href="#home">
          <img
            src="https://png.pngtree.com/png-clipart/20190515/original/pngtree-music-and-live-music-logo-with-neon-light-effect-vector-png-image_3669646.jpg"
            width="100"
            height="100"
            className="d-inline-block align-top"
            alt="React Bootstrap logo"
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
};
export default Navbarr;
