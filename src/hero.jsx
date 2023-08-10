import { useRef } from "react"
function Hero() { 
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ" 
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
    return(
        <section id="hero" className="flex flex-col justify-center items-center pt-20 min-h-screen">
        <div className="text-center p-10 ">
          <h2 data-value="ADIL"  className="text-center text-[130px] text-white font-black md:text-[250px] lg:text-[300px] p-0 -py-5 cursor-default">ADIL</h2>
          <h3 data-value="Web Developer" onMouseOver={handleHover}  className="text-[25px] py-2 md:text-2xl lg:text-3xl 
          text-white cursor-default">Web Developer</h3>
        </div>
      </section>
    )
    }
export default Hero