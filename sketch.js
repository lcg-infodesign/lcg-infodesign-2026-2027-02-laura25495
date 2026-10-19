let numeroGlifi = 196;

let dimensioniOcchi = [];
let coloreIride = [];
let dimensioniIridi = [];
let dimensioniPupille = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  // Dimensioni e colori casuali
  for (let i = 0; i < numeroGlifi; i++) {

    dimensioniOcchi[i] = random(0.3, 1);

    coloreIride[i] = color(
      random(150, 256),
      random(150, 256),
      random(150, 256)
    );

    dimensioniIridi[i] = random(0.5, 0.6);

    dimensioniPupille[i] = random(0.3, 0.6);
  }
}

function draw() {
  background("rgb(0 0 0)");

  let numeroColonne = ceil(sqrt(numeroGlifi));
  let numeroRighe = ceil(numeroGlifi / numeroColonne);
  let dimColonna = width / numeroColonne;
  let dimRiga = height / numeroRighe;

  let xCorrente = 0;
  let yCorrente = 0;

  for (let g = 0; g < numeroGlifi; g++) {

    mioGlifo(
      xCorrente + dimColonna/2,
      yCorrente + dimRiga/2,
      min(dimColonna, dimRiga) * dimensioniOcchi[g],
      coloreIride[g],
      dimensioniIridi[g],
      dimensioniPupille[g]
    );

    xCorrente = xCorrente + dimColonna;

    if (xCorrente >= width - 0.001) {
      xCorrente = 0;
      yCorrente = yCorrente + dimRiga;
    }
  }
}

function mioGlifo(x, y, size, colore, dimIride, dimPupilla) {
  push();

  translate(x, y);

  // Cerchio esterno
  fill(255);
  circle(0, 0, size);

  // Iride colorata
  fill(colore);
  stroke("rgb(0 0 0)");
  strokeWeight(1);
  circle(0, 0, size * dimIride);

  // Pupilla nera
  fill(0);
  circle(0, 0, size * dimIride * dimPupilla);

  pop();
}



