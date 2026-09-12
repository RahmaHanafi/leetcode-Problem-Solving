var totalNumbers = function (digits) {
  let res = [],
    n = digits.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      for (let k = 0; k < n; k++) {
        if (
          i != j &&
          j != k &&
          i != k &&
          digits[k] % 2 == 0 &&
          digits[i] != 0
        ) {
          let number =
            String(digits[i]) + String(digits[j]) + String(digits[k]);
          if (!res.includes(number)) res.push(number);
        }
      }
    }
  }

  return res.length;
};
