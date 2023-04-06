import axios from 'axios';
import { FILTER_ORIGIN, GET_ALL, GET_POKEMON } from '../types';


export const getAllPokemons = () =>{
  return async function(dispatch){
    let json = await axios.get("http://localhost:3001/pokemons");
    return dispatch({
      type:GET_ALL,
      payload:json.data
    })
  }
}


export const filterByOrigen = (payload) =>{
 return function(dispatch){


  return dispatch({
    type:FILTER_ORIGIN,
    payload:payload
  })
 } 
}