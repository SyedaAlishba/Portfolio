import Header from "../Componants/HEADER/Header";
import Project_card from "../Componants/Card/Project_card";
import { useRef } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import img1 from "../assets/portfolio.png";
import img2 from "../assets/Dashboard.jpg";
import img3 from "../assets/FloorPlan.png";

import alishbaCV from "../../public/Alishba_Cv_Portfolio.pdf";
import BackToTopBtn from "../Componants/BackToTopBtn/BackToTopBtn";

const Home = () => {
  const arr = [
    {
      title: "Portfolio",
      backgroundImage: img1,
      link: "https://alishba.vercel.app/",
    },
    {
      title: "Admin Dashboard",
      backgroundImage: img2,
      link: "https://dashboardalishba.vercel.app/",
    },
    {
      title: "Floor Plan",
      backgroundImage: img3,
      link: "https://floor-plan-zeta.vercel.app/",
    },
  ];
  const bottomEl = useRef(null);

  const scrollToBottom = () => {
    bottomEl?.current?.scrollIntoView({ behavior: "smooth" });
  };

  const downloadCV = () => {
    const link = document.createElement("a");
    link.download = "Alishba_Cv_Portfolio.pdf";
    link.href = alishbaCV;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <div className="mainContainer">
        <Header />

        <div className="mainBannerContainer">
          <div className="forIntro">
            <p>Hi, I'm Alishba!</p>
            <p className="description">
            "Fusing aesthetics seamlessly with usability in the user interface - Front-end Developer at your service"
            </p>
          </div>

          <div>
            <div className="downloadCVButton" onClick={downloadCV}>
              <span>Download CV</span>
            </div>
          </div>
          <div
            className="arrowDownIcon"
            onClick={scrollToBottom}
            style={{ marginLeft: "8px" }}
          >
            <KeyboardArrowDownIcon style={{ width: "100px", height: "80px" }} />
          </div>
        </div>

        <div className="mainProjectArea">
          <div className="projectArea" ref={bottomEl}>
            {arr.map((item, index) => (
              <Project_card
              key={index}
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
