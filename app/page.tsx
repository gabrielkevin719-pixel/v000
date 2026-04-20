export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8">
      <div className="max-w-2xl text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance">
          Bem-vindo ao seu novo projeto
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Este projeto Next.js 16 foi configurado com TypeScript, Tailwind CSS e
          App Router. Comece a editar{" "}
          <code className="rounded bg-secondary px-2 py-1 font-mono text-sm">
            app/page.tsx
          </code>{" "}
          para ver as mudanças.
        </p>
        <div className="mt-10 flex items-center justify-center gap-4">
          <a
            href="https://nextjs.org/docs"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm hover:opacity-90 transition-opacity"
          >
            Documentacao
          </a>
          <a
            href="https://vercel.com"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg bg-secondary px-4 py-2.5 text-sm font-semibold text-secondary-foreground hover:opacity-80 transition-opacity"
          >
            Deploy na Vercel
          </a>
        </div>
      </div>
    </main>
  );
}
