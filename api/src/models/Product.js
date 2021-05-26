const Product = (sequelize, DataTypes) => {
    return sequelize.define('Product', {
      img: DataTypes.STRING,
      nome: DataTypes.STRING,
      preco: DataTypes.FLOAT,
      estoque: DataTypes.INTEGER,
    });
  };
  
  module.exports = Product;