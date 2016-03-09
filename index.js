"use strict";
module.exports = {
  classify: function(trainingData, doc) {
    return if(!(trainingData instanceof Array || doc instanceof Array))

    let categories = trainingData.map(function(td) {
      return td.target
    });

    let vocabularyCount = trainingData.map(function(td) {
      return td.docs
    })
    .reduce(function(arr1, arr2) {
      return arr1.concat(arr2);
    }, [])
    .reduce(function(arr, ele) {
      if(arr.indexOf(ele) < 0) {
        arr.push(ele);
      }
      return arr;
    }, []).length;
    console.log(vocabularyCount);
    categories.map(function(category) {
      let score = doc.map(function(word) {
        let relatedTrainingData = 1;
      });
    });
  }
};
