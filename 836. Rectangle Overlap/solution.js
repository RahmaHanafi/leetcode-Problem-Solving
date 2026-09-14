var isRectangleOverlap = function (rec1, rec2) {
  let x1 = Math.max(rec1[0], rec2[0]);
  let y1 = Math.max(rec1[1], rec2[1]);
  let x2 = Math.min(rec1[2], rec2[2]);
  let y2 = Math.min(rec1[3], rec2[3]);

  return x2 - x1 > 0 && y2 - y1 > 0;
};
