"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { OCSymbol } from "@/components/oc-logo";
import { Sun, Moon } from "lucide-react";

const tabs = [
  { label: "A Infraestrutura", href: "/brandbook/a-infraestrutura" },
  { label: "Identidade Visual", href: "/brandbook/identidade-visual" },
  { label: "Design System", href: "/brandbook/design-system" },
  { label: "Aplicações", href: "/brandbook/aplicacoes" },
  { label: "Recursos", href: "/brandbook/recursos" },
];

export default function BrandbookLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    const stored = localStorage.getItem("oc-brandbook-theme") as "light" | "dark" | null;
    if (stored) {
      setTheme(stored);
      if (stored === "dark") {
        document.documentElement.setAttribute("data-theme", "dark");
      } else {
        document.documentElement.removeAttribute("data-theme");
      }
    }
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);
    if (next === "dark") {
      document.documentElement.setAttribute("data-theme", "dark");
    } else {
      document.documentElement.removeAttribute("data-theme");
    }
    localStorage.setItem("oc-brandbook-theme", next);
  }

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-[var(--border-default)] bg-[var(--bg-primary)]/80 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex h-16 items-center justify-between">
            <Link href="/brandbook/a-infraestrutura" className="flex items-center gap-1.5">
              <span className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">OpenCapital</span>
              <OCSymbol size={22} color="var(--text-primary)" />
            </Link>
            <div className="flex items-center gap-3">
              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="relative flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition-all duration-300 hover:border-[var(--border-active)] hover:text-[var(--color-signal-green)]"
                aria-label={theme === "light" ? "Mudar para dark mode" : "Mudar para light mode"}
                title={theme === "light" ? "Dark mode" : "Light mode"}
              >
                <Sun size={16} className={`absolute transition-all duration-300 ${theme === "light" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}`} />
                <Moon size={16} className={`absolute transition-all duration-300 ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`} />
              </button>
              <span className="rounded-full border border-[var(--border-default)] px-3 py-1 font-mono text-xs text-[var(--text-tertiary)]">Brandbook v1.0</span>
            </div>
          </div>
          {/* Tabs */}
          <div className="-mb-px flex gap-1 overflow-x-auto scrollbar-none">
            {tabs.map((tab) => {
              const active = pathname === tab.href;
              return (
                <Link
                  key={tab.href}
                  href={tab.href}
                  className={`shrink-0 border-b-2 px-4 py-3 text-sm font-medium transition ${
                    active
                      ? "border-[var(--color-signal-green)] text-[var(--color-signal-green)]"
                      : "border-transparent text-[var(--text-tertiary)] hover:text-[var(--text-secondary)]"
                  }`}
                >
                  {tab.label}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* CONTENT */}
      <main className="pt-28">{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border-default)] py-12 transition-colors duration-300">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 md:flex-row md:px-12">
          <div className="flex items-center gap-1.5">
            <span className="text-sm font-semibold tracking-tight text-[var(--text-primary)]">OpenCapital</span>
            <OCSymbol size={16} color="var(--text-primary)" />
            <span className="ml-2 font-mono text-xs text-[var(--text-tertiary)]">Brandbook v1.0</span>
          </div>
          <p className="text-sm text-[var(--text-tertiary)]">The infrastructure for the new financial intelligence.</p>
        </div>
      </footer>
    </div>
  );
}
