const mpiLinks = [
  { title: "Cours d'informatique en MPI", href: 'https://mpi-lamartin.github.io/mpi-info/' },
  { title: "Cours d'informatique en MP2I", href: 'https://mp2i-info.github.io' },
  { title: 'Exercices SQL', href: 'https://sql-exercices.github.io/' },
  { title: 'Exercices OCaml', href: 'https://fortierq.github.io/ocaml-exercices' },
  { title: 'Exercices sur les automates et langages', href: 'https://fortierq.github.io/automates' },
  { title: 'Exercices sur la déduction naturelle', href: 'https://fortierq.github.io/deduction-naturelle' },
];

const otherLinks = [
  { title: "Cours d'option informatique en MP", href: 'https://mp-info.github.io' },
  { title: "Cours d'informatique commune, 1re année", href: 'https://cpge-itc.github.io/itc1' },
  { title: "Cours d'informatique commune, 2e année", href: 'https://cpge-itc.github.io/itc2' },
  { title: 'Informatique en BCPST, 2e année', href: 'https://cpge-itc.github.io/bcpst2' },
];

type LinkItem = (typeof mpiLinks)[number] | (typeof otherLinks)[number];

function LinkCard({ item }: { item: LinkItem }) {
  return (
    <li>
      <a
        className="block rounded-xl border border-[var(--line)] bg-[var(--card)] px-4 py-3 text-[15px] font-medium leading-snug tracking-[-0.01em] text-[var(--ink)] shadow-[0_1px_0_rgb(20_32_45/0.03)] transition duration-200 hover:-translate-y-px hover:border-[var(--accent)] hover:shadow-[0_5px_16px_rgb(20_32_45/0.06)] focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-[var(--accent)] sm:px-4 sm:text-base"
        href={item.href}
        target="_blank"
        rel="noreferrer"
      >
        {item.title}
      </a>
    </li>
  );
}

function LinkSection({ id, eyebrow, title, links }: { id: string; eyebrow: string; title: string; links: LinkItem[] }) {
  return (
    <section aria-labelledby={id}>
      <div className="mb-2 flex items-baseline gap-3 px-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">{eyebrow}</span>
        <h2 id={id} className="text-sm font-medium text-[var(--muted-ink)]">{title}</h2>
      </div>
      <ul className="space-y-1.5">
        {links.map((item) => <LinkCard key={item.href} item={item} />)}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-6 sm:px-6 sm:py-8">
      <div aria-hidden="true" className="page-glow" />
      <div className="relative mx-auto w-full max-w-[620px]">
        <header className="mb-6 text-center sm:mb-7">
          <h1 className="text-balance text-[clamp(1.85rem,6vw,2.65rem)] font-semibold leading-[1.04] tracking-[-0.04em] text-[var(--ink)]">Informatique en CPGE</h1>
          <p className="mx-auto mt-2 max-w-md text-pretty text-sm leading-5 text-[var(--muted-ink)] sm:text-[15px]">Cours et exercices d’informatique pour les classes préparatoires.</p>
        </header>
        <div className="space-y-6">
          <LinkSection id="mpi-mp2i" eyebrow="MPI · MP2I" title="Cours et exercices" links={mpiLinks} />
          <LinkSection id="autres-filieres" eyebrow="Autres filières" title="Cours" links={otherLinks} />
        </div>
        <footer className="mt-6 text-center text-sm">
          <a className="font-medium text-[var(--accent-strong)] underline decoration-[var(--line)] underline-offset-4 transition hover:decoration-[var(--accent-strong)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)]" href="https://fortierq.github.io" target="_blank" rel="noreferrer">Site personnel</a>
        </footer>
      </div>
    </main>
  );
}
