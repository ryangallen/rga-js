interface PageProps {
  title?: string;
  children?: React.ReactNode;
}

export default function PageContent({ title, ...props }: PageProps) {
  return (
    <>
      {title && (
        <h2 className="mb-4 text-xl md:text-2xl xl:text-3xl">{title}</h2>
      )}
      {props.children}
      {title && (
        <p className="mt-8 text-xs text-slate-500">
          <a
            target="_blank"
            rel="noreferrer"
            href={`https://github.com/ryangallen/rga-js/blob/main/app/${title.toLowerCase()}`}
          >
            See the Code
          </a>
        </p>
      )}
    </>
  );
}
