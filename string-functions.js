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

/**
 * 문자열 압축 (String Compression)
 * @param {string} str - 입력 문자열
 * @returns {string} - 압축된 문자열
 */
function compressString(str) {
  let compressed = "";
  let count = 1;

  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      compressed += str[i] + (count > 1 ? count : "");
      count = 1;
    }
  }

  return compressed;
}

/**
 * 아나그램 확인 (Check Anagram)
 * @param {string} str1 - 첫 번째 문자열
 * @param {string} str2 - 두 번째 문자열
 * @returns {boolean} - 아나그램 여부
 */
function isAnagram(str1, str2) {
  const normalize = (str) =>
    str
      .toLowerCase()
      .replace(/[^a-z0-9]/g, "")
      .split("")
      .sort()
      .join("");
  return normalize(str1) === normalize(str2);
}

/**
 * 문자열에서 가장 긴 단어 찾기 (Find Longest Word)
 * @param {string} str - 입력 문자열
 * @returns {string} - 가장 긴 단어
 */
function findLongestWord(str) {
  return str
    .split(" ")
    .reduce(
      (longest, word) => (word.length > longest.length ? word : longest),
      ""
    );
}

/**
 * 문자열에서 단어의 빈도수 계산 (Word Frequency)
 * @param {string} str - 입력 문자열
 * @returns {Object} - 단어 빈도수 객체
 */
function wordFrequency(str) {
  const words = str.toLowerCase().split(/\W+/);
  const frequency = {};

  for (const word of words) {
    if (word) {
      frequency[word] = (frequency[word] || 0) + 1;
    }
  }

  return frequency;
}

module.exports = {
  reverseString,
  isPalindrome,
  removeDuplicateCharacters,
  capitalizeFirstLetter,
  countOccurrences,
  compressString,
  isAnagram,
  findLongestWord,
  wordFrequency,
};
