import React, { useState } from "react";
import "./cardStyle.css";

const Project_card = (props) => {

  const[flag,setFlag] =useState(false)
  return (
    <div
     onMouseOver={()=>setFlag(true)}
     onMouseLeave={()=>setFlag(false)}

      style={{ backgroundImage: `url(${props.backgroundImage})` }}
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
  );
};

export default Project_card;
