var matrix = [];
var side = 60;
var n = prompt()
var m = prompt()  

for (let i = 0; i < n; i++) {
    matrix.push([])
    for (let j = 0; j < m; j++) {
        matrix[i].push(0)
    } 
}

function characters(index, count) {
    for (let a = 0; a < count; a++) {
        var v = Math.floor(random(0, n))
        var w = Math.floor(random(0, m))
        matrix[v][w] = index;
    }
}

var grassArr = [];
var grassEaterArr = [];
var predatorArr = [];
var thunArr = [];


function setup() {

    characters(1, 60)
    characters(2, 15)
    characters(3, 10)
    characters(4, 3)
    frameRate(5);


    createCanvas(matrix[0].length * side, matrix.length *
        side);

    background('#acacac');
    for (var y = 0; y < matrix.length; ++y) {
        for (var x = 0; x < matrix[y].length; ++x) {
            if (matrix[y][x] == 1) {
                var gr = new Grass(x, y, 1);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {

                var grEA = new GrassEater(x, y, 1);
                grassEaterArr.push(grEA);
            }
            else if (matrix[y][x] == 3) {
                var pre = new Predator(x, y, 3)
                predatorArr.push(pre)
            }
            else if (matrix[y][x] == 4) {
                var th = new Thunder(x, y, 4);
                thunArr.push(th);
            }

        }
    }


}



function draw() {

    for (var y = 0; y < matrix.length; y++) {

        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {

                fill("green");

            }
            if (matrix[y][x] == 3) {

                fill("red");

            }

            else if (matrix[y][x] == 0) {

                fill("#acacac");

            }
            else if (matrix[y][x] == 2) {

                fill("yellow")
            }
            else if(matrix[y][x] == 4){

                fill("blue")
            }

            rect(x * side, y * side, side, side);

        }

    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grassEaterArr) {
        grassEaterArr[i].eat();
    }
    for (var i in predatorArr) {
        predatorArr[i].eat();
    }
    for (var i in thunArr) {
        thunArr[i].mul();
    }
}
