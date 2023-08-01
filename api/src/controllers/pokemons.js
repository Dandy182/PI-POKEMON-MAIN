const axios = require('axios')
const {Pokemons, Type} = require('../db');





const  getDataApi = async () => {
    const pokemons = [];

    try{
        const api = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=250`)
        const dataPokemon = await api.data.results.map(p => p.url); 
        
        await axios.all(dataPokemon.map(pApi => axios.get(pApi)))
            .then(pokemonsFound => { pokemonsFound.map(
                pf => { 
                    return pokemons.push({
                        id:pf.data.id,
                        name:pf.data.name,
                        img:pf.data.sprites.other['official-artwork'].front_default,
                        hp:pf.data.stats[0].base_stat,
                        atk:pf.data.stats[1].base_stat,
                        def:pf.data.stats[2].base_stat,
                        speed:pf.data.stats[5].base_stat,
                        height:pf.data.height,
                        weight:pf.data.weight,
                        createInDb:false,
                        type:pf.data.types.map((type) => type.type.name)
                });

            })
            });
        return pokemons;


    }catch(error){
        console.log(error)
    }
}



const pokemonsApiToDb = async () =>{

    const pkmApi = await getDataApi();
    const listPkmn = await pkmApi.map(p => p)
    console.log(listPkmn[0])

    for(let i = 0; i < listPkmn.length; i++){

        let p = listPkmn[i];

        await Pokemons.findOrCreate({
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

        console.log(`pokemon ${p.name} added`)

    }




    
}

pokemonsApiToDb()



module.exports = {
    getDataApi
}