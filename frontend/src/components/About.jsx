import React from "react";
import { Link } from "react-scroll";
import { HiOutlineArrowRight } from "react-icons/hi";
const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="banner">
          <div className="top">
            <h1 className="heading">ABOUT US</h1>
          </div>
          <p>
            {" "}
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet
            nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sit amet
            nulla auctor, vestibulum magna sed, convallis ex. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
          </p>
          <Link to={"/"}>
            Explore Menu{" "}
            <span>
              <HiOutlineArrowRight />
            </span>
          </Link>
        </div>
        <div className="banner">
          <img src="/about.png" alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
