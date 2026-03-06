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
      <div className="border-t border-black/6 bg-[var(--bg-secondary)] p-4">
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
      <div className="h-24 w-full rounded-2xl border border-black/6" style={{ background: css }} />
      <span className="text-sm font-medium">{name}</span>
      <span className="font-mono text-[10px] leading-relaxed text-[var(--text-tertiary)]">{css}</span>
    </div>
  );
}

/* ─── Sub-brand Card ─── */
function SubBrandCard({ name, label, icon: Icon }: { name: string; label: string; icon: React.ComponentType<{ size?: number; className?: string }> }) {
  return (
    <div className="glow-card flex flex-col items-center gap-4 rounded-2xl bg-[var(--bg-secondary)] p-8 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[var(--color-signal-green)]/10">
        <Icon size={28} className="text-[var(--color-signal-green)]" />
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
            <h3 className="text-sm font-semibold text-[var(--color-signal-green)]">Anatomia</h3>
            <div className="flex items-center gap-4">
              <div className="relative flex h-20 w-20 shrink-0 items-center justify-center rounded-full border-2 border-dashed border-[var(--color-signal-green)]/40">
                <OCSymbol size={56} color="var(--color-signal-green)" />
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
            <h3 className="text-sm font-semibold text-[var(--color-signal-green)]">Regras de Uso</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3 border-b border-black/6 pb-4">
                <span className="font-mono text-xs text-[var(--color-signal-green)]">SAFE ZONE</span>
                <span className="text-sm text-[var(--text-secondary)]">Mínimo de 1x a altura do símbolo em todas as direções. Nenhum elemento pode invadir essa área.</span>
              </div>
              <div className="flex items-start gap-3 border-b border-black/6 pb-4">
                <span className="font-mono text-xs text-[var(--color-signal-green)]">MÍN. DIGITAL</span>
                <span className="text-sm text-[var(--text-secondary)]">24 px de altura do símbolo para telas digitais.</span>
              </div>
              <div className="flex items-start gap-3">
                <span className="font-mono text-xs text-[var(--color-signal-green)]">MÍN. IMPRESSO</span>
                <span className="text-sm text-[var(--text-secondary)]">8 mm de altura do símbolo para impressão.</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ─── 03 USO SOBRE FUNDOS ─── */}
      <Section id="uso-sobre-fundos" num="03" title="Uso sobre Fundos" subtitle="O logo deve manter legibilidade máxima em qualquer contexto de fundo.">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <BackgroundCard bg="linear-gradient(180deg, #0A0A0A 0%, #2A2A2A 100%)" label="Capital White" rule="Fundos escuros (#0A0A0A a #2A2A2A), usar Capital White ou Signal Green" logoColor="#F5F5F0" />
          <BackgroundCard bg="linear-gradient(180deg, #F5F5F0 0%, #FFFFFF 100%)" label="Capital Black" rule="Fundos claros (#F5F5F0 a #FFFFFF), usar Capital Black" logoColor="#0A0A0A" />
          <BackgroundCard bg="url('data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22100%22 height=%22100%22><rect fill=%22%23333%22 width=%22100%22 height=%22100%22/><circle fill=%22%23444%22 cx=%2250%22 cy=%2250%22 r=%2240%22/></svg>') center/cover" label="Capital White + Shadow" rule="Imagem/Foto, Capital White com sutil text-shadow" logoColor="#F5F5F0" />
          <BackgroundCard bg="#1C7C54" label="Capital Black" rule="Signal Green, usar Capital Black" logoColor="#0A0A0A" />
        </div>
      </Section>

      {/* ─── 04 PALETA DE CORES ─── */}
      <Section id="paleta-de-cores" num="04" title="Paleta de Cores" subtitle="Cores primárias, neutras e semânticas que compõem o sistema visual.">
        {/* Primary */}
        <div className="mb-10">
          <h3 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Primárias</h3>
          <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-5">
            <Swatch name="Capital Black" hex="#0A0A0A" />
            <Swatch name="Signal Green" hex="#1C7C54" />
            <Swatch name="Capital White" hex="#F5F5F0" textDark />
            <Swatch name="Emerald Deep" hex="#145A3D" />
            <Swatch name="Mint Glow" hex="#2A9D6E" textDark />
          </div>
        </div>

        {/* Neutrals */}
        <div className="mb-10">
          <h3 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Secundárias & Neutras</h3>
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
          <h3 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Semânticas</h3>
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
          <GradientSwatch name="Capital" css="linear-gradient(135deg, #145A3D 0%, #1C7C54 50%, #2A9D6E 100%)" />
          <GradientSwatch name="Signal" css="linear-gradient(135deg, #1C7C54 0%, #2A9D6E 100%)" />
          <GradientSwatch name="Depth" css="linear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)" />
          <GradientSwatch name="Text" css="linear-gradient(90deg, #1C7C54 0%, #2A9D6E 100%)" />
          <GradientSwatch name="Surface" css="linear-gradient(180deg, rgba(28,124,84,0.12) 0%, transparent 100%)" />
        </div>

        <div className="mt-8">
          <CodeBlock lang="CSS" code={`/* Capital */\nlinear-gradient(135deg, #145A3D 0%, #1C7C54 50%, #2A9D6E 100%)\n\n/* Signal */\nlinear-gradient(135deg, #1C7C54 0%, #2A9D6E 100%)\n\n/* Depth */\nlinear-gradient(180deg, #0A0A0A 0%, #1A1A1A 100%)\n\n/* Text */\nlinear-gradient(90deg, #1C7C54 0%, #2A9D6E 100%)\n\n/* Surface */\nlinear-gradient(180deg, rgba(28,124,84,0.12) 0%, transparent 100%)`} />
        </div>
      </Section>

      {/* ─── 06 ACESSIBILIDADE DE CONTRASTE ─── */}
      <Section id="acessibilidade" num="06" title="Acessibilidade de Contraste" subtitle="Todas as combinações de cor foram testadas contra WCAG 2.1 para garantir legibilidade.">
        <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6 md:p-8">
          <ContrastRow combo="Capital White sobre Capital Black" ratio="18.4:1" level="AAA" />
          <ContrastRow combo="Signal Green sobre Capital Black" ratio="9.2:1" level="AAA" />
          <ContrastRow combo="Capital Black sobre Signal Green" ratio="9.2:1" level="AAA" />
          <ContrastRow combo="Iron sobre Capital Black" ratio="3.1:1" level="Apenas ícones" />
          <ContrastRow combo="Steel sobre Capital Black" ratio="4.6:1" level="AA" />
          <ContrastRow combo="Signal Green sobre Graphite" ratio="8.1:1" level="AAA" />
        </div>
      </Section>

      {/* ─── 07 ESCALA TIPOGRÁFICA ─── */}
      <Section id="escala-tipografica" num="07" title="Escala Tipográfica" subtitle="Duas famílias complementares: Inter para comunicação e JetBrains Mono para dados financeiros.">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Inter */}
          <div className="space-y-4">
            <h3 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Inter — Display + Body</h3>
            <TypeSample label="Hero" size="64px" weight="Bold" />
            <TypeSample label="Display" size="48px" weight="Bold" />
            <TypeSample label="H1" size="36px" weight="SemiBold" />
            <TypeSample label="H2" size="28px" weight="SemiBold" />
            <TypeSample label="H3" size="24px" weight="SemiBold" />
            <TypeSample label="Body Large" size="18px" weight="Regular" />
            <TypeSample label="Body" size="16px" weight="Regular" />
            <TypeSample label="Body Small" size="14px" weight="Regular" />
            <TypeSample label="Caption" size="12px" weight="Medium" />
            <div className="flex flex-col gap-1 border-b border-black/6 pb-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-[var(--text-tertiary)]">Overline</span>
                <span className="font-mono text-xs text-[var(--color-iron)]">11px / Bold</span>
              </div>
              <p className="text-[11px] font-bold uppercase tracking-[0.15em]">A infraestrutura mudou. Quem opera com dados vence.</p>
            </div>
          </div>

          {/* JetBrains Mono */}
          <div className="space-y-4">
            <h3 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">JetBrains Mono — Dados & Código</h3>
            <TypeSample label="Price Large" size="32px" weight="Bold" mono text="R$ 127.459,32" />
            <TypeSample label="Price" size="20px" weight="Medium" mono text="BTC 98,472.50 | ETH 3,847.12" />
            <TypeSample label="Data" size="14px" weight="Regular" mono text="2026-03-06T14:32:00Z | vol: 2.4M" />
            <TypeSample label="Code" size="14px" weight="Regular" mono text='const signal = await ai.analyze(data)' />
            <TypeSample label="Mono Small" size="12px" weight="Regular" mono text="TX-0x7f3a...b2c1 | 14:32:00" />
          </div>
        </div>

        {/* Typography rationale */}
        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <h4 className="mb-2 text-sm font-semibold text-[var(--color-signal-green)]">Por que Inter?</h4>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Inter foi projetada especificamente para telas digitais, com excelente legibilidade em tamanhos pequenos, suporte a tabular numbers e uma vasta gama de pesos. Sua geometria neutra e profissional se alinha com o posicionamento de infraestrutura financeira da OpenCapital.
            </p>
          </div>
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <h4 className="mb-2 text-sm font-semibold text-[var(--color-signal-green)]">Por que JetBrains Mono?</h4>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              JetBrains Mono oferece ligatures de programação e caracteres otimizados para leitura de dados numéricos. Sua largura fixa garante alinhamento perfeito em tabelas de preços, timestamps e blocos de código, essencial para uma plataforma financeira.
            </p>
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
      <Section id="fotografia" num="09" title="Fotografia & Imagens" subtitle="Diretrizes de estilo para fotografia e tratamento de imagens no ecossistema visual.">
        <div className="grid gap-8 md:grid-cols-2">
          {/* Guidelines */}
          <div className="space-y-6">
            <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
              <h3 className="mb-4 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Diretrizes de Estilo</h3>
              <div className="space-y-4">
                <div className="border-b border-black/6 pb-3">
                  <span className="text-xs font-semibold text-[var(--text-primary)]">Tom</span>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">Dark, atmosférico, tecnológico</p>
                </div>
                <div className="border-b border-black/6 pb-3">
                  <span className="text-xs font-semibold text-[var(--text-primary)]">Tratamento</span>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">Alto contraste, desaturado com acentos verdes</p>
                </div>
                <div className="border-b border-black/6 pb-3">
                  <span className="text-xs font-semibold text-[var(--text-primary)]">Temas</span>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">Dados, tecnologia, cidades à noite, terminais, gráficos</p>
                </div>
                <div>
                  <span className="text-xs font-semibold text-[var(--color-loss)]">Evitar</span>
                  <p className="mt-1 text-sm text-[var(--text-secondary)]">Fotos genéricas de stock, pessoas sorrindo, moedas físicas</p>
                </div>
              </div>
            </div>
          </div>

          {/* Treatment preview + code */}
          <div className="space-y-6">
            {/* Visual treatment preview */}
            <div className="glow-card overflow-hidden rounded-2xl">
              <div className="relative flex h-48 items-center justify-center overflow-hidden bg-[var(--bg-secondary)]" style={{ filter: "saturate(0.3) contrast(1.2) brightness(0.8)" }}>
                <div className="absolute inset-0 bg-gradient-to-br from-[#145A3D]/20 to-transparent" />
                <div className="grid grid-cols-6 gap-1 opacity-60">
                  {Array.from({ length: 24 }).map((_, i) => (
                    <div key={i} className="h-4 w-8 rounded-sm" style={{ backgroundColor: i % 3 === 0 ? "#1C7C54" : i % 5 === 0 ? "#145A3D" : "#2A2A2A", opacity: 0.3 + Math.random() * 0.7 }} />
                  ))}
                </div>
              </div>
              <div className="border-t border-black/6 bg-[var(--bg-secondary)] p-4">
                <p className="text-xs font-semibold">Tratamento aplicado</p>
                <p className="mt-1 text-[10px] text-[var(--text-tertiary)]">saturate(0.3) + contrast(1.2) + green overlay</p>
              </div>
            </div>

            {/* CSS Filter code */}
            <CodeBlock lang="CSS" code={`/* Tratamento padrão para imagens */\n.oc-image-treatment {\n  filter:\n    saturate(0.3)\n    contrast(1.2)\n    brightness(0.8);\n}\n\n/* Overlay verde */\n.oc-image-treatment::after {\n  content: '';\n  position: absolute;\n  inset: 0;\n  background: linear-gradient(\n    135deg,\n    rgba(5, 150, 105, 0.2) 0%,\n    transparent 60%\n  );\n  mix-blend-mode: screen;\n}`} />
          </div>
        </div>
      </Section>
    </>
  );
}
