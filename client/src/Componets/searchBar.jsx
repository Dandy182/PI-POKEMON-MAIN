import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getPokemonByName } from '../actions';

export default function Search(){

    const dispatch = useDispatch();
    const [name, setName] = useState("")


    const handleInputChange = (e) =>{
        e.preventDefault();
        setName(e.target.value)
        //console.log(name)
        
    }
    
    const handleClick = (e) =>{
        e.preventDefault()
        dispatch(getPokemonByName(name))
        setName("")
    }

    //pendiente, revidar porqué el onChange no toma el ultimo caracter
    return(<form className="searchBar"  onSubmit={(e) => handleClick(e)}>
        <input type="text" name="searchBar" className="bar" value={name} onChange={(e) => handleInputChange(e)}  placeholder="Search By Name"  />
        <button type='submit' >Search</button>
        </form>)
}