const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getDataApi, getDataDb, getAllPokemons} = require('../controllers/pokemons');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/pokemons', async (req, res) => {
  const {name} = req.params;

  let pokemonAll = await getAllPokemons();
  
  if(name){
    let searchByName = await pokemonAll.filter(p => p.name.toLowerCase().includes(name.toLowerCase()));
    searchByName.length ? res.status(200).json(searchByName) : res.status(401).send(`Ese Pokémon no existe`)
  }else{
    res.status(200).send(pokemonAll)
  }

});
// router.get('/pokemons/:idpokemon', getPokemonsId);
// router.get('/pokemons/name?', getPokemonsQuery);
// router.get('/types', getTypes);
// router.post('/pokemons', addPokemon)

module.exports = router;
