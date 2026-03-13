import { Section } from "@/components/brandbook-shared";
import { OCSymbol, OCLogo } from "@/components/oc-logo";
import {
  Activity,
  ArrowRight,
  ArrowUpRight,
  ChevronRight,
  Crosshair,
  BarChart3,
  Brain,
  Globe,
  Instagram,
  LayoutDashboard,
  Linkedin,
  Mail,
  Newspaper,
  Phone,
  Shield,
  Sparkles,
  TrendingUp,
  Twitter,
  Zap,
} from "lucide-react";

export default function AplicacoesPage() {
  return (
    <>
      {/* ═══════════════════════════════════════════════════════════
          01 — PAPELARIA CORPORATIVA
      ═══════════════════════════════════════════════════════════ */}
      <Section
        id="papelaria"
        num="01"
        title="Papelaria Corporativa"
        subtitle="Aplicações da identidade em materiais impressos e digitais do dia a dia."
      >
        <div className="grid gap-10 md:grid-cols-2">
          {/* ── Cartão de Visita Frente ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Cartão de Visita · Frente
            </span>
            <div className="glow-card flex aspect-[1.75/1] flex-col items-center justify-center rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-8">
              <OCLogo size="md" color="var(--text-primary)" />
            </div>
          </div>

          {/* ── Cartão de Visita Verso ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Cartão de Visita · Verso
            </span>
            <div className="glow-card flex aspect-[1.75/1] flex-col justify-between rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-8">
              <div>
                <p className="text-lg font-bold">Maria Silva</p>
                <p className="mt-0.5 text-sm text-[var(--color-signal-blue)]">Head of Product</p>
              </div>
              <div className="space-y-1.5 text-sm text-[var(--text-secondary)]">
                <div className="flex items-center gap-2">
                  <Mail size={12} className="text-[var(--text-tertiary)]" />
                  <span>contato@theopencapital.org</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={12} className="text-[var(--text-tertiary)]" />
                  <span className="font-mono text-xs">+55 11 99999-9999</span>
                </div>
                <div className="flex items-center gap-2">
                  <Globe size={12} className="text-[var(--text-tertiary)]" />
                  <span>theopencapital.org</span>
                </div>
              </div>
            </div>
          </div>

          {/* ── Assinatura de Email ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Assinatura de Email
            </span>
            <div className="glow-card rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-6">
              <div className="flex items-start gap-4">
                <div className="h-full w-0.5 shrink-0 rounded-full bg-[var(--color-signal-blue)]" />
                <div className="space-y-1">
                  <p className="text-sm font-bold">Maria Silva</p>
                  <p className="text-xs text-[var(--color-signal-blue)]">Head of Product</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 pt-1 text-xs text-[var(--text-tertiary)]">
                    <span className="flex items-center gap-1">
                      <Mail size={10} /> contato@theopencapital.org
                    </span>
                    <span className="flex items-center gap-1">
                      <Phone size={10} /> +55 11 99999-9999
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe size={10} /> theopencapital.org
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Cabeçalho do Site ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Cabeçalho do Site
            </span>
            <div className="glow-card flex items-center justify-between rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] px-8 py-5">
              <div className="flex items-center gap-2">
                <OCSymbol size={16} color="var(--color-signal-blue)" />
                <span className="font-mono text-xs font-bold uppercase tracking-[0.2em]">
                  OpenCapital{" "}
                  <span className="text-[var(--text-tertiary)]">&mdash;</span>{" "}
                  <span className="text-[var(--text-secondary)]">Inteligência Financeira</span>
                </span>
              </div>
              <div className="flex items-center gap-4 text-xs text-[var(--text-tertiary)]">
                <span>Produtos</span>
                <span>Sobre</span>
                <span>Contato</span>
              </div>
            </div>
          </div>

          {/* ── Papel Timbrado ── */}
          <div className="space-y-2 md:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Papel Timbrado
            </span>
            <div className="glow-card rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-10">
              <OCLogo size="sm" color="var(--text-primary)" />
              <div className="my-5 h-px w-16 bg-[var(--color-signal-blue)]" />
              <p className="text-sm text-[var(--text-tertiary)]">
                São Paulo, 6 de março de 2026
              </p>
              <div className="mt-8 space-y-2">
                <div className="h-2 w-3/4 rounded bg-[var(--text-primary)]/5" />
                <div className="h-2 w-5/6 rounded bg-[var(--text-primary)]/5" />
                <div className="h-2 w-2/3 rounded bg-[var(--text-primary)]/5" />
                <div className="h-2 w-4/5 rounded bg-[var(--text-primary)]/5" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          02 — TEMPLATES DE REDES SOCIAIS
      ═══════════════════════════════════════════════════════════ */}
      <Section
        id="social-media"
        num="02"
        title="Templates de Redes Sociais"
        subtitle="Templates otimizados para cada formato e plataforma."
      >
        <div className="grid gap-10 lg:grid-cols-3">
          {/* ── Instagram Post ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Instagram Post · 1:1
            </span>
            <div className="glow-card flex aspect-square flex-col justify-between rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-8">
              <Instagram size={20} className="text-[var(--text-tertiary)]" />
              <div className="space-y-3">
                <p className="text-2xl font-bold leading-tight">
                  A nova era
                  <br />
                  do dinheiro.
                </p>
                <p className="text-sm text-[var(--text-secondary)]">
                  Dados agora podem operar por você.
                </p>
              </div>
              <OCLogo size="sm" color="var(--text-primary)" />
            </div>
          </div>

          {/* ── LinkedIn Banner ── */}
          <div className="space-y-2 lg:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              LinkedIn Banner · 4:1
            </span>
            <div className="glow-card flex aspect-[4/1] items-center justify-between rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] px-10">
              <div className="space-y-1.5">
                <OCLogo size="md" color="var(--text-primary)" />
                <p className="max-w-md text-xs text-[var(--text-secondary)]">
                  A infraestrutura da nova inteligência financeira.
                </p>
              </div>
              <div className="flex items-center gap-2">
                {["IA", "Dados", "Finanças"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-[var(--border-hover)] px-3 py-1 font-mono text-[10px] text-[var(--text-tertiary)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Twitter/X Header ── */}
          <div className="space-y-2 lg:col-span-3">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Twitter/X Header · 3:1
            </span>
            <div className="glow-card flex aspect-[3/1] items-center justify-center rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] px-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-signal-blue)]/10">
                  <OCSymbol size={24} color="var(--color-signal-blue)" />
                </div>
                <div>
                  <span className="text-2xl font-bold tracking-tight">OpenCapital</span>
                  <p className="text-xs text-[var(--text-tertiary)]">
                    A infraestrutura da nova inteligência financeira.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          03 — APRESENTAÇÕES
      ═══════════════════════════════════════════════════════════ */}
      <Section
        id="apresentacoes"
        num="03"
        title="Apresentações"
        subtitle="Slides padrão para decks institucionais e de produto."
      >
        <div className="grid gap-10">
          {/* ── Slide Título ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Slide · Título
            </span>
            <div className="glow-card flex aspect-video flex-col items-center justify-center rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-12 text-center">
              <OCLogo size="lg" color="var(--text-primary)" />
              <p className="mt-4 max-w-lg text-sm text-[var(--text-secondary)] md:text-base">
                A infraestrutura da nova inteligência financeira
              </p>
              <span className="mt-6 font-mono text-xs text-[var(--text-tertiary)]">2026</span>
            </div>
          </div>

          {/* ── Slide Conteúdo ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Slide · Conteúdo
            </span>
            <div className="glow-card flex aspect-video flex-col justify-between rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-10 md:p-14">
              <div className="grid gap-8 md:grid-cols-3">
                {[
                  {
                    icon: Brain,
                    title: "Inteligência com IA",
                    desc: "Modelos de IA especializados em dados financeiros",
                  },
                  {
                    icon: Zap,
                    title: "Processamento de Dados",
                    desc: "2.4M data points processados em tempo real",
                  },
                  {
                    icon: Shield,
                    title: "Análise de Risco",
                    desc: "Gestão de risco baseada em dados",
                  },
                ].map((item) => (
                  <div key={item.title} className="space-y-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-signal-blue)]/10">
                      <item.icon size={20} className="text-[var(--color-signal-blue)]" />
                    </div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-6 border-t border-[var(--border-default)] pt-6">
                {["2.4M+ Data Points", "99.9% Uptime", "<50ms Latência"].map((stat) => (
                  <span key={stat} className="font-mono text-xs text-[var(--color-signal-blue)]">
                    {stat}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* ── Slide Encerramento ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Slide · Encerramento
            </span>
            <div className="glow-card flex aspect-video flex-col items-center justify-center rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-12 text-center">
              <p className="text-2xl font-bold md:text-3xl">
                Comece a operar com dados.
              </p>
              <div className="mt-8 space-y-1.5 text-sm text-[var(--text-tertiary)]">
                <p>contato@theopencapital.org</p>
                <p className="font-mono text-xs">+55 11 99999-9999</p>
                <p>theopencapital.org</p>
              </div>
              <div className="mt-6">
                <OCLogo size="sm" color="var(--text-primary)" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          04 — MERCHANDISE
      ═══════════════════════════════════════════════════════════ */}
      <Section
        id="merchandise"
        num="04"
        title="Merchandise"
        subtitle="Produtos promocionais com a identidade OpenCapital."
      >
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* ── Camiseta ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Camiseta
            </span>
            <div className="glow-card flex aspect-square flex-col items-center justify-center rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-8">
              <div className="flex h-32 w-28 flex-col items-center justify-center rounded-lg bg-[var(--bg-tertiary)]">
                <OCLogo size="sm" color="var(--text-primary)" />
              </div>
              <p className="mt-4 text-xs text-[var(--text-tertiary)]">Algodão no tom do tema, logo contrastante</p>
            </div>
          </div>

          {/* ── Adesivo ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Adesivo
            </span>
            <div className="glow-card flex aspect-square flex-col items-center justify-center rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-8">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--bg-tertiary)]">
                <OCSymbol size={32} color="var(--color-signal-blue)" />
              </div>
              <p className="mt-4 text-xs text-[var(--text-tertiary)]">Símbolo Signal Blue, fundo neutro</p>
            </div>
          </div>

          {/* ── Caderno ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Caderno
            </span>
            <div className="glow-card flex aspect-square flex-col items-center justify-center rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-8">
              <div className="flex h-36 w-24 flex-col items-center justify-end rounded-lg border border-[var(--border-default)] bg-[var(--bg-tertiary)] p-4">
                <span className="font-mono text-[8px] uppercase leading-tight tracking-[0.15em] text-[var(--text-tertiary)]">
                  The
                  <br />
                  Infrastructure
                </span>
              </div>
              <p className="mt-4 text-xs text-[var(--text-tertiary)]">Capa no tom do tema, tipografia mono</p>
            </div>
          </div>

          {/* ── Caneca ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Caneca
            </span>
            <div className="glow-card flex aspect-square flex-col items-center justify-center rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-8">
              <div className="flex h-24 w-20 items-center justify-center rounded-lg border-2 border-[var(--border-hover)] bg-[var(--bg-tertiary)]">
                <OCLogo size="sm" color="var(--text-primary)" />
              </div>
              <p className="mt-4 text-xs text-[var(--text-tertiary)]">Wordmark minimalista</p>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          05 — WEBSITE
      ═══════════════════════════════════════════════════════════ */}
      <Section
        id="website"
        num="05"
        title="Website"
        subtitle="Prévias das principais seções do site institucional."
      >
        <div className="grid gap-10">
          {/* ── Hero ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Website · Hero
            </span>
            <div className="glow-card rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)]">
              <div className="flex flex-col items-center justify-center px-8 py-16 text-center md:py-24">
                <h3 className="max-w-2xl text-2xl font-bold leading-tight md:text-4xl">
                  A infraestrutura da nova inteligência financeira.
                </h3>
                <p className="mt-4 max-w-lg text-sm text-[var(--text-secondary)]">
                  A infraestrutura mudou. Quem opera com dados vence.
                </p>
                <button className="mt-8 flex items-center gap-2 rounded-full bg-[var(--color-signal-blue)] px-6 py-3 text-sm font-semibold text-[var(--bg-primary)] transition hover:opacity-90">
                  Comece Agora
                  <ArrowUpRight size={16} />
                </button>
              </div>
            </div>
          </div>

          {/* ── Serviços ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Website · Serviços
            </span>
            <div className="glow-card rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-8 md:p-12">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { num: "01", icon: Brain, title: "Inteligência com IA" },
                  { num: "02", icon: BarChart3, title: "Processamento de Dados" },
                  { num: "03", icon: Zap, title: "Analytics em Tempo Real" },
                  { num: "04", icon: Shield, title: "Gestão de Risco" },
                ].map((svc) => (
                  <div key={svc.num} className="group space-y-3 rounded-xl border border-[var(--border-default)] bg-[var(--bg-tertiary)] p-5 transition hover:border-[var(--color-signal-blue)]/30">
                    <span className="font-mono text-xs text-[var(--color-signal-blue)]">{svc.num}</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-signal-blue)]/10">
                      <svc.icon size={18} className="text-[var(--color-signal-blue)]" />
                    </div>
                    <p className="text-sm font-semibold">{svc.title}</p>
                    <ChevronRight size={14} className="text-[var(--text-tertiary)] transition group-hover:text-[var(--color-signal-blue)]" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* ── Sobre ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Website · Sobre
            </span>
            <div className="glow-card rounded-2xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-8 md:p-12">
              <div className="flex flex-col items-center justify-center gap-6 text-center">
                <p className="text-sm uppercase tracking-widest text-[var(--text-tertiary)]">Métricas Principais</p>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  {[
                    { value: "2.4M+", label: "Data Points" },
                    { value: "<50ms", label: "Latência" },
                    { value: "99.9%", label: "Uptime" },
                  ].map((metric) => (
                    <div key={metric.label} className="space-y-1">
                      <p className="font-mono text-2xl font-bold text-[var(--color-signal-blue)]">
                        {metric.value}
                      </p>
                      <p className="text-xs text-[var(--text-tertiary)]">{metric.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════════════════════
          06 — EMAIL / NEWSLETTER
      ═══════════════════════════════════════════════════════════ */}
      <Section
        id="email-newsletter"
        num="06"
        title="Email / Newsletter"
        subtitle="Template de newsletter com a identidade visual aplicada."
      >
        <div className="mx-auto max-w-xl space-y-2">
          <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
            Template de Newsletter
          </span>
          <div className="glow-card overflow-hidden rounded-2xl border border-[var(--border-default)]">
            {/* Header */}
            <div className="flex items-center justify-between bg-[var(--bg-secondary)] px-8 py-6">
              <OCLogo size="sm" color="var(--text-primary)" />
              <span className="font-mono text-[10px] text-[var(--text-tertiary)]">Mar 2026</span>
            </div>

            {/* Body */}
            <div className="bg-[var(--bg-tertiary)] px-8 py-10">
              <p className="text-lg font-bold">Relatório Semanal de Inteligência</p>
              <p className="mt-3 text-sm leading-relaxed text-[var(--text-secondary)]">
                Os dados desta semana mostram uma tendência clara de migração
                para operações automatizadas. Confira os principais insights abaixo.
              </p>
              <div className="mt-4 space-y-2">
                <div className="h-2 w-full rounded bg-[var(--text-primary)]/5" />
                <div className="h-2 w-5/6 rounded bg-[var(--text-primary)]/5" />
                <div className="h-2 w-3/4 rounded bg-[var(--text-primary)]/5" />
              </div>
              <div className="mt-8 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-signal-blue)] px-6 py-2.5 text-sm font-semibold text-[var(--bg-primary)]">
                  Ver Relatório Completo
                  <ArrowUpRight size={14} />
                </span>
              </div>
            </div>

            {/* Footer */}
            <div className="flex items-center justify-between bg-[var(--bg-secondary)] px-8 py-5">
              <div className="flex items-center gap-3 text-[var(--text-tertiary)]">
                <Instagram size={14} />
                <Linkedin size={14} />
                <Twitter size={14} />
              </div>
              <div className="flex items-center gap-3 text-xs text-[var(--text-tertiary)]">
                <span>Descadastrar</span>
                <span>&middot;</span>
                <span>Preferências</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* ═══════════════════════════════════════════════════════════
          07 — PLATAFORMA (APP)
      ═══════════════════════════════════════════════════════════ */}
      <Section
        id="plataforma-app"
        num="07"
        title="Plataforma (App)"
        subtitle="Exemplos reais de como a nova paleta Signal Blue se aplica nas telas da plataforma de investimentos."
      >
        <div className="grid gap-10">
          {/* ── Dashboard ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Dashboard · Visão Geral
            </span>
            <div className="glow-card overflow-hidden rounded-2xl border border-[var(--border-default)]">
              {/* App Header */}
              <div className="flex items-center justify-between border-b border-black/[0.06] bg-white/70 px-6 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[13px] font-semibold tracking-tight text-[#0A0A0A]">OpenCapital</span>
                    <OCSymbol size={14} color="#0A0A0A" />
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-[#6B7280]">
                    <span className="flex items-center gap-1 text-[#2563EB]">
                      <LayoutDashboard size={12} /> Dashboard
                    </span>
                    <span className="flex items-center gap-1">
                      <Brain size={12} /> Agentes
                    </span>
                    <span className="flex items-center gap-1">
                      <Newspaper size={12} /> Klarifeed
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex size-5 items-center justify-center rounded-full bg-[#2563EB]/15 text-[8px] font-bold text-[#2563EB]">A</div>
                  <span className="text-[10px] text-[#6B7280]">Alex</span>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="bg-[#F5F5F0] p-6">
                {/* Welcome Hero */}
                <div className="mb-5 flex items-center gap-4 rounded-xl border border-black/[0.06] bg-white/80 p-5">
                  <div className="flex size-11 items-center justify-center rounded-full border border-[#2563EB]/20 bg-gradient-to-br from-[#2563EB]/20 to-[#2563EB]/5 text-[16px] font-bold text-[#0A0A0A]/80">
                    A
                  </div>
                  <div>
                    <p className="text-[8px] font-bold uppercase tracking-[0.2em] text-[#6B7280]/60">Bem-vindo de volta</p>
                    <p className="text-[16px] font-semibold text-[#0A0A0A]/85">Alex Gonçalves</p>
                  </div>
                  <div className="ml-auto flex items-center gap-1.5">
                    <span className="flex items-center gap-1 rounded-md bg-[#22C55E]/8 px-2 py-0.5 text-[8px] font-bold uppercase text-[#22C55E]/60">
                      <span className="inline-block size-1 rounded-full bg-[#22C55E]" /> Online
                    </span>
                    <span className="flex items-center gap-1 text-[9px] text-[#6B7280]/30">
                      <Sparkles size={10} /> Plano Pro
                    </span>
                  </div>
                </div>

                {/* KPI Strip */}
                <div className="mb-5 grid grid-cols-3 gap-3">
                  {[
                    { label: "Rentabilidade", value: "+12.45%", color: "#22C55E", icon: TrendingUp },
                    { label: "vs CDI", value: "1.82x", color: "#0A0A0A", icon: Crosshair },
                    { label: "Saldo", value: "R$ 47.250,00", color: "#0A0A0A", icon: Zap },
                  ].map((kpi) => (
                    <div key={kpi.label} className="rounded-xl border border-black/[0.06] bg-white/80 px-4 py-3">
                      <div className="flex items-center gap-2">
                        <div className="flex size-6 items-center justify-center rounded-md bg-[#2563EB]/8">
                          <kpi.icon size={12} className="text-[#2563EB]/60" />
                        </div>
                        <div>
                          <p className="text-[7px] font-bold uppercase tracking-[0.15em] text-[#6B7280]/50">{kpi.label}</p>
                          <p className="font-mono text-[12px] font-semibold" style={{ color: kpi.color }}>{kpi.value}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Main Grid */}
                <div className="grid grid-cols-3 gap-5">
                  {/* Left: Klarifeed + Agents */}
                  <div className="col-span-2 space-y-5">
                    {/* Klarifeed Preview */}
                    <div className="rounded-xl border border-black/[0.06] bg-white/80 p-4">
                      <div className="mb-3 flex items-center gap-2">
                        <Newspaper size={14} className="text-[#2563EB]" />
                        <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-[#6B7280]/50">Klarifeed</span>
                        <span className="ml-auto font-mono text-[9px] text-[#2563EB]/40">Ver todos →</span>
                      </div>
                      <div className="flex gap-3">
                        <div className="flex-1 rounded-lg bg-[#F5F5F0] p-3">
                          <div className="mb-2 h-16 rounded bg-gradient-to-br from-[#2563EB]/10 to-[#3B82F6]/5" />
                          <p className="text-[10px] font-semibold text-[#0A0A0A]/80">Brasil no Centro da Nova Guerra Fria dos Minerais</p>
                          <p className="mt-1 text-[8px] text-[#6B7280]/60">O desordem geopolítica global está sendo redesenhada...</p>
                        </div>
                        <div className="flex-1 rounded-lg bg-[#F5F5F0] p-3">
                          <div className="mb-2 h-16 rounded bg-gradient-to-br from-[#3B82F6]/10 to-[#2563EB]/5" />
                          <p className="text-[10px] font-semibold text-[#0A0A0A]/80">A Dupla Ameaça da IA: Direitos Autorais em Xeque</p>
                          <p className="mt-1 text-[8px] text-[#6B7280]/60">Dois casos judiciais marcantes ameaçam...</p>
                        </div>
                      </div>
                    </div>

                    {/* Agents */}
                    <div>
                      <div className="mb-3 flex items-center gap-2">
                        <div className="flex size-5 items-center justify-center rounded-md bg-[#2563EB]/10">
                          <Activity size={12} className="text-[#2563EB]" />
                        </div>
                        <span className="text-[11px] text-[#0A0A0A]/80">Ecossistema de IAs</span>
                        <div className="h-px flex-1 bg-gradient-to-r from-black/[0.06] to-transparent" />
                        <span className="font-mono text-[8px] text-[#6B7280]/40">2 agentes</span>
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        {[
                          { name: "Klarifeed", tagline: "Tire duvidas sobre noticias financeiras", icon: Newspaper, color: "#2563EB" },
                          { name: "Print & Trade", tagline: "Análise e Recomendação de Operações", icon: BarChart3, color: "#3B82F6" },
                        ].map((agent) => (
                          <div key={agent.name} className="rounded-xl border border-black/[0.06] bg-white/80 p-4">
                            <div className="flex items-start justify-between">
                              <div className="flex size-8 items-center justify-center rounded-lg border border-black/[0.04]" style={{ background: `${agent.color}10` }}>
                                <agent.icon size={14} style={{ color: agent.color }} />
                              </div>
                              <span className="flex items-center gap-1 rounded-md bg-[#22C55E]/8 px-1.5 py-0.5 text-[7px] font-bold uppercase text-[#22C55E]/60">
                                <span className="inline-block size-1 rounded-full bg-[#22C55E]" /> Ativo
                              </span>
                            </div>
                            <p className="mt-2 text-[11px] font-semibold text-[#0A0A0A]/85">{agent.name}</p>
                            <p className="mt-0.5 text-[9px] font-medium" style={{ color: agent.color }}>{agent.tagline}</p>
                            <p className="mt-2 text-[8px] text-[#6B7280]/50">Agente conversacional que responde perguntas sobre noticias...</p>
                            <div className="mt-3 flex items-center justify-between rounded-md border border-black/[0.04] bg-[#F5F5F0] px-3 py-1.5 text-[9px] text-[#0A0A0A]/70">
                              Perguntar sobre notícia
                              <ChevronRight size={10} className="text-[#6B7280]/25" />
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Sidebar */}
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <div className="flex size-5 items-center justify-center rounded-md bg-[#2563EB]/10">
                        <ArrowUpRight size={12} className="text-[#2563EB]" />
                      </div>
                      <span className="text-[11px] text-[#0A0A0A]/80">Seus dados</span>
                    </div>

                    {/* Accuracy Card */}
                    <div className="rounded-xl border border-black/[0.06] bg-white/80 p-4">
                      <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#6B7280]/50">Assertividade dos agentes</p>
                      <p className="mt-1 text-[9px] text-[#6B7280]/60">Disponivel quando agentes emitirem operações.</p>
                      <div className="mt-2 h-1 rounded-full bg-[#2563EB]/10">
                        <div className="h-full w-3/5 rounded-full bg-[#2563EB]" />
                      </div>
                    </div>

                    {/* Status */}
                    <div className="rounded-xl border border-black/[0.06] bg-white/80 p-4">
                      <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#6B7280]/50">Status de atualização</p>
                      <div className="mt-2 flex items-center gap-2">
                        <span className="rounded bg-[#2563EB]/10 px-2 py-0.5 text-[8px] font-bold text-[#2563EB]">ATUALIZADO</span>
                      </div>
                    </div>

                    {/* Gamification */}
                    <div className="rounded-xl border border-black/[0.06] bg-white/80 p-4">
                      <p className="text-[8px] font-bold uppercase tracking-[0.12em] text-[#6B7280]/50">Gamificação</p>
                      <div className="mt-2 space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-[9px] text-[#0A0A0A]/70">Trades</span>
                          <span className="font-mono text-[9px] font-semibold text-[#2563EB]">3 <span className="text-[7px] text-[#22C55E]">↑ +4.00%</span></span>
                        </div>
                        <div className="space-y-1.5">
                          <p className="text-[7px] font-bold uppercase text-[#6B7280]/40">Missões do dia</p>
                          <div className="flex items-center gap-2 rounded-md bg-[#2563EB]/5 px-2 py-1.5">
                            <span className="inline-block size-1.5 rounded-full bg-[#2563EB]" />
                            <span className="text-[8px] text-[#0A0A0A]/70">Print & Trade disparou</span>
                          </div>
                          <div className="flex items-center gap-2 rounded-md bg-[#F5F5F0] px-2 py-1.5">
                            <span className="inline-block size-1.5 rounded-full bg-[#6B7280]/20" />
                            <span className="text-[8px] text-[#6B7280]/50">Analisar uma ação no Capital School</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── Agentes ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Agentes · Catálogo
            </span>
            <div className="glow-card overflow-hidden rounded-2xl border border-[var(--border-default)]">
              {/* App Header */}
              <div className="flex items-center justify-between border-b border-black/[0.06] bg-white/70 px-6 py-3 backdrop-blur-sm">
                <div className="flex items-center gap-5">
                  <div className="flex items-center gap-1.5">
                    <span className="text-[13px] font-semibold tracking-tight text-[#0A0A0A]">OpenCapital</span>
                    <OCSymbol size={14} color="#0A0A0A" />
                  </div>
                  <div className="flex items-center gap-3 text-[11px] text-[#6B7280]">
                    <span className="flex items-center gap-1">
                      <LayoutDashboard size={12} /> Dashboard
                    </span>
                    <span className="flex items-center gap-1 text-[#2563EB]">
                      <Brain size={12} /> Agentes
                    </span>
                    <span className="flex items-center gap-1">
                      <Newspaper size={12} /> Klarifeed
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex size-5 items-center justify-center rounded-full bg-[#2563EB]/15 text-[8px] font-bold text-[#2563EB]">A</div>
                  <span className="text-[10px] text-[#6B7280]">Alex</span>
                </div>
              </div>

              {/* Agents Content */}
              <div className="bg-[#F5F5F0] p-6">
                <div className="mb-5">
                  <h3 className="text-[18px] font-semibold text-[#0A0A0A]">Agentes</h3>
                  <p className="mt-0.5 text-[11px] text-[#6B7280]">Escolha um agente para começar sua análise</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    {
                      name: "Klarifeed",
                      tagline: "Tire dúvidas sobre notícias financeiras",
                      desc: "Agente conversacional que responde perguntas sobre notícias do Klarifeed, considerando seu perfil de investidor.",
                      features: ["Perguntas sobre notícias", "Análise contextualizada", "Respostas personalizadas ao perfil"],
                      cta: "Perguntar sobre notícia →",
                      icon: Newspaper,
                      color: "#2563EB",
                    },
                    {
                      name: "Print & Trade",
                      tagline: "Análise e Recomendação de Operações para Day Trade",
                      desc: "Recomendação de operação baseado em informações históricas do ativo.",
                      features: ["Análise de padrões", "Recomendação de Operação", "Interpretação de Imagem"],
                      cta: "Enviar imagem →",
                      icon: BarChart3,
                      color: "#3B82F6",
                    },
                  ].map((agent) => (
                    <div key={agent.name} className="rounded-xl border border-black/[0.06] bg-white/80 p-5">
                      <div className="flex items-start justify-between">
                        <div className="flex items-center gap-3">
                          <div className="flex size-9 items-center justify-center rounded-xl" style={{ background: `${agent.color}10` }}>
                            <agent.icon size={18} style={{ color: agent.color }} />
                          </div>
                          <span className="text-[13px] font-semibold text-[#0A0A0A]">{agent.name}</span>
                        </div>
                        <span className="flex items-center gap-1 rounded-md bg-[#22C55E]/8 px-1.5 py-0.5 text-[7px] font-bold uppercase text-[#22C55E]/60">
                          <span className="inline-block size-1 rounded-full bg-[#22C55E]" /> Ativo
                        </span>
                      </div>
                      <p className="mt-2 text-[10px] font-semibold" style={{ color: agent.color }}>{agent.tagline}</p>
                      <p className="mt-2 text-[9px] leading-relaxed text-[#6B7280]/60">{agent.desc}</p>
                      <ul className="mt-3 space-y-1">
                        {agent.features.map((f) => (
                          <li key={f} className="flex items-center gap-1.5 text-[8px] text-[#6B7280]/50">
                            <span className="inline-block size-1 shrink-0 rounded-full" style={{ background: agent.color }} />
                            {f}
                          </li>
                        ))}
                      </ul>
                      <div className="mt-4 text-[10px] font-medium" style={{ color: agent.color }}>{agent.cta}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* ── Notas de aplicação ── */}
          <div className="rounded-xl border border-[var(--color-signal-blue)]/10 bg-[var(--color-signal-blue)]/5 p-6">
            <p className="mb-3 text-sm font-semibold text-[var(--text-primary)]">Notas de aplicação</p>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li className="flex items-start gap-2">
                <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-[var(--color-signal-blue)]" />
                <span><strong>Background:</strong> Fundo claro <code className="rounded bg-[var(--bg-secondary)] px-1.5 py-0.5 font-mono text-xs">#F5F5F0</code> com ondas azuis animadas em canvas</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-[var(--color-signal-blue)]" />
                <span><strong>Cards:</strong> Fundo <code className="rounded bg-[var(--bg-secondary)] px-1.5 py-0.5 font-mono text-xs">rgba(255,255,255,0.8)</code> com borda <code className="rounded bg-[var(--bg-secondary)] px-1.5 py-0.5 font-mono text-xs">black/[0.06]</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-[var(--color-signal-blue)]" />
                <span><strong>Accent:</strong> Signal Blue <code className="rounded bg-[var(--bg-secondary)] px-1.5 py-0.5 font-mono text-xs">#2563EB</code> como cor primária de destaque, links e ações</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-[var(--color-signal-blue)]" />
                <span><strong>Texto:</strong> Primário <code className="rounded bg-[var(--bg-secondary)] px-1.5 py-0.5 font-mono text-xs">#0A0A0A</code>, secundário <code className="rounded bg-[var(--bg-secondary)] px-1.5 py-0.5 font-mono text-xs">#6B7280</code></span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1.5 inline-block size-1.5 shrink-0 rounded-full bg-[var(--color-signal-blue)]" />
                <span><strong>Header:</strong> Glassmorphism com <code className="rounded bg-[var(--bg-secondary)] px-1.5 py-0.5 font-mono text-xs">backdrop-blur</code> e transparência</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>
    </>
  );
}
