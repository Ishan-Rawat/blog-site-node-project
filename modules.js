//In order to import only specific things from files/modules, we can use object destructuring
const {people}  = require('./peoples')

console.log(people)

const {peoples, ages} = require('./peoples')

console.log(people, ages)