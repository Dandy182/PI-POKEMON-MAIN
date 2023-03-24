const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {dataDB, getPokemons} = require('../controllers/pokemons');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', async (req, res) =>{
  const {name} = req.query;

  try{
    await dataDB();
    const data = await getPokemons()
    res.status(200).json(data);

  }catch(error){
    throw new Error(error)
  }

})



router.get('/types', async (req, res) =>{


})
module.exports = router;
