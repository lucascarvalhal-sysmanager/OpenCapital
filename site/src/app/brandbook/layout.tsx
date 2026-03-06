"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { OCSymbol } from "@/components/oc-logo";

const tabs = [
  { label: "A Infraestrutura", href: "/brandbook/a-infraestrutura" },
  { label: "Identidade Visual", href: "/brandbook/identidade-visual" },
  { label: "Design System", href: "/brandbook/design-system" },
  { label: "Aplicações", href: "/brandbook/aplicacoes" },
  { label: "Recursos", href: "/brandbook/recursos" },
];

export default function BrandbookLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-[var(--bg-primary)]">
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 z-50 w-full border-b border-white/6 bg-[var(--bg-primary)]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex h-16 items-center justify-between">
            <Link href="/brandbook/a-infraestrutura" className="flex items-center gap-1.5">
              <span className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">OpenCapital</span>
              <OCSymbol size={22} color="var(--text-primary)" />
            </Link>
            <span className="rounded-full border border-white/10 px-3 py-1 font-mono text-xs text-[var(--text-tertiary)]">Brandbook v1.0</span>
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

      {/* ─── CONTENT ─── */}
      <main className="pt-28">{children}</main>

      {/* ─── FOOTER ─── */}
      <footer className="border-t border-white/6 py-12">
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
