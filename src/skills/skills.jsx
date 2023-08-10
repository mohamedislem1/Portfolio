import info from "./info.jsx"
import { Tilt } from 'react-tilt'
export default function Skills(){ 
    return(
    <section id="skills" className="flex flex-col items-center min-h-screen min-w-screen">
        <h2 className="text-white text-center text-5xl md:text-8xl lg:text-8xl my-20 font-bold cursor-default hover">SKILLS</h2>
        <div className="flex flex-col items-center gap-4 md:flex-row md:gap-3 lg:w-[70%]">
    {info.map((i)=>(
        <Tilt key={i.title} className="border border-[#6e6e6e] gray flex flex-col gap-3 p-5 rounded-lg w-[60%] md:w-[30%] hover:bg-sky-500 transition-all cursor-default">
        <div>
            <div className="w-4 h-4 mt-20">
            {i.icon}
            </div>
            <h3 className="text-white text-xl">{i.title}</h3>
            <p className="text-slate-200">{i.description}</p>
        </div>
        </Tilt>
        ) 
    )}
        </div>
    </section>
    )
}