const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("pokemon", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.TEXT,
    },
    img: {
      type: DataTypes.TEXT,
    },
    hp:{
      type: DataTypes.TEXT,
    },
    attack: {
      type: DataTypes.TEXT,
    },
    defense: {
      type: DataTypes.TEXT,
    },
    speed: {
      type: DataTypes.TEXT,
    },
    height: {
      type: DataTypes.TEXT,
    },
    weight: {
      type: DataTypes.TEXT,
    },
    is_Db: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    createdAt: false,
    updatedAt: false,
  });
};
