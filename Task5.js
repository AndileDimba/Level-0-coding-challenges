// Task 0.5

function calcArea(side1,side2,side3) {
    var perimeter = (side1 + side2 + side3) / 2;
    console.log(Math.sqrt(perimeter*((perimeter - side1)* (perimeter - side2)* (perimeter - side3))));
}

calcArea(10,10,10);