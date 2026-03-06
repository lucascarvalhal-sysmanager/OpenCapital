import {
  BarChart3, TrendingUp, Activity, Zap, Shield, Brain, Globe, Layers, Target, Eye, Sparkles, ArrowUpRight,
  Bell, AlertTriangle, AlertCircle, Info, CheckCircle, XCircle, ChevronRight, Search,
  type LucideIcon,
} from "lucide-react";
import { Section, AnimationDemo, TokenRow, CodeBlock } from "@/components/brandbook-shared";
import { OCSymbol, OCLogo } from "@/components/oc-logo";

/* ═══════════════════════════════════════════════════════════════════════
   DESIGN SYSTEM — OpenCapital Brandbook
   Referência definitiva para todos os tokens, componentes, padrões e animações.
   ═══════════════════════════════════════════════════════════════════════ */

/* ─── Helpers ─── */
function ColorDot({ color }: { color: string }) {
  return <span className="inline-block h-3 w-3 shrink-0 rounded-full border border-black/10" style={{ backgroundColor: color }} />;
}

function SubHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 mt-10 text-lg font-semibold tracking-tight">{children}</h3>;
}

function Label({ children }: { children: React.ReactNode }) {
  return <p className="mb-6 text-sm text-[var(--text-secondary)]">{children}</p>;
}

/* ═══════════════════════════════════════════════════════════════════════ */

export default function DesignSystemPage() {
  return (
    <>
      {/* ════════════════════════════════════════════════════════════════
          01 — DESIGN TOKENS
          ════════════════════════════════════════════════════════════════ */}
      <Section id="design-tokens" num="01" title="Design Tokens" subtitle="Os valores atômicos que definem cada propriedade visual do sistema. Todos os tokens são expostos como custom properties CSS.">
        {/* ── Colors: Primary ── */}
        <SubHeading>Cores Primárias</SubHeading>
        <Label>Paleta principal da marca, a fundação da identidade OpenCapital.</Label>
        <div className="space-y-0.5">
          <TokenRow name="--color-capital-black" value="#0A0A0A" preview={<ColorDot color="#0A0A0A" />} />
          <TokenRow name="--color-signal-green" value="#1C7C54" preview={<ColorDot color="#1C7C54" />} />
          <TokenRow name="--color-capital-white" value="#F5F5F0" preview={<ColorDot color="#F5F5F0" />} />
          <TokenRow name="--color-graphite" value="#1A1A1A" preview={<ColorDot color="#1A1A1A" />} />
          <TokenRow name="--color-slate" value="#2A2A2A" preview={<ColorDot color="#2A2A2A" />} />
          <TokenRow name="--color-emerald-deep" value="#145A3D" preview={<ColorDot color="#145A3D" />} />
          <TokenRow name="--color-mint-glow" value="#2A9D6E" preview={<ColorDot color="#2A9D6E" />} />
        </div>

        {/* ── Colors: Neutral ── */}
        <SubHeading>Cores Neutras</SubHeading>
        <Label>Usadas para texto, bordas, backgrounds e elementos gerais da interface.</Label>
        <div className="space-y-0.5">
          <TokenRow name="--color-iron" value="#404040" preview={<ColorDot color="#404040" />} />
          <TokenRow name="--color-steel" value="#6B7280" preview={<ColorDot color="#6B7280" />} />
          <TokenRow name="--color-silver" value="#9CA3AF" preview={<ColorDot color="#9CA3AF" />} />
          <TokenRow name="--color-smoke" value="#D1D5DB" preview={<ColorDot color="#D1D5DB" />} />
          <TokenRow name="--color-cloud" value="#E5E7EB" preview={<ColorDot color="#E5E7EB" />} />
          <TokenRow name="--color-mist" value="#F3F4F6" preview={<ColorDot color="#F3F4F6" />} />
        </div>

        {/* ── Colors: Semantic ── */}
        <SubHeading>Cores Semânticas</SubHeading>
        <Label>Cores contextuais para feedback, status e dados financeiros.</Label>
        <div className="space-y-0.5">
          <TokenRow name="--color-profit" value="#22C55E" preview={<ColorDot color="#22C55E" />} />
          <TokenRow name="--color-loss" value="#EF4444" preview={<ColorDot color="#EF4444" />} />
          <TokenRow name="--color-caution" value="#F59E0B" preview={<ColorDot color="#F59E0B" />} />
          <TokenRow name="--color-info" value="#3B82F6" preview={<ColorDot color="#3B82F6" />} />
        </div>

        {/* ── Colors: Surfaces ── */}
        <SubHeading>Tokens de Superfície &amp; Texto</SubHeading>
        <Label>Aliases semânticos mapeados à paleta base para temas em dark mode.</Label>
        <div className="space-y-0.5">
          <TokenRow name="--bg-primary" value="#0A0A0A" preview={<ColorDot color="#0A0A0A" />} />
          <TokenRow name="--bg-secondary" value="#1A1A1A" preview={<ColorDot color="#1A1A1A" />} />
          <TokenRow name="--bg-tertiary" value="#2A2A2A" preview={<ColorDot color="#2A2A2A" />} />
          <TokenRow name="--text-primary" value="#F5F5F0" preview={<ColorDot color="#F5F5F0" />} />
          <TokenRow name="--text-secondary" value="#9CA3AF" preview={<ColorDot color="#9CA3AF" />} />
          <TokenRow name="--text-tertiary" value="#6B7280" preview={<ColorDot color="#6B7280" />} />
          <TokenRow name="--border-default" value="rgba(255,255,255,0.06)" preview={<ColorDot color="rgba(255,255,255,0.06)" />} />
          <TokenRow name="--border-hover" value="rgba(255,255,255,0.12)" preview={<ColorDot color="rgba(255,255,255,0.12)" />} />
          <TokenRow name="--border-active" value="rgba(28,124,84,0.3)" preview={<ColorDot color="rgba(28,124,84,0.3)" />} />
        </div>

        {/* ── Gradients ── */}
        <SubHeading>Gradientes</SubHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "--gradient-capital", css: "linear-gradient(135deg, #145A3D 0%, #1C7C54 50%, #2A9D6E 100%)" },
            { name: "--gradient-signal", css: "linear-gradient(135deg, #1C7C54 0%, #2A9D6E 100%)" },
            { name: "--gradient-depth", css: "linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)" },
            { name: "--gradient-text", css: "linear-gradient(90deg, #1C7C54 0%, #2A9D6E 100%)" },
            { name: "--gradient-surface", css: "linear-gradient(180deg, rgba(28,124,84,0.05) 0%, transparent 100%)" },
          ].map((g) => (
            <div key={g.name} className="overflow-hidden rounded-xl border border-black/6">
              <div className="h-16" style={{ background: g.css }} />
              <div className="bg-[var(--bg-secondary)] p-3">
                <p className="font-mono text-xs text-[var(--color-signal-green)]">{g.name}</p>
                <p className="mt-1 font-mono text-[10px] text-[var(--text-tertiary)]">{g.css}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Spacing ── */}
        <SubHeading>Escala de Espaçamento (base 4px)</SubHeading>
        <Label>Espaçamento consistente baseado em grid de 4px, garantindo ritmo vertical e horizontal.</Label>
        <div className="space-y-2">
          {[
            { name: "--space-1", value: "4px", w: 4 },
            { name: "--space-2", value: "8px", w: 8 },
            { name: "--space-3", value: "12px", w: 12 },
            { name: "--space-4", value: "16px", w: 16 },
            { name: "--space-6", value: "24px", w: 24 },
            { name: "--space-8", value: "32px", w: 32 },
            { name: "--space-10", value: "40px", w: 40 },
            { name: "--space-12", value: "48px", w: 48 },
            { name: "--space-16", value: "64px", w: 64 },
            { name: "--space-20", value: "80px", w: 80 },
            { name: "--space-24", value: "96px", w: 96 },
            { name: "--space-32", value: "128px", w: 128 },
          ].map((s) => (
            <div key={s.name} className="flex items-center gap-4">
              <span className="w-28 shrink-0 font-mono text-xs text-[var(--color-signal-green)]">{s.name}</span>
              <span className="w-12 shrink-0 font-mono text-xs text-[var(--text-tertiary)]">{s.value}</span>
              <div className="h-3 rounded-sm" style={{ width: s.w, background: "var(--gradient-signal)" }} />
            </div>
          ))}
        </div>

        {/* ── Border Radius ── */}
        <SubHeading>Raio de Borda</SubHeading>
        <div className="flex flex-wrap gap-6">
          {[
            { name: "--radius-sm", value: "4px", r: 4 },
            { name: "--radius-md", value: "8px", r: 8 },
            { name: "--radius-lg", value: "12px", r: 12 },
            { name: "--radius-xl", value: "16px", r: 16 },
            { name: "--radius-2xl", value: "24px", r: 24 },
            { name: "--radius-full", value: "9999px", r: 9999 },
          ].map((r) => (
            <div key={r.name} className="flex flex-col items-center gap-2">
              <div className="flex h-14 w-14 items-center justify-center border border-[var(--color-signal-green)]/30 bg-[var(--bg-secondary)]" style={{ borderRadius: r.r }}>
                <span className="font-mono text-[10px] text-[var(--text-tertiary)]">{r.value}</span>
              </div>
              <span className="font-mono text-[10px] text-[var(--color-signal-green)]">{r.name}</span>
            </div>
          ))}
        </div>

        {/* ── Shadows & Glow ── */}
        <SubHeading>Sombras &amp; Glow</SubHeading>
        <Label>Sistema de elevação para camadas de profundidade e indicação de foco.</Label>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "--shadow-sm", value: "0 1px 2px rgba(0,0,0,0.3)" },
            { name: "--shadow-md", value: "0 4px 6px rgba(0,0,0,0.4)" },
            { name: "--shadow-lg", value: "0 10px 15px rgba(0,0,0,0.5)" },
            { name: "--shadow-xl", value: "0 20px 25px rgba(0,0,0,0.6)" },
          ].map((s) => (
            <div key={s.name} className="flex flex-col items-center gap-3">
              <div className="h-20 w-full rounded-xl bg-[var(--bg-secondary)]" style={{ boxShadow: s.value }} />
              <span className="font-mono text-xs text-[var(--color-signal-green)]">{s.name}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { name: "--glow-green", value: "0 0 20px rgba(28,124,84,0.15)" },
            { name: "--glow-green-strong", value: "0 0 40px rgba(28,124,84,0.25)" },
            { name: "--glow-green-pulse", value: "pulse-green 2s infinite" },
          ].map((g) => (
            <div key={g.name} className="flex flex-col items-center gap-3">
              <div
                className="h-20 w-full rounded-xl bg-[var(--bg-secondary)]"
                style={g.name === "--glow-green-pulse" ? { animation: "pulse-green 2s ease-in-out infinite" } : { boxShadow: g.value }}
              />
              <span className="font-mono text-xs text-[var(--color-signal-green)]">{g.name}</span>
              <span className="font-mono text-[10px] text-[var(--text-tertiary)]">{g.value}</span>
            </div>
          ))}
        </div>

        {/* ── Transitions ── */}
        <SubHeading>Transições</SubHeading>
        <div className="space-y-0.5">
          <TokenRow name="--transition-fast" value="150ms ease" />
          <TokenRow name="--transition-base" value="250ms ease" />
          <TokenRow name="--transition-slow" value="400ms ease" />
        </div>

        {/* ── Z-Index ── */}
        <SubHeading>Escala Z-Index</SubHeading>
        <Label>Contextos de empilhamento em camadas para ordenação consistente de overlays.</Label>
        <div className="space-y-0.5">
          {[
            { name: "--z-base", value: "0" },
            { name: "--z-dropdown", value: "100" },
            { name: "--z-sticky", value: "200" },
            { name: "--z-overlay", value: "300" },
            { name: "--z-modal", value: "400" },
            { name: "--z-popover", value: "500" },
            { name: "--z-tooltip", value: "600" },
          ].map((z) => (
            <TokenRow key={z.name} name={z.name} value={z.value} />
          ))}
        </div>

        <div className="mt-8">
          <CodeBlock lang="CSS" code={`:root {
  /* Primary */
  --color-capital-black: #0A0A0A;
  --color-signal-green: #1C7C54;
  --color-capital-white: #F5F5F0;

  /* Spacing (base 4px) */
  --space-1: 4px;  --space-2: 8px;  --space-4: 16px;
  --space-8: 32px; --space-16: 64px; --space-32: 128px;

  /* Radius */
  --radius-sm: 4px;  --radius-md: 8px;
  --radius-lg: 12px; --radius-full: 9999px;

  /* Shadows */
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --glow-green: 0 0 20px rgba(28,124,84,0.15);

  /* Transitions */
  --transition-fast: 150ms ease;
  --transition-base: 250ms ease;
  --transition-slow: 400ms ease;
}`} />
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════════
          02 — SPACING & GRID
          ════════════════════════════════════════════════════════════════ */}
      <Section id="spacing-grid" num="02" title="Spacing & Grid" subtitle="Sistema de grid fluido de 12 colunas com breakpoints responsivos, baseado na unidade espacial de 4px.">
        {/* ── Breakpoints Table ── */}
        <SubHeading>Breakpoints</SubHeading>
        <div className="overflow-x-auto rounded-xl border border-black/6">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-black/6 bg-[var(--bg-secondary)]">
                <th className="px-4 py-3 font-mono text-xs font-bold text-[var(--color-signal-green)]">Breakpoint</th>
                <th className="px-4 py-3 font-mono text-xs font-bold text-[var(--color-signal-green)]">Range</th>
                <th className="px-4 py-3 font-mono text-xs font-bold text-[var(--color-signal-green)]">Columns</th>
                <th className="px-4 py-3 font-mono text-xs font-bold text-[var(--color-signal-green)]">Gutter</th>
                <th className="px-4 py-3 font-mono text-xs font-bold text-[var(--color-signal-green)]">Margin</th>
                <th className="px-4 py-3 font-mono text-xs font-bold text-[var(--color-signal-green)]">Max Width</th>
              </tr>
            </thead>
            <tbody className="font-mono text-xs text-[var(--text-secondary)]">
              {[
                { bp: "Mobile", range: "<768px", cols: 4, gutter: "16px", margin: "16px", max: "100%" },
                { bp: "Tablet", range: "768–1024px", cols: 8, gutter: "24px", margin: "32px", max: "100%" },
                { bp: "Desktop", range: "1024–1440px", cols: 12, gutter: "24px", margin: "64px", max: "1280px" },
                { bp: "Wide", range: ">1440px", cols: 12, gutter: "32px", margin: "auto", max: "1440px" },
              ].map((r) => (
                <tr key={r.bp} className="border-b border-black/6">
                  <td className="px-4 py-3 font-semibold text-[var(--text-primary)]">{r.bp}</td>
                  <td className="px-4 py-3">{r.range}</td>
                  <td className="px-4 py-3">{r.cols}</td>
                  <td className="px-4 py-3">{r.gutter}</td>
                  <td className="px-4 py-3">{r.margin}</td>
                  <td className="px-4 py-3">{r.max}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ── 12-col Visual ── */}
        <SubHeading>Grid de 12 Colunas</SubHeading>
        <Label>Representação visual do layout de 12 colunas no breakpoint desktop.</Label>
        <div className="grid grid-cols-12 gap-2">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="flex h-12 items-center justify-center rounded-lg bg-[var(--color-signal-green)]/10 font-mono text-[10px] text-[var(--color-signal-green)]">
              {i + 1}
            </div>
          ))}
        </div>

        {/* ── Bento Grid ── */}
        <SubHeading>Bento Grid</SubHeading>
        <Label>Cards de conteúdo dispostos em arranjo bento, abrangendo diferentes larguras de coluna.</Label>
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 flex h-28 items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] font-mono text-xs text-[var(--text-tertiary)] sm:col-span-8">
            span 8
          </div>
          <div className="col-span-12 flex h-28 items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] font-mono text-xs text-[var(--text-tertiary)] sm:col-span-4">
            span 4
          </div>
          <div className="col-span-6 flex h-28 items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] font-mono text-xs text-[var(--text-tertiary)] sm:col-span-4">
            span 4
          </div>
          <div className="col-span-6 flex h-28 items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] font-mono text-xs text-[var(--text-tertiary)] sm:col-span-4">
            span 4
          </div>
          <div className="col-span-12 flex h-28 items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] font-mono text-xs text-[var(--text-tertiary)] sm:col-span-4">
            span 4
          </div>
          <div className="col-span-12 flex h-28 items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] font-mono text-xs text-[var(--text-tertiary)] sm:col-span-6">
            span 6
          </div>
          <div className="col-span-12 flex h-28 items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] font-mono text-xs text-[var(--text-tertiary)] sm:col-span-6">
            span 6
          </div>
          <div className="col-span-12 flex h-40 items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] font-mono text-xs text-[var(--text-tertiary)]">
            span 12 — full width
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════════
          03 — SOMBRAS & GLOW
          ════════════════════════════════════════════════════════════════ */}
      <Section id="sombras-glow" num="03" title="Sombras & Glow" subtitle="Camadas de elevação e luminescência que comunicam profundidade, foco e estado interativo.">
        {/* ── Elevation Cards ── */}
        <SubHeading>Níveis de Elevação</SubHeading>
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "SM", shadow: "0 1px 2px rgba(0,0,0,0.3)", token: "--shadow-sm" },
            { label: "MD", shadow: "0 4px 6px rgba(0,0,0,0.4)", token: "--shadow-md" },
            { label: "LG", shadow: "0 10px 15px rgba(0,0,0,0.5)", token: "--shadow-lg" },
            { label: "XL", shadow: "0 20px 25px rgba(0,0,0,0.6)", token: "--shadow-xl" },
          ].map((s) => (
            <div key={s.label} className="flex flex-col gap-4">
              <div className="flex h-32 items-center justify-center rounded-2xl bg-[var(--bg-secondary)]" style={{ boxShadow: s.shadow }}>
                <span className="text-lg font-bold text-[var(--text-primary)]">{s.label}</span>
              </div>
              <div>
                <p className="font-mono text-xs text-[var(--color-signal-green)]">{s.token}</p>
                <p className="mt-1 font-mono text-[10px] text-[var(--text-tertiary)]">{s.shadow}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Glow Cards ── */}
        <SubHeading>Efeitos de Glow</SubHeading>
        <div className="grid gap-8 sm:grid-cols-2">
          <div className="flex flex-col gap-4">
            <div className="flex h-32 items-center justify-center rounded-2xl bg-[var(--bg-secondary)]" style={{ boxShadow: "0 0 20px rgba(28,124,84,0.15)" }}>
              <span className="text-sm font-semibold text-[var(--color-signal-green)]">Green Glow</span>
            </div>
            <CodeBlock lang="CSS" code={`box-shadow: var(--glow-green);
/* 0 0 20px rgba(28,124,84,0.15) */`} />
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex h-32 items-center justify-center rounded-2xl bg-[var(--bg-secondary)]" style={{ boxShadow: "0 0 40px rgba(28,124,84,0.25)" }}>
              <span className="text-sm font-semibold text-[var(--color-signal-green)]">Strong Glow</span>
            </div>
            <CodeBlock lang="CSS" code={`box-shadow: var(--glow-green-strong);
/* 0 0 40px rgba(28,124,84,0.25) */`} />
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════════
          04 — ICONOGRAFIA
          ════════════════════════════════════════════════════════════════ */}
      <Section id="iconografia" num="04" title="Iconografia" subtitle="Ícones Lucide React selecionados para o contexto de infraestrutura financeira. Peso consistente, alinhados ao pixel grid.">
        <SubHeading>Biblioteca de Ícones</SubHeading>
        <Label>Padrão: 24px, stroke-width 1.5px. Tamanhos: 16px (pequeno), 24px (padrão), 32px (grande). Cor: currentColor.</Label>
        <div className="grid grid-cols-3 gap-4 sm:grid-cols-4 md:grid-cols-6">
          {([
            ["BarChart3", BarChart3],
            ["TrendingUp", TrendingUp],
            ["Activity", Activity],
            ["Zap", Zap],
            ["Shield", Shield],
            ["Brain", Brain],
            ["Globe", Globe],
            ["Layers", Layers],
            ["Target", Target],
            ["Eye", Eye],
            ["Sparkles", Sparkles],
            ["ArrowUpRight", ArrowUpRight],
          ] as [string, LucideIcon][]).map(([name, Icon]) => (
            <div key={name} className="glow-card flex flex-col items-center gap-3 rounded-xl bg-[var(--bg-secondary)] p-5">
              <Icon size={24} strokeWidth={1.5} className="text-[var(--text-primary)]" />
              <span className="font-mono text-[10px] text-[var(--text-tertiary)]">{name}</span>
            </div>
          ))}
        </div>

        {/* ── Size Comparison ── */}
        <SubHeading>Escala de Tamanhos</SubHeading>
        <div className="flex items-end gap-8">
          {[
            { label: "16px (sm)", size: 16 },
            { label: "24px (default)", size: 24 },
            { label: "32px (lg)", size: 32 },
          ].map((s) => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              <Activity size={s.size} strokeWidth={1.5} className="text-[var(--color-signal-green)]" />
              <span className="font-mono text-[10px] text-[var(--text-tertiary)]">{s.label}</span>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <CodeBlock lang="JSX" code={`import { Activity } from "lucide-react";

<Activity size={24} strokeWidth={1.5} />   {/* default */}
<Activity size={16} strokeWidth={1.5} />   {/* small */}
<Activity size={32} strokeWidth={1.5} />   {/* large */}`} />
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════════
          05 — COMPONENTES UI
          ════════════════════════════════════════════════════════════════ */}
      <Section id="componentes-ui" num="05" title="Componentes UI" subtitle="A biblioteca completa de componentes. Cada elemento interativo, de botões a modais, renderizado em fidelidade total.">

        {/* ───────── BUTTONS ───────── */}
        <SubHeading>Botões</SubHeading>
        <Label>4 variantes em 3 tamanhos. Primary usa Signal Green, danger para ações destrutivas.</Label>

        {/* Button variants */}
        <div className="space-y-6">
          {/* Primary */}
          <div>
            <p className="mb-3 font-mono text-xs text-[var(--text-tertiary)]">Primary</p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-signal-green)] px-3 text-xs font-semibold text-[var(--color-capital-black)] transition hover:brightness-110">
                Button SM
              </button>
              <button className="inline-flex h-10 items-center gap-2 rounded-lg bg-[var(--color-signal-green)] px-5 text-sm font-semibold text-[var(--color-capital-black)] transition hover:brightness-110">
                Button MD
              </button>
              <button className="inline-flex h-12 items-center gap-2 rounded-lg bg-[var(--color-signal-green)] px-6 text-sm font-semibold text-[var(--color-capital-black)] transition hover:brightness-110">
                Button LG
                <ArrowUpRight size={16} />
              </button>
            </div>
          </div>
          {/* Secondary */}
          <div>
            <p className="mb-3 font-mono text-xs text-[var(--text-tertiary)]">Secondary</p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex h-8 items-center gap-1.5 rounded-lg border border-black/12 bg-transparent px-3 text-xs font-semibold text-[var(--text-primary)] transition hover:border-black/20 hover:bg-black/5">
                Button SM
              </button>
              <button className="inline-flex h-10 items-center gap-2 rounded-lg border border-black/12 bg-transparent px-5 text-sm font-semibold text-[var(--text-primary)] transition hover:border-black/20 hover:bg-black/5">
                Button MD
              </button>
              <button className="inline-flex h-12 items-center gap-2 rounded-lg border border-black/12 bg-transparent px-6 text-sm font-semibold text-[var(--text-primary)] transition hover:border-black/20 hover:bg-black/5">
                Button LG
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
          {/* Ghost */}
          <div>
            <p className="mb-3 font-mono text-xs text-[var(--text-tertiary)]">Ghost</p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-transparent px-3 text-xs font-medium text-[var(--text-secondary)] transition hover:bg-black/5 hover:text-[var(--text-primary)]">
                Button SM
              </button>
              <button className="inline-flex h-10 items-center gap-2 rounded-lg bg-transparent px-5 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-black/5 hover:text-[var(--text-primary)]">
                Button MD
              </button>
              <button className="inline-flex h-12 items-center gap-2 rounded-lg bg-transparent px-6 text-sm font-medium text-[var(--text-secondary)] transition hover:bg-black/5 hover:text-[var(--text-primary)]">
                Button LG
              </button>
            </div>
          </div>
          {/* Danger */}
          <div>
            <p className="mb-3 font-mono text-xs text-[var(--text-tertiary)]">Danger</p>
            <div className="flex flex-wrap items-center gap-3">
              <button className="inline-flex h-8 items-center gap-1.5 rounded-lg bg-[var(--color-loss)] px-3 text-xs font-semibold text-white transition hover:brightness-110">
                Button SM
              </button>
              <button className="inline-flex h-10 items-center gap-2 rounded-lg bg-[var(--color-loss)] px-5 text-sm font-semibold text-white transition hover:brightness-110">
                Button MD
              </button>
              <button className="inline-flex h-12 items-center gap-2 rounded-lg bg-[var(--color-loss)] px-6 text-sm font-semibold text-white transition hover:brightness-110">
                Button LG
              </button>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <CodeBlock lang="JSX" code={`{/* Primary */}
<button className="h-10 rounded-lg bg-[var(--color-signal-green)] px-5 text-sm font-semibold text-[var(--color-capital-black)]">
  Action
</button>

{/* Secondary */}
<button className="h-10 rounded-lg border border-black/12 px-5 text-sm font-semibold text-[var(--text-primary)]">
  Action
</button>

{/* Ghost */}
<button className="h-10 rounded-lg px-5 text-sm font-medium text-[var(--text-secondary)] hover:bg-black/5">
  Action
</button>

{/* Danger */}
<button className="h-10 rounded-lg bg-[var(--color-loss)] px-5 text-sm font-semibold text-white">
  Action
</button>`} />
        </div>

        {/* ───────── INPUTS & CONTROLS ───────── */}
        <SubHeading>Inputs &amp; Controles</SubHeading>

        <div className="grid gap-6 sm:grid-cols-2">
          {/* Text Input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-[var(--text-secondary)]">Label</label>
            <div className="flex h-10 items-center rounded-lg border border-black/10 bg-[var(--bg-secondary)] px-3 text-sm text-[var(--text-primary)] transition focus-within:border-[var(--color-signal-green)]/40">
              <span className="text-[var(--text-tertiary)]">Placeholder text</span>
            </div>
          </div>

          {/* Money Input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-[var(--text-secondary)]">Valor</label>
            <div className="flex h-10 items-center rounded-lg border border-black/10 bg-[var(--bg-secondary)] px-3 font-mono text-sm text-[var(--text-primary)]">
              <span className="mr-2 text-[var(--text-tertiary)]">R$</span>
              <span>12.450,00</span>
            </div>
          </div>

          {/* Search Input */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-medium text-[var(--text-secondary)]">Buscar</label>
            <div className="flex h-10 items-center gap-2 rounded-lg border border-black/10 bg-[var(--bg-secondary)] px-3 text-sm">
              <Search size={14} className="text-[var(--text-tertiary)]" />
              <span className="text-[var(--text-tertiary)]">Buscar ativos...</span>
            </div>
          </div>

          {/* Toggle Switch */}
          <div className="flex flex-col gap-4">
            <label className="text-xs font-medium text-[var(--text-secondary)]">Toggle Switch</label>
            <div className="flex items-center gap-6">
              {/* Off */}
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-11 rounded-full bg-[var(--bg-tertiary)] transition">
                  <div className="absolute left-1 top-1 h-4 w-4 rounded-full bg-[var(--text-tertiary)] transition" />
                </div>
                <span className="text-xs text-[var(--text-tertiary)]">Off</span>
              </div>
              {/* On */}
              <div className="flex items-center gap-2">
                <div className="relative h-6 w-11 rounded-full bg-[var(--color-signal-green)] transition">
                  <div className="absolute right-1 top-1 h-4 w-4 rounded-full bg-white transition" />
                </div>
                <span className="text-xs text-[var(--color-signal-green)]">On</span>
              </div>
            </div>
          </div>

          {/* Slider */}
          <div className="flex flex-col gap-2 sm:col-span-2">
            <div className="flex items-center justify-between">
              <label className="text-xs font-medium text-[var(--text-secondary)]">Slider</label>
              <span className="font-mono text-xs text-[var(--color-signal-green)]">72%</span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-[var(--bg-tertiary)]">
              <div className="h-full rounded-full" style={{ width: "72%", background: "var(--gradient-signal)" }} />
            </div>
          </div>
        </div>

        {/* ───────── BADGES ───────── */}
        <SubHeading>Badges</SubHeading>
        <div className="flex flex-wrap gap-3">
          <span className="inline-flex items-center rounded-full bg-black/5 px-3 py-1 text-xs font-medium text-[var(--text-secondary)]">Default</span>
          <span className="inline-flex items-center rounded-full bg-[var(--color-profit)]/10 px-3 py-1 text-xs font-medium text-[var(--color-profit)]">Success</span>
          <span className="inline-flex items-center rounded-full bg-[var(--color-loss)]/10 px-3 py-1 text-xs font-medium text-[var(--color-loss)]">Danger</span>
          <span className="inline-flex items-center rounded-full bg-[var(--color-caution)]/10 px-3 py-1 text-xs font-medium text-[var(--color-caution)]">Warning</span>
          <span className="inline-flex items-center rounded-full bg-[var(--color-info)]/10 px-3 py-1 text-xs font-medium text-[var(--color-info)]">Info</span>
        </div>

        {/* ───────── ALERTS ───────── */}
        <SubHeading>Alerts</SubHeading>
        <div className="space-y-4">
          {/* Success */}
          <div className="flex items-start gap-3 rounded-xl border border-[var(--color-profit)]/20 bg-[var(--color-profit)]/5 p-4">
            <CheckCircle size={18} className="mt-0.5 shrink-0 text-[var(--color-profit)]" />
            <div>
              <p className="text-sm font-semibold text-[var(--color-profit)]">Sucesso</p>
              <p className="mt-0.5 text-sm text-[var(--text-secondary)]">Operação concluída com sucesso</p>
            </div>
          </div>
          {/* Warning */}
          <div className="flex items-start gap-3 rounded-xl border border-[var(--color-caution)]/20 bg-[var(--color-caution)]/5 p-4">
            <AlertTriangle size={18} className="mt-0.5 shrink-0 text-[var(--color-caution)]" />
            <div>
              <p className="text-sm font-semibold text-[var(--color-caution)]">Atenção</p>
              <p className="mt-0.5 text-sm text-[var(--text-secondary)]">Atenção: ação irreversível</p>
            </div>
          </div>
          {/* Error */}
          <div className="flex items-start gap-3 rounded-xl border border-[var(--color-loss)]/20 bg-[var(--color-loss)]/5 p-4">
            <XCircle size={18} className="mt-0.5 shrink-0 text-[var(--color-loss)]" />
            <div>
              <p className="text-sm font-semibold text-[var(--color-loss)]">Erro</p>
              <p className="mt-0.5 text-sm text-[var(--text-secondary)]">Erro ao processar solicitação</p>
            </div>
          </div>
          {/* Info */}
          <div className="flex items-start gap-3 rounded-xl border border-[var(--color-info)]/20 bg-[var(--color-info)]/5 p-4">
            <Info size={18} className="mt-0.5 shrink-0 text-[var(--color-info)]" />
            <div>
              <p className="text-sm font-semibold text-[var(--color-info)]">Informação</p>
              <p className="mt-0.5 text-sm text-[var(--text-secondary)]">Nova versão disponível</p>
            </div>
          </div>
        </div>

        {/* ───────── CARDS ───────── */}
        <SubHeading>Cards</SubHeading>
        <Label>Três variantes de card para diferentes contextos de elevação.</Label>
        <div className="grid gap-6 sm:grid-cols-3">
          {/* Default */}
          <div className="rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-6">
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">Default</p>
            <h4 className="text-lg font-semibold">Título do Card</h4>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">Borda sutil e fundo secundário. Usado para agrupamento padrão de conteúdo.</p>
          </div>
          {/* Elevated */}
          <div className="rounded-2xl border border-[var(--color-signal-green)]/20 bg-[var(--bg-secondary)] p-6" style={{ boxShadow: "0 0 20px rgba(28,124,84,0.15)" }}>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[var(--color-signal-green)]">Elevated</p>
            <h4 className="text-lg font-semibold">Título do Card</h4>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">Borda com glow verde para conteúdo destacado e CTAs.</p>
          </div>
          {/* Surface */}
          <div className="rounded-2xl border border-black/6 p-6" style={{ background: "linear-gradient(180deg, rgba(28,124,84,0.05) 0%, var(--bg-secondary) 100%)" }}>
            <p className="mb-2 font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">Surface</p>
            <h4 className="text-lg font-semibold">Título do Card</h4>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">Overlay de gradiente na superfície para seções premium.</p>
          </div>
        </div>

        {/* ───────── DATA DISPLAY ───────── */}
        <SubHeading>Exibição de Dados</SubHeading>
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Performance Card */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <div className="flex items-center justify-between">
              <p className="text-xs text-[var(--text-tertiary)]">Performance YTD</p>
              <TrendingUp size={14} className="text-[var(--color-profit)]" />
            </div>
            <p className="mt-2 text-3xl font-bold">
              <span className="text-[var(--color-profit)]">+24.7%</span>
            </p>
            {/* Mini bar chart */}
            <div className="mt-4 flex items-end gap-1">
              {[40, 55, 35, 65, 50, 75, 60, 85, 70, 90, 80, 95].map((h, i) => (
                <div key={i} className="flex-1 rounded-sm" style={{ height: h * 0.4, background: i >= 10 ? "var(--color-signal-green)" : "var(--color-signal-green)", opacity: 0.3 + (i / 12) * 0.7 }} />
              ))}
            </div>
          </div>

          {/* Mini Data Table */}
          <div className="glow-card overflow-hidden rounded-2xl bg-[var(--bg-secondary)]">
            <div className="border-b border-black/6 px-4 py-3">
              <p className="text-xs font-semibold text-[var(--text-tertiary)]">Principais Ativos</p>
            </div>
            <table className="w-full">
              <thead>
                <tr className="border-b border-black/6 text-left text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
                  <th className="px-4 py-2">Ativo</th>
                  <th className="px-4 py-2 text-right">Preço</th>
                  <th className="px-4 py-2 text-right">Variação</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                {[
                  { asset: "BTC", price: "R$ 342.150", change: "+3.2%", up: true },
                  { asset: "ETH", price: "R$ 18.490", change: "+1.8%", up: true },
                  { asset: "PETR4", price: "R$ 38,72", change: "-0.5%", up: false },
                  { asset: "VALE3", price: "R$ 67,14", change: "+2.1%", up: true },
                ].map((r) => (
                  <tr key={r.asset} className="border-b border-black/6">
                    <td className="px-4 py-2.5 font-mono font-semibold">{r.asset}</td>
                    <td className="px-4 py-2.5 text-right font-mono text-xs text-[var(--text-secondary)]">{r.price}</td>
                    <td className={`px-4 py-2.5 text-right font-mono text-xs font-semibold ${r.up ? "text-[var(--color-profit)]" : "text-[var(--color-loss)]"}`}>{r.change}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Progress Bar */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <div className="flex items-center justify-between">
              <p className="text-xs text-[var(--text-tertiary)]">Alocação do Portfólio</p>
              <span className="font-mono text-xs text-[var(--color-signal-green)]">65%</span>
            </div>
            <div className="mt-3 h-2 overflow-hidden rounded-full bg-[var(--bg-tertiary)]">
              <div className="h-full rounded-full" style={{ width: "65%", background: "var(--gradient-signal)" }} />
            </div>
            <p className="mt-2 text-xs text-[var(--text-tertiary)]">R$ 65.000 de R$ 100.000</p>
          </div>

          {/* Skeleton de Carregamento */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <p className="mb-4 text-xs text-[var(--text-tertiary)]">Skeleton de Carregamento</p>
            <div className="space-y-3">
              <div className="h-4 w-3/4 animate-pulse rounded bg-[var(--bg-tertiary)]" />
              <div className="h-4 w-full animate-pulse rounded bg-[var(--bg-tertiary)]" />
              <div className="h-4 w-5/6 animate-pulse rounded bg-[var(--bg-tertiary)]" />
              <div className="h-8 w-1/3 animate-pulse rounded-lg bg-[var(--bg-tertiary)]" />
            </div>
          </div>
        </div>

        {/* ───────── MODALS & TOASTS ───────── */}
        <SubHeading>Modais &amp; Toasts</SubHeading>
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Modal Preview */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs text-[var(--text-tertiary)]">Modal (miniature preview)</p>
            <div className="relative flex h-64 items-center justify-center rounded-2xl bg-[var(--bg-primary)]/80 backdrop-blur-sm" style={{ border: "1px solid var(--border-default)" }}>
              <div className="w-4/5 max-w-xs rounded-2xl border border-black/10 bg-[var(--bg-secondary)] p-5 shadow-2xl">
                <div className="mb-1 flex items-center justify-between">
                  <h4 className="text-sm font-semibold">Confirmar operação</h4>
                  <XCircle size={14} className="text-[var(--text-tertiary)]" />
                </div>
                <p className="text-xs text-[var(--text-secondary)]">Deseja confirmar a compra de 100 unidades de PETR4?</p>
                <div className="mt-4 flex gap-2">
                  <button className="h-7 flex-1 rounded-lg border border-black/10 text-xs font-medium text-[var(--text-secondary)]">Cancelar</button>
                  <button className="h-7 flex-1 rounded-lg bg-[var(--color-signal-green)] text-xs font-semibold text-[var(--color-capital-black)]">Confirmar</button>
                </div>
              </div>
            </div>
          </div>

          {/* Toast Variants */}
          <div className="flex flex-col gap-3">
            <p className="font-mono text-xs text-[var(--text-tertiary)]">Toast Notifications</p>
            <div className="space-y-3">
              {/* Success Toast */}
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-profit)]/20 bg-[var(--bg-secondary)] px-4 py-3 shadow-lg">
                <CheckCircle size={16} className="shrink-0 text-[var(--color-profit)]" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[var(--text-primary)]">Ordem executada</p>
                  <p className="text-[10px] text-[var(--text-tertiary)]">Compra de 100 PETR4 a R$ 38,72</p>
                </div>
                <XCircle size={12} className="shrink-0 text-[var(--text-tertiary)]" />
              </div>
              {/* Error Toast */}
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-loss)]/20 bg-[var(--bg-secondary)] px-4 py-3 shadow-lg">
                <XCircle size={16} className="shrink-0 text-[var(--color-loss)]" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[var(--text-primary)]">Falha na conexão</p>
                  <p className="text-[10px] text-[var(--text-tertiary)]">Tente novamente em instantes</p>
                </div>
                <XCircle size={12} className="shrink-0 text-[var(--text-tertiary)]" />
              </div>
              {/* Info Toast */}
              <div className="flex items-center gap-3 rounded-xl border border-[var(--color-info)]/20 bg-[var(--bg-secondary)] px-4 py-3 shadow-lg">
                <Bell size={16} className="shrink-0 text-[var(--color-info)]" />
                <div className="flex-1">
                  <p className="text-xs font-semibold text-[var(--text-primary)]">Alerta de preço</p>
                  <p className="text-[10px] text-[var(--text-tertiary)]">BTC atingiu R$ 350.000</p>
                </div>
                <XCircle size={12} className="shrink-0 text-[var(--text-tertiary)]" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════════
          06 — TEXTURAS & PADROES
          ════════════════════════════════════════════════════════════════ */}
      <Section id="texturas-padroes" num="06" title="Texturas & Padrões" subtitle="Texturas de fundo, molduras HUD e divisores que reforçam a estética de infraestrutura.">
        {/* ── Textures ── */}
        <SubHeading>Texturas de Fundo</SubHeading>
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Dot Grid */}
          <div className="flex flex-col gap-3">
            <div className="flex h-40 items-center justify-center rounded-2xl border border-black/6" style={{ backgroundImage: "radial-gradient(circle, rgba(28,124,84,0.06) 1px, transparent 1px)", backgroundSize: "24px 24px" }}>
              <span className="rounded-full bg-[var(--bg-primary)]/80 px-3 py-1 font-mono text-xs text-[var(--text-tertiary)]">Dot Grid</span>
            </div>
            <CodeBlock lang="CSS" code={`background-image: radial-gradient(
  circle, rgba(28,124,84,0.06) 1px,
  transparent 1px
);
background-size: 24px 24px;`} />
          </div>

          {/* Scanlines */}
          <div className="flex flex-col gap-3">
            <div className="flex h-40 items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)]" style={{ backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 3px, rgba(255,255,255,0.02) 3px, rgba(255,255,255,0.02) 4px)" }}>
              <span className="rounded-full bg-[var(--bg-primary)]/80 px-3 py-1 font-mono text-xs text-[var(--text-tertiary)]">Scanlines</span>
            </div>
            <CodeBlock lang="CSS" code={`background-image: repeating-linear-gradient(
  0deg, transparent, transparent 3px,
  rgba(255,255,255,0.02) 3px,
  rgba(255,255,255,0.02) 4px
);`} />
          </div>

          {/* Noise / Grain */}
          <div className="flex flex-col gap-3">
            <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-2xl border border-black/6 bg-[var(--bg-secondary)]">
              <svg className="absolute inset-0 h-full w-full opacity-[0.03]">
                <filter id="noise">
                  <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="4" stitchTiles="stitch" />
                </filter>
                <rect width="100%" height="100%" filter="url(#noise)" />
              </svg>
              <span className="relative rounded-full bg-[var(--bg-primary)]/80 px-3 py-1 font-mono text-xs text-[var(--text-tertiary)]">Noise / Grain</span>
            </div>
            <CodeBlock lang="SVG" code={`<filter id="noise">
  <feTurbulence type="fractalNoise"
    baseFrequency="0.9" numOctaves="4"
    stitchTiles="stitch" />
</filter>`} />
          </div>

          {/* Blueprint Grid */}
          <div className="flex flex-col gap-3">
            <div className="flex h-40 items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)]" style={{ backgroundImage: "linear-gradient(rgba(28,124,84,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(28,124,84,0.04) 1px, transparent 1px)", backgroundSize: "32px 32px" }}>
              <span className="rounded-full bg-[var(--bg-primary)]/80 px-3 py-1 font-mono text-xs text-[var(--text-tertiary)]">Blueprint Grid</span>
            </div>
            <CodeBlock lang="CSS" code={`background-image:
  linear-gradient(rgba(28,124,84,0.04) 1px, transparent 1px),
  linear-gradient(90deg, rgba(28,124,84,0.04) 1px, transparent 1px);
background-size: 32px 32px;`} />
          </div>
        </div>

        {/* ── HUD Frames ── */}
        <SubHeading>Molduras HUD</SubHeading>
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Bracket Corners */}
          <div className="relative flex h-40 items-center justify-center rounded-lg bg-[var(--bg-secondary)]">
            {/* Top-left */}
            <div className="absolute left-3 top-3 h-5 w-5 border-l-2 border-t-2 border-[var(--color-signal-green)]/40" />
            {/* Top-right */}
            <div className="absolute right-3 top-3 h-5 w-5 border-r-2 border-t-2 border-[var(--color-signal-green)]/40" />
            {/* Bottom-left */}
            <div className="absolute bottom-3 left-3 h-5 w-5 border-b-2 border-l-2 border-[var(--color-signal-green)]/40" />
            {/* Bottom-right */}
            <div className="absolute bottom-3 right-3 h-5 w-5 border-b-2 border-r-2 border-[var(--color-signal-green)]/40" />
            <div className="text-center">
              <p className="font-mono text-xs text-[var(--color-signal-green)]">BRACKET FRAME</p>
              <p className="mt-1 font-mono text-[10px] text-[var(--text-tertiary)]">HUD-style corner markers</p>
            </div>
          </div>

          {/* Status Display */}
          <div className="relative flex h-40 items-center justify-center overflow-hidden rounded-lg bg-[var(--bg-secondary)]" style={{ backgroundImage: "radial-gradient(circle, rgba(28,124,84,0.06) 1px, transparent 1px)", backgroundSize: "16px 16px" }}>
            <div className="text-center">
              <div className="mb-1 flex items-center justify-center gap-2">
                <div className="h-2 w-2 rounded-full bg-[var(--color-signal-green)]" style={{ animation: "pulse-green 2s ease-in-out infinite" }} />
                <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Sistema Ativo</span>
              </div>
              <p className="font-mono text-[10px] text-[var(--text-tertiary)]">LATENCY 12ms | UPTIME 99.97%</p>
            </div>
          </div>
        </div>

        {/* ── Dividers ── */}
        <SubHeading>Divisores</SubHeading>
        <div className="space-y-8">
          {/* Gradient */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs text-[var(--text-tertiary)]">Gradient Divider</p>
            <div className="h-px" style={{ background: "linear-gradient(90deg, transparent, var(--color-signal-green), transparent)" }} />
          </div>
          {/* Dashed */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs text-[var(--text-tertiary)]">Dashed Divider</p>
            <div className="border-t border-dashed border-black/10" />
          </div>
          {/* Double */}
          <div className="flex flex-col gap-2">
            <p className="font-mono text-xs text-[var(--text-tertiary)]">Double Line</p>
            <div className="space-y-1">
              <div className="h-px bg-black/6" />
              <div className="h-px bg-black/6" />
            </div>
          </div>
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════════
          07 — ANIMACOES
          ════════════════════════════════════════════════════════════════ */}
      <Section id="animacoes" num="07" title="Animações" subtitle="Princípios de movimento e catálogo de animações. Cada transição é intencional e orientada a dados.">

        {/* ── Animation Demos ── */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {/* Capital Reveal */}
          <AnimationDemo name="Capital Reveal" description="Entrada de blur para nitidez, 800ms ease-out" className="bg-[var(--bg-primary)]">
            <span className="text-lg font-bold" style={{ animation: "capital-reveal 2s ease-out infinite" }}>OpenCapital</span>
          </AnimationDemo>

          {/* Signal Pulse */}
          <AnimationDemo name="Signal Pulse" description="Ponto verde pulsando, 2s ease-in-out infinite" className="bg-[var(--bg-primary)]">
            <div className="h-4 w-4 rounded-full bg-[var(--color-signal-green)]" style={{ animation: "pulse-green 2s ease-in-out infinite" }} />
          </AnimationDemo>

          {/* Number Tick */}
          <AnimationDemo name="Number Tick" description="Atualização de contador de preço, 150ms ease por dígito" className="bg-[var(--bg-primary)]">
            <span className="font-mono text-2xl font-bold text-[var(--color-profit)]">R$ 342.150</span>
          </AnimationDemo>

          {/* Glow Radial */}
          <AnimationDemo name="Glow Radial" description="Pulso de fundo, 3s ease-in-out infinite" className="bg-[var(--bg-primary)]">
            <div className="h-16 w-16 rounded-full bg-[var(--color-signal-green)]/10" style={{ animation: "pulse-green 3s ease-in-out infinite" }} />
          </AnimationDemo>

          {/* Fade In Up */}
          <AnimationDemo name="Fade In Up" description="Entrada de elemento, 250ms ease-out" className="bg-[var(--bg-primary)]">
            <div style={{ animation: "capital-reveal 2.5s ease-out infinite" }}>
              <Layers size={24} className="text-[var(--color-signal-green)]" />
            </div>
          </AnimationDemo>

          {/* Shine Sweep */}
          <AnimationDemo name="Shine Sweep" description="Varredura de reflexo metálico, 3s linear infinite" className="relative overflow-hidden bg-[var(--bg-primary)]">
            <div className="relative overflow-hidden rounded-lg bg-[var(--bg-tertiary)] px-4 py-2">
              <span className="font-mono text-sm font-semibold">Premium</span>
              <div className="absolute inset-0" style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent)", animation: "shine-sweep 3s linear infinite" }} />
            </div>
          </AnimationDemo>

          {/* Data Stream */}
          <AnimationDemo name="Data Stream" description="Fluxo de dados hex, alimentação contínua" className="overflow-hidden bg-[var(--bg-primary)]">
            <div className="flex flex-col items-center gap-0.5 font-mono text-[9px] leading-tight text-[var(--color-signal-green)]/30" style={{ animation: "capital-reveal 3s ease-in-out infinite" }}>
              <span>0xA7F3...</span>
              <span>0x3B2E...</span>
              <span>0xD9C1...</span>
              <span>0x8E4A...</span>
            </div>
          </AnimationDemo>

          {/* Border Trace */}
          <AnimationDemo name="Border Trace" description="Desenho de borda no sentido horário, 1s ease" className="bg-[var(--bg-primary)]">
            <div className="h-12 w-12 rounded-lg" style={{ border: "2px solid var(--color-signal-green)", animation: "pulse-green 2s ease-in-out infinite" }} />
          </AnimationDemo>
        </div>

        {/* ── Motion Principles ── */}
        <SubHeading>Princípios de Movimento</SubHeading>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { icon: Target, title: "Intencional", desc: "Toda animação comunica significado. Sem movimento decorativo." },
            { icon: Eye, title: "Sutil", desc: "Micro-interações que não distraem dos dados." },
            { icon: Zap, title: "Rápido", desc: "Abaixo de 400ms. Usuários nunca devem esperar animações." },
            { icon: BarChart3, title: "Orientado a Dados", desc: "Movimento reforça mudanças de dados e transições de estado." },
          ].map((p) => (
            <div key={p.title} className="glow-card rounded-xl bg-[var(--bg-secondary)] p-5">
              <p.icon size={20} className="mb-3 text-[var(--color-signal-green)]" />
              <p className="text-sm font-semibold">{p.title}</p>
              <p className="mt-1 text-xs text-[var(--text-secondary)]">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* ── Animation Specs Table ── */}
        <SubHeading>Especificações de Animação</SubHeading>
        <div className="overflow-x-auto rounded-xl border border-black/6">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-black/6 bg-[var(--bg-secondary)]">
                <th className="px-4 py-3 font-mono text-xs font-bold text-[var(--color-signal-green)]">Animation</th>
                <th className="px-4 py-3 font-mono text-xs font-bold text-[var(--color-signal-green)]">Duration</th>
                <th className="px-4 py-3 font-mono text-xs font-bold text-[var(--color-signal-green)]">Easing</th>
                <th className="px-4 py-3 font-mono text-xs font-bold text-[var(--color-signal-green)]">Use Case</th>
              </tr>
            </thead>
            <tbody className="text-xs text-[var(--text-secondary)]">
              {[
                { name: "Fade In", dur: "250ms", ease: "ease-out", use: "Aparição de elemento" },
                { name: "Slide Up", dur: "300ms", ease: "ease-out", use: "Entrada de conteúdo" },
                { name: "Scale In", dur: "200ms", ease: "spring(1, 80, 10)", use: "Aparição de modal/popover" },
                { name: "Pulse", dur: "2000ms", ease: "ease-in-out", use: "Indicadores de status" },
                { name: "Number Tick", dur: "150ms", ease: "ease", use: "Atualização de preços/contadores" },
                { name: "Capital Reveal", dur: "800ms", ease: "ease-out", use: "Entrada de hero/seção" },
                { name: "Shine Sweep", dur: "3000ms", ease: "linear", use: "Destaque de elemento premium" },
              ].map((a) => (
                <tr key={a.name} className="border-b border-black/6">
                  <td className="px-4 py-3 font-mono font-semibold text-[var(--text-primary)]">{a.name}</td>
                  <td className="px-4 py-3 font-mono">{a.dur}</td>
                  <td className="px-4 py-3 font-mono">{a.ease}</td>
                  <td className="px-4 py-3">{a.use}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-8">
          <CodeBlock lang="CSS" code={`@keyframes capital-reveal {
  from { opacity: 0; transform: translateY(20px); filter: blur(8px); }
  to   { opacity: 1; transform: translateY(0);    filter: blur(0); }
}

@keyframes pulse-green {
  0%, 100% { box-shadow: 0 0 0 0 rgba(28,124,84,0.3); }
  50%      { box-shadow: 0 0 20px 4px rgba(28,124,84,0.1); }
}

@keyframes shine-sweep {
  0%   { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
}`} />
        </div>
      </Section>

      {/* ════════════════════════════════════════════════════════════════
          08 — LOGOS
          ════════════════════════════════════════════════════════════════ */}
      <Section id="logos" num="08" title="Logos" subtitle="Sistema completo de logo com variantes, zona de segurança, tamanhos mínimos e regras de uso como componente do design system.">

        {/* ── Logo Principal ── */}
        <SubHeading>Logo Principal</SubHeading>
        <Label>A marca OpenCapital é composta por logotipo + símbolo de anel pixelado. O símbolo representa o ecossistema de capital aberto, formado por dots em padrão circular.</Label>
        <div className="grid gap-6 sm:grid-cols-2">
          {/* Dark bg */}
          <div className="flex flex-col gap-3">
            <div className="flex h-40 items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-primary)]">
              <OCLogo size="lg" color="var(--text-primary)" />
            </div>
            <p className="font-mono text-[10px] text-[var(--text-tertiary)]">Versão principal, fundo escuro</p>
          </div>
          {/* Light bg */}
          <div className="flex flex-col gap-3">
            <div className="flex h-40 items-center justify-center rounded-2xl border border-black/6 bg-[var(--color-capital-white)]">
              <OCLogo size="lg" color="#0A0A0A" />
            </div>
            <p className="font-mono text-[10px] text-[var(--text-tertiary)]">Versão principal, fundo claro</p>
          </div>
        </div>

        {/* ── Variantes ── */}
        <SubHeading>Variantes do Logo</SubHeading>
        <Label>Seis variantes oficiais conforme a arquitetura de marca: Ecossistema, Sociedade, Inteligência e sub-marcas.</Label>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Ecossistema — Logo + Símbolo completo */}
          <div className="flex flex-col gap-3">
            <div className="flex h-28 items-center justify-center rounded-xl border border-black/6 bg-[var(--bg-secondary)]">
              <OCLogo size="md" color="var(--text-primary)" />
            </div>
            <div>
              <p className="text-xs font-semibold">Ecossistema</p>
              <p className="text-[10px] text-[var(--text-tertiary)]">Logo completo, uso padrão, headers, navegação</p>
            </div>
          </div>
          {/* Sociedade — Apenas símbolo */}
          <div className="flex flex-col gap-3">
            <div className="flex h-28 items-center justify-center rounded-xl border border-black/6 bg-[var(--bg-secondary)]">
              <OCSymbol size={48} color="var(--text-primary)" />
            </div>
            <div>
              <p className="text-xs font-semibold">Sociedade</p>
              <p className="text-[10px] text-[var(--text-tertiary)]">Apenas símbolo, favicon, ícone de app, avatares</p>
            </div>
          </div>
          {/* Inteligência — Meio símbolo */}
          <div className="flex flex-col gap-3">
            <div className="flex h-28 items-center justify-center rounded-xl border border-black/6 bg-[var(--bg-secondary)]">
              <OCSymbol size={48} color="var(--text-primary)" variant="half" />
            </div>
            <div>
              <p className="text-xs font-semibold">Inteligência</p>
              <p className="text-[10px] text-[var(--text-tertiary)]">Símbolo reduzido, marca d&apos;água, elementos decorativos</p>
            </div>
          </div>
          {/* theCapital */}
          <div className="flex flex-col gap-3">
            <div className="flex h-28 items-center justify-center rounded-xl border border-black/6 bg-[var(--bg-secondary)]">
              <span className="inline-flex items-center gap-1.5">
                <span className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">theCapital</span>
                <OCSymbol size={22} color="var(--text-primary)" />
              </span>
            </div>
            <div>
              <p className="text-xs font-semibold">theCapital</p>
              <p className="text-[10px] text-[var(--text-tertiary)]">Sub-marca, plataforma de dados</p>
            </div>
          </div>
          {/* theOpenCapital */}
          <div className="flex flex-col gap-3">
            <div className="flex h-28 items-center justify-center rounded-xl border border-black/6 bg-[var(--bg-secondary)]">
              <span className="text-lg font-semibold tracking-tight text-[var(--text-primary)]">theOpenCapital</span>
            </div>
            <div>
              <p className="text-xs font-semibold">theOpenCapital</p>
              <p className="text-[10px] text-[var(--text-tertiary)]">Domínio e referência institucional</p>
            </div>
          </div>
          {/* OpenCapital · AI */}
          <div className="flex flex-col gap-3">
            <div className="flex h-28 items-center justify-center rounded-xl border border-black/6 bg-[var(--bg-secondary)]">
              <span className="text-lg tracking-tight text-[var(--text-primary)]"><span className="font-semibold">OpenCapital</span> · AI</span>
            </div>
            <div>
              <p className="text-xs font-semibold">OpenCapital · AI</p>
              <p className="text-[10px] text-[var(--text-tertiary)]">Vertical de inteligência artificial</p>
            </div>
          </div>
        </div>

        {/* ── Versões sobre fundo ── */}
        <SubHeading>Versões sobre Fundo</SubHeading>
        <Label>Versões monocromáticas para contextos sem cor ou impressão.</Label>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div className="flex flex-col gap-3">
            <div className="flex h-28 items-center justify-center rounded-xl border border-black/6 bg-[var(--bg-primary)]">
              <OCLogo size="md" color="white" />
            </div>
            <p className="text-[10px] text-[var(--text-tertiary)]">Monocromático branco, fundos escuros</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex h-28 items-center justify-center rounded-xl border border-black/6 bg-[var(--color-capital-white)]">
              <OCLogo size="md" color="#0A0A0A" />
            </div>
            <p className="text-[10px] text-[var(--text-tertiary)]">Monocromático preto, fundos claros e impressão P&amp;B</p>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex h-28 items-center justify-center rounded-xl border border-black/6 bg-[var(--color-capital-white)]">
              <span className="inline-flex items-center gap-1.5 opacity-20">
                <span className="text-lg font-semibold tracking-tight text-[#0A0A0A]">OpenCapital</span>
                <OCSymbol size={22} color="#0A0A0A" />
              </span>
            </div>
            <p className="text-[10px] text-[var(--text-tertiary)]">Marca d&apos;água, opacidade 20%</p>
          </div>
        </div>

        {/* ── Zona de Segurança ── */}
        <SubHeading>Zona de Segurança</SubHeading>
        <Label>Área mínima de respiro ao redor do logo. A unidade &quot;x&quot; é definida pela altura do símbolo.</Label>
        <div className="flex justify-center">
          <div className="relative inline-flex items-center justify-center rounded-2xl border-2 border-dashed border-[var(--color-signal-green)]/30 bg-[var(--bg-secondary)] px-20 py-16">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-[var(--color-signal-green)]">1x</div>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 font-mono text-[10px] text-[var(--color-signal-green)]">1x</div>
            <div className="absolute left-1/2 top-3 -translate-x-1/2 font-mono text-[10px] text-[var(--color-signal-green)]">1x</div>
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 font-mono text-[10px] text-[var(--color-signal-green)]">1x</div>
            <div className="absolute left-2 top-2 h-3 w-3 border-l border-t border-[var(--color-signal-green)]/50" />
            <div className="absolute right-2 top-2 h-3 w-3 border-r border-t border-[var(--color-signal-green)]/50" />
            <div className="absolute bottom-2 left-2 h-3 w-3 border-b border-l border-[var(--color-signal-green)]/50" />
            <div className="absolute bottom-2 right-2 h-3 w-3 border-b border-r border-[var(--color-signal-green)]/50" />
            <OCLogo size="lg" color="var(--text-primary)" />
          </div>
        </div>

        {/* ── Tamanhos Mínimos ── */}
        <SubHeading>Tamanhos Mínimos</SubHeading>
        <Label>Respeitar os tamanhos mínimos garante legibilidade em todos os contextos.</Label>
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="flex flex-col items-center gap-3 rounded-xl border border-black/6 bg-[var(--bg-secondary)] p-6">
            <OCLogo size="sm" color="var(--text-primary)" />
            <div className="text-center">
              <p className="font-mono text-xs text-[var(--color-signal-green)]">24px</p>
              <p className="text-[10px] text-[var(--text-tertiary)]">MÍN. DIGITAL (logo completo)</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-xl border border-black/6 bg-[var(--bg-secondary)] p-6">
            <OCSymbol size={16} color="var(--text-primary)" />
            <div className="text-center">
              <p className="font-mono text-xs text-[var(--color-signal-green)]">16px</p>
              <p className="text-[10px] text-[var(--text-tertiary)]">MÍN. DIGITAL (apenas símbolo)</p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 rounded-xl border border-black/6 bg-[var(--bg-secondary)] p-6">
            <OCLogo size="sm" color="var(--text-primary)" />
            <div className="text-center">
              <p className="font-mono text-xs text-[var(--color-signal-green)]">8mm</p>
              <p className="text-[10px] text-[var(--text-tertiary)]">MÍN. IMPRESSO</p>
            </div>
          </div>
        </div>

        {/* ── Uso Incorreto ── */}
        <SubHeading>Uso Incorreto do Logo</SubHeading>
        <Label>Exemplos do que nunca deve ser feito com o logo da marca.</Label>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { label: "Não distorcer", cls: "scale-x-150" },
            { label: "Não rotacionar", cls: "rotate-45" },
            { label: "Não adicionar sombra", cls: "drop-shadow-[0_0_10px_rgba(255,255,255,0.8)]" },
            { label: "Não alterar cores", cls: "", color: "#EF4444" },
          ].map((rule) => (
            <div key={rule.label} className="flex flex-col gap-3">
              <div className="flex h-24 items-center justify-center rounded-xl border border-[var(--color-loss)]/20 bg-[var(--bg-secondary)]">
                <div className={rule.cls}>
                  <OCLogo size="sm" color={rule.color ?? "var(--text-primary)"} />
                </div>
              </div>
              <div className="flex items-center gap-1.5">
                <XCircle size={12} className="shrink-0 text-[var(--color-loss)]" />
                <p className="text-xs text-[var(--color-loss)]">{rule.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* ── Tokens de Logo ── */}
        <SubHeading>Tokens de Logo</SubHeading>
        <Label>Referências de design tokens relacionados ao sistema de logo.</Label>
        <div className="space-y-0.5">
          <TokenRow name="--logo-symbol-size-sm" value="20px" />
          <TokenRow name="--logo-symbol-size-md" value="28px" />
          <TokenRow name="--logo-symbol-size-lg" value="40px" />
          <TokenRow name="--logo-symbol-type" value="dot-ring (anel pixelado)" />
          <TokenRow name="--logo-safe-zone" value="1x (altura do símbolo)" />
          <TokenRow name="--logo-min-digital" value="24px (completo) / 16px (símbolo)" />
          <TokenRow name="--logo-min-print" value="8mm" />
        </div>

        <div className="mt-8">
          <CodeBlock lang="JSX" code={`import { OCLogo, OCSymbol } from "@/components/oc-logo";

{/* Logo completo (Ecossistema) */}
<OCLogo size="lg" color="#0A0A0A" />

{/* Apenas símbolo (Sociedade) */}
<OCSymbol size={32} color="#0A0A0A" />

{/* Meio símbolo (Inteligência) */}
<OCSymbol size={32} color="#0A0A0A" variant="half" />`} />
        </div>
      </Section>
    </>
  );
}
