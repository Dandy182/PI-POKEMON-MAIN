import axios from 'axios';
import { FILTER_ORIGIN, FILTER_TYPE, GET_ALL } from '../types';


export const getAllPokemons = () =>{
  return async function(dispatch){
    let json = await axios.get("http://localhost:3001/pokemons");
    return dispatch({
      type:GET_ALL,
      payload:json.data
    })
  }
}


export const filterByOrigen = (value) =>{
   return({
    type:FILTER_ORIGIN,
    payload:value
  })
}

export const filterByType = (value) =>{
  return{
    type: FILTER_TYPE,
    payload:value
  }
}