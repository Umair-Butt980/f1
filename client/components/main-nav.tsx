"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Flag, BarChart3, History, Users } from "lucide-react"

export function MainNav() {
  const pathname = usePathname()

  const routes = [
    {
      name: "Live Race",
      href: "/",
      icon: <Flag className="mr-2 h-4 w-4" />,
    },
    {
      name: "Historical Analysis",
      href: "/historical",
      icon: <History className="mr-2 h-4 w-4" />,
    },
    {
      name: "Predictions",
      href: "/predictions",
      icon: <BarChart3 className="mr-2 h-4 w-4" />,
    },
    {
      name: "Driver Comparison",
      href: "/comparison",
      icon: <Users className="mr-2 h-4 w-4" />,
    },
  ]

  return (
    <div className="flex w-full items-center space-x-4 md:space-x-6">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold text-xl text-red-500">F1 Tracker</span>
      </Link>
      <nav className="flex items-center space-x-2">
        {routes.map((route) => (
          <Button key={route.href} variant={pathname === route.href ? "default" : "ghost"} className="h-9" asChild>
            <Link href={route.href} className="flex items-center">
              {route.icon}
              <span className="hidden md:inline-block">{route.name}</span>
            </Link>
          </Button>
        ))}
      </nav>
    </div>
  )
}

