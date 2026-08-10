import Link from "next/link"
import { Store } from "lucide-react"
import { CATEGORIES } from "@/lib/categories"

export function CategoryGrid({ counts }: { counts: Record<string, number> }) {
  const total = Object.values(counts).reduce((sum, n) => sum + n, 0)

  return (
    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5">
      <Link
        href="/browse"
        className="group flex flex-col items-center justify-center gap-2 rounded-xl bg-primary p-4 text-center text-primary-foreground transition-all hover:-translate-y-0.5 hover:shadow-md"
      >
        <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/15">
          <Store className="size-5" aria-hidden="true" />
        </span>
        <span className="block text-sm font-semibold">All Businesses</span>
        <span className="block text-xs text-primary-foreground/80">
          {total > 0 ? `${total} listings` : "View all listings"}
        </span>
      </Link>

      {CATEGORIES.map((c) => {
        const Icon = c.icon
        const count = counts[c.name] ?? 0
        return (
          <Link
            key={c.name}
            href={`/browse?category=${encodeURIComponent(c.name)}`}
            className="group flex flex-col items-center justify-center gap-2 rounded-xl border border-border bg-card p-4 text-center transition-all hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-sm"
          >
            <span className="flex size-11 shrink-0 items-center justify-center rounded-lg bg-accent/20 text-accent-foreground transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
              <Icon className="size-5" aria-hidden="true" />
            </span>
            <span className="block text-sm font-semibold text-foreground">{c.name}</span>
            <span className="block text-xs text-muted-foreground text-balance">
              {count > 0 ? `${count} listed` : c.blurb}
            </span>
          </Link>
        )
      })}
    </div>
  )
}
