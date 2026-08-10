import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import {
  BadgeCheck,
  Clock,
  Globe,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { RatingStars } from "@/components/rating-stars"
import { getBusinessBySlug } from "@/lib/businesses"
import { categoryIcon } from "@/lib/categories"

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const business = await getBusinessBySlug(slug)
  if (!business) return { title: "Business not found — Bhopal Bazaar" }
  return {
    title: `${business.name} — ${business.area}, Bhopal | Bhopal Bazaar`,
    description: business.description,
  }
}

export default async function BusinessPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const business = await getBusinessBySlug(slug)
  if (!business) notFound()

  const Icon = categoryIcon(business.category)
  const telHref = `tel:${business.phone.replace(/\s+/g, "")}`
  const waDigits = (business.whatsapp || business.phone).replace(/\D/g, "")

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Banner */}
        <div className="relative h-56 w-full overflow-hidden bg-muted sm:h-72">
          {business.image_url ? (
            <Image
              src={business.image_url || "/placeholder.svg"}
              alt={`${business.name}`}
              fill
              priority
              sizes="100vw"
              className="object-cover"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-primary/10">
              <Icon className="size-16 text-primary/40" aria-hidden="true" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
        </div>

        <div className="mx-auto max-w-5xl px-4 sm:px-6">
          <nav className="pt-5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-primary">
              Home
            </Link>
            <span className="mx-1.5">/</span>
            <Link
              href={`/browse?category=${encodeURIComponent(business.category)}`}
              className="hover:text-primary"
            >
              {business.category}
            </Link>
            <span className="mx-1.5">/</span>
            <span className="text-foreground">{business.name}</span>
          </nav>

          <div className="mt-4 grid gap-8 pb-16 lg:grid-cols-[1.6fr_1fr]">
            {/* Main */}
            <div>
              <div className="flex items-start gap-3">
                <div className="min-w-0">
                  <span className="inline-block rounded-full bg-primary/10 px-2.5 py-1 text-xs font-semibold text-primary">
                    {business.category}
                  </span>
                  <h1 className="mt-3 flex items-center gap-2 font-display text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
                    {business.name}
                    {business.verified && (
                      <BadgeCheck
                        className="size-6 shrink-0 text-primary"
                        aria-label="Verified business"
                      />
                    )}
                  </h1>
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-2">
                  <RatingStars rating={business.rating} />
                  <span className="text-sm font-semibold text-foreground">
                    {business.rating.toFixed(1)}
                  </span>
                  <span className="text-sm text-muted-foreground">
                    ({business.review_count} reviews)
                  </span>
                </div>
                <span className="text-muted-foreground">•</span>
                <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="size-4 text-primary/70" aria-hidden="true" />
                  {business.area}
                </span>
              </div>

              <div className="mt-8">
                <h2 className="font-display text-lg font-bold text-foreground">About</h2>
                <p className="mt-3 leading-relaxed text-muted-foreground">
                  {business.description}
                </p>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <InfoRow icon={<MapPin className="size-5" />} label="Address">
                  {business.address || business.area}
                </InfoRow>
                {business.hours && (
                  <InfoRow icon={<Clock className="size-5" />} label="Hours">
                    {business.hours}
                  </InfoRow>
                )}
              </div>
            </div>

            {/* Contact card */}
            <aside className="lg:pt-2">
              <div className="rounded-2xl border border-border bg-card p-5 shadow-sm lg:sticky lg:top-24">
                <h2 className="font-display text-lg font-bold text-foreground">
                  Contact
                </h2>

                <div className="mt-4 space-y-3">
                  <a
                    href={telHref}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    <Phone className="size-4" aria-hidden="true" />
                    Call {business.phone}
                  </a>
                  {waDigits && (
                    <a
                      href={`https://wa.me/${waDigits}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
                    >
                      <MessageCircle className="size-4 text-primary" aria-hidden="true" />
                      WhatsApp
                    </a>
                  )}
                  {business.website && (
                    <a
                      href={business.website}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center gap-2 rounded-xl border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/40"
                    >
                      <Globe className="size-4 text-primary" aria-hidden="true" />
                      Visit website
                    </a>
                  )}
                </div>

                <div className="mt-5 border-t border-border pt-4 text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <MapPin className="mt-0.5 size-4 shrink-0 text-primary/70" aria-hidden="true" />
                    <span>{business.address || business.area}, Bhopal</span>
                  </p>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}

function InfoRow({
  icon,
  label,
  children,
}: {
  icon: React.ReactNode
  label: string
  children: React.ReactNode
}) {
  return (
    <div className="flex items-start gap-3 rounded-xl border border-border bg-card p-4">
      <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
        {icon}
      </span>
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p className="mt-1 text-sm text-foreground">{children}</p>
      </div>
    </div>
  )
}
