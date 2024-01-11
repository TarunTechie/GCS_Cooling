import Pcard from "./pcard"
export default function Products()
{
    return(
        <div>
            <h1 className="text-center">PRODUCTS</h1>
    <div className="products">
        <Pcard
        image={"src/assets/Room-AC.jpg"}
        heading={"AIR CONDITIONER"}
        content={"this is a air conditioner"}/>
        <Pcard
        image={"src/assets/Room-AC.jpg"}
        heading={"WATER PURIFIER"}
        content={"this is a water purifier"}/>
        <Pcard
        image={"src/assets/Room-AC.jpg"}
        heading={"SOLAR HEAT PUMPS"}
        content={"this is a air conditoner"}/>
        <Pcard
        image={"src/assets/Room-AC.jpg"}
        heading={"UPS"}
        content={"this is a air conditoner"}/>
    </div></div>)
}