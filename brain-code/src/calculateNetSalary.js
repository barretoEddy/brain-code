const salario = 0;

function calculateNetSalary(grossSalary) {
  // escreva seu código aqui
  if (grossSalary <= 1556.94) {
    let inss = grossSalary*0.08
    return `Salário: R$ ${grossSalary - inss}`
  }
  if (grossSalary>= 1556.95 && grossSalary <= 2594.92){ // alíquota de 9% 
    let inss = grossSalary*0.09
    grossSalary -= inss
    if(grossSalary >= 1903.99 && grossSalary<=2826.65) { //alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto; 
      let parcela = 142.80 
      let deducaoIR = grossSalary*0.075
      const impostoDeRenda = deducaoIR -parcela
      grossSalary -= impostoDeRenda
      return `Salário: R$ ${grossSalary}`
    }
    return `Salário: R$ ${grossSalary}`
  }

  if (grossSalary>= 2594.93 && grossSalary <= 5189.82){ //bruto de R$ 2594.93 a R$ 5189.82 alíquota de 11%; 
    let inss = grossSalary*0.11
    grossSalary -= inss
    if(grossSalary >= 1903.99 && grossSalary<=2826.65) { //alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto; 
      let parcela = 142.80 
      let deducaoIR = grossSalary*0.075
      const impostoDeRenda = deducaoIR -parcela
      grossSalary -= impostoDeRenda
      return `Salário: R$ ${grossSalary}`
    }
    if(grossSalary >= 2826.66 && grossSalary<=3751.05) { // De R$ 2826.66 a R$ 3751.05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto;
      let parcela = 354.80 
      let deducaoIR = grossSalary*0.15
      const impostoDeRenda = deducaoIR -parcela
      grossSalary -= impostoDeRenda
      return `Salário: R$ ${grossSalary}`
    }
    if(grossSalary >= 3751.06 && grossSalary<=4664.68) { // De R$ 3751.06 a R$ 4664.68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
      let parcela = 354.80 
      let deducaoIR = grossSalary*0.15
      const impostoDeRenda = deducaoIR -parcela
      grossSalary -= impostoDeRenda
      if(grossSalary >= 4664.68) { // Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto
        let parcela = 869.36
        let deducaoIR = grossSalary*0.275
        const impostoDeRenda = deducaoIR -parcela
        grossSalary -= impostoDeRenda
        return `Salário: R$ ${grossSalary}`
    }
      return `Salário: R$ ${grossSalary}`
    }
    
    return `Salário: R$ ${grossSalary}`
  }
  if (grossSalary > 5189.82){ // Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88.
    let inss = 570.88
    grossSalary -= inss
    if(grossSalary >= 4664.68) { // Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto
      let parcela = 869.36
      let deducaoIR = grossSalary*0.275
      const impostoDeRenda = deducaoIR -parcela
      grossSalary -= impostoDeRenda
      return `Salário: R$ ${grossSalary}`
      }
    return `Salário: R$ ${grossSalary}`
    }
  }
calculateNetSalary(3000);

module.exports = {
    calculateNetSalary
}