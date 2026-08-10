import { sql } from "./db"

export type Business = {
  id: number
  name: string
  slug: string
  category: string
  description: string
  address: string
  area: string
  phone: string
  whatsapp: string
  website: string
  hours: string
  image_url: string
  rating: number
  review_count: number
  verified: boolean
  status: string
  created_at: string
}

function normalize(row: Record<string, unknown>): Business {
  return {
    ...(row as Business),
    rating: Number(row.rating),
    review_count: Number(row.review_count),
  }
}

export async function getFeaturedBusinesses(limit = 6): Promise<Business[]> {
  const rows = await sql`
    SELECT * FROM businesses
    WHERE status = 'approved'
    ORDER BY verified DESC, rating DESC, review_count DESC
    LIMIT ${limit}
  `
  return rows.map(normalize)
}

export async function searchBusinesses(params: {
  query?: string
  category?: string
  area?: string
}): Promise<Business[]> {
  const q = params.query?.trim() ? `%${params.query.trim()}%` : null
  const category = params.category?.trim() || null
  const area = params.area?.trim() ? `%${params.area.trim()}%` : null

  const rows = await sql`
    SELECT * FROM businesses
    WHERE status = 'approved'
      AND (${q}::text IS NULL OR name ILIKE ${q} OR description ILIKE ${q} OR category ILIKE ${q})
      AND (${category}::text IS NULL OR category = ${category})
      AND (${area}::text IS NULL OR area ILIKE ${area})
    ORDER BY verified DESC, rating DESC, review_count DESC
  `
  return rows.map(normalize)
}

export async function getBusinessBySlug(slug: string): Promise<Business | null> {
  const rows = await sql`
    SELECT * FROM businesses WHERE slug = ${slug} LIMIT 1
  `
  return rows.length ? normalize(rows[0]) : null
}

export async function getCategoryCounts(): Promise<Record<string, number>> {
  const rows = await sql`
    SELECT category, COUNT(*)::int AS count
    FROM businesses
    WHERE status = 'approved'
    GROUP BY category
  `
  const map: Record<string, number> = {}
  for (const row of rows) map[row.category as string] = Number(row.count)
  return map
}

export async function getTotalCount(): Promise<number> {
  const rows = await sql`SELECT COUNT(*)::int AS count FROM businesses WHERE status = 'approved'`
  return Number(rows[0]?.count ?? 0)
}
