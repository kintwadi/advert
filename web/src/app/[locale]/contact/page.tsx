import Container from "@/components/Container";

export default function ContactPage() {
  return (
    <Container className="py-16">
      <h1 className="text-3xl font-bold">Contact</h1>
      <form className="mt-6 grid gap-4 max-w-xl">
        <input className="rounded-md border border-black/10 dark:border-white/10 p-3 bg-transparent" placeholder="Name" />
        <input className="rounded-md border border-black/10 dark:border-white/10 p-3 bg-transparent" placeholder="Email" type="email" />
        <textarea className="rounded-md border border-black/10 dark:border-white/10 p-3 bg-transparent" placeholder="Message" rows={5} />
        <button type="submit" className="inline-flex items-center rounded-md bg-foreground text-background px-5 py-3 text-sm font-medium shadow hover:opacity-90 w-max">Send</button>
      </form>
      <div className="mt-8 text-sm text-black/70 dark:text-white/70">
        Email: info@mgp-angola.com
      </div>
    </Container>
  );
}
