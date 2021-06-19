const mongoose = require('mongoose');
const keys= require('../config/keys');
const dbUri = keys.mongo;
mongoose.connect(dbUri, { useNewUrlParser: true, useUnifiedTopology: true})
.then((result)=>{
console.log('connected to db');
})
.catch((err)=>{
console.log(err);
})

