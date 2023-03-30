import { ADD_POKEMON, GET_ALL } from '../types/index';



const initialState = {
  pokemons:[]
}

export default function rootReducer(state = initialState, action ){

  switch(action.type){
    case GET_ALL:
      return {
        ...state,
        payload:action.payload
      }
    case ADD_POKEMON:
      return{
        ...state,
        payload:action.payload
      }


    default:
      return state;
  }
}