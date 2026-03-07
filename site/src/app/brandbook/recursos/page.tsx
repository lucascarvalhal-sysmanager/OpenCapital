import { Section, DoItem, DontItem } from "@/components/brandbook-shared";
import { Download, Check, X, ArrowUpRight } from "lucide-react";

/* ─── Data ─── */

const downloads = [
  { icon: "svg", name: "Logo — SVG", description: "Versão vetorial do logo para impressão e alta resolução" },
  { icon: "png", name: "Logo — PNG", description: "Variantes transparentes: 192px, 512px, 1024px" },
  { icon: "css", name: "CSS Tokens", description: "Arquivo completo de design tokens: cores, sombras, gradientes, spacing" },
  { icon: "font", name: "Fontes", description: "Inter (display/body) + JetBrains Mono (code/dados) via Google Fonts" },
  { icon: "json", name: "Paleta — JSON/ASE", description: "Paleta completa em JSON e Adobe ASE para ferramentas de design" },
  { icon: "pdf", name: "Brand Guidelines — PDF", description: "Versão PDF completa do Brandbook para compartilhamento offline" },
];

const dos = [
  "Usar Signal Green como acento, não como cor dominante (30% máx)",
  "Manter espaçamento generoso, ar é premium",
  "Priorizar dark mode em contextos digitais",
  "Usar JetBrains Mono para todo dado numérico financeiro",
  "Manter contraste WCAG AA mínimo em todas as combinações",
  "Usar gradiente de texto para headlines de impacto",
  "Manter zona de segurança de 1x ao redor do logo",
  "Usar logo branco em fundos escuros, preto em claros",
  "Usar versão monocromática quando impressão colorida não for possível",
  "Manter tamanho mínimo: 24px (digital), 8mm (impresso)",
];

const donts = [
  "Não usar verde sobre verde (variantes próximas)",
  "Não exceder 2 pesos tipográficos por composição",
  "Não usar mais de 3 cores por composição (black + white + green)",
  "Não aplicar efeitos no logo (sombra, brilho, 3D)",
  "Não usar fundos coloridos fora da paleta aprovada",
  "Não usar animações longas ou chamativas, sobriedade é lei",
  "Não misturar fontes fora do sistema (Inter + JetBrains Mono)",
  "Nunca usar \"opencapital\" em lowercase, sempre OpenCapital",
  "Não usar rotações não-padrão no logo (apenas 0° e 90°)",
  "Não aplicar gradientes não-aprovados ou inverter o gradiente Capital",
];

const changelog = [
  {
    version: "v1.0",
    date: "Março 2026",
    current: true,
    items: [
      "Identidade visual completa definida",
      "Paleta Capital Black + Signal Green + neutrals",
      "Tipografia Inter + JetBrains Mono",
      "Design tokens, componentes e animações",
      "Manifesto, arquétipos e tom de voz",
      "Brandbook visual em Next.js",
      "5 seções: A Infraestrutura, Identidade Visual, Design System, Aplicações, Recursos",
    ],
  },
];

const links = [
  { name: "Google Fonts — Inter", description: "Tipografia principal, pesos 400-700", href: "#" },
  { name: "Google Fonts — JetBrains Mono", description: "Monospace para código e dados financeiros", href: "#" },
  { name: "Lucide Icons", description: "Biblioteca de ícones open-source (MIT)", href: "#" },
  { name: "theopencapital.org", description: "Site oficial", href: "#" },
  { name: "open.capital", description: "Domínio alternativo", href: "#" },
  { name: "GitHub — OpenCapital", description: "Repositório oficial", href: "#" },
];

/* ─── File type badge ─── */
function FileTypeBadge({ type }: { type: string }) {
  return (
    <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">
      {type}
    </span>
  );
}

/* ─── Page ─── */
export default function RecursosPage() {
  return (
    <>
      {/* ━━━ 01 — Downloads ━━━ */}
      <Section id="downloads" num="01" title="Downloads" subtitle="Arquivos oficiais da marca para uso em projetos, apresentações e materiais.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {downloads.map((item) => (
            <div
              key={item.name}
              className="glow-card group flex items-start gap-4 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-5 transition"
            >
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--color-signal-green)]/10">
                <Download size={18} className="text-[var(--color-signal-green)]" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex items-center gap-2">
                  <h3 className="text-sm font-semibold">{item.name}</h3>
                  <FileTypeBadge type={item.icon} />
                </div>
                <p className="text-xs leading-relaxed text-[var(--text-tertiary)]">{item.description}</p>
                <span className="mt-3 inline-block rounded-full border border-[var(--border-hover)] px-2.5 py-0.5 font-mono text-[10px] font-medium text-[var(--text-tertiary)]">
                  Em breve
                </span>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ━━━ 02 — Do's & Don'ts ━━━ */}
      <Section id="dos-donts" num="02" title="Do's & Don'ts" subtitle="Diretrizes de uso para manter a consistência da marca em todas as aplicações.">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Do's */}
          <div className="rounded-2xl border border-[var(--color-signal-green)]/20 bg-[var(--bg-secondary)] p-6">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-signal-green)]/10">
                <Check size={14} className="text-[var(--color-signal-green)]" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Faça</h3>
            </div>
            <div className="space-y-4">
              {dos.map((text) => (
                <DoItem key={text} text={text} />
              ))}
            </div>
          </div>

          {/* Don'ts */}
          <div className="rounded-2xl border border-[var(--color-loss)]/20 bg-[var(--bg-secondary)] p-6">
            <div className="mb-6 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-loss)]/10">
                <X size={14} className="text-[var(--color-loss)]" />
              </div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-[var(--color-loss)]">Não faça</h3>
            </div>
            <div className="space-y-4">
              {donts.map((text) => (
                <DontItem key={text} text={text} />
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ━━━ 03 — Changelog ━━━ */}
      <Section id="changelog" num="03" title="Changelog" subtitle="Histórico de versões do Brandbook e evolução da identidade visual.">
        <div className="relative border-l-2 border-[var(--border-default)] pl-8">
          {changelog.map((entry) => (
            <div key={entry.version} className="relative pb-12 last:pb-0">
              {/* Timeline dot */}
              <div
                className={`absolute -left-[calc(2rem+5px)] top-0 h-2.5 w-2.5 rounded-full ${
                  entry.current ? "bg-[var(--color-signal-green)] shadow-[0_0_8px_var(--color-signal-green)]" : "bg-[var(--text-tertiary)]"
                }`}
              />

              <div
                className={`rounded-2xl border bg-[var(--bg-secondary)] p-6 ${
                  entry.current ? "border-[var(--color-signal-green)]/30" : "border-[var(--border-default)]"
                }`}
              >
                <div className="mb-4 flex items-center gap-3">
                  <span className="font-mono text-lg font-bold">{entry.version}</span>
                  <span className="text-sm text-[var(--text-tertiary)]">{entry.date}</span>
                  {entry.current && (
                    <span className="rounded-full bg-[var(--color-signal-green)]/10 px-2.5 py-0.5 font-mono text-[10px] font-bold text-[var(--color-signal-green)]">
                      ATUAL
                    </span>
                  )}
                </div>
                <ul className="space-y-2">
                  {entry.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-[var(--text-secondary)]">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--color-signal-green)]" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ━━━ 04 — Links Úteis ━━━ */}
      <Section id="links-uteis" num="04" title="Links Úteis" subtitle="Recursos externos e referências utilizados na construção da identidade.">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glow-card group flex items-start justify-between gap-4 rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-5 transition hover:border-[var(--color-signal-green)]/20"
            >
              <div>
                <h3 className="mb-1 text-sm font-semibold transition group-hover:text-[var(--color-signal-green)]">{link.name}</h3>
                <p className="text-xs text-[var(--text-tertiary)]">{link.description}</p>
              </div>
              <ArrowUpRight size={16} className="shrink-0 text-[var(--text-tertiary)] transition group-hover:text-[var(--color-signal-green)]" />
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
