import Container from "@/components/Container";

export default function ServicesPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold">Services</h1>
      <ul className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          "Civil engineering",
          "Electrical & energy systems",
          "Construction management",
          "Procurement & logistics",
          "Maintenance & operations",
          "Consulting & supervision",
        ].map((item) => (
          <li key={item} className="rounded-xl border border-black/10 dark:border-white/10 p-6">
            {item}
          </li>
        ))}
      </ul>
    </Container>
  );
}
