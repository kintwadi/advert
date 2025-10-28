export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-5xl px-6 py-16">
      <h1 className="text-3xl font-bold tracking-tight">Contact</h1>
      <form className="mt-8 grid gap-4 max-w-xl" method="post" action="/api/contact">
        <input className="rounded border px-4 py-3 bg-transparent" name="name" placeholder="Your name" required />
        <input className="rounded border px-4 py-3 bg-transparent" name="email" placeholder="Email" type="email" required />
        <input className="rounded border px-4 py-3 bg-transparent" name="subject" placeholder="Subject" />
        <textarea className="rounded border px-4 py-3 bg-transparent" name="message" placeholder="Message" rows={5} required />
        <button className="rounded-md bg-blue-600 px-5 py-3 text-white shadow hover:bg-blue-700" type="submit">Send</button>
      </form>
    </div>
  );
}
