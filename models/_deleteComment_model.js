const mongoose = require("mongoose");

const CourseRate = require("./schema/rating_model");

module.exports = function uploadComments(findObj,dataObj) {
  return new Promise(function(resolve, reject) {
      CourseRate.updateOne(
        findObj,dataObj
        // form 在body裡，在網址的是params！！！
        // form 在body裡，在網址的是params！！！
        // form 在body裡，在網址的是params！！！
      ).then(()=>{resolve()})
  });
};
