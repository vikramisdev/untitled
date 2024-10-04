import "./App.css";
import Card from "./Card";

function ButtonCard(props) {
  return (
    <div className="text-center">
      <Card className="" imgSrc={props.imgSrc} title={props.title} content={props.content} />
      <button className="m-5 font-semibold text-purple-800">
        Learn More <i className="bi bi-arrow-right text-purple-800"></i>
      </button>
    </div>
  );
}

export default ButtonCard;
