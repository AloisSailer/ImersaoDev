var nome = prompt("Qual é seu nome?");
var notaDoPrimeiroBimestre = parseFloat(prompt("Sua nota do primeiro Bimestre?"));
var notaDoSegundoBimestre = parseFloat(prompt("Sua nota do segundo Bimestre?"));
var notaDoTerceiroBimestre = parseFloat(prompt("Sua nota do terçeiro Bimestre?"));
var notaDoQuartoBimestre = parseFloat(prompt("Sua nota do quarto Bimestre?"));

var resultado = ((notaDoPrimeiroBimestre + notaDoSegundoBimestre + notaDoTerceiroBimestre + notaDoQuartoBimestre) / 4).toFixed(1);
var notaMinima = 6;

if (resultado < notaMinima) {
  pageSubtitle.innerHTML = nome + ", infelizmente você não passou. Sua nota é " + resultado;
} else {
  pageSubtitle.innerHTML = "Parabéns " + nome + ", você passou! Sua nota é " + resultado;
}