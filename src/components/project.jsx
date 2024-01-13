export default function Project()
{
    let com=["src/assets/projects/companies/1.png","src/assets/projects/companies/2.png","src/assets/projects/companies/3.png","src/assets/projects/companies/4.png","src/assets/projects/companies/5.png","src/assets/projects/companies/6.png"]
    let hom=["src/assets/projects/homes/1.png","src/assets/projects/homes/2.png","src/assets/projects/homes/3.png","src/assets/projects/homes/4.png","src/assets/projects/homes/5.png","src/assets/projects/homes/6.png"]
    let hos=["src/assets/projects/hospitals/1.png","src/assets/projects/hospitals/2.png"]
    let hot=["src/assets/projects/hotels/1.png","src/assets/projects/hotels/2.png","src/assets/projects/hotels/3.png","src/assets/projects/hotels/4.png"]
    return(
        <div className="text-center">
            <h1 className="heading">PREVIOUS PROJECTS</h1>
            <div>
                <h1 className="text-base text-xl font-bold underline">COMPANIES</h1>
                <div className="flex justify-center pt-4 proj">{com.map((c)=>{return <img src={c} className="h-20 p-2 aspect-auto object-contain projimg"/>})}</div>
            </div>
            <div>
                <h1 className="text-base text-xl font-bold underline">HOMES</h1>
                <div className="flex justify-center pt-4 proj">{hom.map((c)=>{return <img src={c} className="h-20 p-2 aspect-auto object-contain projimg"/>})}</div>
            </div>
            <div>
                <h1 className="text-base text-xl font-bold underline">HOTELS</h1>
                <div className="flex justify-center pt-4 proj">{hot.map((c)=>{return <img src={c} className="h-20 p-2 projimg"/>})}</div>
            </div>
            <div>
                <h1 className="text-base text-xl font-bold underline">HOSPITALS</h1>
                <div className="flex justify-center pt-4 proj">{hos.map((c)=>{return <img src={c} className="h-20 p-2 aspect-auto object-contain projimg"/>})}</div>
            </div>
        </div>
    )
}