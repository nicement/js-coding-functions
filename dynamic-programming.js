// 동적 프로그래밍 관련 함수 모음

// 예시: 피보나치 수열 (메모이제이션)
function fibonacci(n, memo = {}) {
  if (n <= 1) return n;
  if (memo[n]) return memo[n];
  memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
  return memo[n];
}

// 최장 공통 부분 수열 (Longest Common Subsequence, LCS)
function longestCommonSubsequence(str1, str2) {
  const dp = Array.from({ length: str1.length + 1 }, () =>
    Array(str2.length + 1).fill(0)
  );

  for (let i = 1; i <= str1.length; i++) {
    for (let j = 1; j <= str2.length; j++) {
      if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }

  return dp[str1.length][str2.length];
}

// 배낭 문제 (Knapsack Problem)
function knapsack(weights, values, capacity) {
  const n = weights.length;
  const dp = Array.from({ length: n + 1 }, () => Array(capacity + 1).fill(0));

  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= capacity; w++) {
      if (weights[i - 1] <= w) {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - weights[i - 1]] + values[i - 1]
        );
      } else {
        dp[i][w] = dp[i - 1][w];
      }
    }
  }

  return dp[n][capacity];
}

// 최소 편집 거리 (Edit Distance)
function editDistance(str1, str2) {
  const dp = Array.from({ length: str1.length + 1 }, () =>
    Array(str2.length + 1).fill(0)
  );

  for (let i = 0; i <= str1.length; i++) {
    for (let j = 0; j <= str2.length; j++) {
      if (i === 0) {
        dp[i][j] = j;
      } else if (j === 0) {
        dp[i][j] = i;
      } else if (str1[i - 1] === str2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
      }
    }
  }

  return dp[str1.length][str2.length];
}

module.exports = {
  fibonacci,
  longestCommonSubsequence,
  knapsack,
  editDistance,
};
