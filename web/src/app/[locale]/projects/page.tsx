import Container from "@/components/Container";

export default function ProjectsPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold">Projects</h1>
      <div className="mt-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }).map((_, idx) => (
          <div key={idx} className="rounded-xl border border-black/10 dark:border-white/10 p-6 h-40 bg-black/5 dark:bg-white/5" />
        ))}
      </div>
    </Container>
  );
}
