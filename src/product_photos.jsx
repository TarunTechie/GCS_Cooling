import Photo from "./photo";
import PiTop from "./components/pitop";
import Bottom from "./components/bottom";
import { ScrollRestoration } from "react-router-dom";
export default function Product_photos()
{
    return(
        <div>
            <ScrollRestoration />
            <PiTop/>
            <div className="pt-44" id="ac">
                <h1 className="text-center heading">DOMESTIC WATER PURIFIER</h1>
                <div className="md:flex justify-center sm: grid place-content-center m-auto">
                <Photo
                image={"/assets/product_images/domestic wp/dwp (1).jpg"}
                heading={"Split Air Conditioner "}
                content={"A split air conditioner is a type of cooling system that comprises two separate units: the indoor unit and the outdoor unit"}
                />
                <Photo
                image={"/assets/product_images/domestic wp/dwp (2).jpg"}
                heading={"Cassette  Air Conditioners "}
                content={"A cassette air conditioner is a type of air conditioning system designed for ceiling installation. Its unique design allows it to be seamlessly integrated into the ceiling, providing efficient and even cooling for larger spaces"}
                />
                <Photo
                image={"/assets/product_images/domestic wp/dwp (3).jpg"}
                heading={"Ductable Air Conditioners "}
                content={"A split air conditioner is a type of cooling system that comprises two separate units: the indoor unit and the outdoor unit"}
                />
                <Photo
                image={"/assets/product_images/domestic wp/dwp (4).jpg"}
                heading={"VRV AC"}
                content={"VRV, which stands for Variable Refrigerant Volume, is a type of heating, ventilation, and air conditioning (HVAC) technology developed by Daikin Industries. VRV systems are known for their energy efficiency, flexibility, and the ability to provide individualized climate control in different zones or rooms within a building"}
                />
                </div>
                <div className="md:flex justify-center sm: grid place-content-center m-auto">
                <Photo
                image={"/assets/product_images/domestic wp/dwp (5).jpg"}
                heading={"VRF AC"}
                content={"Variable Refrigerant Flow (VRF) is an advanced air conditioning technology that provides efficient and flexible heating, ventilation, and air conditioning (HVAC) solutions for both commercial and residential buildings"}
                />
                <Photo
                image={"/assets/product_images/domestic wp/dwp (6).jpg"}
                heading={"AC Chiller "}
                content={"An air conditioning (AC) chiller is a type of HVAC (heating, ventilation, and air conditioning) system that is commonly used to cool large buildings, industrial facilities, data centers, and other commercial or institutional spaces. Chillers are central cooling plants that provide chilled water, which is then circulated through a building's air handling units or fan coil units to cool the indoor air"}
                />
                <Photo
                image={"/assets/product_images/domestic wp/dwp (7).jpg"}
                heading={"COLD ROOM"}
                content={"A cold room AC, also known as a walk-in cooler or freezer air conditioning system, is designed to control and maintain low temperatures within a cold storage space. These spaces are commonly found in commercial settings such as restaurants, supermarkets, food processing plants, and pharmaceutical facilities, where precise temperature control is essential for preserving perishable goods"}
                />
                <Photo
                image={"/assets/product_images/domestic wp/dwp (8).jpg"}
                heading={"COLD ROOM"}
                content={"A cold room AC, also known as a walk-in cooler or freezer air conditioning system, is designed to control and maintain low temperatures within a cold storage space. These spaces are commonly found in commercial settings such as restaurants, supermarkets, food processing plants, and pharmaceutical facilities, where precise temperature control is essential for preserving perishable goods"}
                />
                </div>
            </div>
            <div className="pt-44" id="wp">
                <h1 className="text-center heading">COMMERCIAL WATER PURIFIERS</h1>
                <div className="md:flex justify-center sm: grid place-content-center m-auto">
                <Photo
                image={"/assets/product_images/commercail wp/cmwp (1).jpg"}
                heading={"Domestic water purification"}
                content={"For domestic water purification, various types of water purifiers are available to cater to different needs and water quality issues at homes"}
                />
                <Photo
                image={"/assets/product_images/commercail wp/cmwp (2).jpg"}
                heading={"Commercial  water purification"}
                content={"Commercial water purification systems are designed to meet the higher volume and quality demands of businesses, industries, and other large-scale applications. The choice of a commercial water purification system depends on the specific needs, water quality parameters, and the intended use of the purified water"}
                />
                <Photo
                image={"/assets/product_images/commercail wp/cmwp (3).jpg"}
                heading={"Water Softners"}
                content={"A water softener removes minerals that create water hardness, one of the most common water quality problems many homeowners encounter. Hard water destroys appliances, leaves filmy soap scum across bathrooms and kitchens, and dries out hair and skin. With over 85% of the United States relying on hard water for their cooking, cleaning, and bathing, water softeners serve a vital purpose. A water softener saves you from replacing prematurely ruined water heaters, scaly faucet heads, and hours and hours of cleaning up soapy residue. Investing in a water softener saves you time, energy, and money, and protects your home and your property"}
                />
            </div>     
            </div>
            <div className="pt-44" id="shp">
                <h1 className="text-center heading">SOLAR & HEAT PUMPS</h1>
                <div className="md:flex justify-center sm: grid place-content-center m-auto">
                <Photo
                image={"/assets/product_images/solar/so (4).jpg"}
                heading={"Domestic Solar"}
                content={"For domestic Solar Heat Pumps, various types of water purifiers are available to cater to different needs and water quality issues at homes"}
                />
                <Photo
                image={"/assets/product_images/solar/sos.jpg"}
                heading={"Commercial  Solar"}
                content={"Commercial Solar Heat Pumps systems are designed to meet the higher volume and quality demands of businesses, industries, and other large-scale applications. The choice of a commercial water purification system depends on the specific needs, water quality parameters, and the intended use of the purified water"}
                />
                <Photo
                image={"/assets/product_images/solar/so (3).jpg"}
                heading={"Heat Pumps"}
                content={"Heat pumps offer an energy-efficient alternative to furnaces and air conditioners for all climates. Like your refrigerator, heat pumps use electricity to transfer heat from a cool space to a warm space, making the cool space cooler and the warm space warmer"}
                />
                <Photo
                image={"/assets/product_images/solar/so (1).jpg"}
                heading={"Heat Pumps"}
                content={"Heat pumps offer an energy-efficient alternative to furnaces and air conditioners for all climates. Like your refrigerator, heat pumps use electricity to transfer heat from a cool space to a warm space, making the cool space cooler and the warm space warmer"}
                />
            </div>     
            </div>
            <div className="pt-44" id="ups">
                <h1 className="text-center heading">UPS</h1>
                <div className="md:flex justify-center sm: grid place-content-center m-auto">
                <Photo
                image={"/assets/product_images/ups/ups (1).jpg"}
                heading={"Online UPS"}
                content={"Online UPS takes the incoming AC mains supply and converts it to DC which feeds the battery and the load via the inverter. If the mains supply fails, then the batteries feed the load via the inverter with no interruption to the output supply at all"}
                />
                <Photo
                image={"/assets/product_images/ups/ups (2).jpg"}
                heading={"Offline UPS"}
                content={"Offline UPS are the most basic models and designed for use in small, non-critical applications that require protection against momentary loss of power"}
                />
                <Photo
                image={"/assets/product_images/ups/ups (3).jpg"}
                heading={"Solar UPS"}
                content={"Solar UPS is an electrical device that converts solar energy generated in DC form into usable home energy in AC form, while also storing it in batteries for use at night or during power outages"}
                />
            </div>     
            </div>
    <div className='p-20 mt-4 bg-blue-500' id='foo'><Bottom/></div>       
        </div>
    )
}