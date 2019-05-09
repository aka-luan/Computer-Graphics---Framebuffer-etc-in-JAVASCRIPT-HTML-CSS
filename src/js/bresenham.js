/* eslint-disable no-unused-vars,no-undef */
function bresenham (x1,y1,x2,y2){
  let x=x1;
  let y=y1;
  let deltax=x2-x1;
  let deltay=y2-y1;
  let m=deltay/deltax;
  let e=m-1/2;
  let out = [[x,y]];

  while(x < x2){
    if(e>= 0){
      y=y+1;
      e=e-1;
    }
    x=x+1;
    e=e+m;
    out.push([x,y]);
  }

  return out;
}

function desenha_linha(x1,y1,x2,y2, color){
  let m = x2-x1!==0 ? (y2-y1)/(x2-x1) : 2;
  let trocaxy = false, trocax=false,trocay =false;
  if(m>1 || m<-1){
    let aux = x1;
    x1 = y1;
    y1 = aux;
    aux = x2;
    x2 = y2;
    y2 = aux;
    trocaxy = true;
  }
  if(x1 > x2){
    x1 = -x1;
    x2 = -x2;
    trocax = true;
  }

  if(y1 > y2){
    y1 = -y1;
    y2 = -y2;
    trocay = true;
  }

  let out = bresenham(x1,y1,x2,y2);

  if(trocay === true){
    for(let p of out){
      p[1] = -p[1];
    }
  }

  if(trocax === true){
    for(let p of out){
      p[0] = -p[0];
    }
  }

  if(trocaxy === true){
    for(let p of out){
      let aux = p[0];
      p[0] = p[1];
      p[1] = aux;
    }
  }

  console.log(out);
  for(let p of out){
    if (p[0] > 80 || p[1] > 80 || p[0] < 0 || p[1] < 0){
      console.log('fora do buffer');
    }else frameBuffer[p[0]][p[1]] = color;
  }
}
