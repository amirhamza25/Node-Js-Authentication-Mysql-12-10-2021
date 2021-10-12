module.exports = (sequelize, DataTypes) => {
    const ProductStockUpdateQty = sequelize.define("ProductStockUpdateQty", {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productOwner: {
        type: DataTypes.ENUM,
        allowNull: true,
        values: ['Admin', 'Agent', 'SubAgent','Vendor','SubVendor']
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

    return ProductStockUpdateQty;
  };