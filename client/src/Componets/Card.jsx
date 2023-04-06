import "../css/card.css";

export default function Card(props){
  const {name, type, img} = props;

  return(<div className="card">
    <h2>{name}</h2>
      <div className="marcoImg">
      <img className="cardImg" src={img} alt={name} />
      <div className="info__card">
        <span>type:</span><div className="dataType">
          {type.map(t =><p>{t}</p>)}
          </div>
      </div>
    </div>
  </div>)
}