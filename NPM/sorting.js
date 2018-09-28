
var newArray = [];

function numbers(num){
  newArray.push(num)
  return newArray;
}

function sortedList(){
newArray.sort(function(a,b){
    return a - b;
  })
  return newArray;
};


// console.log(ourResults())


module.exports = {
  numbers,
  sortedList
}