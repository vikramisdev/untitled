import "./App.css";

function FooterLinks(props) {
  return (
    <div>
      <h1 className="font-semibold text-sm opacity-80">{props.title}</h1>
      <ul className="mt-6">
        {props.links.map((value, index) => (
          <li className="mt-5 font-semibold text-base cursor-pointer">{value}</li>
        ))}
      </ul>
    </div>
  );
}

export default FooterLinks;
