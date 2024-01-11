function Pcard({image,heading,content})
{
    return(
        <div className="grid justify-items-center bg-blue-500 w-fit h-fit m-5 rounded hover:shadow-xl">
            <img src={image} className="rounded-t"/>
            <h1 className="text-white text-center">{heading}</h1>
            <p className="text-center text-white line-clamp-5">{content}</p>
        </div>
    )
}
export default Pcard
