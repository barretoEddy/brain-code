function invertElements(array) {
  // escreva seu código aqui
  const invertido = []
  for (let i =  (array.length - 1); i >=0; i--) {
    let acumulador = array[i]
    invertido.push(acumulador)
    

    
    


  }
  return invertido
  
}
console.log(invertElements([8, 4, 60, 15]));

module.exports = {
  invertElements
}