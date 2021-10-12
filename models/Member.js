module.exports = (sequelize, DataTypes) => {
  const Member = sequelize.define("Member", {
    userLog: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    number: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    accountType: {
      type: DataTypes.STRING,
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

  }, {
    timestamps: false,
    freezeTableName: true
  });

  return Member;
};