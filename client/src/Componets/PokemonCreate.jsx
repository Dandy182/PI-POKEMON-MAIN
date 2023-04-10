import React, { useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import '../index.css'
import '../css/pokemonCreate.css'
import UpperBar from "./upperBar";
import Card from "./Card";




export default function PokemonCreate(){

  const dispatch = useDispatch();
  const types = useSelector(state => state.types);

  const [input, setInput] = useState({
    name:'',
    img:'',
    hp:'',
    atk:'',
    def:'',
    speed:'',
    height:'',
    weight:'',
    types:[]
  })

  useEffect(()=>{
    dispatch(getTypes())
  }, [])

  return(<div className="homePage">
    <UpperBar />
    <div className="contenedor createPokemon">

    <form className="formulario">
        <h1>CREATE NEW POKÉMON</h1>

      <div className="camp">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={input.name} placeholder="Input name" />
      </div>

      <div className="camp">
        <label htmlFor="imagen">Image:</label>
        <input type="text" name="imagen" value={input.img} placeholder="input link image" />
      </div>

      <div className="camp">
        <label htmlFor="hp">life:</label>
        <input type="number" name="hp" value={input.hp} placeholder="input life points" />
      </div>

      <div className="camp">
        <label htmlFor="atk">attack:</label>
        <input type="number" name="atk" value={input.atk} placeholder="input attack point" />
      </div>

      <div className="camp">
        <label htmlFor="def">defense:</label>
        <input type="number" name="def" value={input.def} placeholder="input defense point" />
      </div>

      <div className="camp">
        <label htmlFor="spd">speed:</label>
        <input type="number" name="spd" value={input.speed} placeholder="input speed point" />
      </div>

      <div className="camp">
        <label htmlFor="height">height:</label>
        <input type="number" name="height" value={input.height} placeholder="input height point" />
      </div>

      <div className="camp">
        <label htmlFor="weight">weight:</label>
        <input type="number" name="weight" value={input.weight} placeholder="input weight point" />
      </div>

      <div className="camp">
        <label htmlFor="types">Types:</label>
        <div className="types">
            {
              types.map((type, index) => {
                
                return <div key={index}>
                  <p>{type.name}</p>
                  <input type="checkbox" value={type.name} />
                  </div>
              })
            }
        </div>
      
      </div>

    

      <button type="submit">Create Pokéomon</button>

    </form>
  </div>
  </div>)

}