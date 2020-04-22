const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, cbFunction) {
      Object.values(collection).forEach(x => cbFunction(x))
      return collection
    },

    map: function (collection, cbFunction) {
      let newArray = []
      Object.values(collection).forEach(x => newArray.push(cbFunction(x)))
      return newArray
    },

    reduce: function (c = [], callback = () => {}, acc) {
      
    },

  }
})()

fi.libraryMethod()
