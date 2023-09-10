"use client";

import { useState } from "react";

import PageContent from "components/PageContent/PageContent";
import { isPalindrome } from "./palindrome";

const example = "A man, a plan, a canal, Panama";

export default function Palindrome() {
  const [phrase, setPhrase] = useState(example);

  return (
    <PageContent title="Palindrome" showCodeLink>
      <p className="mb-8 border-b border-slate-200 pb-6 text-slate-700">
        <strong>Prompt:</strong> Implement a function that checks if a given
        string is a palindrome. A palindrome is a word, phrase, or sequence of
        characters that reads the same backward as forward, ignoring spaces,
        punctuation, and capitalization. Your function should return{" "}
        <code>true</code> if the input is a palindrome and <code>false</code>{" "}
        otherwise.
      </p>
      <input
        type="text"
        value={phrase}
        onChange={({ target }) => setPhrase(target.value)}
        className="mr-1 w-60 appearance-none rounded border p-1 leading-tight text-gray-700 shadow focus:outline-none"
      />
      is{" "}
      <span className="underline">{`${
        isPalindrome(phrase) ? "" : "not"
      }`}</span>{" "}
      a palindrome.
    </PageContent>
  );
}
