import React from "react";
import "../about/about.css";

const About = () => {
    return (
      <div className="about">
        <div className="about-left">
          <div className="about-card bg"></div>
          <div className="about-card">
            <img
              src="https://images.pexels.com/photos/3585047/pexels-photo-3585047.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
              alt=""
              className="about-img"
            />
          </div>
        </div>
        <div className="about-right">
          <h1 className="about-title">About Me</h1>
          <p className="about-sub">
            Hi my name is Dao Tien (HenryTien). I am Font-End Developer. I'm work at PolyText at 1 years.
          </p>
          <p className="about-desc">
            
          </p>
          <div className="about-award">
            <img src="" alt="" className="about-award-img" />
            <div className="about-award-texts">
              <h4 className="about-award-title">International Design Awards 2021</h4>
              <p className="about-award-desc">
                Nemo enim ipsam voluptatem quia voluptas sit aspernatur autodit
                and fugit.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default About
