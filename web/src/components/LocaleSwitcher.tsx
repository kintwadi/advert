"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { SUPPORTED_LOCALES } from "@/lib/i18n/config";

export default function LocaleSwitcher() {
  const pathname = usePathname();
  if (!pathname) return null;

  const segments = pathname.split("/").filter(Boolean);
  const current = segments[0];
  const rest = segments.slice(1).join("/");

  return (
    <div className="flex items-center gap-2 text-sm">
      {SUPPORTED_LOCALES.map((loc) => (
        <Link
          key={loc}
          href={`/${loc}/${rest}`}
          className={`px-2 py-1 rounded-md border transition-colors ${
            current === loc
              ? "bg-foreground text-background border-transparent"
              : "border-black/10 dark:border-white/20 hover:bg-black/5 dark:hover:bg-white/10"
          }`}
        >
          {loc.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
