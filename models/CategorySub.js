module.exports = (sequelize, DataTypes) => {
    const CategorySub = sequelize.define("CategorySub", {
        categoryId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        title: {
            type: DataTypes.STRING(50),
            allowNull: true,
        },
        mobileicon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        desktopicon: {
            type: DataTypes.STRING,
            allowNull: true,
        },
        chk: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: "1"
        }
    }, {
        timestamps: false,
        freezeTableName: true
    });

    return CategorySub;
};