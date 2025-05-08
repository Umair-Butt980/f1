"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Flag, Home, LineChart, Timer, Trophy, Users } from "lucide-react";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/standings", label: "Standings", icon: Trophy },
  { href: "/live", label: "Live Race", icon: Timer },
  { href: "/history", label: "Race History", icon: Users },
  { href: "/stats", label: "Statistics", icon: LineChart },
  { href: "/predictions", label: "Predictions", icon: Flag },
] as const;

export function MainNav() {
  const pathname = usePathname();

  return (
    <nav className="flex items-center space-x-4 lg:space-x-6">
      {navItems.map(item => (
        <Link
          key={item.href}
          href={item.href}
          className={cn(
            "flex items-center text-sm font-medium transition-colors hover:text-primary",
            pathname === item.href ? "text-primary" : "text-muted-foreground"
          )}
        >
          <item.icon className="w-4 h-4 mr-2" />
          {item.label}
        </Link>
      ))}
    </nav>
  );
}
