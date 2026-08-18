let nums = [1, 3, 3, 2];

const isGood = (nums) => {
    let sorted = nums.sort((a, b) => a - b)
    console.log(sorted)
    return false;
}


console.log(isGood(nums))