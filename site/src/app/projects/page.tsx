export const metadata = { title: "Projects" };

export default function ProjectsPage() {
  const projects = [
    { name: "Logistics Optimization", status: "Ongoing" },
    { name: "Supplier Onboarding Program", status: "Ongoing" },
  ];
  return (
    <div className="mx-auto max-w-6xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Ongoing Projects</h1>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {projects.map((p) => (
          <li key={p.name} className="rounded-xl border p-6 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-medium">{p.name}</span>
              <span className="text-xs rounded bg-amber-100 text-amber-800 px-2 py-1">
                {p.status}
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
