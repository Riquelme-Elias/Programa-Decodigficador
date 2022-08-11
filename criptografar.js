var textoCrip;

function criptografar() {
  var escreveNaTela = document.getElementById("escreve");
  escreveNaTela.innerHTML = "";

  var textoDigitado = document.getElementById("texto_digitado").value;
  textoDigitado = textoDigitado.toLowerCase();
  var textoArray = [];

  textoArray = transformaStringEmArray(textoDigitado);

  if(textoArray.length == 0){
    document.getElementById("imge").style.display = ""
  }else{

    document.getElementById("imge").style.display = "none";
    textoArray = criptografarTexto(textoArray);
    console.log(textoArray);
    textoDigitado = transformaArrayEmString(textoArray);

    escreveNaTela = document.getElementById("escreve");
    escreveNaTela.innerHTML = textoDigitado;

    textoCrip = textoDigitado;

    var limpa = document.getElementsByClassName("texto")[0];
    limpa.value = "";
  }
}

function transformaStringEmArray(texto){
  var textoArray = [];
  for(var i = 0; i < texto.length; i++){
    textoArray.push(texto.charAt(i));
  }
  return textoArray;
}

function criptografarTexto(texto){
  for (var i = 0; i < texto.length; i++){
    if(texto[i] == "e"){
      texto[i] = "enter";
    }
    if(texto[i] == "i"){
      texto[i] = "imes";
    }
    if(texto[i] == "a"){
      texto[i] = "ai";
    }
    if(texto[i] == "o"){
      texto[i] = "ober";
    }
    if(texto[i] == "u"){
      texto[i] = "ufat";
    }
  }
  return texto;
}

function transformaArrayEmString(texto){
  var textoCriptografado = "";
  for(var m in texto){
    textoCriptografado = textoCriptografado.concat(texto[m]);
  }
  return textoCriptografado;
}
