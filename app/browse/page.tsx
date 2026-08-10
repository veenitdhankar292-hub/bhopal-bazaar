import Link from "next/link"
import { SearchX } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SearchBar } from "@/components/search-bar"
import { BusinessCard } from "@/components/business-card"
import { searchBusinesses } from "@/lib/businesses"
import { CATEGORY_NAMES } from "@/lib/categories"
import { cn } from "@/lib/utils"

export default async function BrowsePage({
  searchParams,
}: {
  searchParams: Promise<{ q?: string; category?: string }>
}) {
  const params = await searchParams
  const query = params.q ?? ""
  const category = params.category ?? ""

  const results = await searchBusinesses({ query, category })

  function categoryHref(name: string) {
    const sp = new URLSearchParams()
    if (query) sp.set("q", query)
    if (name) sp.set("category", name)
    return `/browse${sp.toString() ? `?${sp.toString()}` : ""}`
  }

  const heading = category
    ? category
    : query
      ? `Results for “${query}”`
      : "All businesses"

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 py-8 sm:px-6">
            <nav className="text-xs text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-1.5">/</span>
              <span className="text-foreground">Browse</span>
            </nav>
            <h1 className="mt-3 font-display text-3xl font-bold tracking-tight text-foreground text-balance">
              {heading}
            </h1>
            <div className="mt-5 max-w-3xl">
              <SearchBar defaultQuery={query} defaultCategory={category} size="compact" />
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              <Link
                href={query ? `/browse?q=${encodeURIComponent(query)}` : "/browse"}
                className={cn(
                  "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                  !category
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-card text-foreground hover:border-primary/40",
                )}
              >
                All
              </Link>
              {CATEGORY_NAMES.map((name) => (
                <Link
                  key={name}
                  href={categoryHref(name)}
                  className={cn(
                    "rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                    category === name
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-card text-foreground hover:border-primary/40",
                  )}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
          <p className="mb-6 text-sm text-muted-foreground">
            {results.length} {results.length === 1 ? "business" : "businesses"} found
          </p>

          {results.length > 0 ? (
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {results.map((b) => (
                <BusinessCard key={b.id} business={b} />
              ))}
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-border bg-card py-20 text-center">
              <span className="flex size-14 items-center justify-center rounded-full bg-muted text-muted-foreground">
                <SearchX className="size-7" aria-hidden="true" />
              </span>
              <h2 className="mt-5 font-display text-lg font-bold text-foreground">
                No businesses found
              </h2>
              <p className="mt-2 max-w-sm text-sm text-muted-foreground">
                Try a different search or category. Know a business that should be
                here?
              </p>
              <Link
                href="/list-your-business"
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
              >
                List a business
              </Link>
            </div>
          )}
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
