const { DataTypes } = require('sequelize');
const { sq } = require('../config/database');

const Aluno = sq.define('Aluno', {
  ra: {
    type: DataTypes.STRING,
    allowNull: false,
    primaryKey: true
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false
  }
}, {
  tableName: 'tb_Aluno',
  timestamps: false 
});

module.exports = Aluno;