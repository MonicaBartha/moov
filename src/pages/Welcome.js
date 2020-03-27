import React, { Component } from "react";
import "./welcome.css";
import Logo from "../assets/img/logoMoov.png";
import {Link}from "react-router-dom";

class Welcome extends Component {
  render() {
    return (
      <div className="section_">
<<<<<<< HEAD
        <img className="imgCustom" src={Logo} />
=======
        <img className="imgCustom" alt="Logo" src={Logo} />
>>>>>>> da9227250bc3c2d08f627bde87a9f321bfa0565e
        <Link to="/Home">
        <button className="button_">Entrar</button>
        </Link>
      </div>
    );
  }
}

export default Welcome;
