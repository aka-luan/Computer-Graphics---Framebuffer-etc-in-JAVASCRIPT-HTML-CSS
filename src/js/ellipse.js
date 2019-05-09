function ellipseMidPoint(xCenter, yCenter, rx,ry, color){
  let x,y,p,dpe,dps,dpse,d2pe,d2ps,d2pse;
  let rx2 = Math.pow(rx,2), ry2 = Math.pow(ry,2);

  x = 0;
  y = ry;
  p = ry2 + (rx2 * (1 - 4 * ry)-2) / 4;
  dpe = 3 * ry2;
  d2pe = 2 * ry2;
  dpse = dpe - 2* rx2 * (ry - 1);
  d2pse = d2pe + 2 * rx2;

  ellipsePlotPoints(xCenter, yCenter, x, y);
  while(dpse < (2 * rx2)+ (3 * ry2)){
    if(p < 0){
      p = p + dpe;
      dpe = dpe + d2pe;
    }else{
      p =  p+ dpse;
      dpe = dpe + d2pe;
      dpse = dpse + d2pse;
      y--;
    }
    x++;
    ellipsePlotPoints(xCenter, yCenter, x, y);

  }
  p = p - (rx2 * (4 * y- 3)+ ry2 * (4 * x + 3) + 2) / 4;
  dps = rx2 * (3 - 2 * y);
  dpse = 2 * ry2 + 3 * rx2;
  d2ps = 2 * rx2;

  while(y > 0){
    if(p > 0){
      p += dpe;
      dpe += d2ps;
      dpse += d2pse;
      x++;
    }
    y--;
    ellipsePlotPoints(xCenter, yCenter, x, y);
  }
  function ellipsePlotPoints(xCenter, yCenter, x, y){
    setPixel(xCenter + x, yCenter + y, color);
    setPixel(xCenter + x, yCenter - y, color);
    setPixel(xCenter - x, yCenter + y, color);
    setPixel(xCenter - x, yCenter - y, color);
  }
}