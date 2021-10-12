module.exports = (sequelize, DataTypes) => {
    const ProductStockQty = sequelize.define("ProductStockQty", {
      productId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      productOwner: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['Admin', 'Agent', 'SubAgent','Vendor','SubVendor']
      },
      qty: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: "0"
      },
      date:{
        type:DataTypes.DATE,
        defaultValue: DataTypes.NOW
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });

    return ProductStockQty;
  };