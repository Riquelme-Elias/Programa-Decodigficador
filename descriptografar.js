function descripitografar(){
  var escreveNaTela = document.getElementById("escreve");
  escreveNaTela.innerHTML = "";

  var textoDigitado = document.getElementById("texto_digitado").value;
  textoDigitado = textoDigitado.toLowerCase();
  var textoArray = [];

  textoArray = transformaStringEmArray(textoDigitado);

  if(textoArray.length == 0){
    document.getElementById("imge").style.display = ""
    document.querySelector("#escreve").textContent = "Nenhuma mensagem encontrada";
    document.querySelector("#copy").style.display = "none";
  }else{
    document.querySelector("#escreve").textContent = "";
    document.querySelector("#copy").style.display = "";

    document.getElementById("imge").style.display = "none";
    textoArray = descriptografaTexto(textoArray);
    textoDigitado = transformaArrayEmString(textoArray);

    document.querySelector("#escreve").textContent = textoDigitado;

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

function descriptografaTexto(texto){
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
              texto.splice(i, 1);
              i--;
              texto.splice(i, 1);
              i--;
              texto.splice(i, 1);
              i--;
              texto.splice(i, 1);
              i--;
              }
            }
          }
        }else{
          i--;
        }
      }
      if(texto[i] == "i"){
        i++;
        if(texto[i] == "m"){
          i++;
          if(texto[i] == "e"){
            i++;
            if(texto[i] == "s"){
              texto.splice(i, 1);
              i--;
              texto.splice(i, 1);
              i--;
              texto.splice(i, 1);
              i--;
            }
          }
        }else{
          i--;
        }
      }
      if(texto[i] == "a"){
        i++;
        if(texto[i] == "i"){
          texto.splice(i, 1);
          i--;
        }else{
          i--;
        }
      }
      if(texto[i] == "o"){
        i++;
        if(texto[i] == "b"){
          i++;
          if(texto[i] == "e"){
            i++;
            if(texto[i] == "r"){
              texto.splice(i, 1);
              i--;
              texto.splice(i, 1);
              i--;
              texto.splice(i, 1);
              i--;
            }
          }
        }else{
          i--;
        }
      }
      if(texto[i] == "u"){
        i++;
        if(texto[i] == "f"){
          i++;
          if(texto[i] == "a"){
            i++;
            if(texto[i] == "t"){
                texto.splice(i, 1);
                i--;
                texto.splice(i, 1);
                i--;
                texto.splice(i, 1);
                i--;
            }
          }
        }else{
          i--;
        }
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
