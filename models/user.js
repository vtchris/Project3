module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
      // Giving the Author model a name of type STRING
      firstName: DataTypes.STRING,
      lastName: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING
    });
  
    // User.associate = function(models) {
    
    //   User.hasMany(models.Post, {
    //     onDelete: "cascade"
    //   });
    // };
  
    return User;
  };