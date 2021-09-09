export function generateArray(size = 1000, increment = 1, from = -10, to = 10) {
  const result = [];
  let curr = from;
  let positive = true;
  for (let i = 0; i < size; i += 1) {
    if (curr >= to && curr >= from) {
      positive = false;
    } else if (curr < to && curr === from) {
      positive = true;
    }
    result.push(curr);
    if (positive) curr += increment;
    if (!positive) curr -= increment;
  }
  return result;
}
