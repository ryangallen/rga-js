"use client";

import { kebabCase } from "lodash";

import PageContent from "components/PageContent/PageContent";

const pages = [
  // { title: "Game of Life" },
  { title: "Palindrome" },
  { title: "Least Recently Used" },
];

export default function HomePage() {
  return (
    <PageContent title="Excercises">
      <ul className="m-4 list-disc">
        {pages.map(({ title }) => {
          const kebabTitle = kebabCase(title);
          return (
            <li key={kebabTitle}>
              <a href={`/exercises/${kebabTitle}`}>{title}</a>
            </li>
          );
        })}
      </ul>
    </PageContent>
  );
}
