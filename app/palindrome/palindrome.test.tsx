import { isPalindrome } from "./page";

describe("isPalindrome", () => {
  it.each([
    ["test", false],
    ["racecar", true],
    ["A man, a plan, a canal, Panama!", true],
  ])("should check palindromes correctly: %s", (phrase, expectedResult) => {
    expect(isPalindrome(phrase)).toBe(expectedResult);
  });
});
