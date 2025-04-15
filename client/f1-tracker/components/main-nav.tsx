"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Flag, Home, LineChart, Timer, Trophy } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      <Link
        href="/"
        className={cn(
          "flex items-center text-sm font-medium transition-colors hover:text-primary",
          pathname === "/" ? "text-primary" : "text-muted-foreground",
        )}
      >
        <Home className="w-4 h-4 mr-2" />
        Home
      </Link>
      <Link
        href="/live"
        className={cn(
          "flex items-center text-sm font-medium transition-colors hover:text-primary",
          pathname === "/live" ? "text-primary" : "text-muted-foreground",
        )}
      >
        <Timer className="w-4 h-4 mr-2" />
        Live Race
      </Link>
      <Link
        href="/history"
        className={cn(
          "flex items-center text-sm font-medium transition-colors hover:text-primary",
          pathname === "/history" ? "text-primary" : "text-muted-foreground",
        )}
      >
        <Trophy className="w-4 h-4 mr-2" />
        Race History
      </Link>
      <Link
        href="/stats"
        className={cn(
          "flex items-center text-sm font-medium transition-colors hover:text-primary",
          pathname === "/stats" ? "text-primary" : "text-muted-foreground",
        )}
      >
        <LineChart className="w-4 h-4 mr-2" />
        Statistics
      </Link>
      <Link
        href="/predictions"
        className={cn(
          "flex items-center text-sm font-medium transition-colors hover:text-primary",
          pathname === "/predictions" ? "text-primary" : "text-muted-foreground",
        )}
      >
        <Flag className="w-4 h-4 mr-2" />
        Predictions
      </Link>
    </nav>
  )
}
