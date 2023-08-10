import { useState } from "react"
import {Link, animateScroll as scroll} from "react-scroll"
function Nav(){ 
const [hover, setHover] = useState(false)
const [active, setActive] = useState(false)
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
function handleClick(){ 
setActive(!active)
}
function handleEnter(){ 
  setHover(true)
}
function handleLeave(){ 
  setHover(false)
}
function handleHover(event){ 
  let iterations = 0;
  const interval = setInterval(() => {
    event.target.innerText = event.target.innerText
      .split("")
      .map((letter, index) => {
        if (index < iterations) {
          return event.target.dataset.value[index];
        }
        return letters[Math.floor(Math.random() * 26)];
      })
      .join("");
    if (iterations >= event.target.dataset.value.length)
      clearInterval(interval);
    iterations += 1 / 3;
  }, 30);
}
    return (
        <nav className="bg-black z-10 fixed">
          <div className={`${active?"flex":"hidden"} fixed flex-col gap-6 p-20  w-[100vw] h-[100vh] translate-y-[-100%] bg-white transition-all ${active?"drop":""}`}> 
          <Link activeClass="active" to="about" smooth="true"><h3  onClick={()=>setActive(!active)} onMouseOver={handleHover} data-value="ABOUT ME" className={`text-5xl m-6 font-medium cursor-pointer lg:text-[70px] hover ${active? "fade-in": null} translate-x-[100vw]`}><a href="#about" data-value="ABOUT ME">ABOUT ME</a></h3></Link>
          <Link activeClass="active" to="skills" smooth="true"><h3 onClick={()=>setActive(!active)} onMouseOver={handleHover} data-value="SKILLS" className={`text-5xl m-6 font-medium cursor-pointer lg:text-[70px] hover ${active? "fade-in": null} translate-x-[100vw]`}><a href="#skills" data-value="SKILLS">SKILLS</a></h3></Link>
          <Link activeClass="active" to="projects" smooth="true"><h3  onClick={()=>setActive(!active)} onMouseOver={handleHover} data-value="PROJECTS" className={`text-5xl m-6 font-medium cursor-pointer lg:text-[70px] hover ${active? "fade-in": null} translate-x-[100vw]`}><a href="#projects"  data-value="PROJECTS">PROJECTS</a></h3></Link>
          <Link activeClass="active" to="contact" smooth="true"><h3  onClick={()=>setActive(!active)} onMouseOver={handleHover} data-value="CONTACT ME" className={`text-5xl m-6 font-medium ${active? "fade-in": null} cursor-pointer lg:text-[70px] hover translate-x-[100vw]`}><a href="#contact" data-value="CONTACT ME">CONTACT ME</a></h3></Link>
        </div>
        <div className={`fixed left-0 right-0  py-5 px-10 flex justify-between md:blur-0  sm:${active?"":"bg-blur"} lg:blur-0`}>
        <Link activeClass="active" to="hero" smooth="true"><h1  onClick={()=>setActive(!active)} style={{color:active?"black":"white"}} className="text-2xl font-bold drop-shadow-lg cursor-pointer z-10 transition-all">ADIL</h1></Link>
        <button onClick={handleClick} style={{border:active?"solid 1px black" : ""}} onMouseEnter={handleEnter} onMouseLeave={handleLeave} className={`h-10 w-10 rounded-full bg-transparent flex flex-col gap-[4px] justify-center items-center cursor-pointer z-10 transition-all ${active?"menu-active": "menu"} outline-none`}>
        <div style={{backgroundColor: hover ? "black" : "rgb(14 165 233)"}} className={`w-[16px] h-[2px] rounded-lg ${active?"line-1 hamburger-active": "hamburger"} transition-all`}></div>
        <div style={{backgroundColor: hover ? "black" : "rgb(14 165 233)"}} className={`w-[16px] h-[2px] rounded-lg ${active?"line-2": null}`}></div>
        <div style={{backgroundColor: hover ? "black" : "rgb(14 165 233)"}} className={`w-[16px] h-[2px] rounded-lg ${active?"line-3": null} transition-all`}></div>
        </button>
        </div>
      </nav>
    )
}
export default Nav