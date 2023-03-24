const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const {getDataApi, dataDB} = require('../controllers/pokemons');



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.get('/pokemons', async (req, res) =>{
  // const data = await getDataApi();
  const data = await dataDB();
  res.send(data)
})



router.get('/types', async (req, res) =>{


})
module.exports = router;
