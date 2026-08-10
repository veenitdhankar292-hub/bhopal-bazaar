import Link from "next/link"
import { MapPin } from "lucide-react"
import { CATEGORIES } from "@/lib/categories"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <MapPin className="size-5" aria-hidden="true" />
            </span>
            <span className="font-display text-lg font-bold tracking-tight">Bhopal Bazaar</span>
          </div>
          <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
            Your trusted guide to the shops, services and professionals that make
            the City of Lakes tick. Discover local, buy local.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Categories</h3>
          <ul className="mt-4 space-y-2.5">
            {CATEGORIES.slice(0, 5).map((c) => (
              <li key={c.name}>
                <Link
                  href={`/browse?category=${encodeURIComponent(c.name)}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  {c.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-foreground">Quick links</h3>
          <ul className="mt-4 space-y-2.5">
            <li>
              <Link href="/browse" className="text-sm text-muted-foreground transition-colors hover:text-primary">
                Browse all
              </Link>
            </li>
            <li>
              <Link
                href="/list-your-business"
                className="text-sm text-muted-foreground transition-colors hover:text-primary"
              >
                List your business
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-5 text-center text-xs text-muted-foreground sm:px-6">
          {"\u00A9 "}
          {new Date().getFullYear()} Bhopal Bazaar. A community directory for Bhopal, Madhya Pradesh.
        </div>
      </div>
    </footer>
  )
}
