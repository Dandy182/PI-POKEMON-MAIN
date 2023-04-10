// eslint-disable-next-line no-unused-vars
import React from 'react';
import { ADD_POKEMON, FILTER_ATK, FILTER_ORIGIN,  FILTER_TYPE,  GET_ALL, GET_POKEMON_BY_ID, GET_POKEMON_BY_NAME, GET_TYPES, ORD_NAME } from '../types/index';



const initialState = {
  pokemons:[],
  allPokemons:[],
  types:[],
  detail:[]
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
      
    case ADD_POKEMON:
      return{
          ...state
        }

    case GET_POKEMON_BY_ID:{
      return{
        ...state,
        detail:action.payload
      }
    }

    case GET_POKEMON_BY_NAME:
        return{
        ...state,
        pokemons:action.payload
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

    case FILTER_ATK:
      let pkmnsOrdByAtk = action.payload === 'weak' ?
      state.pokemons.sort(function(a, b){
        if(a.atk > b.atk){
          return 1
        }
        if(b.atk > a.atk){
          return -1
        } 
        return 0
      }) : state.pokemons.sort(function(a, b){
        if(a.atk > b.atk){
          return -1
        }
        if(b.atk > a.atk){
          return 1
        }

        return 0;
      });

      return{
        ...state,
        pokemons:pkmnsOrdByAtk
      }

    case FILTER_TYPE:
      let pType = state.allPokemons.filter(p => p.type.includes(action.payload))


    return{
      ...state,
      pokemons:action.payload === 'all' ? state.allPokemons : pType

    }

    default:
      return state;
  }
}