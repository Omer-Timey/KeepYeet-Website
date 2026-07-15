import Image from "next/image";
import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="shell site-header__inner">
        <Link className="brand" href="/" aria-label="KeepYeet home">
          <Image
            src="/images/app-store/keepyeet-icon.webp"
            alt=""
            width={44}
            height={44}
            priority
          />
          <span>KeepYeet</span>
        </Link>
        <nav className="site-nav" aria-label="Main navigation">
          <Link href="/#how-it-works">How it works</Link>
          <Link href="/#screenshots">Screenshots</Link>
          <Link href="/guides/">Guides</Link>
          <Link href="/#faq">FAQ</Link>
        </nav>
        <Link className="header-cta" href="/#download">
          Download Free
        </Link>
      </div>
    </header>
  );
}
