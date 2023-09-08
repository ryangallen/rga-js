"use client";

import { useState } from "react";

import PageContent from "components/PageContent/PageContent";

export function isPalindrome(input: string) {
  const cleanInputArr = input
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "")
    .split("");

  return cleanInputArr.toString() === cleanInputArr.reverse().toString();
}

const example = "A man, a plan, a canal, Panama";

export default function Palindrome() {
  const [phrase, setPhrase] = useState(example);

  return (
    <PageContent title="Palindrome">
      <input
        type="text"
        value={phrase}
        onChange={({ target }) => setPhrase(target.value)}
        className="focus:shadow-outline mr-1 w-60 appearance-none rounded border p-1 leading-tight text-gray-700 shadow focus:outline-none"
      />
      is{" "}
      <span className="underline">{`${
        isPalindrome(phrase) ? "" : "not"
      }`}</span>{" "}
      a palindrome.
    </PageContent>
  );
}
