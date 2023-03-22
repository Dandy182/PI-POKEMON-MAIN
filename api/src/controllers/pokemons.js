const axios = require('axios');

const getDataApi = async () =>{
    
    try{
        const allPokemons = [];
        
        const ReqApiPokemon = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10000`);
        const urlPokemons = await ReqApiPokemon.data.results.map(p => p.url);
        await axios.all(urlPokemons.map((urlPokemon) => axios.get(urlPokemon))).then(
          (pokemonsFound) => {
            pokemonsFound.map(pokemonfound => allPokemons.push({
              id:pokemonfound.data.id,
              name:pokemonfound.data.name,
              img:pokemonfound.data.sprites.front_default,
              hp:pokemonfound.data.stats[0].base_stat,
              atk:pokemonfound.data.stats[1].base_stat,
              def:pokemonfound.data.stats[2].base_stat,
              speed:pokemonfound.data.stats[5].base_stat,
              height:pokemonfound.data.height,
              weight:pokemonfound.data.weight,
              createInDb:false,
              types:pokemonfound.data.types.map((type) => type.type.name)
            }));
          },);
        return allPokemons;


    }catch(error){
        throw new Error(error);
    }
  }





  module.exports = {
    getDataApi,
  };
