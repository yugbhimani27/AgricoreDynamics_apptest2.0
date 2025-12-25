import { ReactNode } from "react"

export default function AppShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-700 via-green-600 to-emerald-500 px-4">
      {children}
    </div>
  )
}
