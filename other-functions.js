// 기타 유용한 함수 모음

/**
 * 두 날짜 사이의 일 수 계산
 * @param {string} date1 - 첫 번째 날짜 (YYYY-MM-DD 형식)
 * @param {string} date2 - 두 번째 날짜 (YYYY-MM-DD 형식)
 * @returns {number} 두 날짜 사이의 일 수
 */
function daysBetweenDates(date1, date2) {
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  const diffTime = Math.abs(d2 - d1);
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
}

/**
 * 랜덤 문자열 생성
 * @param {number} length - 생성할 문자열의 길이
 * @returns {string} 랜덤 문자열
 */
function generateRandomString(length) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

/**
 * 객체 깊은 복사
 * @param {Object} obj - 복사할 객체
 * @returns {Object} 깊은 복사된 객체
 */
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

/**
 * 배열에서 중복 제거
 * @param {Array} arr - 중복을 제거할 배열
 * @returns {Array} 중복이 제거된 배열
 */
function removeDuplicates(arr) {
  return [...new Set(arr)];
}

module.exports = {
  daysBetweenDates,
  generateRandomString,
  deepClone,
  removeDuplicates,
};