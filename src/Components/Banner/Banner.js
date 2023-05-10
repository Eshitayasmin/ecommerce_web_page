import React from 'react';
import girl2 from "../../images/two_girl_banner.webp";
import girl from "../../images/girl_banner.webp";

import "./Banner.css";
const Banner = () => {
    const items = [
        {
            title: "Free shipping",
            sub_title: "On order over $1499",
            icon: ""
        }
    ]
    return (
        <div className="d-flex justify-content-evenly  align-items-center">
            <div className="">
                <h1 className="main_title">
                    Choose <br/> your fasion
                </h1>
                <p className='light_text my-4'>Walk dive charts good items what’s anyway stakeholder it.<br/> Those that’s call important incentivize before.</p>
                <button className='button'>Shop Now</button>
            </div>
            <div className="d-flex gap-4">
                <img className="two_girl image" src={girl2}/>
                <img className='girl_image image' src={girl}/>
            </div>
        </div>
    );
};

export default Banner;