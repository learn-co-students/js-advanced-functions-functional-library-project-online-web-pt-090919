const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      let newLibrary  = ""
      if (collection instanceof Array) {
        newLibrary = collection.slice()
      } else {
        newLibrary = Object.values(collection)
      }
      for(let i = 0; i < newLibrary.length; i++) 
      callback(newLibrary[i]);
      return collection
    },

    map: function(collection, callback) {
      let newLibrary = ""
      if(collection instanceof Array) {
        newLibrary = collection.slice()
      } else {
        newLibrary = Object.values(collection)
      }
      let arr = []
      for (let i = 0; i < newLibrary.length; i++)
      arr.push(callback(newLibrary[i]))

      return arr
    },

    reduce: function(collection, callback, accum) {
      if(!accum) {
        accum = collection[0],
        collection = collection.slice(1)
      }
      for (let i = 0; i < collection.length; i++) {
        accum = callback(accum, collection[i], collection)
      }
      return accum
    },

    find: function(collection, predicate) {
      let response; 
      let values = Object.values(collection)
      for( let i = 0; i < collection.length; i++){
        if (predicate(values[i])) {
          response = values[i]
          break
        }
      }
      return response
    },

    filter: function(collection, predicate) {
      let response = []
      let values = Object.values(collection)
      for(let i = 0; i < values.length; i++) {
        if (predicate(values[i])) {
          response.push(values[i])
        }
      }
      return response
    },

    size: function(collection) {
      let newLibrary = ""
      if (collection instanceof Array){
        newLibrary = collection.slice()
      } else {
        newLibrary = Object.values(collection)
      }
      return newLibrary.length
    },

    first: function(collection, number) {
      if(!number) {
        return collection[0]
      } else {
        let arr = [];
        for (let i = 0; i < number; i++){
          arr.push(collection[i])
        }
        return arr
      }
    },

    last: function(collection, number) {
      if(!number) {
        let index = (collection.length -1)
        return collection[index]
      } else {
        let arr = [];
        collection = collection.reverse()
        for (let i = 0; i < number; i++){
          arr.push(collection[i])
        }
        return arr.reverse()
      }
    },

    compact: function(array) {
      let arr = []
      for (let i = 0; i < array.length; i++){
        if (array[i]) {arr.push(array[i])}
      }
      return arr
    },

    sortBy: function(array, callback) {
      let arr = [...array]
      return arr.sort(function(a, b) {
        return callback(a) - callback(b)
      })
    },

    flatten: function(array, nested, newArray = []) {
      if(!Array.isArray(array)) {
        return newArray.push(array)
      }
      if (nested) {
        for (let elements of array) {
          if (Array.isArray(elements)) {
            for(let value of elements) {
              newArray.push(value)
            }
          } else {
            newArray.push(elements)  
          }
        }
      } else {
        for (let elements of array) {
          this.flatten(elements, false, newArray)
        }
      }
      return newArray
    },

    uniq: function(collection, isSorted = false, callback = false) {
      if(!callback) {
        return [...new Set(collection)]
      } else {
        let transformedArr = []
        let uniqArr = []
        for (let element of collection) {
          let newElement = callback(element)
          if (!transformedArr.includes(newElement)) {
            transformedArr.push(callback(newElement))
            uniqArr.push(element)
          } 
        }
        return uniqArr
      }  
    },

    keys: function(object) {
      let objKeys = []
      for(let key in object) {
        objKeys.push(key)
      }
      return objKeys
    },

    values: function(object) {
      let values = []
      for (let key in object) {
        values.push(object[key])
      }
      return values
    },

    functions: function(object) {
      let functions = []

      for (let key in object) {
        if (typeof object[key] === 'function') {
          functions.push(object)
        }  
      }
      return functions.sort()
    },


  }
})()

fi.libraryMethod()
