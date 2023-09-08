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
    </>
  );
}
