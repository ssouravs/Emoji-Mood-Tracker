const express=require('express');
const app=express();
const port=8000;

require('dotenv').config();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const router = require('./routes');
require('./models/index')



app.use('/api',router);




app.get('/', (req, res) => {
    res.send('Testing if my server is working fine or not.Seems like it does, so Welcome to the homepage!');
  });


app.listen(port,(err)=>{
    if(err){
        console.log("Error connecting to the port"+err)
    }
    console.log("connection established suuccessfully and server running at:"+port)
})