import React,{useState, useEffect} from 'react'
import "./backToTopBtnStyle.css"

const BackToTopBtn = () => {
const [backToTopButton, setBackToTopButton] = useState(false)

useEffect(()=>{
    window.addEventListener("scroll", ()=>{
        if (window.scrollY > 100) {
            setBackToTopButton(true)
        } else {
            setBackToTopButton(false)
            
        }
    })
}, [])

const scrollUp = () =>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


  return (
    <div>{
        backToTopButton &&(
            <button className='backToTopBtn' onClick={scrollUp} style={{
                borderRadius:"50%",
                border:"none",
                padding:"auto",
                position:"fixed",
                bottom:"50px",
                right:"50px",
                height:"50px",
                width:"50px",
                fontSize:"50px"
            }}>^</button>
        )
    }</div>
  )
}

export default BackToTopBtn