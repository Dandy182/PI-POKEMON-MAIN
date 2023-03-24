const axios = require('axios')
const {Pokemon} = require('../db');

const getDataApi = async () =>{

  const allPokemons = [];
  
  try{
  
  const callApi = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=2000`);
  const urlsApi = await callApi.data.results.map(p => p.url);

  await axios.all(urlsApi.map(urlApi => axios.get(urlApi)))
    .then(pokemonsFound => {
      pokemonsFound.map(pf => allPokemons.push({
              idApi:pf.data.id,
              name:pf.data.name,
              img:pf.data.sprites.front_default,
              hp:pf.data.stats[0].base_stat,
              atk:pf.data.stats[1].base_stat,
              def:pf.data.stats[2].base_stat,
              speed:pf.data.stats[5].base_stat,
              height:pf.data.height,
              weight:pf.data.weight,
              createInDb:false,
              types:pf.data.types.map((type) => type.type.name)
      }));
    },);

    return allPokemons;

  }catch(error){
    console.log(error)
  }

}


const dataDB = async () => {
  const dataApi = await getDataApi()
  const pokemonData = await dataApi.forEach(p => {
    Pokemon.findOrCreate({
      
    })
  })

  return dataApi;

}

module.exports = {
  getDataApi,
  dataDB
}