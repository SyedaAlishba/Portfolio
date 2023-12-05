import React, { useState } from "react";
import "./cardStyle.css";
import { Link } from "react-router-dom";

const Project_card = (props) => {

  const[flag,setFlag] =useState(false)
  return (
    <Link style={{textDecoration:"none"}} target="_blank" rel="noopener noreferrer" to={props.link}>
    <div
     onMouseOver={()=>setFlag(true)}
     onMouseLeave={()=>setFlag(false)}

      style={{ backgroundImage: `url(${props.backgroundImage})` , backgroundSize:"100% 90%", backgroundRepeat:"no-repeat"}}
      className="cardContainer"
    >
      <p
      
        style={{
          textAlign: "center",
          display: flag === true ? "block" : 'none'
        }}
      >
        {props.title}
      </p>
    </div>
    </Link>
  );
};

export default Project_card;
