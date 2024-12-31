function outcome() {
  let num1 = Number(document.getElementById('num-one').value)
  let num2 = Number(document.getElementById('num-two').value)
  let total = 0
  let operation = document.getElementById('operation').value


 if (operation === 'add') {
   total = num1 + num2
   } else if (operation === 'subt') {
      total = num1 - num2
   } else if (operation === 'mult') {
      total = num1 * num2
   } else if (operation === 'div') {
    if (num2 === 0) {
         document.getElementById('resultArea').innerHTML = ' Erro: Não é possível dividir'
         return;
      }
      total = num1 / num2
   }
     
     
  
       document.getElementById('resultArea').innerHTML = 'Resultado = ' + String(total) 
   
}
   

 
