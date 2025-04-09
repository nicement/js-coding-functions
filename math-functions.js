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

module.exports = { gcd };