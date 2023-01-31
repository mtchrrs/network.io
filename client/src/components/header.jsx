import React from "react";
import "../styles/header.css";
import Logo from "../assets/networkio-logo.png"
import { Link } from "react-router-dom";

function Header() {
    return (
        <div className="header">
            <div className="top">
                <p className="name-link">
                    <Link to={`${process.env.PUBLIC_URL}/landing`}>network.io</Link>
                </p>
                
                <div>
                    <img src={Logo} className="logo" alt="Network.io Logo" />
                </div>
                

                <ul className="navlist">
                    
                    <li className="link-signup">
                        <Link to={`${process.env.PUBLIC_URL}/signup`}>connect</Link>
                    </li>
                    <li className="link-login">
                        <Link to={`${process.env.PUBLIC_URL}/login`}>login</Link>
                    </li>

                </ul>
            </div>
            <div className="bottom"></div>
            
        </div>
    )
}

export default Header;