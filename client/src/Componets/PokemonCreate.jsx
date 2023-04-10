import React, { useEffect, useState} from "react";
import { Link, useHistory } from "react-router-dom";
import { postPokemon, getTypes } from "../actions";
import { useDispatch, useSelector } from "react-redux";
import '../index.css'
import '../css/pokemonCreate.css'
import UpperBar from "./upperBar";
import NewPokemon from "./CardCreate";




export default function PokemonCreate(){
  const history = useHistory();
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
    type:[]
  })

  useEffect(()=>{
    dispatch(getTypes())
  },[])


  const handleChange = (e) =>{
    e.preventDefault();
    setInput({...input, [e.target.name]:e.target.value})
  }

  const handleCheck = (e) =>{
    if(e.target.checked){
      setInput({
        ...input,
        type:[...input.type, e.target.value]
      })
    }
  }

  const handleCreate = (e) =>{
    e.preventDefault()
    console.log(input)
    dispatch(postPokemon(input))
    alert(`New Pokémon has been created`)
    history.push('/home')
  }

  return(<div className="homePage">
    <UpperBar />
    <div className="contenedor createPokemon">

        <h1>CREATE NEW POKÉMON</h1>
  <div className="flex">

  
    <form className="formulario" onSubmit={e => handleCreate(e)}>
      <div className="create__formulario"> 
      <div className="camp">
        <label htmlFor="name">Name:</label>
        <input type="text" name="name" value={input.name} onChange={e => handleChange(e)} placeholder="Input name" />
      </div>

      <div className="camp">
        <label htmlFor="img">Image:</label>
        <input type="text" name="img" value={input.img} onChange={e => handleChange(e)}  placeholder="link image" />
      </div>

      <div className="camp">
        <label htmlFor="hp">life:</label>
        <input type="number" name="hp" min={0} max={10000} value={input.hp} onChange={e => handleChange(e)} placeholder="life points" />
      </div>

      <div className="camp">
        <label htmlFor="atk">attack:</label>
        <input type="number" name="atk" min={0} max={10000} value={input.atk} onChange={e => handleChange(e)} placeholder="attack points" />
      </div>

      <div className="camp">
        <label htmlFor="def">defense:</label>
        <input type="number" name="def" min={0} max={10000} value={input.def} onChange={e => handleChange(e)} placeholder="defense points" />
      </div>

      <div className="camp">
        <label htmlFor="spd">speed:</label>
        <input type="number" name="speed" min={0} max={10000} value={input.speed} onChange={e => handleChange(e)} placeholder="speed" />
      </div>

      <div className="camp">
        <label htmlFor="height">height:</label>
        <input type="number" name="height" min={0} max={10000} value={input.height} onChange={e => handleChange(e)} placeholder="height" />
      </div>

      <div className="camp">
        <label htmlFor="weight">weight:</label>
        <input type="number" name="weight" min={0} max={10000} value={input.weight} onChange={e => handleChange(e)} placeholder="weight" />
      </div>

      <div className="camp">
        <label htmlFor="types">Types:</label>
        <div className="types">
            {/* {
              types.map((type, index) => {
                
                return <div key={index}>
                  <p>{type.name}</p>
                  <input type="checkbox" value={type.name} />
                  </div>
              })
            } */}
            <div>
              <label>Poison</label>
              <input type='checkbox' value='poison' onClick={e =>handleCheck(e)} />
            </div>
            <div>
              <label>Fire</label>
              <input type='checkbox' value='fire' onClick={e =>handleCheck(e)} />
            </div>
            <div>
              <label>Flying</label>
              <input type='checkbox' value='flying' onClick={e =>handleCheck(e)} />
            </div>
            <div>
              <label>Water</label>
              <input type='checkbox' value='water' onClick={e =>handleCheck(e)} />
            </div>
            <div>
              <label>Bug</label>
              <input type='checkbox' value='Bug' onClick={e =>handleCheck(e)} />
            </div>
            <div>
              <label>Normal</label>
              <input type='checkbox' value='normal' onClick={e =>handleCheck(e)}/>
            </div>
            <div>
              <label>Electric</label>
              <input type='checkbox' value='electric' onClick={e =>handleCheck(e)} />
            </div>
            <div>
              <label>Ground</label>
              <input type='checkbox' value='ground'onClick={e =>handleCheck(e)} />
            </div>
            <div>
              <label>Fairy</label>
              <input type='checkbox' value='fairy'onClick={e =>handleCheck(e)} />
            </div>
            <div>
              <label>Grass</label>
              <input type='checkbox' value='grass' onClick={e =>handleCheck(e)}/>
            </div>
            <div>
              <label>Fighting</label>
              <input type='checkbox' value='fighting' onClick={e =>handleCheck(e)}/>
            </div>
            <div>
              <label>Psychic</label>
              <input type='checkbox' value='psychic'onClick={e =>handleCheck(e)} />
            </div> 
            <div>
              <label>Steel</label>
              <input type='checkbox' value='steel'onClick={e =>handleCheck(e)} />
            </div>  
             <div>
              <label>Ice</label>
              <input type='checkbox' value='ice' onClick={e =>handleCheck(e)}/>
            </div>
            <div>
              <label>Rock</label>
              <input type='checkbox' value='rock'onClick={e =>handleCheck(e)} />
            </div>  
            <div>
              <label>Dragon</label>
              <input type='checkbox' value='dragon'onClick={e =>handleCheck(e)} />
            </div>
            <div>     
            <label>Dark</label>
              <input type='checkbox' value='dark' onClick={e =>handleCheck(e)} />
            </div>
            <div>     
            <label>Ghost</label>
              <input type='checkbox' value='ghost'onClick={e =>handleCheck(e)} />
            </div>
                    
        </div>
      
      </div>
      </div>

      <button type="submit">Create Pokéomon</button>

    </form>
      <NewPokemon name={input.name} img={input.img} hp={input.hp} atk={input.atk} speed={input.speed} height={input.height} weight={input.weight}  type={input.type}/>
  </div>
    
  </div>
  </div>)

}