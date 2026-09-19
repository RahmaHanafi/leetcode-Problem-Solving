var checkOverlap = function (radius, xCenter, yCenter, x1, y1, x2, y2) {
  let xPoint, yPoint;

  if (xCenter < x1) {
    xPoint = x1;
  } else if (xCenter > x2) {
    xPoint = x2;
  } else {
    xPoint = xCenter;
  }

  if (yCenter < y1) {
    yPoint = y1;
  } else if (yCenter > y2) {
    yPoint = y2;
  } else {
    yPoint = yCenter;
  }

  let distanceSquared =
    Math.pow(xCenter - xPoint, 2) + Math.pow(yCenter - yPoint, 2);

  return distanceSquared <= Math.pow(radius, 2);
};
