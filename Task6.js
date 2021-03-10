// Task 0.6

function maximumNumber(x,y,z) {
    let max = 0;
    if (x > y) {
        max = x > y ? x : z;
    } else {
        max = y > z ? y : z;
    }
    return max;
}

console.log(maximumNumber(300,400,700));