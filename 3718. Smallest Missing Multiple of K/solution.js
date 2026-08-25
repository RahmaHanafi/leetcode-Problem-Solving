var missingMultiple = function (nums, k) {
  let res = 0;

  do {
    res += k;
  } while (res % k == 0 && nums.includes(res));

  return res;
};
