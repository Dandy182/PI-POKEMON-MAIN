const axios = require('axios');

const getDataApi = async () =>{
    
    try{
        const allPokemons = [];
        
        const ReqApiPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=5`);
        const urlPokemons = await ReqApiPokemon.data.results.map(p => p.url);

        await axios.all(urlPokemons.map((urlPokemon) => axios.get(urlPokemon))).then(
          (data) => console.log(data)
          );



    }catch(error){
        throw new Error(error);
    }
  }





  module.exports = {
    getDataApi,
  };
