import { Check, X, type LucideIcon } from "lucide-react";

/* ─── Section Wrapper ─── */
export function Section({ id, num, title, subtitle, children, className }: { id: string; num?: string; title: string; subtitle?: string; children: React.ReactNode; className?: string }) {
  return (
    <section id={id} data-section-num={num || ""} data-section-title={title} className={`py-20 md:py-28 ${className ?? ""}`}>
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="mb-12 md:mb-16">
          <div className="mb-3 flex items-center gap-3">
            {num && <span className="font-mono text-xs font-bold text-[var(--color-signal-green)]">{num}</span>}
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">{id.replace(/-/g, " ")}</span>
          </div>
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">{title}</h2>
          {subtitle && <p className="mt-4 max-w-2xl text-lg text-[var(--text-secondary)]">{subtitle}</p>}
        </div>
        {children}
      </div>
    </section>
  );
}

/* ─── Color Swatch ─── */
export function Swatch({ name, hex, textDark }: { name: string; hex: string; textDark?: boolean }) {
  return (
    <div className="flex flex-col gap-2">
      <div className="h-24 w-full rounded-2xl border border-[var(--border-default)]" style={{ backgroundColor: hex }} />
      <span className={`text-sm font-medium ${textDark ? "text-[var(--text-secondary)]" : "text-[var(--text-primary)]"}`}>{name}</span>
      <span className="font-mono text-xs text-[var(--text-tertiary)]">{hex}</span>
    </div>
  );
}

/* ─── Value Card ─── */
export function ValueCard({ title, description, icon: Icon }: { title: string; description: string; icon: LucideIcon }) {
  return (
    <div className="glow-card group rounded-2xl bg-[var(--bg-secondary)] p-6">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[var(--color-signal-green)]/10">
        <Icon className="text-[var(--color-signal-green)]" size={20} />
      </div>
      <h3 className="mb-2 text-lg font-semibold">{title}</h3>
      <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{description}</p>
    </div>
  );
}

/* ─── Archetype Bar ─── */
export function ArchetypeBar({ name, percentage, description }: { name: string; percentage: number; description: string }) {
  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="font-semibold">{name}</span>
        <span className="font-mono text-sm text-[var(--color-signal-green)]">{percentage}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-[var(--bg-tertiary)]">
        <div className="h-full rounded-full" style={{ width: `${percentage}%`, background: "var(--gradient-signal)" }} />
      </div>
      <p className="text-sm text-[var(--text-secondary)]">{description}</p>
    </div>
  );
}

/* ─── Typography Sample ─── */
export function TypeSample({ label, size, weight, mono, text }: { label: string; size: string; weight: string; mono?: boolean; text?: string }) {
  return (
    <div className="flex flex-col gap-1 border-b border-[var(--border-default)] pb-4">
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-[var(--text-tertiary)]">{label}</span>
        <span className="font-mono text-xs text-[var(--color-iron)]">{size} / {weight}</span>
      </div>
      <p className={mono ? "font-mono" : ""} style={{ fontSize: size, fontWeight: weight === "Bold" ? 700 : weight === "SemiBold" ? 600 : weight === "Medium" ? 500 : 400 }}>
        {text ?? "A infraestrutura mudou. Quem opera com dados vence."}
      </p>
    </div>
  );
}

/* ─── Animation Demo ─── */
export function AnimationDemo({ name, description, className, children }: { name: string; description: string; className: string; children?: React.ReactNode }) {
  return (
    <div className="glow-card overflow-hidden rounded-2xl bg-[var(--bg-secondary)]">
      <div className={`flex h-32 items-center justify-center ${className}`}>{children}</div>
      <div className="border-t border-[var(--border-default)] p-4">
        <p className="text-sm font-semibold">{name}</p>
        <p className="mt-1 text-xs text-[var(--text-tertiary)]">{description}</p>
      </div>
    </div>
  );
}

/* ─── Do / Don't Items ─── */
export function DoItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-signal-green)]/10">
        <Check size={12} className="text-[var(--color-signal-green)]" />
      </div>
      <span className="text-sm text-[var(--text-secondary)]">{text}</span>
    </div>
  );
}

export function DontItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-loss)]/10">
        <X size={12} className="text-[var(--color-loss)]" />
      </div>
      <span className="text-sm text-[var(--text-secondary)]">{text}</span>
    </div>
  );
}

/* ─── Naming Letter ─── */
export function NamingLetter({ letter, meaning, concept }: { letter: string; meaning: string; concept: string }) {
  return (
    <div className="flex flex-col items-center gap-1 rounded-xl bg-[var(--bg-secondary)] p-3 text-center">
      <span className="gradient-text text-2xl font-bold">{letter}</span>
      <span className="text-xs font-semibold">{meaning}</span>
      <span className="text-[10px] text-[var(--text-tertiary)]">{concept}</span>
    </div>
  );
}

/* ─── Code Block ─── */
export function CodeBlock({ code, lang }: { code: string; lang?: string }) {
  return (
    <div className="overflow-x-auto rounded-xl border border-[var(--border-default)] bg-[var(--bg-secondary)] p-4">
      <pre className="font-mono text-xs leading-relaxed text-[var(--text-secondary)]">
        {lang && <span className="mb-2 block text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">{lang}</span>}
        <code>{code}</code>
      </pre>
    </div>
  );
}

/* ─── Contrast Row ─── */
export function ContrastRow({ combo, ratio, level }: { combo: string; ratio: string; level: string }) {
  const color = level === "AAA" ? "text-[var(--color-signal-green)]" : level === "AA" ? "text-[var(--color-caution)]" : "text-[var(--text-tertiary)]";
  return (
    <div className="flex items-center justify-between border-b border-[var(--border-default)] py-3">
      <span className="text-sm text-[var(--text-secondary)]">{combo}</span>
      <div className="flex items-center gap-3">
        <span className="font-mono text-xs text-[var(--text-tertiary)]">{ratio}</span>
        <span className={`rounded-full bg-black/5 px-2 py-0.5 font-mono text-[10px] font-bold ${color}`}>{level}</span>
      </div>
    </div>
  );
}

/* ─── Token Row ─── */
export function TokenRow({ name, value, preview }: { name: string; value: string; preview?: React.ReactNode }) {
  return (
    <div className="flex items-center gap-4 border-b border-[var(--border-default)] py-2.5">
      <span className="w-36 shrink-0 font-mono text-xs text-[var(--color-signal-green)]">{name}</span>
      <span className="font-mono text-xs text-[var(--text-tertiary)]">{value}</span>
      {preview && <div className="ml-auto">{preview}</div>}
    </div>
  );
}
