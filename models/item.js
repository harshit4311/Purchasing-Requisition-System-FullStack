'use strict';
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Item extends Model {
    static associate(models) {
      // Define associations here if needed
    }
  }

  Item.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    category: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: { isInt: true, min: 1 }
    },
    timeline: {
      type: DataTypes.DATE,
      allowNull: false
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    },
    requiredFor: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { notEmpty: true }
    }
  }, {
    sequelize,
    modelName: 'Item',
    tableName: 'items',
    timestamps: true
  });

  return Item;
};
