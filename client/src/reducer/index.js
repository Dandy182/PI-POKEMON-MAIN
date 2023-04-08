// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FILTER_ORIGIN,  GET_ALL, GET_TYPES } from '../types/index';



const initialState = {
  pokemons:[],
  types:[],
}

export default function rootReducer(state = initialState, action ){

  switch(action.type){
    case GET_ALL:
      return {
        ...state,
        pokemons:action.payload
      }

     case GET_TYPES:
      return{
        ...state,
        types:action.payload
      } 

    case FILTER_ORIGIN:
      const dataFiltered = action.payload === "created" ? state.pokemons.filter(p => p.createInDb === true) : state.pokemons.filter(p => p.createInDb === false) 
      return{
        ...state,
        pokemons: action.payload === "all" ? state.pokemons : dataFiltered
      }


    default:
      return state;
  }
}