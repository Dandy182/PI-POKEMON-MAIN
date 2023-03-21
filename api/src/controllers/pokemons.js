const axios = require('axios');

const getDataApi = async () =>{
    
    try{
        const allPokemons = [];
        
        const ReqApiPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=5`);
        const urlPokemon = await ReqApiPokemon.data.results.map(p => p.url);

         const requestAllPokemon = await axios.all(urlPokemon.map(p => axios.get(urlPokemon)));
         const dataAllPokemon = requestAllPokemon.map(pkmnsFound =>{
            
         })

         return dataAllPokemon;
    }catch(error){
        throw new Error(error);
    }
  }





  module.exports = {
    getDataApi,
  };