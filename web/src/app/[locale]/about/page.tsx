import Container from "@/components/Container";

export default function AboutPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold">About</h1>
      <p className="mt-4 text-black/70 dark:text-white/70 max-w-prose">
        We are a multidisciplinary engineering and project management company operating across Angola.
      </p>
    </Container>
  );
}
