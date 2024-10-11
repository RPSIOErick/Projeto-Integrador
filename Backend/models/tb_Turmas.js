const { DataTypes } = require('sequelize');
const { sq } = require('../config/database');


const Turmas = sq.define('Turmas', {
    ID_Turma: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    Status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    Periodo: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    Cod_Aluno: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tb_Aluno',
        key: 'Cod_Aluno',
      }
    },
    ID_Disc: {
      type: DataTypes.INTEGER,
      references: {
        model: 'tb_Disciplinas',
        key: 'ID_Disc',
      }
    }
}, {
    tableName: 'tb_Turma',
    timestamps: false
  });

  module.exports = Turmas;
  