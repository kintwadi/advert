import Link from "next/link";
import Container from "@/components/Container";
import Logo from "@/components/Logo";
import LocaleSwitcher from "@/components/LocaleSwitcher";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function Header({ locale, dict }: { locale: string; dict: Dictionary }) {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-background/70 bg-background/80 border-b border-black/10 dark:border-white/10">
      <Container className="flex items-center justify-between h-16">
        <div className="flex items-center gap-8">
          <Link href={`/${locale}`} aria-label="MGP Angola home">
            <Logo />
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href={`/${locale}`} className="hover:opacity-80">{dict.nav.home}</Link>
            <Link href={`/${locale}/about`} className="hover:opacity-80">{dict.nav.about}</Link>
            <Link href={`/${locale}/services`} className="hover:opacity-80">{dict.nav.services}</Link>
            <Link href={`/${locale}/projects`} className="hover:opacity-80">{dict.nav.projects}</Link>
            <Link href={`/${locale}/contact`} className="hover:opacity-80">{dict.nav.contact}</Link>
          </nav>
        </div>
        <div className="flex items-center gap-3">
          <LocaleSwitcher />
        </div>
      </Container>
    </header>
  );
}
