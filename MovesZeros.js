function moveZeroes(nums) {
  let i = 0,
    j = 0;

  while (j < nums.length) {
    if (nums[j] !== 0) {
      nums[i] = nums[j];
      i++;
    }
    j++;
  }

  while (i < nums.length) {
    nums[i] = 0;
    i++;
  }

  return nums;
}


const nums = [0, 1, 0, 3, 12];
const result = moveZeroes(nums);
console.log(result); 

let nums2 = [0];
moveZeroes(nums2);
console.log(nums2);
