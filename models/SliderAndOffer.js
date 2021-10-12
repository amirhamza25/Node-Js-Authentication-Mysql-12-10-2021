module.exports = (sequelize, DataTypes) => {
    const SliderAndOffer = sequelize.define("SliderAndOffer", {
      title: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      img: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      discription: {
        type: DataTypes.TEXT('LONGTEXT'),
        allowNull: true,
      },
      status: {
        type: DataTypes.ENUM,
        allowNull: false,
        values: ['Slider', 'Offer', 'Ads']
      },
      chk: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: "1"
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

    return SliderAndOffer;
  };