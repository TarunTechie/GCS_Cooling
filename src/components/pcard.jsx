import Fade from 'react-awesome-reveal'
function Pcard({image,heading,content})
{
    return(
        <div className="grid justify-items-center bg-blue-500 m-5 rounded-xl p-2 fcard max-h-96 max-w-60">
            <img src={image} className="rounded-t h-52"/>
            <h1 className="text-white text-center font-mono font-bold p-2 underline">{heading}</h1>
            <p className="text-center text-black overflow-auto font-bold tohide">{content}</p>
        </div>
    )
}
export default Pcard
