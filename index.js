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
      // let newCollection = ""
      
      if (!acc) {
        acc = collection[0],
        collection = collection.slice(1)
      }

      for (let i = 0; i < collection.length; i++) {
        acc = callback(acc, collection[i], collection)
      }
      return acc

    },

    find: function(collection, predicate) {
      let res;
      let values = Object.values(collection)
      for (let i = 0; i < collection.length; i++){
        if (predicate(values[i])) {
          res = values[i]
          break
        }
      }
      return res
    },

    filter: function(collection, predicate) {
      let res = [];
      let values = Object.values(collection)
      for (let i = 0; i < values.length; i++){
        if (predicate(values[i])){
          res.push(values[i])
        }
      }
      return res
    },

    size: function(collection){
      let newCollection = ""
      if (collection instanceof Array){
        newCollection = collection.slice()
      } else {
        newCollection = Object.values(collection)
      }

      return newCollection.length
    },

    first: function(collection, number) {
      if (!number) {
        return collection[0]
      } else {
        let arr = [];
        for (let i = 0; i < number; i++){
          arr.push(collection[i])
        }
        return arr
      }
    },

    last: function(collection, number){
      if (!number) {
        let idx = (collection.length - 1)
        return collection[idx]
      } else {
        let arr = [];
        collection = collection.reverse()
        for (let i = 0; i < number; i++){
          arr.push(collection[i])
        }
        return arr.reverse()
      }
    },

    compact: function(array){
      let arr = []
      for (let i = 0; i < array.length; i++){
        if (array[i]) { arr.push(array[i]) } 
      }
      return arr
    },

    sortBy: function(array, callback) {
      let arr = []
      for (let i = 0; i < array.length; i++){
        if (callback(array[i])) { arr.push(array[i]) }
      }
      return arr.sort(function(a, b) { return callback(a) - callback(b) })
    },

    flatten: function(arr, shallow, newArr = []) {
      if(!Array.isArray(arr)) {
        return newArr.push(arr)
      }
      if (shallow) {
        for (let element of arr) {
          if (Array.isArray(element)) {
            for (let value of element) {
              newArr.push(value)
            }
          } else {
            newArr.push(element)
          }
        }
      } else {
        for (let element of arr) {
          this.flatten(element, false, newArr)
        }
      }
      return newArr
    },

    uniq: function(collection, isSorted = false, callback = false) {
      if (!callback) {
        return [...new Set(collection)]
      } else {
        let transformedArr = []
        let uniqArr = []
        for (let e of collection) {
          let newE = callback(e)
          if (!transformedArr.includes(newE)) {
            transformedArr.push(callback(newE))
            uniqArr.push(e)
          }
        }
        return uniqArr
      }
    },

    keys: function(object){
      let keys = []
      for (let key in object){
        keys.push(key)
      }
      return keys
    },

    values: function(object){
      let values = []
      for (let key in object){
        values.push(object[key])
      }
      return values
    },



    functions: function(obj) {
      let functions = []

      for (let key in obj){
        if (typeof obj[key] === "function"){
          functions.push(obj)
        }
      }
      return functions.sort()
    },


  }
})()

const callback = function(num){ return num % 2 == 0 }
const array = [-1, 4, 0, 1, 3, 2, 3, 4, 5, 6]
const object = { one: 1, two: 2, three: 3, four: 4, five: 5, six: 6}


fi.libraryMethod()
