import React from "react";
import Header from "../Componants/HEADER/Header";
import { Button, TextField } from "@mui/material";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <Header />
      <h1 
        // style={{ textAlign: "center", fontSize: "50px", margin: "0px" }}
        >
          Contact
        </h1>
<div className="mainWrapper">
      <div className="mainContainer">
      
        <div
          // style={{
          //   display: "flex",
          //   flexDirection: "column",
          //   alignItems: "center",
          //   gap: "45px",
          //   marginTop: "100px",
          // }}
          className="fieldContainer"
        >
          <TextField
            // style={{ width: "500px" }}
            id="outlined-basic"
            label="Name"
            variant="outlined"
            className="txtFieldStyle"
          />
          <TextField
            // style={{ width: "500px" }}
            id="outlined-basic"
            label="EmailAddress"
            variant="outlined"
            className="txtFieldStyle"

          />

          <TextField
            // style={{ width: "500px" }}
            id="outlined-basic"
            label="Massage"
            variant="outlined"
            multiline
            rows={5}
            className="txtFieldStyle"
          />
         
        </div>
        <div className="btnStyleFlex"  >
          <Button style={{color:'black'}} className="btnStyle"  >Submit</Button>

          </div>
      </div>

</div>
    </div>
  );
};

export default Contact;
