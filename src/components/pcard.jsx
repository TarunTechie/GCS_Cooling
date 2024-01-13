function Pcard({image,heading,content})
{
    return(
        <div className="grid justify-items-center bg-blue-500 m-5 rounded-xl p-2 max-h-96 max-w-60 pcard">
            <a href='productpage'><img src={image} className="rounded-t h-52"/></a>
            <h1 className="text-white text-center font-sans font-bold font-xl p-2">{heading}</h1>
            <p className="text-center text-black overflow-auto tohide">{content}</p>
        </div>
    )
}
export default Pcard
