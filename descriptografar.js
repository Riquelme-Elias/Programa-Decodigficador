function descripitografar(){
  var textoDigitado = document.getElementById("texto_digitado").value;
  textoDigitado = textoDigitado.toLowerCase();
  var textoArray = [];
  textoArray = transformaStringEmArray(textoDigitado);

  if(textoArray.length == 0){
    var limpa = document.getElementById("escreve");
    limpa.innerHTML = "";
    var img = document.querySelector("#escreve");
    img.innerHTML = "<img src='Nenhuma-mensagem.png'>";
    console.log("vazio");
  }else{

    textoArray = descriptografaTexto(textoArray);
    console.log(textoArray);
    textoDigitado = transformaArrayEmString(textoArray);

    var escreveNaTela = document.getElementById("escreve");
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
