import "./App.css"

function Card(props) {
    return(
        <div className="text-center">
            <div className="w-full flex justify-center">
            <img src={props.imgSrc} alt="logo" className="w-12 h-12 text-2xl pl-3 pr-3 pt-2 pb-2 border rounded-lg border-gray-400 border-opacity-40"></img>
            </div>
            <h2 className="text-xl font-semibold mt-6">{props.title}</h2>
            <p className="font-normal text-base text-gray-700 mt-2">{props.content}</p>
        </div>
    )
}

export default Card;
