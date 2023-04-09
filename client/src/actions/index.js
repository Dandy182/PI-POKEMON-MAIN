import axios from 'axios';
import { ADD_POKEMON, FILTER_ATK, FILTER_ORIGIN, GET_ALL, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME, GET_TYPES, ORD_NAME } from '../types';


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


export const postPokemon = (payload) =>{

  return async function(dispatch){
    let pokemon = await axios.post(`http://localhost:3001/pokemons`, payload)

    return pokemon;
  }
}


export const getPokemonByName = (name) => {

  return async function(dispatch){
    try{

      let pkmn = await axios.get(`http://localhost:3001/pokemons/name?name=${name}`)
      return dispatch({
        type:GET_POKEMON_BY_NAME,
        payload: pkmn.data
      })
    }catch(error){
      console.log(error)
    }
  }
}

export const getPokemonById = (id) => {
  
  return async function(dispatch){
  
    try{   
      let pkmnId = await axios.get(`http://localhost:3001/pokemons/${id}`)
      return dispatch({
        type:GET_POKEMON_BY_ID,
        payload:pkmnId.data
      })
 
  }catch(error){
    console.log(error)
  }

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

export const filterByAtk = (payload) => {
  return({
    type:FILTER_ATK,
    payload
  })
}
