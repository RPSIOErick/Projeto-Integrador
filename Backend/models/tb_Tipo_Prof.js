const { DataTypes } = require('sequelize');
const { sq } = require('../config/database');


const Tipo_Prof = sq.define('Tipo_Prof', {
  ID_Tipo_Prof: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: false, // Não é auto-incremento
  },
  Nome: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Descricao: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
    tableName: 'tb_Tipo_Prof',
    timestamps: false
  });

  module.exports = Tipo_Prof;