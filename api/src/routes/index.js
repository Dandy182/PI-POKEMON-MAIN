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
 
  try{
    // await dataDB();
    // await getTypes();
    const data = await getAllPokemons()
    await getTypes();
    
    res.status(200).json(data)

  }catch(error){
    console.log(error)
  }

})

router.get('/pokemons/name', async (req, res) =>{
  const {name} = req.query;

  try{
    // await dataDB();
    // await getTypes();
    const data = await getAllPokemons()

    // if(name){
      let toSearch = name.toLowerCase();

      // const pokemonFound = await Pokemon.findAll({
      //   where:{
      //     name:toSearch
      //   },
      //   attributes:{
      //     exclude:["createdAt", "updatedAd"],
      //   },
      //   include:{
      //     model:Type,
      //     attributes:['name'],
      //     through:{
      //       attributes:[]
      //     }
      //   }
      // })

      let pokemonFound = await data.filter(p => p.name.toLowerCase().includes(toSearch))
      pokemonFound.length ? res.status(200).json(pokemonFound) : res.status(404).json(`Pokémon with name: ${toSearch} not found`)
    
    // }else{
    //   res.status(200).json(data);
    // }

  }catch(error){
    console.log(error)
  }

})

router.get('/pokemons/:id', async (req, res) => {
  let id = req.params.id;

  //console.log(id)
  try{
    const data =  await getAllPokemons();
    pokemonFound = await data.filter(p => p.id == id)
      pokemonFound.length ? res.status(200).json(pokemonFound) : res.status(404).json(`Pokémon with id: ${id} do not exist`)

  }catch(error){
    console.log(error);
  }

})

router.post('/pokemons', async (req, res) =>{
  let { name, img, hp, atk, def, speed, height, weight, type} = req.body; 

  try{
    let newPokemon = await Pokemon.create({
      name,
      img,
      hp,
      atk,
      def,
      speed,
      height,
      createInDb:true,
      weight,
    })

    let typeDb = await Type.findAll({
      where:{
        name: type
      }
    })

    newPokemon.addType(typeDb)

    res.status(200).send(`Pokémon Created`)

  }catch(error){
    console.log(error);
  }
  })

router.get('/types', async (req, res) =>{
  const types = await getTypes()
  res.status(200).send(types);
})


module.exports = router;
