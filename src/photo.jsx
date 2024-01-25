function Photo({image,heading,content})
{
    return(
        <div className="grid justify-items-center bg-white m-5 rounded-xl p-2 max-h-96 max-w-60 border-2 border-blue-500 pcard">
            <img src={image} className="rounded-t h-52"/>
        </div>
    )
}
export default Photo
