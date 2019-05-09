function bezierPoint(p,t,n) {
  let pts = [...p];
  for(let r = 1; r <= n; r++) {
    for (let i = 0; i <= n-r; i++) {
      // pts[i] = (1-t)*pts[i] + t*pts[i+1];
      pts[i] = [Math.round((1-t)*pts[i][0] + t*pts[i+1][0]), Math.round((1-t)*pts[i][1] + t*pts[i+1][1])];
    }
  }
  return [pts[0][0],pts[0][1]];
}
function bezier(controlPt,color) {
  let pts = controlPt, n = pts.length-1;//4
  // console.log(pts);
  let points = [];
  for (let t=0; t<=15; t++) { points.push(bezierPoint(pts,t/15,n));}
  // bresenham(points);
  console.log(points);


  for (let i = 0; i <points.length - 1; i++) {
    desenha_linha(points[i][0],points[i][1],points[i+1][0],points[i+1][1],color);
    console.log(points[i][0],'->' ,points[i][1]);
  }

  //console.log(points);
  return points;
}
