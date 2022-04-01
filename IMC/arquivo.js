const form = document.querySelector(".form");

function parar (evento) {
  evento.preventDefault();

  const input_one = document.querySelector("#input-one");
  const input_two = document.querySelector("#input-two");
  const peso = Number(input_one.value);
  const altura = Number(input_two.value);
  
  if(!peso || peso < 0){
    mostraresult("Peso Inválido", false)
    return
  }
  if(!altura || altura < 0){
    mostraresult("Altura Inválida", false)
    return
  }
  const imc = calculaimc(peso,altura);
  const nivel = nivelimc(imc);

  const mensagemsechegar = `Seu IMC é ${imc} com nível (${nivel})`;
  mostraresult(mensagemsechegar,true);
}

form.addEventListener("submit", parar);

function calculaimc(peso,altura){
  const calc = peso / altura**2;
  return calc.toFixed(1);
}

function nivelimc(imc){
  const array = ["Abaixo do peso", "Peso normal","Sobrepeso","Obesidade grau 1", "Obesidade grau 2","Obesidade grau 3"];


  if(imc > 40){
    return array[5];
  }
  if(imc >= 35 && imc <= 39.9){
    return array[4];
  }
  if (imc >= 30 && imc <= 34.9){
    return array[3];
  }
  if (imc >= 25 && imc <= 29.9){
    return array[2];
  }
  if (imc >= 18.5 && imc <= 24.9){
    return array[1];
  }
  if (imc < 18.5){
    return array[0];
  }
}
function criap() {
  const p = document.createElement('p');
  return p;
}

function mostraresult(msg, valido) {
  const result = document.querySelector(".div-useijs");
  result.innerHTML = " ";

  const p = criap();

  if(valido) {
    p.classList.add("paragrafo-resultado");
  } else {
    p.classList.add("bad");
  }

  p.innerHTML = msg;
  result.appendChild(p);
}
