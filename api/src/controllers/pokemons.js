const axios = require('axios')
const {Pokemon, Type} = require('../db');

const getDataApi = async () =>{

  const allPokemons = [];
  
  try{
  
  const callApi = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10000`);
  const urlsApi = await callApi.data.results.map(p => p.url);

  await axios.all(urlsApi.map(urlApi => axios.get(urlApi)))
    .then(pokemonsFound => {
      pokemonsFound.map(pf => allPokemons.push({
              idApi:pf.data.id,
              name:pf.data.name,
              img:pf.data.sprites.other['official-artwork'].front_default,
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
  await dataApi.forEach(p => {
    Pokemon.findOrCreate({
      where:{name:p.name},
      defaults:{
        name:p.name,
        img:p.img,
        hp:p.hp,
        atk:p.atk,
        def:p.def,
        speed:p.speed,
        height:p.height,
        weight:p.weight,
      }
    })
  })

}

const getPokemons = async () =>{
  return await Pokemon.findAll({
    attributes:{ exclude:["createdAt", "updatedAt"]},
    include:{
      model:Type,
      attributes:['name'],
      through:{
        attributes:[],
      }
    }
  })
}



module.exports = {
  getDataApi,
  dataDB,
  getPokemons
}