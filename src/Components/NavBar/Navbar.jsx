import React from 'react';
import logo from '../../assets/bank.png';
// style
import './NavBar.css';

export default function Navbar() {
  return (
    <nav>
      <p className="welcome">Log In</p>
      <img src={logo} alt="Logo" className="logo" />
      <form className="login">
        <input type="text" placeholder="user" className="login__input login__input--user" />
        <input
          type="text"
          placeholder="PIN"
          maxLength="4"
          className="login__input login__input-pin"
        />
        <button className="login__btn">&rarr;</button>
      </form>
    </nav>
  );
}
