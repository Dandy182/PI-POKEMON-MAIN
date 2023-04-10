import React from "react";
import '../css/card.css'


export default function NewPokemon({name, img, hp, atk, def, speed, type, height, weight }){


  return(<div className="card new">
   
    <h2>{name}</h2>
      <div className="marcoImg">
        <img className="cardImg" src={img} alt={name} />
        <div className="skills">
          <div>
            <span>hp:</span><p>{hp}</p>
          </div>
          <div>
            <span>atk:</span><p>{atk}</p>
          </div>
          <div>
            <span>def:</span><p>{def}</p>
          </div>
          <div>
            <span>speed:</span><p>{speed}</p>
          </div>
          <div>
            <span>height:</span><p>{height}</p>
          </div>
          <div>
            <span>weight:</span><p>{weight}</p>
          </div>
        </div>
      <div className="info__card">
        <span>type:</span><div className="dataType">
          {type.map((t, index) =><p key={index}>{t}</p>)}
          </div>
      </div>
    </div>

  </div>)
} 