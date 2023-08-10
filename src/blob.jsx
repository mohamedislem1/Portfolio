import { useRef } from "react"
export default function Blob( ){ 
 const blob = useRef()
   window.onpointermove = event =>{
    const{clientX, clientY} = event
    blob.current.animate({ 
        left: `${clientX}px`, 
        top: `${clientY}px`
    }, {duration: 3000, fill:"forwards"})
   }

    return ( 
        <div className="absolute lower min-h-screen">
            <div ref={blob} className={`fixed  left-[50%] top-[50%] h-[36vmax]
            aspect-square bg-gradient-to-r from-cyan-500 to-purple-900 rounded-full filter blur-[45px] opacity-70 animate`}></div>
        </div>
            


    )
}