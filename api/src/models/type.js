import { DataTypes } from "sequelize";

module.exports = (sequelize) => {

  sequelize.define('type', {
    name:{
      type: DataTypes.STRING,
      allowNull:false
    }
  });
};