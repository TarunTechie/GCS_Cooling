import Fcard from "./fcard";
export default function Facility()
{
    return(
        <div>
            <h1 className="text-center">SERVICES</h1>
    <div className="md:flex sm:block">
        <Fcard
        image={"src/assets/icons/sales.svg"}
        heading={"SALES"}
        content={"gcs is known for their sales in the field and have lot of expericee"}
        />
         <Fcard
        image={"src/assets/icons/service.svg"}
        heading={"SERVICES"}
        content={"gcs is known for their sales in the field and have lot of expericee"}
        />
         <Fcard
        image={"src/assets/icons/amc.svg"}
        heading={"AMC"}
        content={"gcs is known for their sales in the field and have lot of expericee"}
        />
    </div></div>)
}