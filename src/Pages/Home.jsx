import React from "react";
import Header from "../Componants/HEADER/Header";
import Project_card from "../Componants/Card/Project_card";
import { useRef } from 'react';
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import img1 from "../assets/bg1.avif";
import img2 from "../assets/bg2.avif";
import img3 from "../assets/bg3.jpg";
import img4 from "../assets/bg4.jpeg";
import img5 from "../assets/bg5.jpg";
import alishbaCV from "../../public/AlishbaCV.pdf"
import BackToTopBtn from "../Componants/BackToTopBtn/BackToTopBtn";

const Home = () => {
  const arr = [
    {
      title: "Portfolio",
      backgroundImage: img1,
      link:"https://alishba.vercel.app/"
    },
    {
      title: "Admin Dashboard",
      backgroundImage: img2,
      link:"https://dashboardalishba.vercel.app/"

    },
    // {
    //   title: "title three",
    //   backgroundImage: img3,
    // },
    // {
    //   title: "title four",
    //   backgroundImage: img4,
    // },
    // {
    //   title: "title five",
    //   backgroundImage: img5,
    // },
  ];
  const bottomEl = useRef(null);

  const scrollToBottom = () => {
    bottomEl?.current?.scrollIntoView({ behavior: 'smooth' });
  };
   

  const downloadCV = () => {
    const link = document.createElement('a');
    link.download = 'AlishbaCV.pdf';
    link.href = alishbaCV;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };


  
  return (
    <>
      <div className="mainContainer">
        <Header />

     
        <div className="mainBannerContainer" >

        
          <div className="forIntro">
            <p>Hi, I'm Alishba!</p>
            <p className="description">
              Bridging the gap between aesthetics and usability. - UX/UI
              Designer
            </p>
          
          </div>
         
         <div>
         <div className="downloadCVButton" onClick={downloadCV}>
            <span>Download CV</span>
          </div>
         </div>
          <div className="arrowDownIcon"  onClick={scrollToBottom} style={{ marginLeft: '8px' }}>
            <KeyboardArrowDownIcon
              
              style={{ width: "100px", height: "80px" }}
            />
          </div  >
          
        </div>
       
       
    
        <div className="mainProjectArea"   >
          <div className="projectArea" ref={bottomEl} >
            {arr.map((item) => (
              <Project_card
                title={item.title}
                backgroundImage={item.backgroundImage}
                link={item.link}
              />
            ))}
          </div>
        </div>
        <div>
          <BackToTopBtn />
        </div>
      
      </div>
      

    </>
  );
};

export default Home;
