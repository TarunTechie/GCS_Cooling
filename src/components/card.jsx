function Card({image,heading,content})
{
    return(
        <div className=" place-content-center bg-blue-500 w-fit h-fit m-5 rounded">
            <img src={image} className="rounded-t"/>
            <h1 className="text-white text-center">{heading}</h1>
            <h3 className="text-center text-color-white">{content}</h3>
        </div>
    )
}
export default Card
