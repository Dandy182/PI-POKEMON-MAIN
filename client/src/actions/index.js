import axios from 'axios';
import { FILTER_ORIGIN, GET_ALL, GET_TYPES, ORD_NAME } from '../types';


export const getAllPokemons = () =>{
  return async function(dispatch){
    let json = await axios.get("http://localhost:3001/pokemons");
    return dispatch({
      type:GET_ALL,
      payload:json.data
    })
  }
}

export const getTypes = () =>{
  return async function(dispatch){
    let json = await axios.get("http://localhost:3001/types");
    return dispatch({
      type:GET_TYPES,
      payload:json.data
    })
  }
}

export const filterByOrigin = (payload) =>{
   return({
    type:FILTER_ORIGIN,
    payload
  })
}

export const filterByOrder = (payload) => {
  return({
    type:ORD_NAME,
    payload
  })
}

