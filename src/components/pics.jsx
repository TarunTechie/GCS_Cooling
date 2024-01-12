import { useEffect, useState } from "react"
export default function Pics()
{
    let slides=["src/assets/about.jpg","src/assets/about.jpg","src/assets/about.jpg","src/assets/about.jpg"]
    let [slide,currentSlide]=useState(0)
    useEffect(()=>{
        const interval=setInterval(() => {
            if(slide==0)
            {
                currentSlide(1)
            }
            else if(slide==1)
            {
                currentSlide(2)
            }
            else if(slide==2)
            {
                currentSlide(3)
            }
            else if(slide==3)
            {
                currentSlide(0)
            }
        }, 5000);
        return()=>clearInterval(interval);
    },[slide])
    return(
        <div className="pics w-screen">
        <div className='flex w-screen transition ease-out duration-700 movePics' style={{transform:`translateX(-${slide*100}%)`}}>
        {slides.map((s)=>{
                return <img src={s} loading="lazy" className="w-full"/>
            })}
        </div>
        </div>
    )
}