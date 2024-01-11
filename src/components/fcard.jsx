export default function Fcard({image,heading,content})
{
    return(
        <div className="grid justify-items-center bg-blue-500 w-fit h-fit m-5 rounded-xl p-2">
            <img src={image} className=" max-h-40 p-4"/>
            <h1 className="text-white text-center">{heading}</h1>
            <h3 className="text-center text-color-white">{content}</h3>
        </div>
    )
}