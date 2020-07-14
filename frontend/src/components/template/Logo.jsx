import "./Logo.css";
import Logo from '../../assets/img/logo.png'
import React from "react";

export default (props) =>
 <aside className="logo">
    <a href="/" className="logo">
        <img src={Logo} alt="logo"/>
    </a>
</aside>;
