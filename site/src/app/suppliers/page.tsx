export const metadata = { title: "Suppliers" };

export default function SuppliersPage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Become a Supplier</h1>
      <p className="mt-6 text-neutral-600 dark:text-neutral-300 max-w-prose">
        We welcome prospective suppliers aligned with our quality and ethical standards.
        Submit your details and we&apos;ll be in touch for vetting and onboarding.
      </p>
      <div className="mt-8">
        <a
          className="rounded-md bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700"
          href="/contact"
        >
          Get in touch
        </a>
      </div>
    </div>
  );
}
