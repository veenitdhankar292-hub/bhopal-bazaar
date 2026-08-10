import { sql } from "@/lib/db"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { SearchBar } from "@/components/search-bar"
import { CategoryGrid } from "@/components/category-grid"
import { FeaturedBusinesses } from "@/components/featured-businesses"

export const metadata = {
  title: "Bhopal Bazaar - Local Business Directory",
  description: "Find trusted local businesses, shops, and services in Bhopal, Madhya Pradesh.",
}

export default async function HomePage() {
  // डेटाबेस से वेरीफाइड और टॉप बिज़नेस को लाइव होमपेज पर दिखाने के लिए
  const featured = await sql`
    SELECT * FROM businesses 
    WHERE verified = true AND status = 'active' 
    LIMIT 6
  `

  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* मुख्य सर्च और हीरो बैनर सेक्शन */}
        <section className="bg-gradient-to-b from-primary/10 via-background to-background py-20 text-center">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl space-y-4">
              <span className="inline-block rounded-full bg-primary/15 px-3 py-1 text-sm font-medium text-primary">
                Bhopal's local business directory
              </span>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Find trusted businesses <br />
                <span className="text-primary">across Bhopal</span>
              </h1>
              <p className="mx-auto max-w-xl text-muted-foreground md:text-xl">
                From MP Nagar to New Market — discover restaurants, shops, clinics and services your neighbours actually recommend.
              </p>
              <div className="mx-auto max-w-2xl pt-4">
                <SearchBar />
              </div>
            </div>
          </div>
        </section>

        {/* कैटेगरीज ग्रिड सेक्शन */}
        <section className="container py-12 px-4 md:px-6">
          <div className="space-y-2">
            <h2 className="text-2xl font-bold tracking-tight">Browse by Category</h2>
            <p className="text-muted-foreground">Explore top-rated local services by industry.</p>
          </div>
          <div className="mt-6">
            <CategoryGrid />
          </div>
        </section>

        {/* टॉप फीचर्स बिज़नेस सेक्शन */}
        <section className="border-t bg-muted/40 py-12">
          <div className="container px-4 md:px-6">
            <div className="flex items-center justify-between">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tight">Featured Businesses</h2>
                <p className="text-muted-foreground">Handpicked local experts committed to quality.</p>
              </div>
            </div>
            <div className="mt-6">
              <FeaturedBusinesses businesses={featured} />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}
