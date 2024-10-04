import "./App.css"

function FaqButton(props) {
    return(
        <div className="md:w-768px mb-12">
            <details>
                <p className="text-wrap">{props.content}</p>
                <summary className="text-xl">{props.summary}</summary>
            </details>
            <hr className="w-full mt-10" ></hr>
        </div>
    )
}

export default FaqButton;
