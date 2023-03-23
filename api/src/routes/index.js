const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const axios = require('axios');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

const getDataApi = async () =>{
  const pokemon = [];
  
  const getApi = await axios.get(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=10000`);
  const dataAPi = await getApi.data.results.map( async p => {

    const getPokemon = await axios.get(`${p.url}`)


    console.log(getPokemon);
    return p.url;
  })

  return dataAPi;

}


router.get('/pokemons', async (req, res) =>{
  const datos = await getDataApi();
  res.json(datos);

});
// router.get('/pokemons/:idpokemon', getPokemonsId);
// router.get('/pokemons/name?', getPokemonsQuery);
// router.get('/types', getTypes);
// router.post('/pokemons', addPokemon)

module.exports = router;
