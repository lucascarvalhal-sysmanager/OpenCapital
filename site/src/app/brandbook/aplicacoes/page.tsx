import { Section } from "@/components/brandbook-shared";
import {
  Activity,
  ArrowUpRight,
  Mail,
  Phone,
  Globe,
  Instagram,
  Linkedin,
  Twitter,
  ChevronRight,
  BarChart3,
  Brain,
  Zap,
  Shield,
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
            <div className="glow-card flex aspect-[1.75/1] flex-col items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-8">
              <div className="flex items-center gap-2.5">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-signal-green)]/10">
                  <Activity size={18} className="text-[var(--color-signal-green)]" />
                </div>
                <span className="text-xl font-bold tracking-tight">
                  Open<span className="text-[var(--color-signal-green)]">Capital</span>
                </span>
              </div>
            </div>
          </div>

          {/* ── Cartão de Visita Verso ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Cartão de Visita · Verso
            </span>
            <div className="glow-card flex aspect-[1.75/1] flex-col justify-between rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-8">
              <div>
                <p className="text-lg font-bold">Maria Silva</p>
                <p className="mt-0.5 text-sm text-[var(--color-signal-green)]">Head of Product</p>
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
            <div className="glow-card rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-6">
              <div className="flex items-start gap-4">
                <div className="h-full w-0.5 shrink-0 rounded-full bg-[var(--color-signal-green)]" />
                <div className="space-y-1">
                  <p className="text-sm font-bold">Maria Silva</p>
                  <p className="text-xs text-[var(--color-signal-green)]">Head of Product</p>
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
            <div className="glow-card flex items-center justify-between rounded-2xl border border-black/6 bg-[var(--bg-secondary)] px-8 py-5">
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-[var(--color-signal-green)]" />
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
            <div className="glow-card rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-10">
              <div className="flex items-center gap-2.5">
                <Activity size={16} className="text-[var(--color-signal-green)]" />
                <span className="text-base font-bold tracking-tight">
                  Open<span className="text-[var(--color-signal-green)]">Capital</span>
                </span>
              </div>
              <div className="my-5 h-px w-16 bg-[var(--color-signal-green)]" />
              <p className="text-sm text-[var(--text-tertiary)]">
                São Paulo, 6 de março de 2026
              </p>
              <div className="mt-8 space-y-2">
                <div className="h-2 w-3/4 rounded bg-black/4" />
                <div className="h-2 w-5/6 rounded bg-black/4" />
                <div className="h-2 w-2/3 rounded bg-black/4" />
                <div className="h-2 w-4/5 rounded bg-black/4" />
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
            <div className="glow-card flex aspect-square flex-col justify-between rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-8">
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
              <div className="flex items-center gap-2">
                <Activity size={14} className="text-[var(--color-signal-green)]" />
                <span className="text-xs font-bold tracking-tight">
                  Open<span className="text-[var(--color-signal-green)]">Capital</span>
                </span>
              </div>
            </div>
          </div>

          {/* ── LinkedIn Banner ── */}
          <div className="space-y-2 lg:col-span-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              LinkedIn Banner · 4:1
            </span>
            <div className="glow-card flex aspect-[4/1] items-center justify-between rounded-2xl border border-black/6 bg-[var(--bg-secondary)] px-10">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <Activity size={16} className="text-[var(--color-signal-green)]" />
                  <span className="text-lg font-bold tracking-tight">
                    Open<span className="text-[var(--color-signal-green)]">Capital</span>
                  </span>
                </div>
                <p className="max-w-md text-xs text-[var(--text-secondary)]">
                  The infrastructure for the new financial intelligence.
                </p>
              </div>
              <div className="flex items-center gap-2">
                {["IA", "Dados", "Finanças"].map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-black/10 px-3 py-1 font-mono text-[10px] text-[var(--text-tertiary)]"
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
            <div className="glow-card flex aspect-[3/1] items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] px-10">
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[var(--color-signal-green)]/10">
                  <Activity size={24} className="text-[var(--color-signal-green)]" />
                </div>
                <div>
                  <span className="text-2xl font-bold tracking-tight">
                    Open<span className="text-[var(--color-signal-green)]">Capital</span>
                  </span>
                  <p className="text-xs text-[var(--text-tertiary)]">
                    The infrastructure for the new financial intelligence.
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
            <div className="glow-card flex aspect-video flex-col items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-12 text-center">
              <span className="text-4xl font-bold tracking-tight md:text-6xl">
                OPEN<span className="text-[var(--color-signal-green)]">CAPITAL</span>
              </span>
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
            <div className="glow-card flex aspect-video flex-col justify-between rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-10 md:p-14">
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
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-signal-green)]/10">
                      <item.icon size={20} className="text-[var(--color-signal-green)]" />
                    </div>
                    <p className="text-sm font-semibold">{item.title}</p>
                    <p className="text-xs leading-relaxed text-[var(--text-secondary)]">{item.desc}</p>
                  </div>
                ))}
              </div>
              <div className="flex items-center justify-center gap-6 border-t border-black/6 pt-6">
                {["2.4M+ Data Points", "99.9% Uptime", "<50ms Latência"].map((stat) => (
                  <span key={stat} className="font-mono text-xs text-[var(--color-signal-green)]">
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
            <div className="glow-card flex aspect-video flex-col items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-12 text-center">
              <p className="text-2xl font-bold md:text-3xl">
                Comece a operar com dados.
              </p>
              <div className="mt-8 space-y-1.5 text-sm text-[var(--text-tertiary)]">
                <p>contato@theopencapital.org</p>
                <p className="font-mono text-xs">+55 11 99999-9999</p>
                <p>theopencapital.org</p>
              </div>
              <div className="mt-6 flex items-center gap-2">
                <Activity size={14} className="text-[var(--color-signal-green)]" />
                <span className="text-sm font-bold tracking-tight">
                  Open<span className="text-[var(--color-signal-green)]">Capital</span>
                </span>
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
            <div className="glow-card flex aspect-square flex-col items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-8">
              <div className="flex h-32 w-28 flex-col items-center justify-center rounded-lg bg-[var(--bg-tertiary)]">
                <span className="text-sm font-bold tracking-tight">
                  Open<span className="text-[var(--color-signal-green)]">Capital</span>
                </span>
              </div>
              <p className="mt-4 text-xs text-[var(--text-tertiary)]">Algodão escuro, logo branco</p>
            </div>
          </div>

          {/* ── Adesivo ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Adesivo
            </span>
            <div className="glow-card flex aspect-square flex-col items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-8">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-[var(--bg-tertiary)]">
                <Activity size={32} className="text-[var(--color-signal-green)]" />
              </div>
              <p className="mt-4 text-xs text-[var(--text-tertiary)]">Símbolo Signal Green, fundo escuro</p>
            </div>
          </div>

          {/* ── Caderno ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Caderno
            </span>
            <div className="glow-card flex aspect-square flex-col items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-8">
              <div className="flex h-36 w-24 flex-col items-center justify-end rounded-lg border border-black/6 bg-[var(--bg-tertiary)] p-4">
                <span className="font-mono text-[8px] uppercase leading-tight tracking-[0.15em] text-[var(--text-tertiary)]">
                  The
                  <br />
                  Infrastructure
                </span>
              </div>
              <p className="mt-4 text-xs text-[var(--text-tertiary)]">Capa escura, tipografia mono</p>
            </div>
          </div>

          {/* ── Caneca ── */}
          <div className="space-y-2">
            <span className="font-mono text-[10px] uppercase tracking-widest text-[var(--text-tertiary)]">
              Caneca
            </span>
            <div className="glow-card flex aspect-square flex-col items-center justify-center rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-8">
              <div className="flex h-24 w-20 items-center justify-center rounded-lg border-2 border-black/10 bg-[var(--bg-tertiary)]">
                <span className="text-[10px] font-bold tracking-tight">
                  Open<span className="text-[var(--color-signal-green)]">Capital</span>
                </span>
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
            <div className="glow-card rounded-2xl border border-black/6 bg-[var(--bg-secondary)]">
              <div className="flex flex-col items-center justify-center px-8 py-16 text-center md:py-24">
                <h3 className="max-w-2xl text-2xl font-bold leading-tight md:text-4xl">
                  The infrastructure for the new financial intelligence.
                </h3>
                <p className="mt-4 max-w-lg text-sm text-[var(--text-secondary)]">
                  A infraestrutura mudou. Quem opera com dados vence.
                </p>
                <button className="mt-8 flex items-center gap-2 rounded-full bg-[var(--color-signal-green)] px-6 py-3 text-sm font-semibold text-[var(--bg-primary)] transition hover:opacity-90">
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
            <div className="glow-card rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-8 md:p-12">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  { num: "01", icon: Brain, title: "Inteligência com IA" },
                  { num: "02", icon: BarChart3, title: "Processamento de Dados" },
                  { num: "03", icon: Zap, title: "Analytics em Tempo Real" },
                  { num: "04", icon: Shield, title: "Gestão de Risco" },
                ].map((svc) => (
                  <div key={svc.num} className="group space-y-3 rounded-xl border border-black/6 bg-[var(--bg-tertiary)] p-5 transition hover:border-[var(--color-signal-green)]/30">
                    <span className="font-mono text-xs text-[var(--color-signal-green)]">{svc.num}</span>
                    <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[var(--color-signal-green)]/10">
                      <svc.icon size={18} className="text-[var(--color-signal-green)]" />
                    </div>
                    <p className="text-sm font-semibold">{svc.title}</p>
                    <ChevronRight size={14} className="text-[var(--text-tertiary)] transition group-hover:text-[var(--color-signal-green)]" />
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
            <div className="glow-card rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-8 md:p-12">
              <div className="flex flex-col items-center justify-center gap-6 text-center">
                <p className="text-sm uppercase tracking-widest text-[var(--text-tertiary)]">Métricas Principais</p>
                <div className="flex flex-wrap items-center justify-center gap-8">
                  {[
                    { value: "2.4M+", label: "Data Points" },
                    { value: "<50ms", label: "Latência" },
                    { value: "99.9%", label: "Uptime" },
                  ].map((metric) => (
                    <div key={metric.label} className="space-y-1">
                      <p className="font-mono text-2xl font-bold text-[var(--color-signal-green)]">
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
          <div className="glow-card overflow-hidden rounded-2xl border border-black/6">
            {/* Header */}
            <div className="flex items-center justify-between bg-[var(--bg-secondary)] px-8 py-6">
              <div className="flex items-center gap-2">
                <Activity size={16} className="text-[var(--color-signal-green)]" />
                <span className="text-sm font-bold tracking-tight">
                  Open<span className="text-[var(--color-signal-green)]">Capital</span>
                </span>
              </div>
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
                <div className="h-2 w-full rounded bg-black/4" />
                <div className="h-2 w-5/6 rounded bg-black/4" />
                <div className="h-2 w-3/4 rounded bg-black/4" />
              </div>
              <div className="mt-8 flex justify-center">
                <span className="inline-flex items-center gap-2 rounded-full bg-[var(--color-signal-green)] px-6 py-2.5 text-sm font-semibold text-[var(--bg-primary)]">
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
    </>
  );
}
