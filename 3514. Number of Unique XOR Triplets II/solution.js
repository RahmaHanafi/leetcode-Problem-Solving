var uniqueXorTriplets = function (nums) {
  let pair = new Array(2048).fill(false),
    res = new Set(),
    n = nums.length;

  if (n === 1) {
    return 1;
  }

  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      let key = nums[i] ^ nums[j];
      pair[key] = true;
    }
  }

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < 2048; j++) {
      if (pair[j]) {
        res.add(j ^ nums[i]);
      }
    }
  }

  return res.size;
};
