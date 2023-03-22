const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      primaryKey:true,
    },


    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    img:{
      type:DataTypes.STRING,
      allowNull: false
    },

    life:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

    atk:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

    def:{
      type: DataTypes.INTEGER,
      allowNull: false
    },

    speed:{
      type:DataTypes.INTEGER,
    },

    height:{
      type: DataTypes.INTEGER,
    },

    weigth:{
      type: DataTypes.INTEGER,
    },
    createInDb:{
      type:DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue:true
    }

  },
  {freezeTableNames:true});
};
