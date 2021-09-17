function converter() {
  var valorElemento = document.getElementById("megabyte");
  var valor = valorElemento.value;
  var valorEmMegabyte = parseInt(valor);
  var valorEmKilobyte = valorEmMegabyte * Math.pow(2, 10);

   var elementoValorEmKilobyte = document.getElementById("valorEmKilobyte")
	 var valorEmKilobyte = "O resultado é " + valorEmKilobyte.toLocaleString('pt-br') + " KB"
	 elementoValorEmKilobyte.innerHTML = valorEmKilobyte
  }