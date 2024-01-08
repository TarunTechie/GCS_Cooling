import AnchorLink from "react-anchor-link-smooth-scroll";
export default function Top()
{
    return(<div className="flex flex-row bg-blue-500 place-content-around gap-20 fixed w-screen header">
        <img src="src\assets\logo.png" alt="GCS-COOLING" className="max-w-20 max-h-20 bg-white p-2" />
        <div className="flex flex-row items-center gap-20">
        <AnchorLink href="#hom"><h1 className="things hover:bg-blue-200">HOME</h1></AnchorLink>
        <AnchorLink href="#abt"><h1 className="things hover:bg-blue-200">ABOUT US</h1></AnchorLink>
        <AnchorLink href="#prod"><h1 className="things hover:bg-blue-200">PRODUCTS</h1></AnchorLink>
        <AnchorLink href="#fac"><h1 className="things hover:bg-blue-200">FACILITIES</h1></AnchorLink>
        <AnchorLink href="#foo"><h1 className="things hover:bg-blue-200">CONTACT US</h1></AnchorLink>
        </div>
        <button class="rounded-full p-2 m-2 border-4 border-white text-white font-bold order">PLACE ORDER</button>
    </div>)
}