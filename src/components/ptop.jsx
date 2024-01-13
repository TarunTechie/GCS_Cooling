import AnchorLink from "react-anchor-link-smooth-scroll";
export default function PTop()
{
    return(<div className="fixed">
        <div className="flex bg-white w-screen">
        <a href="/"><img src="src\assets\logo.png" alt="GCS-COOLING" className="max-w-20 max-h-20" /></a>
        <a href="/"><div className="md:text-2xl text-center font-bold text-white bg-blue-500 rounded-full p-4 mb-2 mt-2 ml-4"><h1>GANGA COOLING SOLUTIONS</h1></div></a>
        <div className="md:text-2xl text-center font-bold text-blue-500 rounded-full p-4 mb-2 mt-2 ml-4">PRODUCTS</div>
        </div>
        <div className="flex flex-row bg-blue-500 place-content-around gap-20 fixed w-screen header">
        <img src="src\assets\icons\menu.svg" className="md:hidden sm:visible" onClick={reveal}></img>
        <div className="flex flex-row items-center gap-20 text-white headerdiv" id="headerdiv">
        <a href="/"><h1 className="things hover:bg-blue-800" onClick={close}>HOME</h1></a>
        <AnchorLink href="#ac"><h1 className="things hover:bg-blue-800" onClick={close}>AIR CONDITIONER</h1></AnchorLink>
        <AnchorLink href="#wp"><h1 className="things hover:bg-blue-800" onClick={close}>WATER PURIFIER</h1></AnchorLink>
        <AnchorLink href="#shp"><h1 className="things hover:bg-blue-800" onClick={close}>SOLAR & HEAT PUMPS</h1></AnchorLink>
        <AnchorLink href="#ups"><h1 className="things hover:bg-blue-800" onClick={close}>UPS</h1></AnchorLink>
        <AnchorLink href="#foo"><h1 className="things hover:bg-blue-800" onClick={close}>CONTACT US</h1></AnchorLink>
        </div>
        <a href="https://forms.gle/pFJs1hXYYqZuxoWd7" target="blank">
        <button class="rounded-full p-2 m-2 border-4 border-white text-white font-bold order">PLACE ORDER</button>
        </a>
    </div></div>)
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