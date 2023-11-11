module.exports=(sequelize,DataTypes)=>{
const User = sequelize.define('User', {
  // Model attributes are defined here
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  userId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true, // Set to true for auto-increment, false for user-defined
    allowNull: false,
  },
  password:{
    type:DataTypes.STRING,
    allowNull:false,
  },
  sharingLink: {
    type: DataTypes.STRING,
    unique: true,
  },
  isSharingEnabled: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },

},{
    tableName: 'users'
  }
);

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true

return User;
}




