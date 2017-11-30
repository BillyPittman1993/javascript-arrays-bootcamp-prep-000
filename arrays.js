var chocolateBars = ["snickers", "hundred grand", "kitkat", "skittles"]

function addElementToBeginningOfArray(array, element) {
  var newArray = [element, array[0]]
    return newArray
}
function destructivelyAddElementToBeginningOfArray(array, element) {
  array.unshift(element)
    return array
}
function addElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
function destructivelyAddElementToEndOfArray(array, element) {
  array.push(element)
  return array
}
fuction accessElementInArray(array, index) {
  return array[2]
}
