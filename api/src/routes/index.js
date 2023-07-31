const { Router } = require('express');
const { getDataApi } = require('../controllers/pokemons');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');




const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/pokemon', async (req, res)=>{

    try{

        const data = getDataApi()
        res.status(200).json(data)
    }catch(error){
        console.log(error)
    }
})


module.exports = router;
