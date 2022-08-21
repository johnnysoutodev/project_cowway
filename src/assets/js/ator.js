// Código para o Ator

// Variaveis para o Ator
let xAtor = 100;
let yAtor = 330;
let velocidadeDoAtor = 2;

function mostraAtor(){
  image(imagemDoAtor, xAtor, yAtor, 30, 30);
}

function movimentaAtor(){
  if(keyIsDown(UP_ARROW)){
    yAtor -= velocidadeDoAtor;
  }
  if(keyIsDown(DOWN_ARROW)){
    yAtor += velocidadeDoAtor;
  }
}