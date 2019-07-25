const fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(arrayOrObj, funct) {
      if (Array.isArray(arrayOrObj)) {
        let endPoint = arrayOrObj.length

        for (let i = 0; i < endPoint; i++) { 
          funct(arrayOrObj[i])
        }
      }
      else {
        let keys = Object.keys(arrayOrObj)
        let endPoint = keys.length

        for (let i = 0; i < endPoint; i++) {
          funct(arrayOrObj[keys[i]])
        }
      }
      return arrayOrObj
    },

    map: function(arrayOrObj, funct) {
      let oldarrayOrObj = arrayOrObj

      if (Array.isArray(arrayOrObj)) {
        let newarrayOrObj = []
        let endPoint = oldarrayOrObj.length

        for (let i = 0; i < endPoint; i++) { 
          newarrayOrObj.push(funct(oldarrayOrObj[i]))
        }
        return newarrayOrObj
      }
      else {
        let newarrayOrObj = []
        let keys = Object.keys(oldarrayOrObj)
        let endPoint = keys.length

        for (let i = 0; i < endPoint; i++) {
          newarrayOrObj.push(funct(oldarrayOrObj[keys[i]]))
        }
        return newarrayOrObj
      }
    },

    reduce: function(array, redFunct, start) {
      let endPoint = array.length
      let essence = start ? start : array[0]
      if (start) {
        for (let i = 0; i < endPoint; i++) {
          essence = redFunct(essence, array[i], array)
        }
      }
      else {
        for (let i = 1; i <endPoint; i++) {
          essence = redFunct(essence, array[i], array)
        }
      }
      return essence
    },

    find: function(array, truFunct) {
      let endPoint = array.length

      for (let i = 0; i < endPoint; i++) {
        if (truFunct(array[i])) {
          return array[i]
        }
      }
      return undefined
    },

    filter: function(array, truFunct) {
      let endPoint = array.length
      let newArray = []

      for (let i = 0; i < endPoint; i++) {
        if (truFunct(array[i])) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    size: function(arrayOrObj) {
      if (Array.isArray(arrayOrObj)) {
        return arrayOrObj.length
      }
      else {
        let keys = Object.keys(arrayOrObj)
        return keys.length

      }
    },

    first: function(array, n) {
      if (n) {
        return array.slice(0, n)
      }
      else {
        return array[0]
      }
    },

    last: function(array, n) {
      if (n) {
        return array.slice(-n)
      }
      else {
        return array[array.length-1]
      }
    },

    compact: function(array) {
      let endPoint = array.length
      let newArray = []

      for (let i = 0; i < endPoint; i++) {
        if (array[i]) {
          newArray.push(array[i])
        }
      }
      return newArray
    },

    sortBy: function(array, funct) {
      let relation = {}
      let resultsarray = []
      let endPoint = array.length
      let newArray = []

      for (let i = 0; i < endPoint; i++) {
        relation[funct(array[i])] = array[i]
        resultsarray.push(funct(array[i]))
      }

      let sortedResultArray = resultsarray.sort((a, b) => a - b)

      for (let i = 0; i < endPoint; i++) {
        newArray.push(relation[sortedResultArray[i]])
      }
      return newArray
    },

  }
})()

fi.libraryMethod()