const { getDataApi } = require("./pokemons");
const { Type } = require('../db')


const getTypes = async () => {

  try{

    const api = await getDataApi();
    const typesArrays = await api.map(p => p.types);
    const typesList = await typesArrays.map(t => t.pop());
    
    typesList.forEach(t =>{
      Type.findOrCreate({
        where:{name:t}
      })
    })
    //console.log(typesList)

    const dataTypes = Type.findAll()
    return dataTypes;
    
  }catch(error){
    console.log(`funcion getTypes fallando en ${error}`)
  }
}

module.exports = {
  getTypes
}