// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ADD_POKEMON, FILTER_ORIGIN, GET_ALL } from '../types/index';



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
      const allPokemons = state.pokemons;
      const dataFiltered = action.payload === 'API' ? allPokemons : allPokemons.filter(p => p.createInDb === action.payload) 
      
      return{
        ...state,
        pokemons:dataFiltered
      }


    default:
      return state;
  }
}