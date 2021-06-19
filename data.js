
const mongoose= require('mongoose');
const geocoder = require('../utils/geocorder');
const Schema=mongoose.Schema;
const db=new Schema({
    storeId:{type:String, required:true ,unique:true , trim:true , maxlength:[10,'length should not be more than 10 character']},
    address:{type:String, required:true},
    location: {
        type: {type: String, enum: ['Point']},
        coordinates: {type: [Number], index:'2dsphere'},
        formattedAddress: {type:String}
      }

},{timeStamp:true});
db.pre('save',async (next)=>{
const loc=await geocoder.geocode(this.address);
console.log(loc);

});
const Data= mongoose.model('Data',db);
module.exports=Data;