const canvas = document.getElementById("gameboard_canvas");

if (canvas.getContext) {
    var ctx = canvas.getContext('2d');

    /** Example 1 */
    // ctx.fillRect(25, 25, 100, 100);
    // ctx.clearRect(45, 45, 60, 60);
    // ctx.strokeRect(50, 50, 50, 50);

    /** Example 2 */
    // ctx.beginPath();
    // ctx.moveTo(75, 50);
    // ctx.lineTo(100, 75);
    // ctx.lineTo(100, 25);
    // ctx.fill();

    /** Example 3 */
    // ctx.beginPath();
    // ctx.arc(75, 75, 50, 0, Math.PI * 2, true); // Outer circle
    // ctx.moveTo(110, 75);
    // ctx.arc(75, 75, 35, 0, Math.PI, false);  // Mouth (clockwise)
    // ctx.moveTo(65, 65);
    // ctx.arc(60, 65, 5, 0, Math.PI * 2, true);  // Left eye
    // ctx.moveTo(95, 65);
    // ctx.arc(90, 65, 5, 0, Math.PI * 2, true);  // Right eye
    // ctx.stroke();

    /** Example 4 */
    // // Filled triangle
    // ctx.beginPath();
    // ctx.moveTo(25, 25);
    // ctx.lineTo(105, 25);
    // ctx.lineTo(25, 105);
    // ctx.fill();

    // // Stroked triangle
    // ctx.beginPath();
    // ctx.moveTo(125, 125);
    // ctx.lineTo(125, 45);
    // ctx.lineTo(45, 125);
    // ctx.closePath();
    // ctx.stroke();

    // /** Examples 5 */
    // for (var i = 0; i < 4; i++) {
    //     for (var j = 0; j < 3; j++) {
    //         ctx.beginPath();
    //         var x = 25 + j * 50; // x coordinate
    //         var y = 25 + i * 50; // y coordinate
    //         var radius = 20; // Arc radius
    //         var startAngle = 0; // Starting point on circle
    //         var endAngle = Math.PI + (Math.PI * j) / 2; // End point on circle
    //         var anticlockwise = i % 2 !== 0; // clockwise or anticlockwise

    //         ctx.arc(x, y, radius, startAngle, endAngle, anticlockwise);

    //         if (i > 1) {
    //             ctx.fill();
    //         } else {
    //             ctx.stroke();
    //         }
    //     }
    // }

    /** Example 6 */
    // A utility function to draw a rectangle with rounded corners.
    // function roundedRect(ctx, x, y, width, height, radius) {
    //     ctx.beginPath();
    //     ctx.moveTo(x, y + radius);
    //     ctx.lineTo(x, y + height - radius);
    //     ctx.arcTo(x, y + height, x + radius, y + height, radius);
    //     ctx.lineTo(x + width - radius, y + height);
    //     ctx.arcTo(x + width, y + height, x + width, y + height-radius, radius);
    //     ctx.lineTo(x + width, y + radius);
    //     ctx.arcTo(x + width, y, x + width - radius, y, radius);
    //     ctx.lineTo(x + radius, y);
    //     ctx.arcTo(x, y, x, y + radius, radius);
    //     ctx.stroke();
    // }
    // roundedRect(ctx, 12, 12, 150, 150, 15);
    // roundedRect(ctx, 19, 19, 150, 150, 9);
    // roundedRect(ctx, 53, 53, 49, 33, 10);
    // roundedRect(ctx, 53, 119, 49, 16, 6);
    // roundedRect(ctx, 135, 53, 49, 33, 10);
    // roundedRect(ctx, 135, 119, 25, 49, 10);

    // ctx.beginPath();
    // ctx.arc(37, 37, 13, Math.PI / 7, -Math.PI / 7, false);
    // ctx.lineTo(31, 37);
    // ctx.fill();

    // for (var i = 0; i < 8; i++) {
    //   ctx.fillRect(51 + i * 16, 35, 4, 4);
    // }

    // for (i = 0; i < 6; i++) {
    //   ctx.fillRect(115, 51 + i * 16, 4, 4);
    // }

    // for (i = 0; i < 8; i++) {
    //   ctx.fillRect(51 + i * 16, 99, 4, 4);
    // }

    // ctx.beginPath();
    // ctx.moveTo(83, 116);
    // ctx.lineTo(83, 102);
    // ctx.bezierCurveTo(83, 94, 89, 88, 97, 88);
    // ctx.bezierCurveTo(105, 88, 111, 94, 111, 102);
    // ctx.lineTo(111, 116);
    // ctx.lineTo(106.333, 111.333);
    // ctx.lineTo(101.666, 116);
    // ctx.lineTo(97, 111.333);
    // ctx.lineTo(92.333, 116);
    // ctx.lineTo(87.666, 111.333);
    // ctx.lineTo(83, 116);
    // ctx.fill();

    // ctx.fillStyle = 'white';
    // ctx.beginPath();
    // ctx.moveTo(91, 96);
    // ctx.bezierCurveTo(88, 96, 87, 99, 87, 101);
    // ctx.bezierCurveTo(87, 103, 88, 106, 91, 106);
    // ctx.bezierCurveTo(94, 106, 95, 103, 95, 101);
    // ctx.bezierCurveTo(95, 99, 94, 96, 91, 96);
    // ctx.moveTo(103, 96);
    // ctx.bezierCurveTo(100, 96, 99, 99, 99, 101);
    // ctx.bezierCurveTo(99, 103, 100, 106, 103, 106);
    // ctx.bezierCurveTo(106, 106, 107, 103, 107, 101);
    // ctx.bezierCurveTo(107, 99, 106, 96, 103, 96);
    // ctx.fill();

    // ctx.fillStyle = 'black';
    // ctx.beginPath();
    // ctx.arc(101, 102, 2, 0, Math.PI * 2, true);
    // ctx.fill();

    // ctx.beginPath();
    // ctx.arc(89, 102, 2, 0, Math.PI * 2, true);
    // ctx.fill();

    // /** Example 7 */
    // for (var i = 0; i < 6; i++) {
    //     for (var j = 0; j < 6; j++) {
    //       ctx.fillStyle = 'rgb(' +
    //                             Math.floor(255 - 42.5 * i) + ', ' +
    //                             Math.floor(255 - 42.5 * j) + ', ' +
    //                             0 + ')';
    //       ctx.fillRect(j * 25, i * 25, 25, 25);
    //     }
    // }

    /** Hexagon */
    // A utility function to draw a hexagon.
    var regularPoly = function(ctx, n, x, y, radius) {
        function ScalMatrix(scalar){
            this.scalar = scalar;
            this.matrix = [
                [
                    scalar,
                    0
                ],
                [
                    0,
                    scalar
                ]
            ];
        }

        ScalMatrix.prototype.vect_mult = function(vector){
            var self = this;
            var vect = typeof vector == typeof [] && vector.length == 2 ? vector : [];
            return [
                self.matrix[0][0] * vect[0] + self.matrix[0][1] * vect[1],
                self.matrix[1][0] * vect[0] + self.matrix[1][1] * vect[1]
            ];

        };

        function RotMatrix(angle, type='rad', pre=4){
            this.ang = type == 'deg'? angle * Math.PI / 180: type='rad'? angle: 0;
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
        }

        RotMatrix.prototype.vect_mult = function(vector){
            var self = this;
            var vect = typeof vector == typeof [] && vector.length == 2 ? vector : [];
            return [
                self.matrix[0][0] * vect[0] + self.matrix[0][1] * vect[1],
                self.matrix[1][0] * vect[0] + self.matrix[1][1] * vect[1]
            ];
        };

        // var mat = new RotMatrix(60, 'deg');
        // console.log(mat);
        // console.log(mat.vect_mult([0, 1]));

        // var mat2 = new ScalMatrix(5);
        // console.log(mat2);
        // console.log(mat2.vect_mult([1, 1]));

        // console.log(mat2.vect_mult(mat.vect_mult([1, 0])));

        let startX = x;
        let startY = y;

        ctx.beginPath();

        for(var i = 0; i < 6; i++){
            ctx.lineTo(x, y);
            ctx.moveTo(startX, startY);
            ctx.stroke();
        }
    };
    regularPoly(ctx, 6, 0, 0, 56);
}
