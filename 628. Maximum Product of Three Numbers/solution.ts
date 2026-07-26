function maximumProduct(nums: number[]): number {
  let n: number = nums.length,
    maxRes: number,
    product1: number,
    product2: number;

  nums.sort((a, b) => a - b);

  product1 = nums[0] * nums[1] * nums[n - 1];
  product2 = nums[n - 1] * nums[n - 2] * nums[n - 3];

  maxRes = Math.max(product1, product2);

  return maxRes;
}
