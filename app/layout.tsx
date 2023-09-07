import Head from "next/head";

import "../styles/tailwind.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <Head>
        <title>rga.js</title>
      </Head>
      <body>
        <header className="bg-neutral-900 text-slate-50">
          <div className="mx-auto max-w-5xl px-4 py-1">
            <a href="/">
              <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
                rga.js
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
