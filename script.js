
function validaCPF(){
  return false
}


function validacao(){
  const cpf = document.getElementById('cpf_digitado').value
  console.log(cpf)
  const resultadoValidacao = validaCPF(cpf)

  if(resultadoValidacao){
    document.getElementById("success").style.display = "block"
  } else {
    document.getElementById("error").style.display = "blockcle"
  }
}
