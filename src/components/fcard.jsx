export default function Fcard({image,heading,content})
{
    return(
        <div className="grid justify-items-center bg-blue-500 m-5 rounded-xl p-2 max-h-80 max-w-60 hover:shadow-xl">
            <img src={image} className="bg-blue-100 p-2 rounded-full max-h-40"/>
            <h1 className="text-white text-center font-serif font-bold">{heading}</h1>
            <div className="md:text-center text-color-white overflow-auto font-sans font-bold tohide"><p>{content}</p></div>
        </div>
    )
}