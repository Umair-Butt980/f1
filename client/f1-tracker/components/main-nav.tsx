"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Flag, Home, LineChart, Timer, Trophy, Users } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/standings", label: "Standings", icon: Trophy },
  { href: "/constructors", label: "Constructor Standings", icon: Trophy },
  { href: "/live", label: "Live Race", icon: Timer },
  { href: "/history", label: "Race History", icon: Users },
  { href: "/stats", label: "Statistics", icon: LineChart },
  { href: "/predictions", label: "Predictions", icon: Flag },
] as const;

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-1 lg:space-x-2">
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center px-3 py-2 text-sm font-medium transition-colors rounded-md hover:bg-muted",
            pathname === item.href
              ? "text-primary bg-muted"
              : "text-muted-foreground hover:text-primary"
          )}
        >
          <item.icon className="w-4 h-4 mr-2" />
          <span className="hidden md:inline">{item.label}</span>
        </Link>
      ))}
    </nav>
  );
}
