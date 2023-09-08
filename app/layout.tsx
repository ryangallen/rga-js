import "../styles/tailwind.css";

const title = "rga.js";

export const metadata = { title };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <header className="bg-neutral-900 text-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-1">
            <a href="/">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                {title}
              </h1>
            </a>
          </div>
        </header>

        <main>
          <div className="mx-auto max-w-5xl p-4">{children}</div>
        </main>
      </body>
    </html>
  );
}
