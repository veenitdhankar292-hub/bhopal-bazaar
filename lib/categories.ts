import {
  UtensilsCrossed,
  ConciergeBell,
  ShoppingBag,
  Briefcase,
  HeartPulse,
  GraduationCap,
  Car,
  Home,
  Laptop,
  Plane,
  Flower2,
  PartyPopper,
  Gavel,
  WashingMachine,
  Building2,
  type LucideIcon,
} from "lucide-react"

export type Category = {
  name: string
  icon: LucideIcon
  blurb: string
}

export const CATEGORIES: Category[] = [
  { name: "Food & Dining", icon: UtensilsCrossed, blurb: "Restaurants, cafes, food delivery" },
  { name: "Services", icon: ConciergeBell, blurb: "Home services, repairs, maintenance" },
  { name: "Shops & Markets", icon: ShoppingBag, blurb: "Retail stores, shopping markets" },
  { name: "Jobs & Careers", icon: Briefcase, blurb: "Job opportunities, recruitment" },
  { name: "Health & Medical", icon: HeartPulse, blurb: "Hospitals, clinics, pharmacies" },
  { name: "Education", icon: GraduationCap, blurb: "Schools, coaching, training" },
  { name: "Automobile", icon: Car, blurb: "Cars, bikes, repairs, sales" },
  { name: "Real Estate", icon: Home, blurb: "Property, rentals, builders" },
  { name: "Electronics", icon: Laptop, blurb: "Mobile, laptop, appliances" },
  { name: "Travel & Tourism", icon: Plane, blurb: "Travel agents, hotels, tours" },
  { name: "Beauty & Spa", icon: Flower2, blurb: "Salons, spas, beauty care" },
  { name: "Events & Wedding", icon: PartyPopper, blurb: "Event planners, wedding services" },
  { name: "Legal Services", icon: Gavel, blurb: "Lawyers, legal advice" },
  { name: "Home Appliances", icon: WashingMachine, blurb: "Appliances, repair, sales" },
]

export const CATEGORY_NAMES = CATEGORIES.map((c) => c.name)

export function categoryIcon(name: string): LucideIcon {
  return CATEGORIES.find((c) => c.name === name)?.icon ?? Building2
}
