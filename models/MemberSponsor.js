module.exports = (sequelize, DataTypes) => {
    const MemberSponsor = sequelize.define("MemberSponsor", {
      userId: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      promot: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      position: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      RightCount: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      LeftCount: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      placement: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      sponsor: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      upline: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      agentId: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      accountType: {
        type: DataTypes.STRING,
        allowNull: true,
      }

    },
    {
      timestamps: false,
      freezeTableName: true
    });

    return MemberSponsor;
  };