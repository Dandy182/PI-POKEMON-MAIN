// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ADD_POKEMON, GET_ALL } from '../types/index';



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

    case ADD_POKEMON:
      return{
        ...state,
        pokemons:action.payload
      }
    


    default:
      return state;
  }
}