import React from "react";
import "../../Pages/home.css";
import { Link } from "react-router-dom";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Header = () => {
  return (
    <>

        
        <div className="mainHeader">
       
          <div className="left">
            <Link style={{textDecoration:"none"}} to={'/about'}>About</Link>
            <Link style={{textDecoration:"none"}} to={'/'}>Work</Link>
            <Link style={{textDecoration:"none"}} to={'/contact'}>Contact</Link>
          </div>
          <div className="middle">Syeda Alishba Kazmi</div>
          <div className="right" style={{display:'flex', gap:'20px',marginRight:'10px' }}>
            <LinkedInIcon style={{color:"white"}}  />
            <GitHubIcon style={{color:'white'}} />
          </div>
        </div>

       
    </>
  );
};

export default Header;
