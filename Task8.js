//  Task 0.8

function convertTime(num) {
    let hrs = Math.floor(num / 60);
    let min = num % 60;
    //let time;
    if (hrs === 1 && min === 1) {
        time = `${hrs} hour, ${min} minute`;
    } else if (hrs !== 1 && min === 1) {
        time = `${hrs} hours, ${min} minute`;
    } else if (hrs === 1 && min !== 1) {
        time = `${hrs} hour, ${min} minutes`
    } else {
        time = `${hrs} hours, ${min} minutes`;
    }
    return time;
}

console.log(convertTime(121));