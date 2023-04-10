import React from "react";
import '../css/card.css'


export default function NewPokemon({name, img, hp, atk, def, speed, type, height, weight }){


  return(<div className="card">
   
    <h2>{name}</h2>
      <div className="marcoImg">
        <img className="cardImg" src={img} alt={name} />
      <div className="info__card">
        <span>hp:</span><p>{hp}</p>
        <span>atk:</span><p>{atk}</p>
        <span>def:</span><p>{def}</p>
        <span>speed:</span><p>{speed}</p>
        <span>height:</span><p>{height}</p>
        <span>weight:</span><p>{weight}</p>
        <span>type:</span><div className="dataType">

          {type.map((t, index) =><p key={index}>{t}</p>)}
          </div>
      </div>
    </div>
    <p>Pokemon nuevo</p>
  </div>)
} 