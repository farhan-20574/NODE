let myName = 'Ayaz'
function printName() {
    console.log(myName)
    
}

export default{
    printName,
}  //CommonJS

module.exports = {
    printName
}  //ES6