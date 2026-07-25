var maxProduct = function (n) {
  let nums = n
    .toString()
    .split("")
    .sort((a, b) => b - a);
  return Number(nums[0]) * Number(nums[1]);
};
