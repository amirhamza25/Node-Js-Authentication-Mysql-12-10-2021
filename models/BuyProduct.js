module.exports = (sequelize, DataTypes) => {
    const BuyProduct = sequelize.define("BuyProduct", {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      invoiceNumber: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      agent: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      upline: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      qty: {
        type: DataTypes.INTEGER,
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
      totalPrice: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: false,
      },
      orderType: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      status: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      chk: {
        type: DataTypes.STRING,
        allowNull: true,
        defaultValue: "0"
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

    return BuyProduct;
  };