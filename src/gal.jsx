import Galtop from "./components/galtop"
export default function Gall()
{
    let slide=["src/assets/gallary/gal (1).JPG","src/assets/gallary/gal (2).JPG","src/assets/gallary/gal (3).JPG",
    "src/assets/gallary/gal (4).JPG","src/assets/gallary/gal (5).JPG","src/assets/gallary/gal (6).JPG","src/assets/gallary/gal (7).JPG"
    ,"src/assets/gallary/gal (8).JPG","src/assets/gallary/gal (9).JPG","src/assets/gallary/gal (10).JPG","src/assets/gallary/gal (11).JPG","src/assets/gallary/gal (12).JPG"
    ,"src/assets/gallary/gal (13).JPG","src/assets/gallary/gal (14).JPG",,"src/assets/gallary/gal (15).JPG","src/assets/gallary/gal (16).JPG"]
    return (<div>
        <Galtop/>
        <div  className="gala">
        {slide.map((s)=>{
                return <img src={s} loading="lazy" className="p-10 border-2 border-white"/>
            })}</div>
    </div>)
}