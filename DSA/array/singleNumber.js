let nums = [2, 2, 3, 3];

function singleNumber(nums) {
  let res = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (res.has(nums[i])) {
      res.set(nums[i], res.get(nums[i]) + 1);
    } else {
      res.set(nums[i], 1);
    }
  }

  for (let [key, value] of res) {
    if (value == 1) {
      return key;
    }
  }

  return -1;
}

console.log(singleNumber(nums));
