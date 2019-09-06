module.exports = function (sequelize, DataTypes) {
    var Registry = sequelize.define("Registry", {

        dt_claimed: DataTypes.DATE,
        dt_purchased: DataTypes.DATE

    });

    Registry.associate = function (models) {
        Registry.belongsTo(models.User, {
            foreignKey: {
                allowNull: false
            }
        });
        Registry.belongsTo(models.Product, {
            foreignKey: {
                allowNull: false
            }           
        });
        
    }
        return Registry;
    };