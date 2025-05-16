function findMaximum(array) {
  // escreva seu código aqui
  
  if (array.length === 0) {
    return undefined
  }
  else {
    const maximo = Math.max(...array)
    return maximo

  }

}

console.log(findMaximum([1,2,3,4,5,6,7,5,8,6]));


module.exports = {
  findMaximum
}
