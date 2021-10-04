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

export function generateImage(width, height) {
  return `
  <svg width="${width}" height="${height}" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
    <defs>
      <linearGradient id="rainbow">
        <stop stop-color="#fcd34d" offset="12%" />
        <stop stop-color="#e879f9" offset="50%" />
        <stop stop-color="#22d3ee" offset="98%" />
      </linearGradient>
      <linearGradient id="gray">
        <stop stop-color="#374151" offset="10%" />
        <stop stop-color="#111827" offset="90%" />
      </linearGradient>
    </defs>
    <rect width="${width}" height="${height}" fill="url(#gray)" />
    <rect id="r" width="${width}" height="${height}" fill="url(#rainbow)" />
  </svg>`;
}

export function toBase64(str) {
  return typeof window === 'undefined'
    ? Buffer.from(str).toString('base64')
    : window.btoa(str);
}
