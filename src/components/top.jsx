import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "react-router-dom";
export default function Top()
{
    return(<div>
        <div className="fixed">
        <div className="flex bg-white w-screen tohide">
        <AnchorLink href="/"><img src="\assets\logo.png" alt="GCS-COOLING" className="max-w-20 max-h-20" /></AnchorLink>
        <AnchorLink href="/"><div className="text-2xl text-center font-bold text-white bg-blue-500 rounded-full p-4 mb-2 mt-2 ml-4">GANGA COOLING SOLUTIONS</div></AnchorLink>
        </div>
        <div className="flex flex-row bg-blue-500 place-content-around gap-20 fixed w-screen header">
        <img src="\assets\icons\menu.svg" className="md:hidden sm:visible" onClick={reveal}></img>
        <AnchorLink href="/" className="max-w-20 max-h-20 md:hidden"><img src="\assets\logo.png" alt="GCS-COOLING" className="max-w-20 max-h-20 md:hidden" /></AnchorLink>
        <div className="flex flex-row items-center gap-20 text-white headerdiv" id="headerdiv">
        <AnchorLink href="#hom"><h1 className="things hover:bg-blue-800" onClick={close}>HOME</h1></AnchorLink>
        <AnchorLink href="#abt"><h1 className="things tohide hover:bg-blue-800" onClick={close}>ABOUT US</h1></AnchorLink>
        <AnchorLink href="#prod"><h1 className="things hover:bg-blue-800" onClick={close}>PRODUCTS</h1></AnchorLink>
        <AnchorLink href="#fac"><h1 className="things hover:bg-blue-800" onClick={close}>SERVICES</h1></AnchorLink>
        <AnchorLink href="#pro"><h1 className="things hover:bg-blue-800" onClick={close}>PROJECTS</h1></AnchorLink>
        <Link to="/gal"><h1 className="things hover:bg-blue-800" onClick={close}>GALLERY</h1></Link>
        <AnchorLink href="#foo"><h1 className="things hover:bg-blue-800" onClick={close}>CONTACT US</h1></AnchorLink>
        </div>
        <a href="https://forms.gle/pFJs1hXYYqZuxoWd7" target="blank">
        <button class="mr-2 rounded-full md:rounded-full p-2 m-2 border-4 border-white text-white font-bold order">PLACE ORDER</button>
        </a>
    </div></div></div>)
}
function reveal()
{
    let d=document.getElementById("headerdiv")
    if(d.style.display=="none")
    {d.style.display="grid"
    d.style.gridTemplateColumns="50px 50px"
    d.style.marginRight="50%"
    d.style.height="100%"
}
    else
    {
        d.style.display="none"
    }
}
function close()
{
    let d=document.getElementById("headerdiv")
    if(d.style.display=="grid")
    {
        d.style.display="none"
    }
}