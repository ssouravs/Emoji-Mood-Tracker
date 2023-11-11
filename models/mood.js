const User=require('./user');
module.exports=(sequelize,DataTypes)=>{

const Mood = sequelize.define('Mood', {
  mood_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  notes: {
    type: DataTypes.TEXT,
  },
  emojis: {
    type: DataTypes.TEXT, // Use TEXT for emojis
  },
}, {
  timestamps: true, // Enable createdAt and updatedAt fields
},
{
    tableName: 'moods'
  }
);

// Define associations with the User model
//Mood.belongsTo(User, { foreignKey: 'userId' });
// Define the association
return Mood;

}
