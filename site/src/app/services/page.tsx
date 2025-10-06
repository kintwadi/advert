export const metadata = { title: "Services" };

export default function ServicesPage() {
  const services = [
    {
      title: "Procurement",
      desc:
        "Strategic sourcing, supplier negotiations, and purchasing operations with KPI tracking.",
    },
    {
      title: "Inventory Control",
      desc:
        "Demand planning, stock optimization, and loss prevention for reliable fulfillment.",
    },
    {
      title: "Supplier Enablement",
      desc:
        "Onboarding, vetting, compliance, and performance management for supplier ecosystems.",
    },
    {
      title: "Project Delivery",
      desc:
        "Managed delivery with scope, schedule, and cost transparency across milestones.",
    },
  ];

  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Our Services</h1>
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((s) => (
          <div key={s.title} className="rounded-xl border p-6 shadow-sm">
            <h2 className="text-lg font-semibold">{s.title}</h2>
            <p className="mt-2 text-sm text-neutral-600 dark:text-neutral-300">{s.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
