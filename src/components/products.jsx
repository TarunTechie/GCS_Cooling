import Card from "./card"
export default function Products()
{
    return(
        <div>
            <h1 className="text-center">PRODUCTS</h1>
    <div className="products">
        <Card
        image={"src/assets/Room-AC.jpg"}
        heading={"AIR CONDITIONER"}
        content={"this is a air conditoner"}/>
        <Card
        image={"src/assets/Room-AC.jpg"}
        heading={"WATER PURIFIER"}
        content={"this is a water purifier"}/>
        <Card
        image={"src/assets/Room-AC.jpg"}
        heading={"SOLAR HEAT PUMPS"}
        content={"this is a air conditoner"}/>
        <Card
        image={"src/assets/Room-AC.jpg"}
        heading={"UPS"}
        content={"this is a air conditoner"}/>
    </div></div>)
}