export function isPalindrome(input: string) {
  const cleanInputArr = input
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "")
    .split("");

  return cleanInputArr.toString() === cleanInputArr.reverse().toString();
}
