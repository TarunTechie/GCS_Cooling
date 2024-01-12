import AnchorLink from "react-anchor-link-smooth-scroll";
export default function Top()
{
    return(<div className="fixed">
        <div className="flex bg-white w-screen">
        <AnchorLink href="/"><img src="src\assets\logo.png" alt="GCS-COOLING" className="max-w-20 max-h-20" /></AnchorLink>
        <div className="text-2xl text-center font-bold text-white bg-blue-500 rounded-full p-4 mb-2 mt-2 ml-4">GANGA COOLING SOLUTIONS</div>
        </div>
        <div className="flex flex-row bg-blue-500 place-content-around gap-20 fixed w-screen header">
        <div className="flex flex-row items-center gap-20 text-white headerdiv">
        <AnchorLink href="#hom"><h1 className="things hover:bg-blue-800">HOME</h1></AnchorLink>
        <AnchorLink href="#abt"><h1 className="things hover:bg-blue-800">ABOUT US</h1></AnchorLink>
        <AnchorLink href="#prod"><h1 className="things hover:bg-blue-800">PRODUCTS</h1></AnchorLink>
        <AnchorLink href="#fac"><h1 className="things hover:bg-blue-800">SERVICES</h1></AnchorLink>
        <AnchorLink href="#pro"><h1 className="things hover:bg-blue-800">PROJECTS</h1></AnchorLink>
        <AnchorLink href="#foo"><h1 className="things hover:bg-blue-800">CONTACT US</h1></AnchorLink>
        </div>
        <a href="https://forms.gle/pFJs1hXYYqZuxoWd7" target="blank">
        <button class="rounded-full p-2 m-2 border-4 border-white text-white font-bold order">PLACE ORDER</button>
        </a>
    </div></div>)
}