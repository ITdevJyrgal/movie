import React from 'react';
import img from "./../../images/Instagram.svg"
import "./../Card/Film"
const Footer = () => {
    return (
        <div>


        <div className="container mx-auto p-10 ">


            <div className="flex justify-around items-center">
                <a href="https://www.motion-web.io/"><h1 className="text-white text-2xl p-10 ">© 2022 «motion-web»</h1>
                </a>
                <a href="https://www.instagram.com/motion_web/?hl=ru"><img src={img} alt="img"/></a>
            </div>
        </div>
        </div>
    );
};

export default Footer;