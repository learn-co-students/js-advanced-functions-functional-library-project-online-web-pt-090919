const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newCollection = ""
      if (collection instanceof Array){
         newCollection = collection.slice()
      } else {
         newCollection = Object.values(collection)
      }
        
      for (let i = 0; i < newCollection.length; i++)
        callback(newCollection[i]);

        return collection
    },

    map: function(collection, callback) {
      let newCollection = ""
      if (collection instanceof Array){
        newCollection = collection.slice()
      } else {
        newCollection = Object.values(collection)
      }

      let arr = []

      for (let i = 0; i < newCollection.length; i++)
        arr.push(callback(newCollection[i]))

        return arr
    },

    reduce: function(collection, callback, acc) {
      let newCollection = ""
      
    },

    functions: function() {

    },


  }
})()

let array = [1, 2, 3, 4, 5, 6]
let object = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6}
let triple = function(num) {return num * 3}

fi.libraryMethod()
