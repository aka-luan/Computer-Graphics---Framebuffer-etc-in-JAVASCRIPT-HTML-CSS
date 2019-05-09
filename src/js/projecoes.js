function perspective(P, d){

  if(!d)
    d = 12;

  let ident = [[d, 0, 0, 0],
    [0, d, 0, 0],
    [0, 0, d, 0],
    [0, 0, 1, 0]];

  let out = matriz_mult(ident,P);



  for(let i=0;i<out[3].length; i++){
    out[0][i] = out[0][i]/out[3][i];
    out[1][i] = out[1][i]/out[3][i];
    out[2][i] = out[2][i]/out[3][i];
    out[3][i] = out[3][i]/out[3][i];
  }


  return out;
}

function Plano_XY(P,tz){

  let ident = [
    [1, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, tz],
    [0, 0, 0, 1]];

  return  multiply(ident,P);

}


function Plano_XZ(P,ty){

  let ident = [
    [1, 0, 0, 0],
    [0, 0, 0, ty],
    [0, 0, 1, 0],
    [0, 0, 0, 1]];

  return  multiply(ident,P);

}

function Plano_YZ(P,tx){

  let ident = [
    [0, 0, 0, tx],
    [0, 1, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]];

  return  multiply(ident,P);

}


function Oblique_Projection(P,ang,e){


  let ident = [
    [1, 0, e*cos(ang),0],
    [0, 1, e*sin(ang), 0],
    [0, 0, 1, 0],
    [0, 0, 0, 1]];

  return  multiply(ident,P);

}
