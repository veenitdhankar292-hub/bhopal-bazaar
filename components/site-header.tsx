import Link from "next/link"
import { MapPin, Plus } from "lucide-react"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2.5">
          <span className="flex size-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <MapPin className="size-5" aria-hidden="true" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Bhopal Bazaar
            </span>
            <span className="text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
              Local Directory
            </span>
          </span>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          <Link
            href="/browse"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Browse
          </Link>
          <Link
            href="/browse?category=Restaurants"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Restaurants
          </Link>
          <Link
            href="/browse?category=Health%20%26%20Wellness"
            className="text-sm font-medium text-foreground/80 transition-colors hover:text-primary"
          >
            Health
          </Link>
        </nav>

        <Link
          href="/list-your-business"
          className="inline-flex items-center gap-1.5 rounded-lg bg-accent px-3.5 py-2 text-sm font-semibold text-accent-foreground shadow-sm transition-transform hover:-translate-y-0.5"
        >
          <Plus className="size-4" aria-hidden="true" />
          <span className="hidden sm:inline">List your business</span>
          <span className="sm:hidden">List</span>
        </Link>
      </div>
    </header>
  )
}
