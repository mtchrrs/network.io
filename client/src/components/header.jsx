import React from "react";
import "../styles/header.css";
import Logo from "../assets/networkio-logo.png"
import { Link } from "react-router-dom";
import SignUp from "./signup";
import Login from "./login";

function Header() {
    return (
        <div className="header">
            <div className="top">
                <p className="name-link">
                    <Link to={`${process.env.PUBLIC_URL}/`}>network.io</Link>
                </p>
                
                <div className="logo-cont">
                    <img src={Logo} className="logo" alt="Network.io Logo" />
                </div>
                

                <ul className="navlist">
                    
                    <li className="box link-signup">
                        <Link to={`${process.env.PUBLIC_URL}/signup`} element={<SignUp />}>connect</Link>
                    </li>
                    <li className="link-login">
                        <Link to={`${process.env.PUBLIC_URL}/login`}>login</Link>
                    </li>

                </ul>
            </div>
            <div className="bottom">test</div>
            
        </div>
    )
}

export default Header;