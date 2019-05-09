function circleMidPoint(xCenter, yCenter, radius, color) {
  if(radius <= 0) return;
  let x = 0,
    y = radius,
    p = 1 - radius;
  
  // Plot first set of points
  circlePlotPoints(xCenter, yCenter, x, y);
  while(x <= y) {
    x++;
    if(p < 0) // Mid point is inside therefore y remains same
      p += 2 * x + 1;
    else { // Mid point is outside the circle so y decreases
      y--;
      p += 2 * (x - y) + 1;
    }
    //console.log(xCenter, yCenter, x, y);
    circlePlotPoints(xCenter, yCenter, x, y);
  }
  
  function circlePlotPoints() {
    setPixel(xCenter + x, yCenter + y, color);
    setPixel(xCenter + y, yCenter + x, color);

    setPixel(xCenter - x, yCenter + y, color);
    setPixel(xCenter - y, yCenter + x, color);

    setPixel(xCenter + x, yCenter - y, color);
    setPixel(xCenter + y, yCenter - x, color);

    setPixel(xCenter - x, yCenter - y, color);
    setPixel(xCenter - y, yCenter - x, color);
      
  }
}
 