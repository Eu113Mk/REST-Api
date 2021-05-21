const express = require('express');
const mongoose = require('mongoose');
const app= express();

require('dotenv').config();


const mongoUrl = "mongodb+srv://amel2021:amel2021@cluster2.c2ug7.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"


app.use(express.json())

app.use('/users', require('./Routes/userRoutes'))

mongoose.connect( mongoUrl, { useUnifiedTopology: true, useNewUrlParser: true }, (err)=>{
    err? console.log(err) : console.log('database is connected')
   
})

const port = 5005
app.listen(port,(err)=>{
  if(err) throw err;
    console.log('server is running on port 5005')  
})