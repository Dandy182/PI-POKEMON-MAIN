const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getDataApi} = require('../controllers/pokemons');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/pokemons', );
// router.get('/pokemons/:idpokemon', getPokemonsId);
// router.get('/pokemons/name?', getPokemonsQuery);
// router.get('/types', getTypes);
// router.post('/pokemons', addPokemon)

module.exports = router;
