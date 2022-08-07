function criptografar() {
  var texto = document.getElementById("texto_digitado").value;
  console.log(texto);
  console.log(texto.charAt(0));
  var cript = [];
    for(var i = 0; i < texto.length; i++){
      cript.push(texto.charAt(i));
    }
    for (var i = 0; i < cript.length; i++) {
      if(cript[i] == "e"){
        cript[i] = "enter";
      }
    }
    console.log(cript);
}
