"use client";

import PageContent from "components/PageContent/PageContent";

import { kebabCase } from "lodash";

const pages = [
  // { title: "Game of Life" },
  { title: "Palindrome" },
];

export default function HomePage() {
  return (
    <PageContent title="Excercises">
      <ul className="m-4 list-disc">
        {pages.map(({ title }) => (
          <li>
            <a href={`/${kebabCase(title)}`}>{title}</a>
          </li>
        ))}
      </ul>
    </PageContent>
  );
}
