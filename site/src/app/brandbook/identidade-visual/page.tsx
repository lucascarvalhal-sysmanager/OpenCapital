import { Layers, Globe, Brain } from "lucide-react";
import { Section, Swatch, TypeSample, ContrastRow, CodeBlock } from "@/components/brandbook-shared";
import { OCSymbol, OCLogo } from "@/components/oc-logo";

/* ─── Logo Variation Card ─── */
function LogoCard({ name, usage, children }: { name: string; usage: string; children: React.ReactNode }) {
  return (
    <div className="glow-card flex flex-col items-center gap-4 rounded-2xl bg-[var(--bg-secondary)] p-8 text-center">
      <div className="flex h-24 w-full items-center justify-center">{children}</div>
      <div>
        <p className="text-sm font-semibold">{name}</p>
        <p className="mt-1 text-xs text-[var(--text-tertiary)]">{usage}</p>
      </div>
    </div>
  );
}

/* ─── Background Usage Card ─── */
function BackgroundCard({ bg, label, rule, logoColor }: { bg: string; label: string; rule: string; logoColor: string }) {
  return (
    <div className="glow-card overflow-hidden rounded-2xl">
      <div className="flex h-32 items-center justify-center px-6" style={{ background: bg }}>
        <OCLogo size="md" color={logoColor} />
      </div>
      <div className="border-t border-[var(--border-default)] bg-[var(--bg-secondary)] p-4">
        <p className="text-xs font-semibold">{label}</p>
        <p className="mt-1 text-[10px] text-[var(--text-tertiary)]">{rule}</p>
      </div>
    </div>
  );
}

/* ─── Gradient Swatch ─── */
function GradientSwatch({ name, css }: { name: string; css: string }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-24 w-full rounded-2xl border border-[var(--border-default)]" style={{ background: css }} />
      <span className="text-sm font-medium">{name}</span>
      <span className="font-mono text-[10px] leading-relaxed text-[var(--text-tertiary)]">{css}</span>
    </div>
  );
}

/* ─── Sub-brand Card ─── */
function SubBrandCard({ name, label, icon: Icon }: { name: string; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }) {
  return (
    <div className="glow-card flex flex-col items-center gap-4 rounded-2xl bg-[var(--bg-secondary)] p-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-signal-blue)]/10">
        <Icon size={28} className="text-[var(--color-signal-blue)]" />
      </div>
      <div>
        <p className="text-lg font-bold">{name}</p>
        <p className="mt-1 text-xs text-[var(--text-tertiary)]">{label}</p>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════ */

export default function IdentidadeVisualPage() {
  return (
    <>
      {/* ─── 01 SISTEMA DE LOGO ─── */}
      <Section id="sistema-de-logo" num="01" title="Sistema de Logo" subtitle="Seis variantes para cobrir todos os contextos de uso, do site institucional ao favicon de 16 px.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <LogoCard name="OpenCapital + Símbolo (Ecossistema)" usage="Site, materiais oficiais">
            <OCLogo size="lg" color="var(--text-primary)" />
          </LogoCard>

          <LogoCard name="theCapital + Símbolo" usage="Comunidade, eventos">
            <span className="inline-flex items-center gap-1.5">
              <span className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">theCapital</span>
              <OCSymbol size={28} color="var(--text-primary)" />
            </span>
          </LogoCard>

          <LogoCard name="Símbolo Standalone (Sociedade)" usage="Favicon, app icon, avatar">
            <OCSymbol size={56} color="var(--text-primary)" />
          </LogoCard>

          <LogoCard name="Símbolo Parcial (Inteligência)" usage="Espaços mínimos, watermark">
            <OCSymbol size={56} color="var(--text-primary)" variant="half" />
          </LogoCard>

          <LogoCard name="theOpenCapital (texto)" usage="URLs, menções textuais">
            <span className="text-xl font-semibold tracking-tight text-[var(--text-primary)]">theOpenCapital</span>
          </LogoCard>

          <LogoCard name="OpenCapital · AI (sub-produto)" usage="APIs, infraestrutura técnica">
            <span className="text-xl tracking-tight text-[var(--text-primary)]"><span className="font-semibold">OpenCapital</span> · AI</span>
          </LogoCard>
        </div>
      </Section>

      {/* ─── 02 CONSTRUÇÃO DO LOGO ─── */}
      <Section id="construcao-do-logo" num="02" title="Construção do Logo" subtitle="Wordmark geométrica + símbolo circular composto por pontos discretos representando dados conectados.">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Construction diagram */}
          <div className="glow-card flex flex-col gap-6 rounded-2xl bg-[var(--bg-secondary)] p-8">
            <h3 className="text-sm font-semibold text-[var(--color-signal-blue)]">Anatomia</h3>
            <div className="flex items-center gap-4">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[var(--color-signal-blue)]/40">
                <OCSymbol size={56} color="var(--color-signal-blue)" />
                <span className="absolute -right-12 font-mono text-[10px] text-[var(--text-tertiary)]">safe zone 1x</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-lg font-bold tracking-tight">Open<span className="gradient-text">Capital</span></span>
                <span className="font-mono text-[10px] text-[var(--text-tertiary)]">Tipografia geométrica</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              O símbolo é formado por um anel de pontos discretos que representam data points conectados em rede. O wordmark usa tipografia geométrica sem serifa, transmitindo precisão e modernidade.
            </p>
          </div>

          {/* Rules */}
          <div className="glow-card flex flex-col gap-6 rounded-2xl bg-[var(--bg-secondary)] p-8">
            <h3 className="text-sm font-semibold text-[var(--color-signal-blue)]">Regras de Uso</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 border-b border-[var(--border-default)] pb-4">
                <span className="font-mono text-xs text-[var(--color-signal-blue)]">SAFE ZONE</span>
                <span className="text-sm text-[var(--text-secondary)]">Mínimo de 1x a altura do símbolo em todas as direções. Nenhum elemento pode invadir essa área.</span>
              </div>
              <div className="flex items-start gap-3 border-b border-[var(--border-default)] pb-4">
                <span className="font-mono text-xs text-[var(--color-signal-blue)]">MÍN. DIGITAL</span>
                <span className="text-sm text-[var(--text-secondary)]">24 px de altura do símbolo para telas digitais.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs text-[var(--color-signal-blue)]">MÍN. IMPRESSO</span>
                <span className="text-sm text-[var(--text-secondary)]">8 mm de altura do símbolo para impressão.</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 03 USO SOBRE FUNDOS ─── */}
      <Section id="uso-sobre-fundos" num="03" title="Uso sobre Fundos" subtitle="O logo deve manter legibilidade máxima em qualquer contexto de fundo.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <BackgroundCard bg="linear-gradient(180deg, #0A0A0A 0%, #2A2A2A 100%)" label="Capital White" rule="Fundos escuros (#0A0A0A a #2A2A2A), usar Capital White ou Signal Blue" logoColor="#F5F5F0" />
          <BackgroundCard bg="linear-gradient(180deg, #F5F5F0 0%, #FFFFFF 100%)" label="Capital Black" rule="Fundos claros (#F5F5F0 a #FFFFFF), usar Capital Black" logoColor="#0A0A0A" />
          <BackgroundCard bg="url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23333%22 width=%22100%22 height=%22100%22/><circle fill=%22%23444%22 cx=%2250%22 cy=%2250%22 r=%2240%22/></svg>') center/cover" label="Capital White + Shadow" rule="Imagem/Foto, Capital White com sutil text-shadow" logoColor="#F5F5F0" />
          <BackgroundCard bg="#2563EB" label="Capital White" rule="Signal Blue, usar Capital White" logoColor="#F5F5F0" />
        </div>
      </Section>

      {/* ─── 04 PALETA DE CORES ─── */}
      <Section id="paleta-de-cores" num="04" title="Paleta de Cores" subtitle="Cores primárias, neutras e semânticas que compõem o sistema visual.">
        {/* Primary */}
        <div className="mb-10">
          <h3 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-blue)]">Primárias</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
            <Swatch name="Capital Black" hex="#0A0A0A" />
            <Swatch name="Signal Blue" hex="#2563EB" />
            <Swatch name="Capital White" hex="#F5F5F0" textDark />
            <Swatch name="Deep Blue" hex="#1E40AF" />
            <Swatch name="Sky Glow" hex="#3B82F6" textDark />
            <Swatch name="Signal Purple" hex="#7C3AED" />
          </div>
        </div>

        {/* Neutrals */}
        <div className="mb-10">
          <h3 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-blue)]">Secundárias & Neutras</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7">
            <Swatch name="Graphite" hex="#1A1A1A" />
            <Swatch name="Slate" hex="#2A2A2A" />
            <Swatch name="Iron" hex="#404040" />
            <Swatch name="Steel" hex="#6B7280" />
            <Swatch name="Silver" hex="#9CA3AF" />
            <Swatch name="Smoke" hex="#D1D5DB" textDark />
            <Swatch name="Cloud" hex="#E5E7EB" textDark />
          </div>
        </div>

        {/* Semantic */}
        <div>
          <h3 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-blue)]">Semânticas</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
            <Swatch name="Profit Green" hex="#22C55E" />
            <Swatch name="Loss Red" hex="#EF4444" />
            <Swatch name="Caution Amber" hex="#F59E0B" />
            <Swatch name="Info Blue" hex="#3B82F6" />
          </div>
        </div>
      </Section>

      {/* ─── 05 GRADIENTES ─── */}
      <Section id="gradientes" num="05" title="Gradientes" subtitle="Gradientes compostos a partir da paleta primária, usados em destaques, CTAs e superfícies.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <GradientSwatch name="Capital" css="linear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #3B82F6 100%)" />
          <GradientSwatch name="Signal" css="linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)" />
          <GradientSwatch name="Depth" css="linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)" />
          <GradientSwatch name="Text" css="linear-gradient(90deg, #2563EB 0%, #3B82F6 100%)" />
          <GradientSwatch name="Accent" css="linear-gradient(135deg, #2563EB 0%, #7C3AED 100%)" />
          <GradientSwatch name="Surface" css="linear-gradient(180deg, rgba(37,99,235,0.12) 0%, transparent 100%)" />
        </div>

        <div className="mt-8">
          <CodeBlock lang="CSS" code={`/* Capital */\nlinear-gradient(135deg, #1E40AF 0%, #2563EB 50%, #3B82F6 100%)\n\n/* Signal */\nlinear-gradient(135deg, #2563EB 0%, #3B82F6 100%)\n\n/* Depth */\nlinear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)\n\n/* Text */\nlinear-gradient(90deg, #2563EB 0%, #3B82F6 100%)\n\n/* Accent */\nlinear-gradient(135deg, #2563EB 0%, #7C3AED 100%)\n\n/* Surface */\nlinear-gradient(180deg, rgba(37,99,235,0.12) 0%, transparent 100%)`} />
        </div>
      </Section>

      {/* ─── 06 ACESSIBILIDADE DE CONTRASTE ─── */}
      <Section id="acessibilidade" num="06" title="Acessibilidade de Contraste" subtitle="Todas as combinações de cor foram testadas contra WCAG 2.1 para garantir legibilidade.">
        <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6 md:p-8">
          <ContrastRow combo="Capital White sobre Capital Black" ratio="18.4:1" level="AAA" />
          <ContrastRow combo="Signal Blue sobre Capital Black" ratio="5.2:1" level="AA" />
          <ContrastRow combo="Capital White sobre Signal Blue" ratio="3.5:1" level="AA" />
          <ContrastRow combo="Iron sobre Capital Black" ratio="3.1:1" level="Apenas ícones" />
          <ContrastRow combo="Steel sobre Capital Black" ratio="4.6:1" level="AA" />
          <ContrastRow combo="Signal Blue sobre Graphite" ratio="4.6:1" level="AA" />
        </div>
      </Section>

      {/* ─── 07 ESCALA TIPOGRÁFICA ─── */}
      <Section id="escala-tipografica" num="07" title="Escala Tipográfica" subtitle="Duas famílias complementares: Inter para comunicação e JetBrains Mono para dados financeiros.">

        {/* === HERO SPECIMEN === */}
        <div className="mb-16 overflow-hidden rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)]">
          {/* Large specimen */}
          <div className="relative px-8 py-12 md:px-12 md:py-20">
            <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-surface)]" />
            <div className="relative space-y-2">
              <p className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-blue)]">Inter &middot; Type Specimen</p>
              <p className="text-5xl font-bold leading-[1.05] tracking-tight md:text-7xl lg:text-8xl">
                A infraestrutura
                <br />
                <span className="gradient-text">mudou.</span>
              </p>
              <p className="mt-4 max-w-lg text-lg text-[var(--text-secondary)] md:text-xl">
                Quem opera com dados vence. Prosperidade
                <br className="hidden md:block" />
                como consequência de disciplina + dados.
              </p>
            </div>
          </div>

          {/* Alphabet strip */}
          <div className="border-t border-[var(--border-default)] bg-[var(--bg-tertiary)] px-8 py-6 md:px-12">
            <div className="flex flex-wrap gap-x-3 gap-y-1 text-2xl font-light tracking-wide text-[var(--text-secondary)] md:text-3xl">
              {"ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("").map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
            <div className="mt-3 flex flex-wrap gap-x-3 gap-y-1 text-2xl font-light tracking-wide text-[var(--text-tertiary)] md:text-3xl">
              {"abcdefghijklmnopqrstuvwxyz".split("").map((c) => (
                <span key={c}>{c}</span>
              ))}
            </div>
          </div>
        </div>

        {/* === SCALE SIDE BY SIDE === */}
        <div className="mb-16 grid gap-12 lg:grid-cols-2">
          {/* Inter scale */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-signal-blue)]/10">
                <span className="text-lg font-bold text-[var(--color-signal-blue)]">Aa</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">Inter</h3>
                <p className="text-xs text-[var(--text-tertiary)]">Display + Body &middot; Geom&eacute;trica, limpa, premium</p>
              </div>
            </div>
            <div className="space-y-0">
              {[
                { label: "Hero", size: "48px", weight: 700, ls: "-0.03em", meta: "64px / Bold / -0.03em" },
                { label: "Display", size: "36px", weight: 700, ls: "-0.02em", meta: "48px / Bold / -0.02em" },
                { label: "H1", size: "28px", weight: 600, ls: "-0.02em", meta: "36px / SemiBold" },
                { label: "H2", size: "22px", weight: 600, ls: "-0.01em", meta: "28px / SemiBold" },
                { label: "H3", size: "20px", weight: 600, ls: "-0.01em", meta: "24px / SemiBold" },
              ].map((item) => (
                <div key={item.label} className="group flex items-baseline gap-4 border-b border-[var(--border-default)] py-4 transition hover:bg-[var(--bg-secondary)]/50">
                  <span className="w-16 shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--color-signal-blue)]">{item.label}</span>
                  <span style={{ fontSize: item.size, fontWeight: item.weight, letterSpacing: item.ls, lineHeight: 1.2 }}>
                    Prosperidade
                  </span>
                  <span className="ml-auto hidden font-mono text-[10px] text-[var(--text-tertiary)] lg:block">{item.meta}</span>
                </div>
              ))}
              {[
                { label: "Body L", size: "18px", weight: 400, meta: "18px / Regular / 1.6" },
                { label: "Body", size: "16px", weight: 400, meta: "16px / Regular / 1.6" },
                { label: "Small", size: "14px", weight: 400, meta: "14px / Regular / 1.5" },
                { label: "Caption", size: "12px", weight: 500, meta: "12px / Medium / 1.4" },
              ].map((item) => (
                <div key={item.label} className="group flex items-baseline gap-4 border-b border-[var(--border-default)] py-3 transition hover:bg-[var(--bg-secondary)]/50">
                  <span className="w-16 shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">{item.label}</span>
                  <span className="text-[var(--text-secondary)]" style={{ fontSize: item.size, fontWeight: item.weight, lineHeight: 1.5 }}>
                    Dados agora podem operar por voc&ecirc;.
                  </span>
                  <span className="ml-auto hidden font-mono text-[10px] text-[var(--text-tertiary)] lg:block">{item.meta}</span>
                </div>
              ))}
              <div className="group flex items-baseline gap-4 py-3 transition hover:bg-[var(--bg-secondary)]/50">
                <span className="w-16 shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">Overline</span>
                <span className="text-[11px] font-bold uppercase tracking-[0.15em] text-[var(--text-secondary)]">
                  A INFRAESTRUTURA MUDOU
                </span>
                <span className="ml-auto hidden font-mono text-[10px] text-[var(--text-tertiary)] lg:block">11px / Bold / UPPER</span>
              </div>
            </div>
          </div>

          {/* JetBrains Mono scale */}
          <div>
            <div className="mb-8 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-signal-blue)]/10">
                <span className="font-mono text-base font-bold text-[var(--color-signal-blue)]">01</span>
              </div>
              <div>
                <h3 className="text-lg font-bold">JetBrains Mono</h3>
                <p className="text-xs text-[var(--text-tertiary)]">Dados & C&oacute;digo &middot; Largura fixa, tabular numbers</p>
              </div>
            </div>
            <div className="space-y-0">
              {[
                { label: "Price XL", size: "36px", weight: 700, text: "R$ 127.459,32" },
                { label: "Price L", size: "24px", weight: 600, text: "+2.847,50" },
                { label: "Price", size: "20px", weight: 500, text: "BTC 98,472.50" },
              ].map((item) => (
                <div key={item.label} className="group flex items-baseline gap-4 border-b border-[var(--border-default)] py-4 transition hover:bg-[var(--bg-secondary)]/50">
                  <span className="w-16 shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--color-signal-blue)]">{item.label}</span>
                  <span className="font-mono" style={{ fontSize: item.size, fontWeight: item.weight, lineHeight: 1.2 }}>
                    {item.text}
                  </span>
                </div>
              ))}
              {[
                { label: "Data", size: "14px", weight: 400, text: "2026-03-07T14:32:00Z | vol: 2.4M" },
                { label: "Code", size: "14px", weight: 400, text: "const signal = await ai.analyze(data)" },
                { label: "Mono S", size: "12px", weight: 400, text: "TX-0x7f3a...b2c1 | 14:32:00" },
              ].map((item) => (
                <div key={item.label} className="group flex items-baseline gap-4 border-b border-[var(--border-default)] py-3 transition hover:bg-[var(--bg-secondary)]/50">
                  <span className="w-16 shrink-0 font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">{item.label}</span>
                  <span className="font-mono text-[var(--text-secondary)]" style={{ fontSize: item.size, fontWeight: item.weight }}>
                    {item.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Tabular numbers showcase */}
            <div className="mt-8 rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-5">
              <p className="mb-4 font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--color-signal-blue)]">Tabular Numbers</p>
              <div className="space-y-1 font-mono text-sm">
                {[
                  { pair: "AAPL", price: "187.44", change: "+1.23%", up: true },
                  { pair: "MSFT", price: "421.08", change: "-0.57%", up: false },
                  { pair: "NVDA", price: "893.12", change: "+3.41%", up: true },
                  { pair: "GOOGL", price: "178.95", change: "+0.82%", up: true },
                  { pair: "AMZN", price: "225.67", change: "-1.15%", up: false },
                ].map((row) => (
                  <div key={row.pair} className="flex items-center justify-between border-b border-[var(--border-default)] py-2 last:border-0">
                    <span className="w-16 font-semibold text-[var(--text-primary)]">{row.pair}</span>
                    <span className="text-[var(--text-secondary)]">{row.price}</span>
                    <span className={row.up ? "text-[var(--color-profit)]" : "text-[var(--color-loss)]"}>{row.change}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* === CONTEXTUAL DEMO === */}
        <div className="mb-12">
          <p className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-blue)]">Tipografia em Contexto</p>
          <div className="grid gap-6 md:grid-cols-3">
            {/* Card UI */}
            <div className="glow-card overflow-hidden rounded-2xl bg-[var(--bg-secondary)]">
              <div className="p-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.15em] text-[var(--color-signal-blue)]">Overline</p>
                <p className="mt-2 text-xl font-bold tracking-tight">Inter SemiBold 24</p>
                <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                  Body Regular 16 &mdash; texto corrido com line-height confort&aacute;vel de 1.6 para leitura fluida em cards e descri&ccedil;&otilde;es.
                </p>
              </div>
              <div className="border-t border-[var(--border-default)] bg-[var(--bg-tertiary)] px-6 py-3">
                <span className="font-mono text-xs text-[var(--text-tertiary)]">Caption Mono 12</span>
              </div>
            </div>

            {/* Dashboard metric */}
            <div className="glow-card overflow-hidden rounded-2xl bg-[var(--bg-secondary)]">
              <div className="p-6">
                <p className="text-xs font-medium text-[var(--text-tertiary)]">Rendimento Acumulado</p>
                <p className="mt-1 font-mono text-3xl font-bold text-[var(--color-profit)]">+24.7%</p>
                <p className="mt-1 font-mono text-xs text-[var(--text-tertiary)]">vs. benchmark +18.2%</p>
              </div>
              <div className="border-t border-[var(--border-default)] bg-[var(--bg-tertiary)] px-6 py-3">
                <div className="flex items-center justify-between font-mono text-xs">
                  <span className="text-[var(--text-tertiary)]">Atualizado</span>
                  <span className="text-[var(--color-signal-blue)]">14:32:00</span>
                </div>
              </div>
            </div>

            {/* Code/Terminal */}
            <div className="glow-card overflow-hidden rounded-2xl bg-[var(--bg-secondary)]">
              <div className="border-b border-[var(--border-default)] px-6 py-3">
                <div className="flex items-center gap-1.5">
                  <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-loss)]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-caution)]" />
                  <div className="h-2.5 w-2.5 rounded-full bg-[var(--color-profit)]" />
                  <span className="ml-2 font-mono text-[10px] text-[var(--text-tertiary)]">terminal</span>
                </div>
              </div>
              <div className="p-6 font-mono text-xs leading-relaxed">
                <p className="text-[var(--text-tertiary)]">$ oc analyze --pair BTCUSD</p>
                <p className="mt-2 text-[var(--text-secondary)]">
                  <span className="text-[var(--color-signal-blue)]">&#10003;</span> Loading 2.4M data points...
                </p>
                <p className="text-[var(--text-secondary)]">
                  <span className="text-[var(--color-signal-blue)]">&#10003;</span> Running ML pipeline...
                </p>
                <p className="mt-2 text-[var(--color-signal-blue)]">Signal: LONG | Confidence: 87.4%</p>
                <p className="text-[var(--text-tertiary)]">Latency: 47ms | Model: v3.2.1</p>
              </div>
            </div>
          </div>
        </div>

        {/* === RATIONALE === */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--color-signal-blue)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--color-signal-blue)]/10 text-xs font-bold">Aa</span>
              Por que Inter?
            </h4>
            <ul className="space-y-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              <li className="flex gap-2"><span className="mt-1 text-[var(--color-signal-blue)]">&bull;</span> Otimizada para telas digitais com excelente hinting</li>
              <li className="flex gap-2"><span className="mt-1 text-[var(--color-signal-blue)]">&bull;</span> Suporte completo a tabular numbers (cr&iacute;tico para finan&ccedil;as)</li>
              <li className="flex gap-2"><span className="mt-1 text-[var(--color-signal-blue)]">&bull;</span> Open-source, performance via next/font</li>
              <li className="flex gap-2"><span className="mt-1 text-[var(--color-signal-blue)]">&bull;</span> Refer&ecirc;ncia: Stripe, Linear, Vercel</li>
            </ul>
          </div>
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <h4 className="mb-3 flex items-center gap-2 text-sm font-semibold text-[var(--color-signal-blue)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[var(--color-signal-blue)]/10 font-mono text-xs font-bold">01</span>
              Por que JetBrains Mono?
            </h4>
            <ul className="space-y-2 text-sm leading-relaxed text-[var(--text-secondary)]">
              <li className="flex gap-2"><span className="mt-1 text-[var(--color-signal-blue)]">&bull;</span> Ligatures de programa&ccedil;&atilde;o e caracteres otimizados</li>
              <li className="flex gap-2"><span className="mt-1 text-[var(--color-signal-blue)]">&bull;</span> Largura fixa para alinhamento perfeito em tabelas</li>
              <li className="flex gap-2"><span className="mt-1 text-[var(--color-signal-blue)]">&bull;</span> N&uacute;meros tabulares para dados financeiros</li>
              <li className="flex gap-2"><span className="mt-1 text-[var(--color-signal-blue)]">&bull;</span> Open-source, excelente hinting em todas as plataformas</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ─── 08 ARQUITETURA DE MARCA ─── */}
      <Section id="arquitetura-de-marca" num="08" title="Arquitetura de Marca" subtitle="Três sub-marcas que compõem o ecossistema OpenCapital, cada uma com escopo e personalidade distintos.">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="glow-card flex flex-col items-center gap-4 rounded-2xl bg-[var(--bg-secondary)] p-8 text-center">
            <OCLogo size="md" color="var(--text-primary)" />
            <div>
              <p className="text-lg font-bold">OpenCapital</p>
              <p className="mt-1 text-xs text-[var(--text-tertiary)]">Ecossistema</p>
            </div>
          </div>
          <div className="glow-card flex flex-col items-center gap-4 rounded-2xl bg-[var(--bg-secondary)] p-8 text-center">
            <OCSymbol size={48} color="var(--text-primary)" />
            <div>
              <p className="text-lg font-bold">theCapital</p>
              <p className="mt-1 text-xs text-[var(--text-tertiary)]">Sociedade</p>
            </div>
          </div>
          <div className="glow-card flex flex-col items-center gap-4 rounded-2xl bg-[var(--bg-secondary)] p-8 text-center">
            <OCSymbol size={48} color="var(--text-primary)" variant="half" />
            <div>
              <p className="text-lg font-bold">OpenCapital · AI</p>
              <p className="mt-1 text-xs text-[var(--text-tertiary)]">Inteligência</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 09 FOTOGRAFIA & IMAGENS ─── */}
      <Section id="fotografia" num="09" title="Fotografia & Imagens" subtitle="Diretrizes de estilo para fotografia e tratamento de imagens, adaptadas para ambos os temas.">

        {/* Guidelines side by side: Dark + Light */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {/* Dark Mode Guidelines */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#0A0A0A] border border-[var(--border-default)]">
                <div className="h-2 w-2 rounded-full bg-[var(--color-signal-blue)]" />
              </div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-blue)]">Dark Mode</h3>
            </div>
            <div className="space-y-4">
              <div className="border-b border-[var(--border-default)] pb-3">
                <span className="text-xs font-semibold text-[var(--text-primary)]">Tom</span>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">Atmosférico, tecnológico, imersivo</p>
              </div>
              <div className="border-b border-[var(--border-default)] pb-3">
                <span className="text-xs font-semibold text-[var(--text-primary)]">Tratamento</span>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">Alto contraste, desaturado com acentos azuis. Brightness reduzido para integrar com fundos escuros.</p>
              </div>
              <div className="border-b border-[var(--border-default)] pb-3">
                <span className="text-xs font-semibold text-[var(--text-primary)]">Temas</span>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">Cidades à noite, terminais, gráficos em tela escura, dados luminosos sobre fundo negro</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-[var(--text-primary)]">Overlay</span>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">Gradiente azul sutil (Signal Blue 20% → transparent)</p>
              </div>
            </div>
          </div>

          {/* Light Mode Guidelines */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <div className="mb-4 flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-[#F1F1F1] border border-[var(--border-default)]">
                <div className="h-2 w-2 rounded-full bg-[var(--color-signal-blue)]" />
              </div>
              <h3 className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-blue)]">Light Mode</h3>
            </div>
            <div className="space-y-4">
              <div className="border-b border-[var(--border-default)] pb-3">
                <span className="text-xs font-semibold text-[var(--text-primary)]">Tom</span>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">Limpo, profissional, arejado</p>
              </div>
              <div className="border-b border-[var(--border-default)] pb-3">
                <span className="text-xs font-semibold text-[var(--text-primary)]">Tratamento</span>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">Contraste moderado, levemente desaturado. Brightness elevado para manter leveza sobre fundos claros.</p>
              </div>
              <div className="border-b border-[var(--border-default)] pb-3">
                <span className="text-xs font-semibold text-[var(--text-primary)]">Temas</span>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">Espaços de trabalho, dashboards claros, gráficos sobre branco, tecnologia minimalista</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-[var(--text-primary)]">Overlay</span>
                <p className="mt-1 text-sm text-[var(--text-secondary)]">Gradiente azul sutil (Deep Blue 8% → transparent)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Shared rules */}
        <div className="mb-12 glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
          <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-blue)]">Regras Compartilhadas (ambos os temas)</h3>
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <p><span className="font-semibold text-[var(--text-primary)]">Desaturação:</span> Sempre aplicar saturate(0.3) — a cor vem do azul da marca, não da foto</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Acento:</span> Signal Blue como única cor vibrante sobre imagens tratadas</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Consistência:</span> Mesmo tratamento base em ambos os temas, variando apenas brightness</p>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 text-[var(--color-loss)]">&#10007;</span>
                <span className="text-[var(--text-secondary)]">Fotos genéricas de stock, pessoas sorrindo com laptops</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 text-[var(--color-loss)]">&#10007;</span>
                <span className="text-[var(--text-secondary)]">Moedas/cédulas físicas, símbolos de dólar literais</span>
              </div>
              <div className="flex items-start gap-2 text-sm">
                <span className="mt-0.5 text-[var(--color-loss)]">&#10007;</span>
                <span className="text-[var(--text-secondary)]">Imagens sem tratamento (saturadas, coloridas) em qualquer tema</span>
              </div>
            </div>
          </div>
        </div>

        {/* Treatment preview: Dark vs Light side by side */}
        <div className="mb-8 grid gap-6 md:grid-cols-2">
          {/* Dark treatment */}
          <div className="glow-card overflow-hidden rounded-2xl">
            <div className="relative flex h-48 items-center justify-center overflow-hidden" style={{ background: "#0A0A0A", filter: "saturate(0.3) contrast(1.2) brightness(0.8)" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/20 to-transparent" />
              <div className="grid grid-cols-6 gap-1 opacity-60">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={`dark-${i}`} className="h-4 w-8 rounded-sm" style={{ backgroundColor: i % 3 === 0 ? "#2563EB" : i % 5 === 0 ? "#1E40AF" : "#2A2A2A", opacity: 0.4 + (i % 7) * 0.08 }} />
                ))}
              </div>
            </div>
            <div className="border-t border-[var(--border-default)] bg-[var(--bg-secondary)] p-4">
              <p className="text-xs font-semibold">Tratamento Dark</p>
              <p className="mt-1 font-mono text-[10px] text-[var(--text-tertiary)]">brightness(0.8) + saturate(0.3) + blue overlay 20%</p>
            </div>
          </div>

          {/* Light treatment */}
          <div className="glow-card overflow-hidden rounded-2xl">
            <div className="relative flex h-48 items-center justify-center overflow-hidden" style={{ background: "#F1F1F1", filter: "saturate(0.3) contrast(1.1) brightness(1.05)" }}>
              <div className="absolute inset-0 bg-gradient-to-br from-[#1E40AF]/8 to-transparent" />
              <div className="grid grid-cols-6 gap-1 opacity-50">
                {Array.from({ length: 24 }).map((_, i) => (
                  <div key={`light-${i}`} className="h-4 w-8 rounded-sm" style={{ backgroundColor: i % 3 === 0 ? "#2563EB" : i % 5 === 0 ? "#3B82F6" : "#D1D5DB", opacity: 0.3 + (i % 7) * 0.08 }} />
                ))}
              </div>
            </div>
            <div className="border-t border-[var(--border-default)] bg-[var(--bg-secondary)] p-4">
              <p className="text-xs font-semibold">Tratamento Light</p>
              <p className="mt-1 font-mono text-[10px] text-[var(--text-tertiary)]">brightness(1.05) + saturate(0.3) + blue overlay 8%</p>
            </div>
          </div>
        </div>

        {/* CSS code for both */}
        <CodeBlock lang="CSS" code={`/* === Dark Mode Treatment === */\n.oc-image-treatment--dark {\n  filter: saturate(0.3) contrast(1.2) brightness(0.8);\n}\n.oc-image-treatment--dark::after {\n  background: linear-gradient(135deg, rgba(37,99,235,0.2) 0%, transparent 60%);\n  mix-blend-mode: screen;\n}\n\n/* === Light Mode Treatment === */\n.oc-image-treatment--light {\n  filter: saturate(0.3) contrast(1.1) brightness(1.05);\n}\n.oc-image-treatment--light::after {\n  background: linear-gradient(135deg, rgba(37,99,235,0.08) 0%, transparent 60%);\n  mix-blend-mode: multiply;\n}`} />
      </Section>
    </>
  );
}
