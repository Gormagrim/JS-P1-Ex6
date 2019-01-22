  function modulo(){

  var regex = new RegExp(/[1-9]/);
  var firstNumber = document.getElementById('firstNumber').value;
  var secondNumber = document.getElementById('secondNumber').value;

  var result = firstNumber % secondNumber ;

  if (regex.test(secondNumber)){
    alert(result);
  }
  else{
    alert('Retournes à l\'école, on ne peut pas diviser par 0.')

  }

}
