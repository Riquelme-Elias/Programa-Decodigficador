function descritografar(){
  var textoDigitado = document.getElementById("texto_digitado").value;
  textoDigitado = textoDigitado.toLowerCase();
  var textoArray = [];
  textoArray = transformaStringEmArray(textoDigitado);
  textoArray = descriptografaTexto(textoArray);
}

function transformaStringEmArray(texto){
  var textoArray = [];
  for(var i = 0; i < texto.length; i++){
    textoArray.push(texto.charAt(i));
  }
  return textoArray;
}

function descriptografaTexto(texto){
  for (var i = 0; i < texto.length; i++){
    textoArray.push(texto.charAt(i));
  }
  return textoArray;
}

function criptografarTexto(texto){
  for (var i = 0; i < texto.length; i++){
    if(texto[i] == "e"){
      i++;
      if(texto[i] == "n"){
        i++;
        if(texto[i] == "t"){
          i++;
          if(texto[i] == "e"){
            i++;
            if(texto[i] == "r"){
              ////excluir lestras da array e substituir por else {
              ///pode-se transformar em strins em string
              }
            }
          }
        }
      }
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
      texto[i] = "ufate";
    }
  }
  return texto;
}
