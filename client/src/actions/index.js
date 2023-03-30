import axios from 'axios';
import { GET_ALL } from '../types';


export const getAllPokemons = () =>{
  return async function(dispatch){
    let json = await axios.get("http://localhost:3001/pokemons");

    return dispatch({
      type:GET_ALL,
      payload:json.data
    })
  }
}

