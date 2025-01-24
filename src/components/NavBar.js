import React from 'react'
import { Link } from 'react-router'

// import PropTypes from 'prop-types'


export default function NavBar(props) {
  return (
    <nav className={`navbar navbar-expand-lg bg-${props.mode} navbar-${props.mode}`}>
    <div className="container-fluid">
      <Link className="navbar-brand text-info" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.aboutText}</Link>
          </li>
          
        </ul>
        <div className="modes d-flex">
          <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}  mx-2 `}>
            <input className="form-check-input"  onClick={props.toggleMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Dark Mode</label>
          </div>
        </div>
      </div>
    </div>
  </nav>
  )
}

// NavBar.prototype = {
//     title: PropTypes.string,
//     aboutText: PropTypes.string,
// }

// NavBar.defaultProps = {
//     title: 'default title',
//     aboutText: 'default text'
// };


