
exports.min = function min (array) {
  if (array != null && array.length != 0) {
    let min = Infinity
    for (el of array) {
      min = el < min ? el : min
    }
    return min
  }
  return 0;
}

exports.max = function max (array) {
  if (array != null && array.length != 0) {
    let max = -Infinity
    for (el of array) {
      max = el > max ? el : max
    }
    return max
  }
  return 0;
}

exports.avg = function avg (array) {
  if (array != null && array.length != 0) {
    const sum = array.reduce((sum, val) => sum += val, 0)
    return sum / array.length
  }
  return 0;
}
