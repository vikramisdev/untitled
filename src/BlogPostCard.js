import "./App.css";

function BlogPostCard(props) {
  return (
    <div className="m-5 md:m-5">
      <img className="w-full" src={props.imgSrc} alt="background"></img>
      <h1 className="mt-3 text-purple-600 font-semibold">{props.category}</h1>
      <div className="flex justify-between items-center">
        <h1 className="mt-3 font-semibold text-2xl">{props.title}</h1>
        <i className="bi bi-arrow-up-right font-black"></i>
      </div>
      <p className="mt-3 font-semibold">{props.description}</p>
      <img className="mt-5" src={props.avatar} alt="avatar"></img>
    </div>
  );
}

export default BlogPostCard;
