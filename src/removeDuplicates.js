function removeDuplicates(array) {
  // escreva seu código aqui
  const arrayLimpo = [...new Set(array)]
  return arrayLimpo
}
removeDuplicates([9, 1, 2, 3, 9, 2, 7])

module.exports = {
  removeDuplicates
}
