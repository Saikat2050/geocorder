const NodeGeocoder = require('node-geocoder');
const keys=require('../config/keys');
 
const options = {
  provider: 'mapquest',
 
  // Optional depending on the providers
  httpAdapter:'http',
  apiKey:keys.geocoder.geocoder_key, // for Mapquest, OpenCage, Google Premier
  formatter: null // 'gpx', 'string', ...
};
 
const geocoder = NodeGeocoder(options);
 
module.exports=geocoder;
