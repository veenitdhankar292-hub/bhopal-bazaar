import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck, Search, Store } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SearchBar } from "@/components/search-bar"
import { CategoryGrid } from "@/components/category-grid"
import { BusinessCard } from "@/components/business-card"
import { getFeaturedBusinesses, getCategoryCounts, getTotalCount } from "@/lib/businesses"

export default async function HomePage() {
  const [featured, counts, total] = await Promise.all([
    getFeaturedBusinesses(6),
    getCategoryCounts(),
    getTotalCount(),
  ])

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="/images/bhopal-hero.png"
              alt="Bhopal city skyline over the Upper Lake at golden hour"
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/70 to-primary/85" />
          </div>

          <div className="relative mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-28">
            <div className="max-w-2xl">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-accent/95 px-3 py-1 text-xs font-semibold text-accent-foreground">
                <Store className="size-3.5" aria-hidden="true" />
                Bhopal&apos;s local business directory
              </span>
              <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight text-primary-foreground text-balance sm:text-6xl">
                Find trusted businesses across Bhopal
              </h1>
              <p className="mt-5 max-w-xl text-base leading-relaxed text-primary-foreground/85 sm:text-lg text-pretty">
                From MP Nagar to New Market — discover restaurants, shops, clinics
                and services your neighbours actually recommend.
              </p>
            </div>

            <div className="mt-8 max-w-3xl">
              <SearchBar size="hero" />
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-primary-foreground/85">
              <span className="inline-flex items-center gap-2">
                <Store className="size-4" aria-hidden="true" />
                {total}+ local listings
              </span>
              <span className="inline-flex items-center gap-2">
                <BadgeCheck className="size-4" aria-hidden="true" />
                Verified businesses
              </span>
              <span className="inline-flex items-center gap-2">
                <Search className="size-4" aria-hidden="true" />
                Free to search & list
              </span>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Browse by category
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Jump straight to what you need.
              </p>
            </div>
            <Link
              href="/browse"
              className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline sm:inline-flex"
            >
              View all <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </div>
          <div className="mt-8">
            <CategoryGrid counts={counts} />
          </div>
        </section>

        {/* Featured */}
        <section className="border-y border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6">
            <div className="flex items-end justify-between gap-4">
              <div>
                <h2 className="font-display text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                  Featured in Bhopal
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Highly rated and verified by the community.
                </p>
              </div>
              <Link
                href="/browse"
                className="hidden shrink-0 items-center gap-1.5 text-sm font-semibold text-primary hover:underline sm:inline-flex"
              >
                See all <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {featured.map((b) => (
                <BusinessCard key={b.id} business={b} />
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="mx-auto max-w-6xl px-4 py-20 sm:px-6">
          <div className="relative overflow-hidden rounded-3xl bg-primary px-6 py-14 text-center sm:px-12">
            <div className="relative mx-auto max-w-2xl">
              <h2 className="font-display text-3xl font-bold tracking-tight text-primary-foreground text-balance sm:text-4xl">
                Own a business in Bhopal?
              </h2>
              <p className="mt-4 text-base leading-relaxed text-primary-foreground/85 text-pretty">
                Get discovered by thousands of locals searching for exactly what
                you offer. Adding your business takes just a couple of minutes —
                and it&apos;s completely free.
              </p>
              <Link
                href="/list-your-business"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3 text-sm font-semibold text-accent-foreground shadow-md transition-transform hover:-translate-y-0.5"
              >
                List your business for free
                <ArrowRight className="size-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
