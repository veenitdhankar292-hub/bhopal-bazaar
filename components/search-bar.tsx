"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"
import { Search, MapPin } from "lucide-react"
import { CATEGORY_NAMES } from "@/lib/categories"

export function SearchBar({
  defaultQuery = "",
  defaultCategory = "",
  size = "hero",
}: {
  defaultQuery?: string
  defaultCategory?: string
  size?: "hero" | "compact"
}) {
  const router = useRouter()
  const [query, setQuery] = useState(defaultQuery)
  const [category, setCategory] = useState(defaultCategory)

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (query.trim()) params.set("q", query.trim())
    if (category) params.set("category", category)
    router.push(`/browse${params.toString() ? `?${params.toString()}` : ""}`)
  }

  const hero = size === "hero"

  return (
    <form
      onSubmit={handleSubmit}
      className={
        "flex w-full flex-col gap-2 rounded-2xl border border-border bg-card p-2 shadow-lg sm:flex-row sm:items-center " +
        (hero ? "sm:rounded-full" : "")
      }
    >
      <div className="flex flex-1 items-center gap-2 px-3">
        <Search className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search shops, services, restaurants…"
          aria-label="Search businesses"
          className="w-full bg-transparent py-2.5 text-sm text-foreground outline-none placeholder:text-muted-foreground"
        />
      </div>

      <div className="flex items-center gap-2 border-t border-border px-3 sm:border-l sm:border-t-0">
        <MapPin className="size-5 shrink-0 text-muted-foreground" aria-hidden="true" />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          aria-label="Filter by category"
          className="w-full bg-transparent py-2.5 text-sm text-foreground outline-none sm:w-44"
        >
          <option value="">All categories</option>
          {CATEGORY_NAMES.map((name) => (
            <option key={name} value={name}>
              {name}
            </option>
          ))}
        </select>
      </div>

      <button
        type="submit"
        className={
          "inline-flex items-center justify-center gap-2 bg-primary px-6 py-2.5 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 " +
          (hero ? "rounded-full" : "rounded-xl")
        }
      >
        <Search className="size-4 sm:hidden" aria-hidden="true" />
        Search
      </button>
    </form>
  )
}
