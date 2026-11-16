/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var digitSum = function (s, k) {
  let arr = s;

  while (arr.length > k) {
    let subArr = [],
      count = 0;

    for (let i = 0; i < arr.length; i++) {
      count += Number(arr[i]);

      if ((i + 1) % k === 0) {
        subArr.push(count);
        count = 0;
      }
    }

    if (arr.length % k !== 0) {
      subArr.push(count);
    }

    arr = subArr.join("");
  }
  return arr;
};
