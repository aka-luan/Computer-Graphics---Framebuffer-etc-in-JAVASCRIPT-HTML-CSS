function matriz_mult(a,b){
  let aNumRows = a.length, aNumCols = a[0].length,
    bNumRows = b.length, bNumCols = b[0].length,
    out = new Array(aNumRows);  // initialize array of rows

  for (let r = 0; r < aNumRows; ++r) {
    out[r] = new Array(bNumCols);
    for (let c = 0; c < bNumCols; ++c) {
      out[r][c] = 0;             // initialize the current cell
      for (let i = 0; i < aNumCols; ++i) {
        out[r][c] += Math.floor(a[r][i] * b[i][c]);
      }
    }
  }
  return out;
}


function translacao(tx, ty, P) {
  console.log (tx,ty);
  return matriz_mult([[1, 0, tx],
    [0, 1, ty],
    [0, 0 , 1]], P);
}

function rotacao(ang, P) {
  return matriz_mult([[cos(ang), -sin(ang), 0],
    [sin(ang), cos(ang), 0],
    [0, 0, 1]], P);
}

function escala(sx, sy, P){
  return matriz_mult([[sx, 0 , 0],
    [0, sy, 0],
    [0, 0, 1]], P);
}

function cos(ang){
  return Math.cos(ang*(Math.PI/180));
}

function sin(ang){
  return Math.sin(ang*(Math.PI/180));
}
