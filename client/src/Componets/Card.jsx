import "../css/card.css";

export default function Card(props){
  const {name, type, img} = props;

  return(<div className="card">
    <h2>{name}</h2>
      <div className="marcoImg">
      <img src={img} alt={name} />
      <div className="info__card">
        <p><span>type:</span>{type}</p>
      </div>
    </div>
  </div>)
}