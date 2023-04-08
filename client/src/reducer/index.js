// eslint-disable-next-line no-unused-vars
import React from 'react';
import { FILTER_ORIGIN,  GET_ALL, GET_TYPES, ORD_NAME } from '../types/index';



const initialState = {
  pokemons:[],
  allPokemons:[],
  types:[],
}

export default function rootReducer(state = initialState, action ){

  switch(action.type){

    case GET_ALL:
      return {
        ...state,
        pokemons:action.payload,
        allPokemons:action.payload
      }

     case GET_TYPES:
      return{
        ...state,
        types:action.payload
      } 

    case FILTER_ORIGIN:
      const dataFiltered = action.payload === "created" ? state.allPokemons.filter(p => p.createInDb === true) : state.allPokemons.filter(p => p.createInDb === false) 
      return{
        ...state,
        pokemons: action.payload === "all" ? state.allPokemons : dataFiltered
      }
     
    case ORD_NAME:
      let pkmnsOrdByName = action.payload === 'asc' ? 
      state.pokemons.sort(function(a, b){
        if(a.name > b.name){
          return 1
        }
        if(b.name > a.name){
          return -1
        }
        return 0
      }) : state.pokemons.sort(function(a, b ){

        if(a.name > b.name){
          return -1
        }
        if(b.name > a.name){
          return 1
        }
        return 0;
      });

      return{
        ...state,
        pokemons: pkmnsOrdByName
      }


    default:
      return state;
  }
}