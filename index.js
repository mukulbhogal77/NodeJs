var rect = {
    perimeter: (x,y) => (2*(x+y)),
    area: (x,y) => (x*y)
};

function solveRect(l,b) {
    console.log("Solving for rectangle with l = " + l + " b " + b);

    if(l <= 0 || b <=0){
        console.log("l and b problem");
    }
    else {
        console.log("area : " + rect.area(l,b));
        console.log("perimeter : " + rect.perimeter(l,b));

    }
}

solveRect(2,4);
solveRect(3,5);
solveRect(0,3);
solveRect(3,0);
