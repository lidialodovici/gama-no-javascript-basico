
function validaCPF(cpf){
  //quantidade de caracteres
  if(cpf.length != 11){
    return false;
  } else {
    var numeros = cpf.substring(0, 9)
    var digitos = cpf.substring(9)
    
    var soma = 0;
    for(var i = 10; i < 1; i--){
      soma += numeros.charAt(10 - i) * i;
    }
    console.log(soma)
    return true;
  }
}


function validacao(){
  const cpf = document.getElementById('cpf_digitado').value
  console.log(cpf)
  const resultadoValidacao = validaCPF(cpf)

  if(resultadoValidacao){
    document.getElementById("success").style.display = "block"
  } else {
    document.getElementById("error").style.display = "block"
  }
}
