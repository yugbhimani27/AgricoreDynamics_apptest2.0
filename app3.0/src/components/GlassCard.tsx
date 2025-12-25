import { ReactNode } from "react"

export default function GlassCard({ children }: { children: ReactNode }) {
  return (
    <div className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-2xl p-8 w-full max-w-md">
      {children}
    </div>
  )
}
