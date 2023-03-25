const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {dataDB, getAllPokemons} = require('../controllers/pokemons');
const { getTypes } = require('../controllers/type');
const {Pokemon, Type} = require('../db');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', async (req, res) =>{
  const {name} = req.query;
   name.toLowerCase();

  try{
    await dataDB();
    await getTypes();
    const data = await getAllPokemons()

    if(name){
      let toSearch = name.toLowerCase();

      const pokemonFound = await Pokemon.findAll({
        where:{name:toSearch}
      })

      pokemonFound.length ? res.status(200).json(pokemonFound) : res.status(404).json(`Pokémon with name:${toSearch} not found`)
    
    }else{
      res.status(200).json(data);
    }

  }catch(error){
    console.log(error)
  }

})

router.get('/types', async (req, res) =>{
  const types = await getTypes()

  res.status(200).send(types);
})
module.exports = router;
