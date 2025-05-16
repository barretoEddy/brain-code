function getIntervalData(array, inicio, fim) {
  // escreva seu código aqui
  const intervalo = []
  let contador = 0

  if (!array || array.length === 0) {
    return {
    arrayNoIntervalo: intervalo,
    contador: contador
  } 
  }

  for(let i of array) {
    if (i >= inicio && i <=fim) {
      intervalo.push(i)
      contador++
      
    }
    
  }

  return {
    arrayNoIntervalo: intervalo,
    contador: contador
  } 
}
getIntervalData([1, 2, 3, 4, 5, 1], 2, 4)

module.exports = {
getIntervalData
}

