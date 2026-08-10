import { Star } from "lucide-react"
import { cn } from "@/lib/utils"

export function RatingStars({
  rating,
  className,
}: {
  rating: number
  className?: string
}) {
  return (
    <div className={cn("flex items-center gap-0.5", className)} aria-label={`Rated ${rating} out of 5`}>
      {[1, 2, 3, 4, 5].map((i) => (
        <Star
          key={i}
          className={cn(
            "size-4",
            i <= Math.round(rating)
              ? "fill-accent text-accent"
              : "fill-none text-muted-foreground/40",
          )}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}
