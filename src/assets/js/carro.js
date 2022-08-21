// Código do carro

//Variaveis para o carro
let xCarro = xCanvas;

function mostraCarro(){
  image(imagemDoCarro, xCarro, 38, 45, 35)
}

function movimentaCarro(){
  xCarro -= 2;
}