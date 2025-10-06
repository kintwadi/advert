import { getDictionary } from "@/lib/i18n/get-dictionary";
import { isSupportedLocale } from "@/lib/i18n/config";
import Container from "@/components/Container";
import Link from "next/link";

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: rawLocale } = await params;
  const locale = isSupportedLocale(rawLocale) ? rawLocale : "en";
  const dict = await getDictionary(locale);

  return (
    <>
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(50%_50%_at_50%_0%,rgba(59,130,246,0.15)_0%,rgba(59,130,246,0)_100%)]" />
        <Container className="py-20 sm:py-28">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h1 className="text-4xl sm:text-5xl font-bold tracking-tight">
                {dict.hero.title}
              </h1>
              <p className="text-lg text-black/70 dark:text-white/70 max-w-prose">
                {dict.hero.subtitle}
              </p>
              <div className="flex flex-wrap gap-3 pt-2">
                <Link
                  href={`/${locale}/services`}
                  className="inline-flex items-center rounded-md bg-foreground text-background px-5 py-3 text-sm font-medium shadow hover:opacity-90"
                >
                  {dict.hero.ctaPrimary}
                </Link>
                <Link
                  href={`/${locale}/projects`}
                  className="inline-flex items-center rounded-md border border-black/10 dark:border-white/20 px-5 py-3 text-sm font-medium hover:bg-black/5 dark:hover:bg-white/10"
                >
                  {dict.hero.ctaSecondary}
                </Link>
              </div>
            </div>
            <div className="relative h-64 sm:h-80 lg:h-96 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-black/10 dark:border-white/10" />
          </div>
        </Container>
      </section>
    </>
  );
}
