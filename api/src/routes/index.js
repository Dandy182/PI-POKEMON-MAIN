const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const { getAllPokemons} = require('../controllers/pokemons');
const { getTypes } = require('../controllers/type');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/pokemons', async (req, res) => {
  const { name } = req.query;

  let pokemonAll = await getAllPokemons();
  
  if(name){
    let searchByName = await pokemonAll.filter(p => p.name.includes(name));
    searchByName.length ? res.status(200).json(searchByName) : res.status(401).send(`Ese Pokémon no existe`)
  }else{
    res.status(200).send(pokemonAll)
  }

});
// router.get('/pokemons/:idpokemon', getPokemonsId);
router.get('/types', (req, res) =>{

  const result = getTypes();
  res.send(result);
})
// router.post('/pokemons', addPokemon)

module.exports = router;
