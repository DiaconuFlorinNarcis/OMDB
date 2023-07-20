import React, { Component } from 'react';
import logo from '../../assets/img/logo.png';
import { Link } from 'react-router-dom';
import { Title } from '../Title';

export class NavBar extends Component {
  render () {
    return (
      <nav className="navbar navbar-dark blue-gradient fixed-top">
        <Link className="navbar-brand" to="/">
          <img src={logo} height="30" alt="logo React" className="logo"></img>
          <Title>Titles</Title>
        </Link>
      </nav>
    )
  }
}
