const DEBUGGING = true;
const canvas = document.getElementById("gameboard_canvas");

function ScalarMatrix(scalar){
    if(DEBUGGING) console.log("   ScalarMatrix("+scalar+")...");

    this.scalar = scalar? scalar: 1;
    if(DEBUGGING) console.log("      [ScalarMatrix("+scalar+")] this.scalar:", this.scalar);

    this.matrix = [
        [
            this.scalar,
            0
        ],
        [
            0,
            this.scalar
        ]
    ];
    if(DEBUGGING) console.log("      [ScalarMatrix("+scalar+")] this.matrix[0]: [" + this.matrix[0][0] + ", " + this.matrix[0][1] + "]");
    if(DEBUGGING) console.log("      [ScalarMatrix("+scalar+")] this.matrix[1]: [" + this.matrix[1][0] + ", " + this.matrix[1][1] + "]");
}

ScalarMatrix.prototype.vect_mult = function(vector){
    if(DEBUGGING) console.log("   ScalarMatrix.vect_mult("+vector+")...");

    var self = this;
    if(DEBUGGING) console.log("      [ScalarMatrix.vect_mult("+vector+")] self:", self);

    var vect = typeof vector == typeof [] && vector.length == 2 ? vector : [];
    if(DEBUGGING) console.log("      [ScalarMatrix.vect_mult("+vector+")] vect:", vect);

    var result = [
        self.matrix[0][0] * vect[0] + self.matrix[0][1] * vect[1],
        self.matrix[1][0] * vect[0] + self.matrix[1][1] * vect[1]
    ];
    if(DEBUGGING) console.log("       [RotationMatrix.vect_mult("+vector+")] result[0]:", result[0]);
    if(DEBUGGING) console.log("       [RotationMatrix.vect_mult("+vector+")] result[1]:", result[1]);

};

function RotationMatrix(angle, type='rad', pre=4){
    if(DEBUGGING) console.log("  RotationMatrix("+angle+", "+type+", "+pre+")...");

    this.ang = type == 'deg'? angle * Math.PI / 180: type='rad'? angle: 0;
    if(DEBUGGING) console.log("       [RotationMatrix("+angle+", "+type+", "+pre+")] this.ang:", this.ang);

    this.matrix = [
        [
            Math.cos(!!this.ang ? this.ang: 0).toPrecision(pre),
            -Math.sin(!!this.ang ? this.ang: 0).toPrecision(pre)
        ],
        [
            Math.sin(!!this.ang ? this.ang: 0).toPrecision(pre),
            Math.cos(!!this.ang ? this.ang: 0).toPrecision(pre)
        ]
    ];
    if(DEBUGGING) console.log("       [RotationMatrix("+angle+", "+type+", "+pre+")] this.matrix[0][0]", this.matrix[0][0]);
    if(DEBUGGING) console.log("       [RotationMatrix("+angle+", "+type+", "+pre+")] this.matrix[0][1]", this.matrix[0][1]);
    if(DEBUGGING) console.log("       [RotationMatrix("+angle+", "+type+", "+pre+")] this.matrix[1][0]", this.matrix[1][0]);
    if(DEBUGGING) console.log("       [RotationMatrix("+angle+", "+type+", "+pre+")] this.matrix[1][1]", this.matrix[1][1]);
}

RotationMatrix.prototype.vect_mult = function(vector){
    if(DEBUGGING) console.log("   RotationMatrix.vect_mult("+vector+")...");

    var self = this;
    if(DEBUGGING) console.log("       [RotationMatrix.vect_mult("+vector+")] self:", self);

    var vect = typeof vector == typeof [] && vector.length == 2 ? vector : [];
    if(DEBUGGING) console.log("       [RotationMatrix.vect_mult("+vector+")] vect:", vect);

    var result = [
        self.matrix[0][0] * vect[0] + self.matrix[0][1] * vect[1],
        self.matrix[1][0] * vect[0] + self.matrix[1][1] * vect[1]
    ];
    if(DEBUGGING) console.log("       [RotationMatrix.vect_mult("+vector+")] result[0]:", result[0]);
    if(DEBUGGING) console.log("       [RotationMatrix.vect_mult("+vector+")] result[1]:", result[1]);

    return result;
};

/** Testing */
// var mat = new RotationMatrix(60, 'deg');
// console.log(mat);
// console.log(mat.vect_mult([0, 1]));

// var mat2 = new ScalarMatrix(5);
// console.log(mat2);
// console.log(mat2.vect_mult([1, 1]));

// console.log(mat2.vect_mult(mat.vect_mult([1, 0])));

/** A utility function to draw a regular polygon */
function regularPolygon(ctx, n, centerX, centerY, radius) {
    // console.log("ctx:", ctx);
    if(DEBUGGING) console.log(" regularPolygon("+ctx+", "+n+", "+centerX+", "+centerY+", "+radius+")...");

    var scale_by_radius;
    var rotate_by_angle;
    var next_point;

    ctx.moveTo(centerX + radius, centerY);
    console.log("       [regularPolygon("+ctx+", "+n+", "+centerX+", "+centerY+", "+radius+")] ctx.moveTo(" + (centerX + radius) + ", " + centerY + ")");

    ctx.beginPath();
    if(DEBUGGING) console.log("       [regularPolygon("+ctx+", "+n+", "+centerX+", "+centerY+", "+radius+")] ctx.beginPath()");

    for (var i = 0; i < n; i++) {
        try{
            scale_by_radius = new ScalarMatrix(radius);
            if(DEBUGGING) console.log("       [regularPolygon("+ctx+", "+n+", "+centerX+", "+centerY+", "+radius+")] scale_by_radius:", scale_by_radius);

            rotate_by_angle = new RotationMatrix((360 * i) / n, 'deg');
            if(DEBUGGING) console.log("       [regularPolygon("+ctx+", "+n+", "+centerX+", "+centerY+", "+radius+")] rotate_by_angle:", rotate_by_angle);

            next_point = scale_by_radius.vect_mult(rotate_by_angle.vect_mult([1, 0]));
            if(DEBUGGING) console.log("       [regularPolygon("+ctx+", "+n+", "+centerX+", "+centerY+", "+radius+")] next_point:", next_point);

            ctx.lineTo( next_point[0] + centerX, next_point[1] + centerY);
            if(DEBUGGING) console.log("       [regularPolygon("+ctx+", "+n+", "+centerX+", "+centerY+", "+radius+")] ctx.lineTo("+next_point[0] + centerX+", "+next_point[1] + centerY+")");
        }catch(e){
            if(DEBUGGING) console.log("       [regularPolygon("+ctx+", "+n+", "+centerX+", "+centerY+", "+radius+")] e:", e);

        }
    }

    if(true){
        ctx.stroke();
        if(DEBUGGING) console.log("ctx.stroke()");
    }else{
        ctx.fill();
        if(DEBUGGING) console.log("ctx.fill()");
    }
}

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    var context = String(ctx);
    context = context.substring(7, context.length-1);
    var n = 6;
    var centerX = 20;
    var centerY = 35;
    var radius = 10;
    regularPolygon(ctx, n, centerX, centerY, radius);
    if(DEBUGGING) console.log(" regularPolygon("+context+", "+n+", "+centerX+", "+centerY+", "+radius+")...");
}
