import Container from "@/components/Container";
import type { Dictionary } from "@/lib/i18n/get-dictionary";

export default function Footer({ dict }: { dict: Dictionary }) {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-black/10 dark:border-white/10 py-8 mt-16">
      <Container className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-black/70 dark:text-white/70">
        <div>
          © {year} MGP Angola. {dict.footer.rights}
        </div>
        <div className="flex items-center gap-4">
          <a href="#" aria-label="LinkedIn" className="hover:opacity-80">LinkedIn</a>
          <a href="#" aria-label="Facebook" className="hover:opacity-80">Facebook</a>
          <a href="#" aria-label="Instagram" className="hover:opacity-80">Instagram</a>
        </div>
      </Container>
    </footer>
  );
}
