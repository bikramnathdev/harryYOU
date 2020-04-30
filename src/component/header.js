import React, { Component } from "react";
import hogwarts from '../assets/images/hogwarts.png';

export default class header extends Component {
  render() {
    return (
        <nav>
          <div className="nav-wrapper container">
            <a href="#!" className="brand-logo">
            <img className='logo' src={hogwarts} alt="Smiley face"/>
            </a>
            {/* <ul className="right hide-on-med-and-down">
              <li>
                <a href="sass.html">
                  <i className="material-icons">search</i>
                </a>
              </li>
              <li>
                <a href="badges.html">
                  <i className="material-icons">view_module</i>
                </a>
              </li>
              <li>
                <a href="collapsible.html">
                  <i className="material-icons">refresh</i>
                </a>
              </li>
              <li>
                <a href="mobile.html">
                  <i className="material-icons">more_vert</i>
                </a>
              </li>
            </ul> */}
          </div>
        </nav>
    );
  }
}
