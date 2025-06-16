import type React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/main-nav";
import { Flag } from "lucide-react";
import Link from "next/link";
import { F1Provider } from "@/lib/context/F1Context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "F1 Tracker",
  description: "Track live F1 race data, analyze past races, and predict winners",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <F1Provider>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="f1-tracker-theme"
          >
            <div className="flex min-h-screen flex-col">
              <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-14 items-center justify-between">
                  <Link href="/" className="flex items-center space-x-2 ml-21">
                    <Flag className="h-6 w-6 text-f1-red" />
                    <span className="font-bold">F1 Tracker</span>
                  </Link>
                  <div className="flex-1 flex justify-center">
                    <MainNav />
                  </div>
                  <div className="w-[120px]"></div> {/* Spacer for balance */}
                </div>
              </header>
              <main className="flex-1 container py-6">{children}</main>
              <footer className="border-t py-6">
                <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
                  <p className="text-center text-sm leading-loose text-muted-foreground  ml-50">
                    &copy; {new Date().getFullYear()} F1 Tracker. All rights reserved.
                  </p>
                  <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                    This is a demo application. Not affiliated with Formula 1.
                  </p>
                </div>
              </footer>
            </div>
          </ThemeProvider>
        </F1Provider>
      </body>
    </html>
  );
}
