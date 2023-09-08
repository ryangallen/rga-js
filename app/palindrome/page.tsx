"use client";

import { useState } from "react";

import PageContent from "components/PageContent/PageContent";
import { isPalindrome } from "./is-palindrome";

const example = "A man, a plan, a canal, Panama";

export default function Palindrome() {
  const [phrase, setPhrase] = useState(example);

  return (
    <PageContent title="Palindrome">
      <input
        type="text"
        value={phrase}
        onChange={({ target }) => setPhrase(target.value)}
        className="focus:shadow-outline mr-1 appearance-none rounded border p-1 leading-tight text-gray-700 shadow focus:outline-none"
      />
      is{" "}
      <span className="underline">{`${
        isPalindrome(phrase) ? "" : "not"
      }`}</span>{" "}
      a palindrome.
    </PageContent>
  );
}
