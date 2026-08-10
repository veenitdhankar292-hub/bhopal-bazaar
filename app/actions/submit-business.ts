"use server"

import { sql } from "@/lib/db"
import { CATEGORY_NAMES } from "@/lib/categories"
import { revalidatePath } from "next/cache"

export type SubmitState = {
  status: "idle" | "success" | "error"
  message: string
}

function slugify(value: string): string {
  return value
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
}

export async function submitBusiness(
  _prev: SubmitState,
  formData: FormData,
): Promise<SubmitState> {
  const name = String(formData.get("name") ?? "").trim()
  const category = String(formData.get("category") ?? "").trim()
  const description = String(formData.get("description") ?? "").trim()
  const area = String(formData.get("area") ?? "").trim()
  const address = String(formData.get("address") ?? "").trim()
  const phone = String(formData.get("phone") ?? "").trim()
  const whatsapp = String(formData.get("whatsapp") ?? "").trim()
  const website = String(formData.get("website") ?? "").trim()
  const hours = String(formData.get("hours") ?? "").trim()

  if (name.length < 2) {
    return { status: "error", message: "Please enter a valid business name." }
  }
  if (!CATEGORY_NAMES.includes(category)) {
    return { status: "error", message: "Please choose a valid category." }
  }
  if (phone.length < 6) {
    return { status: "error", message: "Please enter a contact phone number." }
  }
  if (area.length < 2) {
    return { status: "error", message: "Please enter the area or locality." }
  }

  const baseSlug = slugify(name) || "business"
  const slug = `${baseSlug}-${Date.now().toString(36)}`

  try {
    await sql`
      INSERT INTO businesses
        (name, slug, category, description, address, area, phone, whatsapp, website, hours, status)
      VALUES
        (${name}, ${slug}, ${category}, ${description}, ${address}, ${area}, ${phone}, ${whatsapp}, ${website}, ${hours}, 'pending')
    `
  } catch (error) {
    console.log("[v0] submitBusiness error:", error)
    return { status: "error", message: "Something went wrong. Please try again." }
  }

  revalidatePath("/")
  return {
    status: "success",
    message: "Thanks! Your business has been submitted and will appear once approved.",
  }
}
