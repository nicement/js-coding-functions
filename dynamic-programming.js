// 동적 프로그래밍 관련 함수 모음

// 예시: 피보나치 수열 (메모이제이션)
function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

module.exports = { fibonacci };
