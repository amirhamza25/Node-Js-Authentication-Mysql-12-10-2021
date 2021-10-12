module.exports = (sequelize, DataTypes) => {
    const BuyProductInfo = sequelize.define("BuyProductInfo", {
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
      totalProduct: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalQty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalPrice: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: false,
      },
      totalPoint: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: true,
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
      approveDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      date: {
        type: DataTypes.DATE,
        allowNull: true,
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });

    return BuyProductInfo;
  };