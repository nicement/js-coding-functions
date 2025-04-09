/**
 * 배열 관련 유용한 함수 모음
 * JavaScript 코딩 테스트에서 자주 사용되는 배열 처리 함수들
 */

/**
 * 배열에서 최댓값 찾기
 * 시간 복잡도: O(n)
 * @param {number[]} arr - 숫자 배열
 * @return {number} 최댓값
 */
function findMax(arr) {
  return Math.max(...arr);
  // 또는 reduce 사용
  // return arr.reduce((max, curr) => Math.max(max, curr), -Infinity);
}

/**
 * 배열에서 최솟값 찾기
 * 시간 복잡도: O(n)
 * @param {number[]} arr - 숫자 배열
 * @return {number} 최솟값
 */
function findMin(arr) {
  return Math.min(...arr);
  // 또는 reduce 사용
  // return arr.reduce((min, curr) => Math.min(min, curr), Infinity);
}

/**
 * 배열 원소의 합 구하기
 * 시간 복잡도: O(n)
 * @param {number[]} arr - 숫자 배열
 * @return {number} 합계
 */
function sum(arr) {
  return arr.reduce((total, curr) => total + curr, 0);
}

/**
 * 배열 평균 구하기
 * 시간 복잡도: O(n)
 * @param {number[]} arr - 숫자 배열
 * @return {number} 평균값
 */
function average(arr) {
  return arr.reduce((total, curr) => total + curr, 0) / arr.length;
}

/**
 * 배열에서 특정 값의 모든 인덱스 찾기
 * 시간 복잡도: O(n)
 * @param {Array} arr - 대상 배열
 * @param {*} target - 찾을 값
 * @return {number[]} 값이 있는 모든 인덱스 배열
 */
function findAllIndices(arr, target) {
  const indices = [];
  arr.forEach((item, index) => {
    if (item === target) indices.push(index);
  });
  return indices;
}

/**
 * 배열의 빈도수 계산 (카운터)
 * 시간 복잡도: O(n)
 * @param {Array} arr - 대상 배열
 * @return {Object} 원소별 빈도수 객체
 */
function countFrequency(arr) {
  return arr.reduce((counter, item) => {
    counter[item] = (counter[item] || 0) + 1;
    return counter;
  }, {});
}

/**
 * 두 배열의 교집합 찾기
 * 시간 복잡도: O(n+m) - 해시맵 사용
 * @param {Array} arr1 - 첫 번째 배열
 * @param {Array} arr2 - 두 번째 배열
 * @return {Array} 교집합 배열
 */
function intersection(arr1, arr2) {
  const set = new Set(arr1);
  return [...new Set(arr2.filter(item => set.has(item)))];
}

/**
 * 두 배열의 합집합 찾기
 * 시간 복잡도: O(n+m)
 * @param {Array} arr1 - 첫 번째 배열
 * @param {Array} arr2 - 두 번째 배열
 * @return {Array} 합집합 배열 (중복 제거)
 */
function union(arr1, arr2) {
  return [...new Set([...arr1, ...arr2])];
}

/**
 * 배열을 특정 크기의 청크로 나누기
 * 시간 복잡도: O(n)
 * @param {Array} arr - 대상 배열
 * @param {number} size - 청크 크기
 * @return {Array} 청크 배열의 배열
 */
function chunk(arr, size) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += size) {
    chunks.push(arr.slice(i, i + size));
  }
  return chunks;
}

/**
 * 배열에서 중복 제거하기
 * 시간 복잡도: O(n)
 * @param {Array} arr - 대상 배열
 * @return {Array} 중복이 제거된 배열
 */
function unique(arr) {
  return [...new Set(arr)];
}

/**
 * 배열 평탄화 (다차원 배열을 1차원으로)
 * 시간 복잡도: O(n) - n은 총 원소 수
 * @param {Array} arr - 다차원 배열
 * @return {Array} 평탄화된 1차원 배열
 */
function flatten(arr) {
  return arr.flat(Infinity);
  // 또는 재귀 사용
  // return arr.reduce((acc, val) => acc.concat(Array.isArray(val) ? flatten(val) : val), []);
}

/**
 * 배열에서 특정 원소 제거
 * 시간 복잡도: O(n)
 * @param {Array} arr - 대상 배열
 * @param {*} item - 제거할 원소
 * @return {Array} 원소가 제거된 새 배열
 */
function removeItem(arr, item) {
  return arr.filter(el => el !== item);
}

/**
 * 배열 슬라이딩 윈도우 합계
 * 시간 복잡도: O(n)
 * @param {number[]} arr - 숫자 배열
 * @param {number} windowSize - 윈도우 크기
 * @return {number[]} 각 윈도우의 합계 배열
 */
function slidingWindowSum(arr, windowSize) {
  if (windowSize > arr.length) return [];
  
  const result = [];
  let windowSum = 0;
  
  // 첫 윈도우 합계 계산
  for (let i = 0; i < windowSize; i++) {
    windowSum += arr[i];
  }
  result.push(windowSum);
  
  // 윈도우 이동하면서 합계 갱신
  for (let i = windowSize; i < arr.length; i++) {
    windowSum = windowSum - arr[i - windowSize] + arr[i];
    result.push(windowSum);
  }
  
  return result;
}

/**
 * 배열 회전 (좌측 또는 우측으로)
 * 시간 복잡도: O(n)
 * @param {Array} arr - 대상 배열
 * @param {number} k - 회전 횟수 (양수: 우측 회전, 음수: 좌측 회전)
 * @return {Array} 회전된 배열
 */
function rotateArray(arr, k) {
  const n = arr.length;
  k = ((k % n) + n) % n; // 음수 처리 및 회전 수 정규화
  
  return [...arr.slice(n - k), ...arr.slice(0, n - k)];
}

module.exports = {
  findMax,
  findMin,
  sum,
  average,
  findAllIndices,
  countFrequency,
  intersection,
  union,
  chunk,
  unique,
  flatten,
  removeItem,
  slidingWindowSum,
  rotateArray
};