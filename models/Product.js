module.exports = (sequelize, DataTypes) => {
    const Product = sequelize.define("Product", {
      categoryId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categorySubId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      categoryBrandId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      brandCode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      realPrice: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: false,
      },
      buyPrice: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: false,
      },
      agentCommission: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: true,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      fullDescription: {
        type: DataTypes.TEXT('LONGTEXT'),
        allowNull: true,
      },
      productOwner: {
        type: DataTypes.ENUM,
        allowNull: true,
        values: ['Admin', 'Agent', 'SubAgent','Vendor','SubVendor']
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['Offer', 'FlashSales', 'Reguler']
      },
      offerAmount: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: true,
      },
      discountAmount: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: true,
      },
      cashBackAmount: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: true,
      },
      chk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: "1"
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

    return Product;
  };