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
          Hi! I am Zubaria: zoo-baa-riya, not zubairia or zubaira! I did my BS
          in Design & Animation from FJWU and active in the Design Industry for
          4yrs by now. I seek design challenges and yearn for innovation &
          novelty for producing quality<br/> artwork.
        </p>
        <p className="textPara1">
        Designing is one of my key childhood passions. At a very initial stage, I had even used MS
          PowerPoint for designing. A lot of people mock me on the fact, but I
          have always believed that innovation & creativity are the keys to
          design and tools only serve as aids though tools have never been a
          show-stopper for me; My first website was up by 7th Grade. Apart from
          solitary work, I have been into various drawing and painting
          competitions for learning, connectivity and challenge. Doodling at
          minimum in my leisure hours, Design for me is part and parcel of life
          and not just a profession!
        </p>
      </div>
    </div>
  );
};

export default About;
