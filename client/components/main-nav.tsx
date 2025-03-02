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
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <span className="inline-block font-bold text-xl text-red-600">F1 Tracker</span>
      </Link>
      <nav className="flex gap-2">
        {routes.map((route) => (
          <Button key={route.href} variant={pathname === route.href ? "default" : "ghost"} asChild>
            <Link href={route.href} className="flex items-center">
              {route.icon}
              {route.name}
            </Link>
          </Button>
        ))}
      </nav>
    </div>
  )
}

