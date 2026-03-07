"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
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

const sectionsByPage: Record<string, SectionEntry[]> = {
  "/brandbook/a-infraestrutura": [
    { id: "manifesto", num: "01", title: "Manifesto" },
    { id: "proposito-valores", num: "02", title: "Propósito & Valores" },
    { id: "arquetipos", num: "03", title: "Arquétipos de Marca" },
    { id: "posicionamento", num: "04", title: "Posicionamento" },
    { id: "brandscript", num: "05", title: "BrandScript" },
    { id: "truelines", num: "06", title: "Truelines & Taglines" },
    { id: "naming", num: "07", title: "Naming Semântico" },
    { id: "tom-de-voz", num: "08", title: "Tom de Voz" },
    { id: "vocabulario", num: "09", title: "Vocabulário" },
    { id: "jornada", num: "10", title: "Jornada do Herói" },
    { id: "contrato", num: "11", title: "Contrato da Marca" },
  ],
  "/brandbook/identidade-visual": [
    { id: "sistema-de-logo", num: "01", title: "Sistema de Logo" },
    { id: "construcao-do-logo", num: "02", title: "Construção do Logo" },
    { id: "uso-sobre-fundos", num: "03", title: "Uso sobre Fundos" },
    { id: "paleta-de-cores", num: "04", title: "Paleta de Cores" },
    { id: "gradientes", num: "05", title: "Gradientes" },
    { id: "acessibilidade", num: "06", title: "Acessibilidade" },
    { id: "escala-tipografica", num: "07", title: "Escala Tipográfica" },
    { id: "arquitetura-de-marca", num: "08", title: "Arquitetura de Marca" },
    { id: "fotografia", num: "09", title: "Fotografia & Imagens" },
  ],
  "/brandbook/design-system": [
    { id: "design-tokens", num: "01", title: "Design Tokens" },
    { id: "spacing-grid", num: "02", title: "Spacing & Grid" },
    { id: "sombras-glow", num: "03", title: "Sombras & Glow" },
    { id: "iconografia", num: "04", title: "Iconografia" },
    { id: "componentes-ui", num: "05", title: "Componentes UI" },
    { id: "texturas-padroes", num: "06", title: "Texturas & Padrões" },
    { id: "animacoes", num: "07", title: "Animações" },
    { id: "logos", num: "08", title: "Logos" },
  ],
  "/brandbook/aplicacoes": [
    { id: "papelaria", num: "01", title: "Papelaria Corporativa" },
    { id: "social-media", num: "02", title: "Redes Sociais" },
    { id: "apresentacoes", num: "03", title: "Apresentações" },
    { id: "merchandise", num: "04", title: "Merchandise" },
    { id: "website", num: "05", title: "Website" },
    { id: "email-newsletter", num: "06", title: "Email / Newsletter" },
  ],
  "/brandbook/recursos": [
    { id: "downloads", num: "01", title: "Downloads" },
    { id: "dos-donts", num: "02", title: "Do's & Don'ts" },
    { id: "changelog", num: "03", title: "Changelog" },
    { id: "links-uteis", num: "04", title: "Links Úteis" },
  ],
};

/* ─── Layout ─── */
export default function BrandbookLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [theme, setTheme] = useState<"light" | "dark">("light");
  const [activeId, setActiveId] = useState("");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Resolve sections for the current page (works with basePath)
  const sections = Object.entries(sectionsByPage).find(([key]) => pathname?.endsWith(key.replace("/brandbook", "")) || pathname === key)?.[1] || [];

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

  // Set initial active section
  useEffect(() => {
    if (sections.length > 0 && !activeId) {
      setActiveId(sections[0].id);
    }
  }, [sections, activeId]);

  // Scroll spy
  useEffect(() => {
    if (sections.length === 0) return;

    function onScroll() {
      let current = sections[0]?.id || "";
      for (const s of sections) {
        const el = document.getElementById(s.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160) {
            current = s.id;
          }
        }
      }
      setActiveId(current);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll(); // run immediately
    return () => window.removeEventListener("scroll", onScroll);
  }, [sections]);

  // Close sidebar on route change
  useEffect(() => {
    setSidebarOpen(false);
    setActiveId("");
  }, [pathname]);

  function scrollTo(id: string) {
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 120;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
    setSidebarOpen(false);
  }

  const hasSections = sections.length > 0;
  const activeIndex = Math.max(0, sections.findIndex((s) => s.id === activeId));
  const progress = hasSections ? ((activeIndex + 1) / sections.length) * 100 : 0;

  return (
    <div className="min-h-screen bg-[var(--bg-primary)] transition-colors duration-300">
      {/* ─── NAV ─── */}
      <nav className="fixed top-0 z-50 w-full border-b border-[var(--border-default)] bg-[var(--bg-primary)]/80 backdrop-blur-xl transition-colors duration-300">
        <div className="mx-auto max-w-7xl px-6 md:px-12">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-3">
              {hasSections && (
                <button
                  onClick={() => setSidebarOpen(!sidebarOpen)}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[var(--border-default)] bg-[var(--bg-secondary)] text-[var(--text-secondary)] transition hover:border-[var(--border-active)] hover:text-[var(--color-signal-green)] lg:hidden"
                  aria-label="Abrir navegação"
                >
                  <List size={16} />
                </button>
              )}
              <Link href="/brandbook/a-infraestrutura" className="flex items-center gap-1.5">
                <span className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">OpenCapital</span>
                <OCSymbol size={22} color="var(--text-primary)" />
              </Link>
            </div>
            <div className="flex items-center gap-3">
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
              const active = pathname === tab.href || pathname?.endsWith(tab.href.replace("/brandbook", ""));
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

      {/* ─── SIDEBAR ─── */}
      {hasSections && (
        <>
          {sidebarOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/40 backdrop-blur-sm lg:hidden"
              onClick={() => setSidebarOpen(false)}
            />
          )}

          <aside
            className={`fixed left-0 top-28 z-40 flex h-[calc(100vh-7rem)] w-60 flex-col border-r border-[var(--border-default)] bg-[var(--bg-primary)] transition-transform duration-300 ease-in-out lg:translate-x-0 ${
              sidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between border-b border-[var(--border-default)] px-4 py-3">
              <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">
                Nesta página
              </span>
              <button
                onClick={() => setSidebarOpen(false)}
                className="flex h-6 w-6 items-center justify-center rounded-md text-[var(--text-tertiary)] hover:text-[var(--text-primary)] lg:hidden"
              >
                <X size={14} />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto px-2 py-2 scrollbar-none">
              <ul className="space-y-0.5">
                {sections.map((s) => {
                  const isActive = activeId === s.id;
                  return (
                    <li key={s.id}>
                      <button
                        onClick={() => scrollTo(s.id)}
                        className={`group flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-left text-[13px] leading-tight transition-all ${
                          isActive
                            ? "bg-[var(--color-signal-green)]/10 font-medium text-[var(--color-signal-green)]"
                            : "text-[var(--text-tertiary)] hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
                        }`}
                      >
                        <span
                          className={`shrink-0 font-mono text-[10px] font-bold tabular-nums ${
                            isActive ? "text-[var(--color-signal-green)]" : "text-[var(--text-tertiary)]"
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

            <div className="border-t border-[var(--border-default)] px-4 py-3">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] text-[var(--text-tertiary)]">
                  {activeIndex + 1} / {sections.length}
                </span>
                <div className="flex h-1 w-20 overflow-hidden rounded-full bg-[var(--bg-tertiary)]">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${progress}%`, background: "var(--gradient-signal)" }}
                  />
                </div>
              </div>
            </div>
          </aside>
        </>
      )}

      {/* ─── CONTENT ─── */}
      <main className={`pt-28 ${hasSections ? "lg:pl-60" : ""}`}>{children}</main>

      {/* ─── FOOTER ─── */}
      <footer className={`border-t border-[var(--border-default)] py-12 transition-colors duration-300 ${hasSections ? "lg:pl-60" : ""}`}>
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
