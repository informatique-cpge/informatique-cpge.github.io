import {
  ArrowUpRight,
  Binary,
  BookOpen,
  Braces,
  Database,
  GitBranch,
  GraduationCap,
  Network,
  TerminalSquare,
} from 'lucide-react';

const mpiLinks = [
  { title: "Cours d'informatique en MPI", href: 'https://mpi-lamartin.github.io/mpi-info/', icon: BookOpen },
  { title: "Cours d'informatique en MP2I", href: 'https://mp2i-info.github.io', icon: TerminalSquare },
  { title: 'Exercices SQL', href: 'https://sql-exercices.github.io/', icon: Database },
  { title: 'Exercices OCaml', href: 'https://fortierq.github.io/ocaml-exercices', icon: Braces },
  { title: 'Exercices sur les automates et langages', href: 'https://fortierq.github.io/automates', icon: GitBranch },
  { title: 'Exercices sur la déduction naturelle', href: 'https://fortierq.github.io/deduction-naturelle', icon: Binary },
];

const otherLinks = [
  { title: "Cours d'option informatique en MP", href: 'https://mp-info.github.io', icon: Network },
  { title: "Cours d'informatique commune, 1re année", href: 'https://cpge-itc.github.io/itc1', icon: BookOpen },
  { title: "Cours d'informatique commune, 2e année", href: 'https://cpge-itc.github.io/itc2', icon: BookOpen },
  { title: 'Informatique en BCPST, 2e année', href: 'https://cpge-itc.github.io/bcpst2', icon: GraduationCap },
];

type LinkItem = (typeof mpiLinks)[number] | (typeof otherLinks)[number];

function LinkCard({ item }: { item: LinkItem }) {
  const Icon = item.icon;

  return (
    <li>
      <a
        className="group flex min-h-16 items-center gap-4 rounded-2xl border border-[var(--line)] bg-[var(--card)] px-4 py-3.5 shadow-[0_1px_0_rgb(20_32_45/0.03)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--accent)] hover:shadow-[0_8px_24px_rgb(20_32_45/0.07)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--accent)] sm:px-5"
        href={item.href}
        target="_blank"
        rel="noreferrer"
      >
        <span className="grid size-9 shrink-0 place-items-center rounded-xl bg-[var(--icon-bg)] text-[var(--accent-strong)] transition-colors group-hover:bg-[var(--accent)] group-hover:text-white">
          <Icon aria-hidden="true" size={18} strokeWidth={1.8} />
        </span>
        <span className="min-w-0 flex-1 text-[15px] font-medium leading-snug tracking-[-0.01em] text-[var(--ink)] sm:text-base">
          {item.title}
        </span>
        <ArrowUpRight
          aria-hidden="true"
          className="shrink-0 text-[var(--muted-ink)] transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[var(--accent-strong)]"
          size={18}
          strokeWidth={1.8}
        />
      </a>
    </li>
  );
}

function LinkSection({ id, eyebrow, title, links }: { id: string; eyebrow: string; title: string; links: LinkItem[] }) {
  return (
    <section aria-labelledby={id}>
      <div className="mb-3 flex items-baseline gap-3 px-1">
        <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[var(--accent-strong)]">{eyebrow}</span>
        <h2 id={id} className="text-sm font-medium text-[var(--muted-ink)]">{title}</h2>
      </div>
      <ul className="space-y-2.5">
        {links.map((item) => <LinkCard key={item.href} item={item} />)}
      </ul>
    </section>
  );
}

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden px-4 py-12 sm:px-6 sm:py-16">
      <div aria-hidden="true" className="page-glow" />
      <div className="relative mx-auto w-full max-w-[620px]">
        <header className="mb-10 text-center sm:mb-12">
          <div className="mx-auto mb-5 grid size-14 place-items-center rounded-2xl bg-[var(--ink)] text-white shadow-[0_10px_30px_rgb(20_32_45/0.16)]">
            <TerminalSquare aria-hidden="true" size={26} strokeWidth={1.7} />
          </div>
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.18em] text-[var(--accent-strong)]">Ressources pédagogiques</p>
          <h1 className="text-balance text-[clamp(2rem,7vw,3.25rem)] font-semibold leading-[1.02] tracking-[-0.045em] text-[var(--ink)]">Informatique en CPGE</h1>
          <p className="mx-auto mt-4 max-w-md text-pretty text-[15px] leading-6 text-[var(--muted-ink)] sm:text-base">Cours et exercices d’informatique pour les classes préparatoires.</p>
        </header>
        <div className="space-y-9">
          <LinkSection id="mpi-mp2i" eyebrow="MPI · MP2I" title="Cours et exercices" links={mpiLinks} />
          <LinkSection id="autres-filieres" eyebrow="Autres filières" title="Cours" links={otherLinks} />
        </div>
        <footer className="mt-11 text-center text-xs text-[var(--muted-ink)]">
          <p>Ressources libres d’accès · Informatique CPGE</p>
        </footer>
      </div>
    </main>
  );
}
