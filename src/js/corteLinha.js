//definir as regiões
const INSIDE = 0;  //#0000
const LEFT = 1;    //#0001
const RIGHT = 2;   //#0010
const BOTTOM = 4;  //#0100
const TOP = 8;   // #1000

//definindo retangulo de recorte diagonais


//criar função para desenhar quadrado
//diagonal 1
let x_max;
let y_max;

//dagonal 2
let x_min;
let y_min;
function clipRext(x1,y1,x2,y2){
  x_min = x1;
  y_min = y1;
  x_max = x2;
  y_max = y2;

}

//calcular o codigo da região
function computeCode(x, y) {


  let code = INSIDE;
  if (x < x_min) {
    code |= LEFT;

  } else if (x > x_max) {
    code |= RIGHT;

  }
  if (y < y_min) {
    code |= BOTTOM;

  } else if (y > y_max) {
    code |= TOP;

  }

  // console.log(code);
  return code;
}
//algoritimo de  cohen Sutherland
function cohenSutherlandClip(x1, y1, x2, y2,color){
  //calcular regiões P1, P2
  let dots = [];
  let code1 = computeCode(x1, y1);
  let code2 = computeCode(x2, y2);
  let accept = false;

  while(true){
    if((code1 == 0) && (code2 == 0)){
      accept = true;
      break;
    }
    else if(code1 & code2){
      break;
    }
    else {
      //Linha precisa de recorte
      //Pelo menos um dos pontos está fora
      let x, y, code_out;

      if (code1 != 0)
        code_out = code1;
      else
        code_out = code2;

      if (code_out & TOP) {
        x = x1 + (x2 - x1) * (y_max - y1) / (y2 - y1);
        y = y_max;
      } else if (code_out & BOTTOM) {
        x = x1 + (x2 - x1) * (y_min - y1) / (y2 - y1);
        y = y_min;
      } else if (code_out & RIGHT) {
        y = y1 + (y2 - y1) * (x_max - x1) / (x2 - x1);
        x = x_max;
      } else if (code_out & LEFT) {
        y = y1 + (y2 - y1) * (x_min - x1) / (x2 - x1);
        x = x_min;
      }

      if (code_out == code1) {
        x1 = x;
        y1 = y;
        code1 = computeCode(x1, y1);
      } else {
        x2 = x;
        y2 = y;
        code2 = computeCode(x2, y2);
      }
    }
  }
  console.log(accept);
  if (accept){
    desenha_linha(Math.round(x1), Math.round(y1),Math.round(x2),Math.round(y2),'black');

    return dots;

  }
  else{
    console.log('Line rejected');
  }

}


