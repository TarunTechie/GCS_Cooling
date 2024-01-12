import Fcard from "./fcard";
export default function Facility()
{
    return(
        <div>
            <h1 className="text-center heading">SERVICES</h1>
    <div className="md:flex sm:block">
        <Fcard
        image={"src/assets/icons/sales.svg"}
        heading={"SALES"}
        content={"GCS, or Ganga Cooling Solutions, has distinguished itself as a leading company in the cooling solutions industry by consistently achieving high-quality sales. The company's success is rooted in its unwavering commitment to providing superior cooling products and services to its customers."}
        />
         <Fcard
        image={"src/assets/icons/service.svg"}
        heading={"SERVICES"}
        content={"GCS, Ganga Cooling Solutions, has built a strong reputation for delivering not only high-quality products but also exceptional services in the cooling solutions sector. The company's commitment to providing top-notch services is evident in several key aspects"}
        />
         <Fcard
        image={"src/assets/icons/amc.svg"}
        heading={"AMC"}
        content={"An Annual Maintenance Contract (AMC) with Ganga Cooling Solutions (GCS) offers a comprehensive and reliable way to ensure the optimal performance and longevity of your cooling systemsGCS's AMC includes regular preventive maintenance visits, during which the service team conducts thorough inspections of your cooling systems.The AMC provides a predefined schedule for service visits, ensuring that your cooling systems receive timely attention and care."}
        />
    </div></div>)
}