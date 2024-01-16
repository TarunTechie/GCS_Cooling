import Galtop from "./components/galtop"
export default function Gall()
{
    let slide=["/assets/gallary/gal (1).JPG","/assets/gallary/gal (2).JPG","/assets/gallary/gal (3).JPG",
    "/assets/gallary/gal (4).JPG","/assets/gallary/gal (5).JPG","/assets/gallary/gal (6).JPG","/assets/gallary/gal (7).JPG"
    ,"/assets/gallary/gal (8).JPG","/assets/gallary/gal (9).JPG","/assets/gallary/gal (10).JPG","/assets/gallary/gal (11).JPG","/assets/gallary/gal (12).JPG"
    ,"/assets/gallary/gal (13).JPG","/assets/gallary/gal (14).JPG",,"/assets/gallary/gal (15).JPG"]
    return (<div>
        <Galtop/>
        <div  className="gala">
        {slide.map((s)=>{
                return <img src={s} loading="lazy" className="p-10 border-2 border-white"/>
            })}</div>
    </div>)
}