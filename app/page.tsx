import { sql } from "@/lib/db"
import { revalidatePath } from "next/cache"
import { redirect } from "next/navigation"
import Link from "next/link"
import { Eye, Megaphone, ShieldCheck } from "lucide-react"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import { BusinessForm } from "@/components/business-form"

export const metadata = {
  title: "List your business - Bhopal Bazaar",
  description: "Add your Bhopal business to the directory for free and get discovered by thousands of locals.",
}

const perks = [
  {
    icon: Eye,
    title: "Get discovered",
    text: "Show up when locals search for what you offer. Boost your visibility in Bhopal.",
  },
  {
    icon: ShieldCheck,
    title: "Build trust",
    text: "A verified profile with reviews and ratings helps potential customers choose you.",
  },
  {
    icon: Megaphone,
    title: "It's free",
    text: "No fees to list your business in the basic directory. Upgrade anytime for extra features.",
  },
]

async function createBusiness(formData: FormData) {
  "use server"
  
  const name = formData.get("name") as string
  const category = formData.get("category") as string
  const area = formData.get("area") as string
  const description = formData.get("description") as string
  const address = formData.get("address") as string
  const phone = formData.get("phone") as string
  const whatsapp = formData.get("whatsapp") as string
  const website = formData.get("website") as string
  const hours = formData.get("hours") as string

  const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")

  try {
    await sql`
      INSERT INTO businesses (name, slug, category, description, address, area, phone, whatsapp, website, hours, verified, status)
      VALUES (${name}, ${slug}, ${category}, ${description}, ${address}, ${area}, ${phone}, ${whatsapp}, ${website}, ${hours}, false, 'pending')
    `
    revalidatePath("/")
    revalidatePath("/browse")
  } catch (error) {
    console.error("Database Error:", error)
    return { error: "Failed to create business." }
  }

  redirect("/browse?success=true")
}

export default function ListYourBusinessPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <SiteHeader />
      <main className="flex-1 bg-muted/40 py-12">
        <div className="container max-w-5xl px-4 md:px-6">
          <div className="grid gap-10 lg:grid-cols-[1fr_350px]">
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl font-bold tracking-tight md:text-4xl">List Your Business</h1>
                <p className="mt-2 text-muted-foreground">
                  Fill out the form below to add your business, shop, or service to Bhopal Bazaar.
                </p>
              </div>
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <BusinessForm action={createBusiness} />
              </div>
            </div>
            <div className="space-y-6 lg:mt-16">
              <div className="rounded-lg border bg-card p-6 shadow-sm">
                <h2 className="text-xl font-semibold">Why join Bhopal Bazaar?</h2>
                <div className="mt-6 space-y-6">
                  {perks.map((perk, index) => (
                    <div key={index} className="flex gap-4">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        <perk.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-medium">{perk.title}</h3>
                        <p className="mt-1 text-sm text-muted-foreground">{perk.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-lg bg-muted p-6 text-center">
                <h3 className="font-semibold">Need help with your listing?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Contact our support team if you have any questions or need assistance setting up your profile.
                </p>
                <Link href="#" className="mt-4 inline-flex text-sm font-medium text-primary hover:underline">
                  Contact Support
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  )
}
