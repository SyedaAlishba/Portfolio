import React, { useState } from "react";
import "../../Pages/home.css";
import { Link } from "react-router-dom";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  // Attach event listener when the component mounts
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    // Detach event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <div
        className="mainHeader"
        style={{
          position: "sticky",
          top: "0",
          backgroundColor: scrolling ? "white" : "#fa2a2a",
          display:'flex',
          flexDirection:'row',
          flexWrap:'wrap'
          
        }}
      >
        <div className="left">
          <Link
            style={{
              textDecoration: "none",
              color: scrolling ? "#fa2a2a" : "white",
            }}
            to={"/about"}
          >
            About
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: scrolling ? "#fa2a2a" : "white",
            }}
            to={"/"}
          >
            Work
          </Link>
          <Link
            style={{
              textDecoration: "none",
              color: scrolling ? "#fa2a2a" : "white",
            }}
            to={"/contact"}
          >
            Contact
          </Link>
        </div>
        <div
          className="middle"
          style={{
            textDecoration: "none",
            color: scrolling ? "#fa2a2a" : "white",
          }}
        >
          Syeda Alishba Kazmi
        </div>
        <div
          className="right"
          style={{ display: "flex", gap: "20px", marginRight: "10px" }}
        >
         <a href="https://www.linkedin.com/in/syeda-alishba-kazmi-0623b7290/" >
         <LinkedInIcon style={{ color: scrolling ? "black" : "white" }} />

         </a>
         <a href="https://github.com/SyedaAlishba" >
         <GitHubIcon style={{ color: scrolling ? "black" : "white" }} />

         </a>
        </div>
      </div>
    </>
  );
};

export default Header;
