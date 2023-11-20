import React from "react";
import Header from "../Componants/HEADER/Header";
import Project_card from "../Componants/Card/Project_card";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import img1 from "../assets/bg1.avif"
import img2 from "../assets/bg2.avif"
import img3 from "../assets/bg3.jpg"
import img4 from "../assets/bg4.jpeg"
import img5 from "../assets/bg5.jpg"







const Home = () => {

  
 
const arr =[
{
  title: "title one",
  backgroundImage: img1
},
{
  title: "title two",
  backgroundImage: img2
},
{
  title: "title three",
  backgroundImage: img3
},
{
  title: "title four",
  backgroundImage: img4
},
{
  title: "title five",
  backgroundImage: img5
},
]
  return (
    <>
   
      <div className="mainContainer">
      
        <Header />

        <div className="mainBannerContainer">
          <div className="forIntro">
            <p>Hi, I'm Alishba!</p>
            <p className="description">
              Bridging the gap between aesthetics and usability. - UX/UI
              Designer
            </p>
          </div>
          <div  className="arrowDownIcon">
            <KeyboardArrowDownIcon style={{width:'100px', height:'80px'}} />    
          </div>
        </div>

        <div className="mainProjectArea">
          <div className="projectArea">

            {
              arr.map((item)=>(

                <Project_card title={item.title} backgroundImage={item.backgroundImage}  />
              ))
            }
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
