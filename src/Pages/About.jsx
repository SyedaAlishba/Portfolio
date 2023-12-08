import React from "react";
import Header from "../Componants/HEADER/Header";
import "./about.css";

const About = () => {
  return (
    <div>
      <Header />
      <div
        className="pageTitle"
        //  style={{ marginTop: "30px", textAlign: "center", marginTop: "50px" }}
      >
        <h1 className="about">About</h1>
        <p
          // style={{
          //   maxWidth: "700px",
          //   margin: "auto",
          //   textAlign: "center",
          //   marginTop: "60px",
          // }}
          className="textPara"
        >
          Hello, I'm Alishba, a dedicated front-end developer with a flair for
          blending design and technology. I did my BS in Software Engineering
          and have been actively involved in the software house for the past 2
          years.  Infusing my work with a unique
          perspective.
          <br /> My passion lies in seamlessly merging aesthetics with
          user-friendly interfaces, transforming concepts into captivating
          narratives through code. Beyond the screen, I draw inspiration from
          the organic beauty of nature, the dynamic world of technology, and the
          ever-evolving realm of art.
        </p>
        <p className="textPara1">
           I invite you to join me in exploring the intersection of
          creativity and technology, where every project is an opportunity to
          craft meaningful and impactful digital stories.
        </p>
      </div>
    </div>
  );
};

export default About;
