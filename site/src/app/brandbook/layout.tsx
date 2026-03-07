"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { OCSymbol } from "@/components/oc-logo";
import { Sun, Moon, List, X } from "lucide-react";

const tabs = [
  { label: "A Infraestrutura", href: "/brandbook/a-infraestrutura" },
  { label: "Identidade Visual", href: "/brandbook/identidade-visual" },
  { label: "Design System", href: "/brandbook/design-system" },
  { label: "Aplicações", href: "/brandbook/aplicacoes" },
  { label: "Recursos", href: "/brandbook/recursos" },
];

interface SectionEntry {
  id: string;
  num: string;
  title: string;
}

/* ─── Sidebar ─── */
function Sidebar({
  sections,
  activeId,
  open,
  onClose,
}: {
  sections: SectionEntry[];
  activeId: string;
  open: boolean;
  onClose: () => void;
}) {
  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const offset = 120;
      const y = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    onClose();
  }

  if (sections.length === 0) return null;

  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm xl:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar panel */}
      <aside
        className={`fixed top-28 z-40 flex h-[calc(100vh-7rem)] w-64 flex-col border-r border-[var(--border-default)] bg-[var(--bg-primary)]/95 backdrop-blur-xl transition-transform duration-300 xl:translate-x-0 ${
          open ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[var(--border-default)] px-5 py-4">
          <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">
            Nesta página
          </span>
          <button
            onClick={onClose}
            className="flex h-6 w-6 items-center justify-center rounded-md text-[var(--text-tertiary)] transition hover:text-[var(--text-primary)] xl:hidden"
          >
            <X size={14} />
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto px-3 py-3 scrollbar-none">
          <ul className="space-y-0.5">
            {sections.map((s) => {
              const isActive = activeId === s.id;
              return (
                <li key={s.id}>
                  <button
                    onClick={() => scrollTo(s.id)}
                    className={`group flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left text-sm transition-all ${
                      isActive
                        ? "bg-[var(--color-signal-green)]/10 text-[var(--color-signal-green)]"
                        : "text-[var(--text-tertiary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
                    }`}
                  >
                    <span
                      className={`shrink-0 font-mono text-[10px] font-bold ${
                        isActive ? "text-[var(--color-signal-green)]" : "text-[var(--text-tertiary)] group-hover:text-[var(--text-secondary)]"
                      }`}
                    >
                      {s.num}
                    </span>
                    <span className="truncate">{s.title}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Progress indicator */}
        <div className="border-t border-[var(--border-default)] px-5 py-3">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[10px] text-[var(--text-tertiary)]">
              {sections.findIndex((s) => s.id === activeId) + 1} / {sections.length}
            </span>
            <div className="flex h-1 w-24 overflow-hidden rounded-full bg-[var(--bg-tertiary)]">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${((sections.findIndex((s) => s.id === activeId) + 1) / sections.length) * 100}%`,
                  background: "var(--gradient-signal)",
                }}
              />
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}

/* ─── Layout ─── */
export default function BrandbookLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [sections, setSections] = useState<SectionEntry[]>([]);
  const [activeId, setActiveId] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const observerRef = useRef<IntersectionObserver | null>(null);

  // Theme
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

  // Detect sections on page change
  const scanSections = useCallback(() => {
    const els = document.querySelectorAll("section[data-section-title]");
    const found: SectionEntry[] = [];
    els.forEach((el) => {
      const id = el.getAttribute("id") || "";
      const num = el.getAttribute("data-section-num") || "";
      const title = el.getAttribute("data-section-title") || "";
      if (id && title) {
        found.push({ id, num, title });
      }
    });
    setSections(found);
    if (found.length > 0) {
      setActiveId((prev) => (prev && found.some((s) => s.id === prev) ? prev : found[0].id));
    }
  }, []);

  useEffect(() => {
    // Small delay to let the page render
    const timer = setTimeout(scanSections, 100);
    return () => clearTimeout(timer);
  }, [pathname, scanSections]);

  // IntersectionObserver for scroll spy
  useEffect(() => {
    if (sections.length === 0) return;

    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    const visibleSections = new Map<string, number>();

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            visibleSections.set(entry.target.id, entry.intersectionRatio);
          } else {
            visibleSections.delete(entry.target.id);
          }
        });

        // Pick the section closest to top of viewport
        if (visibleSections.size > 0) {
          let topSection = "";
          let topOffset = Infinity;
          visibleSections.forEach((_, id) => {
            const el = document.getElementById(id);
            if (el) {
              const rect = el.getBoundingClientRect();
              const dist = Math.abs(rect.top - 120);
              if (dist < topOffset) {
                topOffset = dist;
                topSection = id;
              }
            }
          });
          if (topSection) setActiveId(topSection);
        }
      },
      {
        rootMargin: "-100px 0px -40% 0px",
        threshold: [0, 0.1, 0.5],
      }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observerRef.current!.observe(el);
    });

    return () => observerRef.current?.disconnect();
  }, [sections]);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
  }, [pathname]);

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      {/* NAV */}
      <nav className="fixed top-0 z-50 w-full border-b border-[var(--border-default)] bg-[var(--bg-primary)]/80 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              {/* Sidebar toggle (mobile) */}
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition hover:border-[var(--border-active)] hover:text-[var(--color-signal-green)] xl:hidden"
                aria-label="Abrir menu de navegação"
              >
                <List size={16} />
              </button>
              <Link href="/brandbook/a-infraestrutura" className="flex items-center gap-1.5">
                <span className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">OpenCapital</span>
                <OCSymbol size={22} color="var(--text-primary)" />
              </Link>
            </div>
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
              <span className="hidden rounded-full border border-[var(--border-default)] px-3 py-1 font-mono text-xs text-[var(--text-tertiary)] sm:block">Brandbook v1.0</span>
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

      {/* SIDEBAR */}
      <Sidebar
        sections={sections}
        activeId={activeId}
        open={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
      />

      {/* CONTENT — offset by sidebar width on xl */}
      <main className="pt-28 xl:pl-64">{children}</main>

      {/* FOOTER */}
      <footer className="border-t border-[var(--border-default)] py-12 transition-colors duration-300 xl:pl-64">
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
