function criptografar() {
  var texto = document.getElementById("texto_digitado").value;
  texto = texto.toLowerCase();
  var cript = [];
    for(var i = 0; i < texto.length; i++){
      cript.push(texto.charAt(i));
    }
    for (var i = 0; i < cript.length; i++){
      if(cript[i] == "e"){
        cript[i] = "enter";
      }
      if(cript[i] == "i"){
        cript[i] = "imes";
      }
      if(cript[i] == "a"){
        cript[i] = "ai";
      }
      if(cript[i] == "o"){
        cript[i] = "ober";
      }
      if(cript[i] == "u"){
        cript[i] = "ufate";
      }
    }
    console.log(cript);
    //var criptString = cript.toString();
    var criptString = "";
    for(var m in cript){
      criptString = criptString.concat(cript[m]);
    }
    var escreve = document.getElementById("escreve");
    escreve.innerHTML = criptString;
    console.log(criptString);
}
