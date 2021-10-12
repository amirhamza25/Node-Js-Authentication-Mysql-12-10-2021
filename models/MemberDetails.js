module.exports = (sequelize, DataTypes) => {
    const MemberDetails = sequelize.define("MemberDetails", {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      father: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      mother: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      nid: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      nomineename: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Nomineebirth: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      permanentaddress: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      relation: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      city: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      districts: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      division: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      Blood: {
        type: DataTypes.STRING,
        allowNull: true,
      }

    },
    {
      timestamps: false,
      freezeTableName: true
    });

    return MemberDetails;
  };