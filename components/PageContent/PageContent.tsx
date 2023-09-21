import { kebabCase } from "lodash";

interface PageProps {
  title?: string;
  showCodeLink?: boolean;
  children?: React.ReactNode;
}

export default function PageContent({
  title,
  showCodeLink = false,
  ...props
}: PageProps) {
  return (
    <>
      {title && (
        <h2 className="mb-4 text-xl md:text-2xl xl:text-3xl">{title}</h2>
      )}
      {props.children}
      {showCodeLink && title && (
        <p className="mt-5 text-xs text-slate-500">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://github.com/ryangallen/rga-js/blob/main/app/exercises/${kebabCase(
              title
            )}`}
          >
            See the Code
            <svg
              style={{ display: "inline-block" }}
              width="12"
              height="12"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.64645 11.3536C3.45118 11.1583 3.45118 10.8417 3.64645 10.6465L10.2929 4L6 4C5.72386 4 5.5 3.77614 5.5 3.5C5.5 3.22386 5.72386 3 6 3L11.5 3C11.6326 3 11.7598 3.05268 11.8536 3.14645C11.9473 3.24022 12 3.36739 12 3.5L12 9.00001C12 9.27615 11.7761 9.50001 11.5 9.50001C11.2239 9.50001 11 9.27615 11 9.00001V4.70711L4.35355 11.3536C4.15829 11.5488 3.84171 11.5488 3.64645 11.3536Z"
                fill="currentColor"
                fill-rule="evenodd"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>
        </p>
      )}
    </>
  );
}
