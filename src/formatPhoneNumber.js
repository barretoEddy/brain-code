function formatPhoneNumber(telNumber) {
  // escreva seu código aqui

  const quantidadeDeNumeros = telNumber.length
  
  if(quantidadeDeNumeros !== 11) {
    return "Array com tamanho incorreto."
    
    } 
  for(let i of telNumber) {
    const contador = []
    for(let i of telNumber) {
      contador[i] = (contador[i]||0)+1
      if (contador[i]>=3) {
        return "não é possível gerar um número de telefone com esses valores"
      }
    }
    if (telNumber[i]<0 || telNumber[i]>9) {
      return "não é possível gerar um número de telefone com esses valores"
    }
  }
  
  
    const codigoDeArea = telNumber.slice(0,2).join('')
    const parteUm = telNumber.slice(2,7).join('')
    const parteDois = telNumber.slice(7,11).join('')

    return `(${codigoDeArea}) ${parteUm}-${parteDois}`

  
  
}

formatPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1])

module.exports = {
    formatPhoneNumber
}