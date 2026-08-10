"use client"

import { useActionState } from "react"
import { CheckCircle2, AlertCircle, Loader2 } from "lucide-react"
import { submitBusiness, type SubmitState } from "@/app/actions/submit-business"
import { CATEGORY_NAMES } from "@/lib/categories"

const initialState: SubmitState = { status: "idle", message: "" }

const fieldClass =
  "w-full rounded-xl border border-border bg-card px-3.5 py-2.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary focus:ring-2 focus:ring-primary/20"

const labelClass = "mb-1.5 block text-sm font-medium text-foreground"

export function BusinessForm() {
  const [state, formAction, pending] = useActionState(submitBusiness, initialState)

  if (state.status === "success") {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-border bg-card p-10 text-center shadow-sm">
        <span className="flex size-14 items-center justify-center rounded-full bg-primary/10 text-primary">
          <CheckCircle2 className="size-8" aria-hidden="true" />
        </span>
        <h2 className="mt-5 font-display text-xl font-bold text-foreground">
          Submission received
        </h2>
        <p className="mt-2 max-w-sm text-sm text-muted-foreground">{state.message}</p>
        <a
          href="/list-your-business"
          className="mt-6 inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground"
        >
          Submit another business
        </a>
      </div>
    )
  }

  return (
    <form action={formAction} className="rounded-2xl border border-border bg-card p-6 shadow-sm sm:p-8">
      {state.status === "error" && (
        <div className="mb-6 flex items-start gap-2 rounded-xl border border-destructive/30 bg-destructive/5 p-3 text-sm text-destructive">
          <AlertCircle className="mt-0.5 size-4 shrink-0" aria-hidden="true" />
          <span>{state.message}</span>
        </div>
      )}

      <div className="grid gap-5">
        <div>
          <label htmlFor="name" className={labelClass}>
            Business name <span className="text-destructive">*</span>
          </label>
          <input id="name" name="name" required className={fieldClass} placeholder="e.g. Sharma Provision Store" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="category" className={labelClass}>
              Category <span className="text-destructive">*</span>
            </label>
            <select id="category" name="category" required defaultValue="" className={fieldClass}>
              <option value="" disabled>
                Choose a category
              </option>
              {CATEGORY_NAMES.map((name) => (
                <option key={name} value={name}>
                  {name}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="area" className={labelClass}>
              Area / Locality <span className="text-destructive">*</span>
            </label>
            <input id="area" name="area" required className={fieldClass} placeholder="e.g. MP Nagar" />
          </div>
        </div>

        <div>
          <label htmlFor="description" className={labelClass}>
            Description
          </label>
          <textarea
            id="description"
            name="description"
            rows={4}
            className={fieldClass}
            placeholder="Tell customers what you offer…"
          />
        </div>

        <div>
          <label htmlFor="address" className={labelClass}>
            Full address
          </label>
          <input id="address" name="address" className={fieldClass} placeholder="Shop no, street, landmark" />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone <span className="text-destructive">*</span>
            </label>
            <input id="phone" name="phone" required className={fieldClass} placeholder="+91 98260 00000" />
          </div>
          <div>
            <label htmlFor="whatsapp" className={labelClass}>
              WhatsApp
            </label>
            <input id="whatsapp" name="whatsapp" className={fieldClass} placeholder="+91 98260 00000" />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div>
            <label htmlFor="website" className={labelClass}>
              Website
            </label>
            <input id="website" name="website" type="url" className={fieldClass} placeholder="https://…" />
          </div>
          <div>
            <label htmlFor="hours" className={labelClass}>
              Opening hours
            </label>
            <input id="hours" name="hours" className={fieldClass} placeholder="Mon-Sat 10 AM - 8 PM" />
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="mt-7 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        {pending && <Loader2 className="size-4 animate-spin" aria-hidden="true" />}
        {pending ? "Submitting…" : "Submit business"}
      </button>
    </form>
  )
}
