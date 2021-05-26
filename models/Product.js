const Product = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
      nome: DataTypes.STRING,
      preco: DataTypes.FLOAT,
      estoque: DataTypes.INTEGER,
    });
  };
  
  module.exports = Product;