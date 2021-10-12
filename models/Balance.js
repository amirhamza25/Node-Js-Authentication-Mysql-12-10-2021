module.exports = (sequelize, DataTypes) => {
    const Balance = sequelize.define("Balance", {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      totalInAmount: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: true,
      },
      totalOutAmount: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: true,
      },
      totalPoint: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: true,
      },
      finalAmount: {
        type: DataTypes.DOUBLE(11, 10),
        allowNull: true,
      }
    },
    {
      timestamps: false,
      freezeTableName: true
    });

    return Balance;
  };