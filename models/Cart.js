module.exports = (sequelize, DataTypes) => {
    const Cart = sequelize.define("Cart", {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      productId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      ip: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      orderType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      price: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: false,
      },
      point: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: true,
      },
      date: {
        type: DataTypes.STRING,
        allowNull: true,
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });

    return Cart;
  };