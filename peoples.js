//exporting multiple "things"
const people = ['senku', 'kohaku', 'ginro', 'kinro']
const ages  = [3100, 16, 15, 15]
// To export multiple "things" we need to export an object, where the multiple "things" are its properties 
module.exports = {
    // people : people ==> here key = people and value = the list people defined above
    //We usually dont write it this way because if the key value pair have the same identifiers then JS
    //allows us to mention the identifier only once and it handles the rest by itself.

    //so we can export the above lists by just writing:
    people,ages

    //instead of writing:
    /* people: people
       ages: ages
    */
}