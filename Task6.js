// Task 0.6

const maximumNumber = (...nums) => {
    let max = -Infinity;
    for(let i = 0; i < nums.length; i++){
       if(nums[i] > max){
          max = nums[i];
       };
    };
    return max;
 };
 console.log(maximumNumber(2, 7, 3));