function scanLine(points,color){
    let newpoints = [];
    for (let i = 0; i < points.length ; i++) {
        newpoints[i] = {x:+points[i][0],y:points[i][1]};

    }
    newpoints.push({x:points[0][0],y:points[0][1]})
    points = newpoints;


//
//generate line
var lines = [];
for (var i = 1; i < points.length; i++) {
    console.log(points[i-1]);
    lines.push(new Line(points[i - 1], points[i]));

}


// find min and max
var minY = points[0].y;
var maxY = points[0].y;
for (var i = 0; i < points.length; i++) {
    var temp = points[i].y;
    if (temp < minY)
        minY = temp;
    else if (temp > maxY)
        maxY = temp;
}
// end find

for (var y = minY; y < maxY; y++) {
    var meetPoint = getMeetPoint(y);
    for (var i = 1; i < meetPoint.length; i += 2) {

        console.log(Math.ceil(meetPoint[i-1]), y, Math.trunc(meetPoint[i]), y);
        console.log(Math.round(meetPoint[i-1]), y, Math.trunc(meetPoint[i]), y);
        desenha_linha(Math.round(meetPoint[i-1]-1)+1, y, Math.trunc(meetPoint[i]), y,color);
        //bresenham([[Math.ceil(meetPoint[i - 1]), y] ,[Math.trunc(meetPoint[i]), y]],color);
    }
}

function getMeetPoint(y) {
    var meet = [];
    for (var i = 0; i < lines.length; i++) {
        var l = lines[i];
        if (l.isValidY(y)) {
            meet.push(l.getX(y));
        }
    }

    //sort
    for (var i = 0; i < meet.length; i++)
        for (var j = i; j < meet.length; j++) {
            if (meet[i]>meet[j]) {
                var temp =meet[i];
                meet[i]=meet[j];
                meet[j]=temp;
            }
        }

    return  meet;

}

function Line(start, end) {
    this.x0 = start.x;
    this.x1 = end.x;
    this.y0 = start.y;
    this.y1 = end.y;
    this.m = (this.y1 - this.y0) / (this.x1 - this.x0);

    this.getX = function (y) {
        if (!this.isValidY(y))
            throw new RangeError();

        return 1 / this.m * (y - this.y0) + this.x0;
    }

    this.isValidY = function (y) {
        if (y >= this.y0 && y < this.y1) {
            return true;
        }
        if (y >= this.y1 && y < this.y0) {
            return true;
        }

        return false;
    }
}



}