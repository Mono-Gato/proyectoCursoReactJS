import React from "react";
import { Link } from "react-router-dom";

import './styles/Home.css'
import Astronauts from '../images/astronauts.svg'
import LogoConf from '../images/platziconf-logo.svg'

class Home extends React.Component {
  render() {
    return (
      <React.Fragment>
        <div className="Home">
          <div className="row align-items-center">
            <div className="col-5 Home__container ">
              <img className="img-fluid" src={LogoConf} alt="Logo Platzi Conf" />
              <h1>Print your badges</h1>
              <p>The easiest way to manage your conference</p>
              <Link to="/badges" className="btn btn-primary" >Start now</Link>
            </div>
            <div className="col-7">
              <img className="d-flex img-fluid justify-content-start" src={Astronauts} alt="Astronauts" />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default Home;
