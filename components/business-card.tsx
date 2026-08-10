import Link from "next/link"
import Image from "next/image"
import { MapPin, BadgeCheck } from "lucide-react"
import type { Business } from "@/lib/businesses"
import { categoryIcon } from "@/lib/categories"
import { RatingStars } from "./rating-stars"

export function BusinessCard({ business }: { business: Business }) {
  const Icon = categoryIcon(business.category)

  return (
    <Link
      href={`/business/${business.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all hover:-translate-y-1 hover:shadow-md"
    >
      <div className="relative aspect-[16/10] overflow-hidden bg-muted">
        {business.image_url ? (
          <Image
            src={business.image_url || "/placeholder.svg"}
            alt={`${business.name} storefront`}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center bg-primary/5">
            <Icon className="size-10 text-primary/40" aria-hidden="true" />
          </div>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-background/90 px-2.5 py-1 text-xs font-semibold text-foreground shadow-sm backdrop-blur">
          {business.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display text-base font-bold leading-tight text-foreground text-balance">
            {business.name}
          </h3>
          {business.verified && (
            <BadgeCheck className="mt-0.5 size-5 shrink-0 text-primary" aria-label="Verified business" />
          )}
        </div>

        <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {business.description}
        </p>

        <div className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
          <MapPin className="size-4 shrink-0 text-primary/70" aria-hidden="true" />
          <span className="truncate">{business.area}</span>
        </div>

        <div className="mt-auto flex items-center gap-2 pt-4">
          <RatingStars rating={business.rating} />
          <span className="text-sm font-semibold text-foreground">{business.rating.toFixed(1)}</span>
          <span className="text-xs text-muted-foreground">({business.review_count})</span>
        </div>
      </div>
    </Link>
  )
}
