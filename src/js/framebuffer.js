/* eslint-disable no-console,no-unused-vars */
let frameSize = [80, 80];
let frameBuffer = [];
let pixelPadding = 1,
  pixelLength = 7;

function setFrame(){
  for(let i=0;i<frameSize[0];i++){
    frameBuffer.push([]);
    for(let j=0;j<frameSize[1];j++){
      frameBuffer[i].push('white');
    }
  }
}

function getPixel(x,y) {
  return frameBuffer[x][y];
}

function  setPixel(x,y,color) {
  if (x > frameSize || y > frameSize || x < frameSize || y < frameSize){
    console.log('fora do buffer');
    return 'fora do buffer';
  }
  frameBuffer[x][y] = color;
  return frameBuffer;
}

function create_buffer(svg){
  for(let i=0;i<frameSize[0];i++){
    for(let j=0;j<frameSize[1];j++){
      svg.append('rect')
        .attr('x', i * (pixelLength + pixelPadding))
        .attr('y', j * (pixelLength + pixelPadding))
        .attr('width', pixelLength)
        .attr('height', pixelLength)
        .style('fill', frameBuffer[i][j])
        .style('stroke', 'black')
        .style('stroke-width', '0.1');
    }
  }
  console.log('BUFFER CRIADO NESSA PORRA');
  return svg;
}

function clean_buffer(svg) {
  for(let i=0;i<frameSize[0];i++){
    for(let j=0;j<frameSize[1];j++){
      frameBuffer[i][j] = 'white';
    }
  }
  svg.selectAll('*').remove();
  create_buffer(svg);
}
