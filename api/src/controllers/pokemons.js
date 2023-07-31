const axios = require('axios')
const {} = require('../db');





const  getDataApi = async () => {
    const pokemons = [];

    try{
        const api = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=250`)
        const dataPokemon = await api.data.results.map(p => p.url); 
        
        await axios.all(dataPokemon.map(pApi => axios.get(pApi)))
            .then(pokemonsFound => { pokemonsFound.map(
                pkmns => { 
                    return pokemons.push({
                    id:pkmns.data.id,
                    name:pkmns.data.name
                });

            })
            })
        return pokemons;

    }catch(error){
        console.log(error)
    }
}






module.exports = {
    getDataApi
}