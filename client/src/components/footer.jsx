import React from "react"; 
import "../styles/footer.css";
import landingImage from '../assets/landing-img.png';
// import Twitter from "../assets/twitter-logo.png";
// import Linkedin from "../assets/linkedin-logo.png";
// import Instagram from "../assets/instagram-logo.png";

function Footer() { 
    return ( 
        <div class="footer">
            <img src={landingImage} className="img" alt="Network.io Example" />
        </div>
    ) 
} 
     
export default Footer;