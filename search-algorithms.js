// 탐색 알고리즘 관련 함수 모음

// 예시: 이진 탐색
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// 선형 탐색 (Linear Search)
function linearSearch(arr, target) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === target) return i;
  }
  return -1;
}

// 점프 탐색 (Jump Search)
function jumpSearch(arr, target) {
  const n = arr.length;
  const step = Math.floor(Math.sqrt(n));
  let prev = 0;

  while (arr[Math.min(step, n) - 1] < target) {
    prev = step;
    step += Math.floor(Math.sqrt(n));
    if (prev >= n) return -1;
  }

  while (arr[prev] < target) {
    prev++;
    if (prev === Math.min(step, n)) return -1;
  }

  if (arr[prev] === target) return prev;
  return -1;
}

// 보간 탐색 (Interpolation Search)
function interpolationSearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high && target >= arr[low] && target <= arr[high]) {
    const pos =
      low +
      Math.floor(((target - arr[low]) * (high - low)) / (arr[high] - arr[low]));

    if (arr[pos] === target) return pos;
    if (arr[pos] < target) low = pos + 1;
    else high = pos - 1;
  }

  return -1;
}

// 지수 탐색 (Exponential Search)
function exponentialSearch(arr, target) {
  const n = arr.length;
  if (n === 0) return -1;
  if (arr[0] === target) return 0;

  let i = 1;
  while (i < n && arr[i] <= target) {
    i *= 2;
  }

  return binarySearch(arr.slice(Math.floor(i / 2), Math.min(i, n)), target);
}

module.exports = {
  binarySearch,
  linearSearch,
  jumpSearch,
  interpolationSearch,
  exponentialSearch,
};
