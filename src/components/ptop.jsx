import AnchorLink from "react-anchor-link-smooth-scroll";
export default function PTop()
{
    return(<div className="fixed">
        <div className="flex bg-white w-screen">
        <a href="/"><img src="src\assets\logo.png" alt="GCS-COOLING" className="max-w-20 max-h-20" /></a>
        <div className="md:text-2xl text-center font-bold text-white bg-blue-500 rounded-full p-4 mb-2 mt-2 ml-4">GANGA COOLING SOLUTIONS</div>
        <div className="md:text-2xl text-center font-bold text-blue-500 rounded-full p-4 mb-2 mt-2 ml-4">PRODUCTS</div>
        </div>
        <div className="flex flex-row bg-blue-500 place-content-around gap-20 fixed w-screen header">
        <div className="flex flex-row items-center gap-20 text-white headerdiv">
        <AnchorLink href="#ac"><h1 className="things hover:bg-blue-800">AIR CONDITIONER</h1></AnchorLink>
        <AnchorLink href="#wp"><h1 className="things hover:bg-blue-800">WATER PURIFIER</h1></AnchorLink>
        <AnchorLink href="#shp"><h1 className="things hover:bg-blue-800">SOLAR HEAT PUMPS</h1></AnchorLink>
        <AnchorLink href="#ups"><h1 className="things hover:bg-blue-800">UPS</h1></AnchorLink>
        </div>
        <a href="https://forms.gle/pFJs1hXYYqZuxoWd7" target="blank">
        <button class="rounded-full p-2 m-2 border-4 border-white text-white font-bold order">PLACE ORDER</button>
        </a>
    </div></div>)
}