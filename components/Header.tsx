import Logo from "./Logo";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-content items-center justify-between gap-3 px-4 py-3.5 sm:gap-4 sm:px-6 sm:py-4">
        <a href="#top" className="focus-ring min-w-0 shrink rounded-doc">
          <Logo />
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          <a
            href="#comment-ca-marche"
            className="focus-ring rounded-doc text-[15px] font-medium text-muted transition-colors hover:text-foreground"
          >
            Comment ça marche
          </a>
          <a
            href="#fonctionnalites"
            className="focus-ring rounded-doc text-[15px] font-medium text-muted transition-colors hover:text-foreground"
          >
            Fonctionnalités
          </a>
          <a
            href="#tarifs"
            className="focus-ring rounded-doc text-[15px] font-medium text-muted transition-colors hover:text-foreground"
          >
            Tarifs
          </a>
          <a
            href="#faq"
            className="focus-ring rounded-doc text-[15px] font-medium text-muted transition-colors hover:text-foreground"
          >
            FAQ
          </a>
        </nav>

        <div className="flex shrink-0 items-center gap-2 sm:gap-4">
          <a
            href="#connexion"
            className="focus-ring hidden rounded-doc text-[15px] font-medium text-muted transition-colors hover:text-foreground sm:inline"
          >
            Connexion
          </a>
          <a
            href="#hero-cta"
            className="focus-ring rounded-doc bg-primary px-3 py-2 text-[13px] font-semibold text-background transition-colors hover:bg-primary-hover active:bg-primary-hover sm:px-4 sm:py-2.5 sm:text-[15px]"
          >
            Analyser mon DCE
          </a>
        </div>
      </div>
    </header>
  );
}
