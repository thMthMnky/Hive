const DEBUGGING = false;

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

    return result;
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

/** A utility function to draw a regular polygon */
function regularPolygon(ctx, n, centerX, centerY, radius) {
    // console.log("ctx:", ctx);
    if(DEBUGGING) console.log(" regularPolygon("+ctx+", "+n+", "+centerX+", "+centerY+", "+radius+")...");

    var scale_by_radius;
    var rotate_by_angle;
    var next_point;

    ctx.moveTo(centerX + radius, centerY);
    if(DEBUGGING) console.log("       [regularPolygon("+ctx+", "+n+", "+centerX+", "+centerY+", "+radius+")] ctx.moveTo(" + (centerX + radius) + ", " + centerY + ")");

    ctx.beginPath();
    if(DEBUGGING) console.log("       [regularPolygon("+ctx+", "+n+", "+centerX+", "+centerY+", "+radius+")] ctx.beginPath()");

    scale_by_radius = new ScalarMatrix(radius);
    if(DEBUGGING) console.log("       [regularPolygon("+ctx+", "+n+", "+centerX+", "+centerY+", "+radius+")] scale_by_radius:", scale_by_radius);

    for (var i = 0; i <= n; i++) {
        try{
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
    ctx.lineTo(centerX + 2*radius, centerY);
    if(true){
        ctx.stroke();
        if(DEBUGGING) console.log("ctx.stroke()");
    }else{
        ctx.fill();
        if(DEBUGGING) console.log("ctx.fill()");
    }
}

var n = 6;
var radius = 50;
var centerX = radius;
var centerY = radius*Math.sqrt(3)/2;

const gameboard = document.createElement('canvas');
gameboard.width=screen.width; //2*radius;
gameboard.height=0.675*screen.height; //2*radius;
gameboard.style.position = 'absolute';
gameboard.style.margin = '0 auto';


const gameboard_container = document.getElementsByClassName("gameboard")[0];
gameboard_container.appendChild(gameboard);

if (gameboard.getContext) {
    var ctx = gameboard.getContext('2d');
    console.log(gameboard.width);
    console.log(gameboard.height);

    regularPolygon(ctx, n, centerX, centerY, radius);
    for(var i = 0; i < 13; i++){
        for(var j = 0; j < 10; j++){
            regularPolygon(ctx, n, centerX+3*radius*i, centerY+Math.sqrt(3)*radius*j, radius);
        }
    }
    if(DEBUGGING) console.log(" regularPolygon("+ctx+", "+n+", "+centerX+", "+centerY+", "+radius+")...");
}



const controller = document.querySelector('.btn-container');
controller.addEventListener('dragstart', dragStart);
controller.addEventListener('dragend', dragEnd);

const some_container = document.querySelector('.gameboard');
some_container.addEventListener('dragenter', dragEnter);
some_container.addEventListener('dragleave', dragLeave);

document.body.addEventListener('dragover', dragOver);
document.body.addEventListener('drop', dragDrop);


function dragStart(e){
    this.className += ' hold';
    setTimeout(() => (this.className = 'invisible'), 0);

    var style = window.getComputedStyle(e.target, null);
    e.dataTransfer.setData("text/plain",
    (parseInt(style.getPropertyValue("left"),10) - e.clientX) + ',' +
    (parseInt(style.getPropertyValue("top"),10) - e.clientY));
}

function dragOver(e){
    e.preventDefault();
    return false;
}

function dragEnter(e){
    e.preventDefault();
    this.className += ' hovered';
    // return false;
}

function dragLeave(e){
    this.className = 'gameboard';
    // return false;
}

function dragEnd(){
    this.className = 'btn-container';
    return false;
}

function dragDrop(e){
    e.preventDefault();
    var offset = e.dataTransfer.getData("text/plain").split(',');
    controller.style.left = (e.clientX + parseInt(offset[0],10)) + 'px';
    controller.style.top = (e.clientY + parseInt(offset[1],10)) + 'px';
    return false;
}
