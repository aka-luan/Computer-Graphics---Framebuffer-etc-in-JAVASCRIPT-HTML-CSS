//Hodgman_polygon_clipping#JavaScript
function clip(subjectPolygon, clipPolygon) {
    var cp1, cp2, s, e;
    var inside = function(p) {
        return (
            (cp2[0] - cp1[0]) * (p[1] - cp1[1]) > (cp2[1] - cp1[1]) * (p[0] - cp1[0])
        );
    };
    var intersection = function() {
        var dc = [cp1[0] - cp2[0], cp1[1] - cp2[1]],
            dp = [s[0] - e[0], s[1] - e[1]],
            n1 = cp1[0] * cp2[1] - cp1[1] * cp2[0],
            n2 = s[0] * e[1] - s[1] * e[0],
            n3 = 1.0 / (dc[0] * dp[1] - dc[1] * dp[0]);
        return [(n1 * dp[0] - n2 * dc[0]) * n3, (n1 * dp[1] - n2 * dc[1]) * n3];
    };
    var outputList = subjectPolygon;
    cp1 = clipPolygon[clipPolygon.length - 1];
    for (j in clipPolygon) {
        var cp2 = clipPolygon[j];
        var inputList = outputList;
        outputList = [];
        s = inputList[inputList.length - 1]; //last on the input list
        for ( i in inputList) {
            var e = inputList[i];
            if (inside(e)) {
                if (!inside(s)) {
                    outputList.push(intersection());
                }
                outputList.push(e);
            } else if (inside(s)) {
                outputList.push(intersection());
            }
            s = e;
        }
        cp1 = cp2;
    }
    return outputList;
}


function suthHodgClip(poly_points, clipper_points){
    //i and k are two consecutive indexes
    for (let i=0; i<clipper_points.length; i++)
    {
        let k = (i+1) % clipper_points.length;

        // We pass the current array of vertices, it's size
        // and the end points of the selected clipper line
        clip(poly_points, clipper_points[i][0],
            clipper_points[i][1], clipper_points[k][0],
            clipper_points[k][1]);
    }

    // Printing vertices of clipped polygon
    for (let i=0; i < poly_points.length; i++){
        // console.log(poly_points[i][0],"", poly_points[i][1]);

    }
}



