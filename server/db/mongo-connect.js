'use strict';

let mongoose = require('mongoose');

mongoose.Promise = global.Promise;

module.exports = function(oAppEnv){
  if(oAppEnv.isLocal === true){
      mongoose.connect('mongodb://127.0.0.1:27017/test');
  }else{
      mongoose.connect(oAppEnv.services.mongodb[0].credentials.uri);
  }
}