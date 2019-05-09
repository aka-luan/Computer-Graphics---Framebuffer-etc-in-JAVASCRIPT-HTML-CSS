function recursiveFill(x,y,color, edgeColor){
  let current = getPixel(x,y);
  if(current!= edgeColor && current != color){
    setPixel(x, y, color);
    recursiveFill(x+1,y, color, edgeColor);
    recursiveFill(x,y+1, color, edgeColor);
    recursiveFill(x-1,y, color, edgeColor);
    recursiveFill(x,y-1, color, edgeColor);
  }
}
