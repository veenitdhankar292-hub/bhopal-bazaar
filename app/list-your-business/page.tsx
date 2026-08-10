import Link from "next/link"
import { Eye, Megaphone, ShieldCheck } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessForm } from "@/components/business-form"

export const metadata = {
  title: "List your business — Bhopal Bazaar",
  description: "Add your Bhopal business to the directory for free and get discovered by locals.",
}

const perks = [
  { icon: Eye, title: "Get discovered", text: "Show up when locals search for what you offer." },
  { icon: ShieldCheck, title: "Build trust", text: "A verified profile with reviews and contact details." },
  { icon: Megaphone, title: "It's free", text: "No fees to list your business in the directory." },
]

export default function ListYourBusinessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />

      <main className="flex-1">
        <div className="border-b border-border bg-secondary/40">
          <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
            <nav className="text-xs text-muted-foreground">
              <Link href="/" className="hover:text-primary">
                Home
              </Link>
              <span className="mx-1.5">/</span>
              <span className="text-foreground">List your business</span>
            </nav>
            <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-foreground text-balance sm:text-4xl">
              List your business on Bhopal Bazaar
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base text-pretty">
              Join hundreds of Bhopal businesses reaching new customers every day.
              Fill in the details below — we&apos;ll review and publish your listing.
            </p>
          </div>
        </div>

        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr]">
            <aside className="space-y-4">
              {perks.map((p) => {
                const Icon = p.icon
                return (
                  <div key={p.title} className="flex items-start gap-3 rounded-2xl border border-border bg-card p-4">
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <Icon className="size-5" aria-hidden="true" />
                    </span>
                    <div>
                      <h2 className="text-sm font-bold text-foreground">{p.title}</h2>
                      <p className="mt-1 text-sm text-muted-foreground">{p.text}</p>
                    </div>
                  </div>
                )
              })}
            </aside>

            <BusinessForm />
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
