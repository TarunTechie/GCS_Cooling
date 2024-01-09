import { HiMiniArrowSmallRight } from "react-icons/hi2"
import { HiOutlineArrowSmLeft } from "react-icons/hi"
import { useEffect, useState } from "react"
export default function Pics()
{
    let slides=["src/assets/test.jpg","src/assets/test.jpg","src/assets/test.jpg","src/assets/Room-AC.jpg"]
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
        }, 2000);
        return()=>clearInterval(interval);
    },[slide])
    return(
        <div className="pics">
        <div className='flex transition ease-out duration-700 movePics' style={{transform:`translateX(-${slide*100}%)`}}>
            {slides.map((s)=>{
                return <img src={s}/>
            })}
        </div>
        </div>
    )
}