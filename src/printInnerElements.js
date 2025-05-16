function printInnerElements(array) {
  // escreva seu código aqui
  if (array.length >=3) {
    const sobra = array.splice(1,array.length - 2)
    for (let i in sobra) {
      console.log(sobra[i]);
      
    }    
  }
  else {
    console.log('Tamanho do array inválido');
  }

}
console.log(printInnerElements([8, 10, 5, 20, 6]));

// [1, 5, 10, 12]
module.exports = {
  printInnerElements
}