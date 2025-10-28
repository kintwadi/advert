import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur dark:bg-neutral-950/80">
        <div className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <Image src="/logo.svg" width={40} height={40} alt="MGP Logo" />
            <span className="text-lg font-semibold tracking-tight">MGP Investment cc</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <Link href="/" className="hover:text-blue-600">Home</Link>
            <Link href="/about" className="hover:text-blue-600">About</Link>
            <Link href="/services" className="hover:text-blue-600">Services</Link>
            <Link href="/products" className="hover:text-blue-600">Products</Link>
            <Link href="/projects" className="hover:text-blue-600">Projects</Link>
            <Link href="/suppliers" className="hover:text-blue-600">Suppliers</Link>
            <Link href="/contact" className="hover:text-blue-600">Contact</Link>
          </nav>
        </div>
      </header>

      <section className="relative isolate overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-50 via-white to-white dark:from-neutral-900 dark:via-neutral-950 dark:to-neutral-950" />
        <div className="mx-auto max-w-7xl px-6 py-20 lg:py-28 grid gap-10 lg:grid-cols-2 items-center">
          <div>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
              Procurement and Supplier Management in Angola
            </h1>
            <p className="mt-6 text-base/7 text-neutral-600 dark:text-neutral-300 max-w-prose">
              We help organizations reduce costs and mitigate risk through
              strategic procurement, supplier enablement, and well-managed
              inventory control, so you can focus on your core business.
            </p>
            <div className="mt-8 flex items-center gap-4">
              <Link href="/services" className="rounded-md bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700">
                Our Services
              </Link>
              <Link href="/suppliers" className="rounded-md px-5 py-3 border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-50 dark:hover:bg-neutral-900">
                Become a Supplier
              </Link>
            </div>
          </div>
          <div className="relative h-72 sm:h-96 lg:h-[420px]">
            <Image
              src="/hero.jpg"
              alt="Procurement in Angola"
              fill
              className="object-cover rounded-xl shadow-lg"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">
        <h2 className="text-2xl font-semibold tracking-tight">What We Do</h2>
        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            {
              title: "Procurement",
              desc:
                "End-to-end sourcing, purchasing, and inventory control aligned to your goals.",
            },
            {
              title: "Supplier Enablement",
              desc:
                "Onboard, vet, and manage suppliers for quality, compliance, and performance.",
            },
            {
              title: "Project Delivery",
              desc:
                "Plan and deliver ongoing projects with transparent milestones and reporting.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="rounded-xl border p-6 shadow-sm transition hover:shadow-md"
            >
              <h3 className="text-lg font-semibold">{card.title}</h3>
              <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">
                {card.desc}
              </p>
              <div className="mt-4">
                <Link href="/services" className="text-blue-600 hover:underline">
                  Learn more →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="border-t">
        <div className="mx-auto max-w-7xl px-6 py-10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            © {new Date().getFullYear()} MGP Investment cc. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-sm">
            <Link href="/privacy">Privacy</Link>
            <Link href="/terms">Terms</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
