function Square(x1, y1, x2, y2){

  desenha_linha(x1, y1, x2, y2, 'black');
  desenha_linha(x1, y1, x2, y2, 'black');
  desenha_linha(x1, y1, x2, y2, 'black');
  desenha_linha(x1, y1, x2, y2, 'black');
}
function polygon(points, color){
  for (let i = 0;i< points.length;i++){
    points[i][0] = Math.round(points[i][0]);
    points[i][1] = Math.round(points[i][1]);
  }
  let begin = points[0];
  for(let i = 0 ;i < points.length;i++ ){
    if (points[i+1]){
      desenha_linha(points[i][0],points[i][1],points[i+1][0],points[i+1][1],color);
    }else{
      desenha_linha(points[i][0],points[i][1], begin[0],begin[1],color);
        
    }
  }
}
