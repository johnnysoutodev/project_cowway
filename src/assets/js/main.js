// Main do jogo CowWay

function setup() {
    createCanvas(xCanvas, yCanvas);
  }
  
  function draw() {
    background(imagemDaEstrada);
    mostraAtor();
    mostraCarro();
    movimentaCarro();
    movimentaAtor();
  }