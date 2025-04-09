// 문자열 관련 유용한 함수들

/**
 * 문자열을 뒤집는 함수
 * @param {string} str - 입력 문자열
 * @returns {string} - 뒤집어진 문자열
 */
function reverseString(str) {
  return str.split("").reverse().join("");
}

/**
 * 문자열이 회문인지 확인하는 함수
 * @param {string} str - 입력 문자열
 * @returns {boolean} - 회문 여부
 */
function isPalindrome(str) {
  const reversed = str.split("").reverse().join("");
  return str === reversed;
}

/**
 * 문자열에서 중복된 문자를 제거하는 함수
 * @param {string} str - 입력 문자열
 * @returns {string} - 중복이 제거된 문자열
 */
function removeDuplicateCharacters(str) {
  return Array.from(new Set(str)).join("");
}

/**
 * 문자열의 첫 글자만 대문자로 변환하는 함수
 * @param {string} str - 입력 문자열
 * @returns {string} - 변환된 문자열
 */
function capitalizeFirstLetter(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * 문자열에서 특정 문자의 개수를 세는 함수
 * @param {string} str - 입력 문자열
 * @param {string} char - 개수를 셀 문자
 * @returns {number} - 문자의 개수
 */
function countOccurrences(str, char) {
  return str.split(char).length - 1;
}

module.exports = {
  reverseString,
  isPalindrome,
  removeDuplicateCharacters,
  capitalizeFirstLetter,
  countOccurrences,
};
