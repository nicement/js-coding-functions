// 수학 관련 함수 모음

// 예시: 최대공약수 계산
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}

// 최소공배수 계산
function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

// 소수 판별
function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (n % 2 === 0 || n % 3 === 0) return false;
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) return false;
  }
  return true;
}

// 소인수 분해
function primeFactorization(n) {
  const factors = [];
  for (let i = 2; i * i <= n; i++) {
    while (n % i === 0) {
      factors.push(i);
      n = n / i;
    }
  }
  if (n > 1) factors.push(n);
  return factors;
}

// 제곱근 근사값 계산 (뉴턴 방법)
function sqrtApproximation(n, precision = 1e-7) {
  if (n < 0) return NaN;
  let x = n;
  let root;
  while (true) {
    root = 0.5 * (x + n / x);
    if (Math.abs(root - x) < precision) break;
    x = root;
  }
  return root;
}

module.exports = { gcd, lcm, isPrime, primeFactorization, sqrtApproximation };
