// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FILTER_ORIGIN,  FILTER_TYPE,  GET_ALL } from '../types/index';



const initialState = {
  pokemons:[]
}

export default function rootReducer(state = initialState, action ){

  switch(action.type){
    case GET_ALL:
      return {
        ...state,
        pokemons:action.payload
      }

    case FILTER_ORIGIN:
      const dataFiltered = action.payload === "created" ? state.pokemons.filter(p => p.createInDb) : state.pokemons.filter(p => !p.createInDb) 
      return{
        ...state,
        pokemons: action.payload === "all" ? state.pokemons : dataFiltered
      }

    case FILTER_TYPE:
      return {
        ...state,
        
      }


    default:
      return state;
  }
}