const { Sequelize, DataTypes }=require('sequelize');

const sequelize=new Sequelize('emoji_tracker','root','',{
    host: 'localhost',
    dialect: 'mysql'
});

try{
    sequelize.authenticate();
    console.log("connection to database has been established successfully")
}catch(error){
    console.error('failed connecting to database',error);
}

const db={};


db.Sequelize=Sequelize;
db.sequelize=sequelize;
db.User=require('./user')(sequelize,DataTypes);
db.Mood=require('./mood')(sequelize,DataTypes);

db.Mood.belongsTo(db.User, {
    foreignKey: 'userId', // Name of the foreign key in the 'Mood' model
    targetKey: 'userId', // Name of the primary key in the 'User' model
    
  }
  );
  //console.log(db);

db.sequelize.sync({force:false}).then(() => {
    console.log('Tables dropped and recreated and successfully in synchronisation');
  })
  .catch((error) => {
    console.error('Error dropping and recreating tables:', error);
  }); 

 
module.exports = db;