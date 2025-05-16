function invertString(string) {
  // escreva seu código aqui
  let invertido = ""
  for (let i =  (string.length - 1); i >=0; i--) {
    let acumulador = string[i]
    invertido += acumulador

  }
  return invertido
  
    
}
invertString('inverte');


module.exports = {
  invertString
}
