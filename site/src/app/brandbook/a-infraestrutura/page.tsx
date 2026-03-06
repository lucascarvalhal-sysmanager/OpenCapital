import { Quote, Eye, Globe, Target, Shield, BarChart3, Sparkles, ArrowUpRight, Activity, Users, Crosshair } from "lucide-react";
import { Section, ValueCard, ArchetypeBar, NamingLetter, CodeBlock } from "@/components/brandbook-shared";

/* ═══════════════════════════════════════════════════════════════
   A Infraestrutura — OpenCapital Brand Personality
   ═══════════════════════════════════════════════════════════════ */

export default function AInfraestruturaPage() {
  return (
    <main className="min-h-screen bg-[var(--bg-primary)]">

      {/* ── 01 · MANIFESTO ── */}
      <Section id="manifesto" num="01" title="Manifesto" subtitle="O fundamento da OpenCapital em palavras.">
        <div className="relative overflow-hidden rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-8 md:p-12">
          {/* decorative gradient */}
          <div className="pointer-events-none absolute inset-0 bg-[var(--gradient-surface)]" />

          <div className="relative space-y-8">
            {/* main quote */}
            <div className="flex gap-4">
              <Quote className="mt-1 shrink-0 text-[var(--color-signal-green)]" size={28} />
              <p className="gradient-text text-2xl font-bold leading-tight md:text-3xl">
                A infraestrutura mudou. Quem opera com dados vence.
              </p>
            </div>

            {/* body */}
            <div className="space-y-4 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
              <p>
                Durante décadas, o mercado financeiro foi um jogo de poucos. As melhores ferramentas, os melhores dados, a melhor inteligência — tudo trancado atrás de terminais de US$ 24.000/ano e mesas de operação bilionárias.
              </p>
              <p>
                A inteligência artificial não apenas mudou as regras. Ela derrubou os muros.
              </p>
              <p>
                A OpenCapital existe porque acreditamos que prosperidade não é privilégio — é consequência de decisões informadas. Construímos a infraestrutura que transforma dados brutos em inteligência acionável, em tempo real, para qualquer pessoa disposta a operar com disciplina.
              </p>
              <p>
                Não vendemos promessas. Não entregamos ilusões. Entregamos infraestrutura.
              </p>
            </div>

            {/* closing line */}
            <div className="border-t border-black/6 pt-6">
              <p className="text-lg font-semibold text-[var(--text-primary)] md:text-xl">
                Os dados são o combustível. A IA é o motor. <span className="gradient-text">A decisão é sua.</span>
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* ── 02 · PROPÓSITO & VALORES ── */}
      <Section id="proposito-valores" num="02" title="Propósito & Valores" subtitle="A base sobre a qual tudo é construído.">
        {/* essência / missão / visão */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {/* Essência */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Essência</span>
            <p className="text-lg font-semibold">A infraestrutura da nova inteligência financeira.</p>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Um ecossistema universal de inteligência artificial especializado em ciência de dados aplicada às finanças.
            </p>
          </div>

          {/* Missão */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Missão</span>
            <p className="text-lg font-semibold">Elevar o padrão financeiro da humanidade.</p>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">
              Criamos sistemas que aumentam a capacidade intelectual de traders e investidores. Não substituímos o humano — amplificamos sua inteligência.
            </p>
          </div>

          {/* Visão */}
          <div className="glow-card relative overflow-hidden rounded-2xl p-6" style={{ background: "var(--gradient-capital)" }}>
            <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-capital-black)]">Visão</span>
            <p className="text-lg font-bold text-[var(--color-capital-black)]">Tornar a prosperidade inevitável.</p>
            <p className="mt-2 text-sm text-[var(--color-capital-black)]/80">
              Um mundo onde cada decisão financeira é respaldada por inteligência artificial de nível institucional.
            </p>
          </div>
        </div>

        {/* 6 value cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <ValueCard icon={Eye} title="Transparência Radical" description="Não obscurecemos dados, não ocultamos riscos, não vendemos ilusões. Cada insight é rastreável até sua fonte." />
          <ValueCard icon={Globe} title="Inteligência Acessível" description="O que era exclusivo de Wall Street agora roda na tela de qualquer pessoa com disciplina para usar." />
          <ValueCard icon={Target} title="Rigor Técnico" description="Ciência de dados não admite achismo. Cada modelo é construído sobre fundamentos estatísticos sólidos." />
          <ValueCard icon={Shield} title="Soberania do Operador" description="A IA é a ferramenta. O operador é o decisor. Entregamos inteligência, não dependência." />
          <ValueCard icon={BarChart3} title="Impacto Mensurável" description="Se não pode ser medido, não pode ser melhorado. Resultados concretos, não promessas vagas." />
          <ValueCard icon={Sparkles} title="Evolução Contínua" description="Mercados mudam. Dados mudam. Nós mudamos junto. Uma infraestrutura viva que se adapta." />
        </div>
      </Section>

      {/* ── 03 · ARQUÉTIPOS DE MARCA ── */}
      <Section id="arquetipos" num="03" title="Arquétipos de Marca" subtitle="A personalidade construída sobre três forças em proporções estratégicas.">
        {/* bars */}
        <div className="mb-12 space-y-8">
          <ArchetypeBar name="Sage / Sábio" percentage={50} description="Busca verdade, conhecimento e compreensão. A OpenCapital é fundamentalmente uma empresa de inteligência." />
          <ArchetypeBar name="Magician / Mago" percentage={30} description="Transforma realidades. Pega dados brutos e os transforma em inteligência que muda resultados financeiros." />
          <ArchetypeBar name="Ruler / Governante" percentage={20} description="Cria ordem a partir do caos. Em mercados voláteis, organiza, estrutura e entrega controle." />
        </div>

        {/* detailed cards */}
        <div className="mb-12 grid gap-6 md:grid-cols-3">
          {/* Sage */}
          <div className="glow-card space-y-4 rounded-2xl bg-[var(--bg-secondary)] p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Sábio <span className="text-[var(--color-signal-green)]">50%</span></h3>
              <span className="font-mono text-xs text-[var(--text-tertiary)]">Dominante</span>
            </div>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <p><span className="font-semibold text-[var(--text-primary)]">Motivação:</span> Entender o mundo através de dados</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Medo:</span> Desinformação, decisões baseadas em emoção</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Promessa:</span> &ldquo;Nós mostramos a verdade que os dados revelam&rdquo;</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Tom:</span> Autoritativo sem ser arrogante, preciso sem ser frio</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Referência:</span> Bloomberg Terminal, The Economist</p>
            </div>
          </div>

          {/* Magician */}
          <div className="glow-card space-y-4 rounded-2xl bg-[var(--bg-secondary)] p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Mago <span className="text-[var(--color-signal-green)]">30%</span></h3>
              <span className="font-mono text-xs text-[var(--text-tertiary)]">Transformador</span>
            </div>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <p><span className="font-semibold text-[var(--text-primary)]">Motivação:</span> Transformar dados em prosperidade</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Medo:</span> Consequências negativas não-intencionais</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Promessa:</span> &ldquo;Transformamos complexidade em clareza&rdquo;</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Tom:</span> Visionário, confiante, demonstra resultados</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Referência:</span> Tesla, Stripe</p>
            </div>
          </div>

          {/* Ruler */}
          <div className="glow-card space-y-4 rounded-2xl bg-[var(--bg-secondary)] p-6">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold">Governante <span className="text-[var(--color-signal-green)]">20%</span></h3>
              <span className="font-mono text-xs text-[var(--text-tertiary)]">Autoridade</span>
            </div>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <p><span className="font-semibold text-[var(--text-primary)]">Motivação:</span> Criar estrutura e estabilidade</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Medo:</span> Caos, perda de controle</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Promessa:</span> &ldquo;Damos controle sobre o que antes era imprevisível&rdquo;</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Tom:</span> Estável, premium, institucional</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Referência:</span> JPMorgan, Nasdaq</p>
            </div>
          </div>
        </div>

        {/* synthesis */}
        <div className="rounded-2xl border border-[var(--border-active)] bg-[var(--bg-secondary)] p-6 text-center">
          <CodeBlock code="OpenCapital = Sabedoria (50%) + Transformação (30%) + Autoridade (20%)" />
          <p className="mt-4 text-base text-[var(--text-secondary)]">
            <span className="font-semibold text-[var(--text-primary)]">Persona resultante:</span> Um estrategista financeiro de elite que democratizou seu conhecimento. Fala com autoridade, demonstra com dados, transforma com tecnologia. Não grita — o peso das palavras carrega a mensagem.
          </p>
        </div>
      </Section>

      {/* ── 04 · POSICIONAMENTO ── */}
      <Section id="posicionamento" num="04" title="Posicionamento" subtitle="Onde a OpenCapital se posiciona no mercado.">
        <div className="mb-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Categoria */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Categoria</span>
            <p className="text-lg font-semibold">Infraestrutura de inteligência financeira com IA</p>
          </div>

          {/* Diferencial */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Diferencial</span>
            <p className="text-lg font-semibold">Arquitetura proprietária de processamento em tempo real</p>
          </div>

          {/* Inimigo */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <Crosshair className="mb-3 text-[var(--color-loss)]" size={20} />
            <span className="mb-2 block font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-loss)]">Inimigo</span>
            <p className="text-sm text-[var(--text-secondary)]">
              Ferramentas financeiras genéricas, &ldquo;gurus&rdquo; de mercado, plataformas que prometem lucro fácil, a desvantagem informacional do operador individual.
            </p>
          </div>
        </div>

        {/* Declaração de Posicionamento */}
        <div className="mb-12 rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-8">
          <span className="mb-4 block font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Declaração de Posicionamento</span>
          <blockquote className="border-l-2 border-[var(--color-signal-green)] pl-6 text-base leading-relaxed text-[var(--text-secondary)] md:text-lg">
            Para <strong className="text-[var(--text-primary)]">traders e investidores</strong> que buscam <strong className="text-[var(--text-primary)]">vantagem competitiva baseada em dados</strong>, a <strong className="gradient-text">OpenCapital</strong> é a <strong className="text-[var(--text-primary)]">infraestrutura de inteligência financeira</strong> que <strong className="text-[var(--text-primary)]">transforma dados em tempo real em decisões operacionais</strong>, diferente de <strong className="text-[var(--text-primary)]">ferramentas tradicionais</strong> porque <strong className="text-[var(--text-primary)]">opera com arquitetura proprietária de IA especializada em ciência de dados financeiros</strong>.
          </blockquote>
        </div>

        {/* Target Audience */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <div className="mb-3 flex items-center gap-2">
              <Activity className="text-[var(--color-signal-green)]" size={18} />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Público Primário</span>
            </div>
            <h3 className="mb-3 text-lg font-bold">Traders Ativos</h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>Operam diariamente em mercados financeiros</li>
              <li>Buscam vantagem competitiva via tecnologia</li>
              <li>Valorizam dados e análise sobre emoção</li>
              <li>Dispostos a investir em ferramentas profissionais</li>
            </ul>
          </div>

          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <div className="mb-3 flex items-center gap-2">
              <Users className="text-[var(--color-signal-green)]" size={18} />
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Público Secundário</span>
            </div>
            <h3 className="mb-3 text-lg font-bold">Investidores Sofisticados</h3>
            <ul className="space-y-2 text-sm text-[var(--text-secondary)]">
              <li>Portfolio diversificado, visão de médio/longo prazo</li>
              <li>Buscam inteligência para decisões de alocação</li>
              <li>Preferem dados a opiniões de &ldquo;especialistas&rdquo;</li>
              <li>Querem proteger e multiplicar patrimônio</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* ── 05 · BRANDSCRIPT ── */}
      <Section id="brandscript" num="05" title="BrandScript (StoryBrand)" subtitle="A narrativa estratégica da marca em 7 atos.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {/* Herói */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <span className="mb-1 block font-mono text-xs font-bold text-[var(--color-signal-green)]">01</span>
            <h3 className="mb-3 text-lg font-bold">Herói</h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              O trader ou investidor que sabe que existe vantagem competitiva nos dados, mas não consegue acessá-la. Opera com ferramentas limitadas, informação atrasada, e uma desvantagem estrutural contra algoritmos institucionais.
            </p>
          </div>

          {/* Guia */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <span className="mb-1 block font-mono text-xs font-bold text-[var(--color-signal-green)]">02</span>
            <h3 className="mb-3 text-lg font-bold">Guia</h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              A OpenCapital: expertise técnica comprovada em ciência de dados financeiros + compreensão genuína do desafio do operador individual. Demonstra autoridade com dados, não com promessas.
            </p>
          </div>

          {/* Problema */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <span className="mb-1 block font-mono text-xs font-bold text-[var(--color-signal-green)]">03</span>
            <h3 className="mb-3 text-lg font-bold">Problema</h3>
            <div className="space-y-3 text-sm text-[var(--text-secondary)]">
              <p><span className="font-semibold text-[var(--text-primary)]">Externo:</span> Ferramentas acessíveis são rasas; as profundas são inacessíveis</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Interno:</span> Frustração de saber que existem dados melhores, mas não conseguir alcançá-los</p>
              <p><span className="font-semibold text-[var(--text-primary)]">Filosófico:</span> Não é justo que inteligência financeira seja privilégio de poucos</p>
            </div>
          </div>

          {/* Plano */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <span className="mb-1 block font-mono text-xs font-bold text-[var(--color-signal-green)]">04</span>
            <h3 className="mb-3 text-lg font-bold">Plano</h3>
            <div className="space-y-2 text-sm text-[var(--text-secondary)]">
              <p><span className="gradient-text font-bold">1.</span> <strong className="text-[var(--text-primary)]">Conecte-se</strong> — Acesse o ecossistema e comece a explorar dados</p>
              <p><span className="gradient-text font-bold">2.</span> <strong className="text-[var(--text-primary)]">Aprenda</strong> — Entenda os sinais, interprete a inteligência</p>
              <p><span className="gradient-text font-bold">3.</span> <strong className="text-[var(--text-primary)]">Opere</strong> — Tome decisões respaldadas por dados em tempo real</p>
              <p><span className="gradient-text font-bold">4.</span> <strong className="text-[var(--text-primary)]">Evolua</strong> — A infraestrutura cresce com você</p>
            </div>
          </div>

          {/* Chamada à Ação */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <span className="mb-1 block font-mono text-xs font-bold text-[var(--color-signal-green)]">05</span>
            <h3 className="mb-3 text-lg font-bold">Chamada à Ação</h3>
            <blockquote className="border-l-2 border-[var(--color-signal-green)] pl-4 text-sm italic text-[var(--text-secondary)]">
              &ldquo;Comece a operar com dados. Não pedimos fé — pedimos disciplina.&rdquo;
            </blockquote>
          </div>

          {/* Sucesso */}
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <span className="mb-1 block font-mono text-xs font-bold text-[var(--color-signal-green)]">06</span>
            <h3 className="mb-3 text-lg font-bold">Sucesso</h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Operações fundamentadas em dados, decisões mais rápidas e precisas, vantagem competitiva real. O operador se torna referência entre seus pares. Prosperidade como consequência natural.
            </p>
          </div>

          {/* Fracasso Evitado — full-width */}
          <div className="glow-card rounded-2xl border-[var(--color-loss)]/20 bg-[var(--bg-secondary)] p-6 md:col-span-2 lg:col-span-3">
            <span className="mb-1 block font-mono text-xs font-bold text-[var(--color-loss)]">07</span>
            <h3 className="mb-3 text-lg font-bold">Fracasso Evitado</h3>
            <p className="text-sm leading-relaxed text-[var(--text-secondary)]">
              Sem OpenCapital: continua operando com intuição enquanto algoritmos processam milhões de data points. Desvantagem cresce. Resultados se deterioram. O mercado não espera.
            </p>
          </div>
        </div>
      </Section>

      {/* ── 06 · TRUELINES & TAGLINES ── */}
      <Section id="truelines" num="06" title="Truelines & Taglines" subtitle="As frases que definem a marca em diferentes contextos.">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {[
            { num: "01", line: "The infrastructure for the new financial intelligence.", uso: "Tagline principal — hero, assinatura, decks" },
            { num: "02", line: "A infraestrutura mudou. Quem opera com dados vence.", uso: "Posicionamento — landing pages, ads" },
            { num: "03", line: "Dados agora podem operar por você.", uso: "Brand essence — redes sociais, impacto" },
            { num: "04", line: "Não entregamos promessas — entregamos infraestrutura.", uso: "Posicionamento direto — propostas, CTAs" },
            { num: "05", line: "Dados brutos entram. Decisões inteligentes saem.", uso: "Simplificação — proposta de valor" },
            { num: "06", line: "A nova era do dinheiro não é sobre sorte. É sobre infraestrutura.", uso: "Tom inspiracional — eventos, apresentações" },
          ].map(({ num, line, uso }) => (
            <div key={num} className="glow-card flex flex-col justify-between rounded-2xl bg-[var(--bg-secondary)] p-6">
              <div>
                <span className="mb-3 block font-mono text-xs font-bold text-[var(--color-signal-green)]">{num}</span>
                <p className="text-base font-semibold leading-snug">&ldquo;{line}&rdquo;</p>
              </div>
              <p className="mt-4 text-xs text-[var(--text-tertiary)]">{uso}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 07 · NAMING SEMÂNTICO ── */}
      <Section id="naming" num="07" title="Naming Semântico" subtitle="Cada letra carrega um significado. Cada sílaba é intencional.">
        <div className="mb-8 grid grid-cols-4 gap-3 sm:grid-cols-6 md:grid-cols-11">
          <NamingLetter letter="O" meaning="Open" concept="Acesso aberto" />
          <NamingLetter letter="P" meaning="Processamento" concept="Dados em tempo real" />
          <NamingLetter letter="E" meaning="Ecossistema" concept="Plataforma integrada" />
          <NamingLetter letter="N" meaning="Nova era" concept="Ruptura com o antigo" />
          <NamingLetter letter="C" meaning="Ciência" concept="Ciência de dados" />
          <NamingLetter letter="A" meaning="Artificial" concept="Inteligência artificial" />
          <NamingLetter letter="P" meaning="Prosperidade" concept="Resultado prometido" />
          <NamingLetter letter="I" meaning="Inteligência" concept="Core do produto" />
          <NamingLetter letter="T" meaning="Tempo real" concept="Diferencial técnico" />
          <NamingLetter letter="A" meaning="Acessível" concept="Para todos" />
          <NamingLetter letter="L" meaning="Liberdade" concept="Liberdade financeira" />
        </div>

        {/* summary */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-6 text-center">
            <span className="gradient-text text-3xl font-bold">Open</span>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">O acesso que antes era fechado</p>
          </div>
          <div className="rounded-2xl border border-black/6 bg-[var(--bg-secondary)] p-6 text-center">
            <span className="gradient-text text-3xl font-bold">Capital</span>
            <p className="mt-2 text-sm text-[var(--text-secondary)]">O poder financeiro que antes era exclusivo</p>
          </div>
        </div>

        <p className="mt-6 text-center text-base text-[var(--text-secondary)]">
          Juntos: <strong className="text-[var(--text-primary)]">a democratização do poder financeiro através da tecnologia.</strong>
        </p>
      </Section>

      {/* ── 08 · TOM DE VOZ ── */}
      <Section id="tom-de-voz" num="08" title="Tom de Voz" subtitle="Como a OpenCapital fala — e como nunca fala.">
        {/* Do / Don't columns */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          {/* Assim sim */}
          <div className="rounded-2xl border border-[var(--color-signal-green)]/20 bg-[var(--bg-secondary)] p-6">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-[var(--color-signal-green)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-signal-green)]/10 text-xs">&#10003;</span>
              Assim sim
            </h3>
            <div className="space-y-5">
              {[
                { ctx: "Hero", text: "A infraestrutura mudou. Quem opera com dados vence." },
                { ctx: "Feature", text: "Processamento de 2.4M de data points em tempo real." },
                { ctx: "CTA", text: "Comece a operar com dados." },
                { ctx: "Erro", text: "Dados insuficientes para gerar sinal. Aumente o período de análise." },
              ].map(({ ctx, text }) => (
                <div key={ctx}>
                  <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">{ctx}</span>
                  <p className="text-sm text-[var(--text-secondary)]">&ldquo;{text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>

          {/* Assim não */}
          <div className="rounded-2xl border border-[var(--color-loss)]/20 bg-[var(--bg-secondary)] p-6">
            <h3 className="mb-6 flex items-center gap-2 text-lg font-bold text-[var(--color-loss)]">
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[var(--color-loss)]/10 text-xs">&#10007;</span>
              Assim não
            </h3>
            <div className="space-y-5">
              {[
                { ctx: "Hero", text: "Venha descobrir o incrível mundo da IA financeira!" },
                { ctx: "Feature", text: "Nosso sistema super rápido analisa um monte de dados!" },
                { ctx: "CTA", text: "Clique aqui e mude sua vida financeira AGORA!" },
                { ctx: "Erro", text: "Oops! Algo deu errado, tente novamente." },
              ].map(({ ctx, text }) => (
                <div key={ctx}>
                  <span className="mb-1 block font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--text-tertiary)]">{ctx}</span>
                  <p className="text-sm text-[var(--text-secondary)]">&ldquo;{text}&rdquo;</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Two voices */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-bold">Voz Institucional</h3>
              <span className="rounded-full bg-[var(--color-signal-green)]/10 px-3 py-1 font-mono text-xs font-bold text-[var(--color-signal-green)]">80%</span>
            </div>
            <ul className="space-y-1.5 text-sm text-[var(--text-secondary)]">
              <li>Direto e objetivo, sem floreios</li>
              <li>Técnico quando necessário, acessível sempre</li>
              <li>Confiante sem arrogância</li>
              <li>Dados antes de opinião</li>
              <li>Frases curtas e impactantes</li>
            </ul>
          </div>

          <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
            <div className="mb-3 flex items-center justify-between">
              <h3 className="text-lg font-bold">Voz do Fundador</h3>
              <span className="rounded-full bg-[var(--color-signal-green)]/10 px-3 py-1 font-mono text-xs font-bold text-[var(--color-signal-green)]">20%</span>
            </div>
            <ul className="mb-4 space-y-1.5 text-sm text-[var(--text-secondary)]">
              <li>Mais pessoal e provocativo</li>
              <li>Desafia o status quo</li>
              <li>Conta histórias com dados</li>
              <li>Redes sociais, artigos de opinião, entrevistas</li>
            </ul>
            <blockquote className="border-l-2 border-[var(--color-signal-green)] pl-4 text-xs italic text-[var(--text-tertiary)]">
              &ldquo;Você ainda está operando com base em intuição enquanto algoritmos processam 2 milhões de pontos de dados por segundo. A nova era do dinheiro não é sobre sorte. É sobre infraestrutura.&rdquo;
            </blockquote>
          </div>
        </div>
      </Section>

      {/* ── 09 · VOCABULÁRIO ── */}
      <Section id="vocabulario" num="09" title="Vocabulário" subtitle="As palavras que constroem — e as que destroem — a percepção da marca.">
        <div className="grid gap-6 md:grid-cols-2">
          {/* Palavras de Poder */}
          <div className="rounded-2xl border border-[var(--color-signal-green)]/20 bg-[var(--bg-secondary)] p-6">
            <h3 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Palavras de Poder — USAR</h3>
            <div className="space-y-3">
              {[
                { word: "Infraestrutura", why: "Somos a base, não o produto final" },
                { word: "Inteligência", why: "Não é IA genérica — é inteligência aplicada" },
                { word: "Operar", why: "Ação deliberada, não especulação" },
                { word: "Dados", why: "Fundamento de tudo que fazemos" },
                { word: "Tempo real", why: "Diferencial técnico real" },
                { word: "Ecossistema", why: "Visão de plataforma, não ferramenta isolada" },
                { word: "Prosperar", why: "Resultado positivo sem promessa vazia" },
                { word: "Precisão", why: "Qualidade sobre quantidade" },
                { word: "Clareza", why: "Transformamos complexidade em simplicidade" },
                { word: "Evolução", why: "Crescimento contínuo e fundamentado" },
              ].map(({ word, why }) => (
                <div key={word} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-signal-green)]/10">
                    <ArrowUpRight size={10} className="text-[var(--color-signal-green)]" />
                  </span>
                  <div>
                    <span className="text-sm font-semibold">{word}</span>
                    <p className="text-xs text-[var(--text-tertiary)]">{why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Palavras Proibidas */}
          <div className="rounded-2xl border border-[var(--color-loss)]/20 bg-[var(--bg-secondary)] p-6">
            <h3 className="mb-6 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-loss)]">Palavras Proibidas — NUNCA USAR</h3>
            <div className="space-y-3">
              {[
                { word: "Ficar rico", why: "Promessa irresponsável" },
                { word: "Garantido", why: "Nada em finanças é garantido" },
                { word: "Fácil", why: "Simplifica demais, perde credibilidade" },
                { word: "Revolucionário", why: "Buzzword vazio" },
                { word: "Disruptivo", why: "Clichê tech" },
                { word: "Hack", why: "Trivializa complexidade" },
                { word: "Guru", why: "Associação com charlatanismo" },
                { word: "Robô", why: "Reduz a sofisticação da IA" },
                { word: "Infalível", why: "Falso e perigoso" },
                { word: "Segredo", why: "Linguagem de marketing predatório" },
              ].map(({ word, why }) => (
                <div key={word} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[var(--color-loss)]/10">
                    <span className="text-[10px] text-[var(--color-loss)]">&#10007;</span>
                  </span>
                  <div>
                    <span className="text-sm font-semibold">{word}</span>
                    <p className="text-xs text-[var(--text-tertiary)]">{why}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── 10 · JORNADA DO HERÓI ── */}
      <Section id="jornada" num="10" title="Jornada do Herói" subtitle="A transformação do operador individual em quatro fases.">
        {/* visual timeline */}
        <div className="relative">
          {/* connecting line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-gradient-to-b from-[var(--color-signal-green)] via-[var(--color-signal-green)]/40 to-transparent md:block" />

          <div className="space-y-8">
            {[
              {
                num: "01",
                title: "O Sono",
                description:
                  "O operador individual opera com ferramentas limitadas. Usa plataformas genéricas, toma decisões baseadas em informação atrasada, intuição ou \"dicas\" de terceiros. Sabe que existe algo melhor, mas não sabe o quê.",
              },
              {
                num: "02",
                title: "O Chamado",
                description:
                  "Descobre que inteligência artificial pode processar milhões de data points em tempo real. Entende que a desvantagem não é de talento — é de infraestrutura. A OpenCapital é apresentada: a infraestrutura da nova inteligência financeira.",
              },
              {
                num: "03",
                title: "A Travessia",
                description:
                  "Conecta-se ao ecossistema. Aprende a interpretar sinais. Começa a operar com dados reais, em tempo real. Os primeiros resultados aparecem — não por sorte, mas por método. A confiança cresce.",
              },
              {
                num: "04",
                title: "O Despertar",
                description:
                  "O operador se transforma. Decisões são respaldadas por inteligência. Resultados são mensuráveis. A prosperidade se torna inevitável — não como promessa, mas como consequência de disciplina + dados + infraestrutura.",
              },
            ].map(({ num, title, description }) => (
              <div key={num} className="relative flex gap-6 md:pl-16">
                {/* timeline dot */}
                <div className="absolute left-3.5 top-2 hidden h-5 w-5 items-center justify-center rounded-full border-2 border-[var(--color-signal-green)] bg-[var(--bg-primary)] md:flex">
                  <div className="h-2 w-2 rounded-full bg-[var(--color-signal-green)]" />
                </div>

                <div className="glow-card flex-1 rounded-2xl bg-[var(--bg-secondary)] p-6">
                  <div className="mb-2 flex items-center gap-3">
                    <span className="font-mono text-xs font-bold text-[var(--color-signal-green)]">Fase {num}</span>
                    <span className="text-xs text-[var(--text-tertiary)]">&mdash;</span>
                    <h3 className="text-lg font-bold">{title}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-[var(--text-secondary)]">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 11 · CONTRATO DA MARCA ── */}
      <Section id="contrato" num="11" title="Contrato da Marca" subtitle="O pacto entre a OpenCapital e quem opera com ela.">
        <div className="grid gap-8 md:grid-cols-2">
          {/* OpenCapital promete */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">
              <Shield size={14} className="text-[var(--color-signal-green)]" />
              A OpenCapital promete
            </h3>

            <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
              <span className="mb-1 block font-mono text-xs font-bold text-[var(--color-signal-green)]">01</span>
              <h4 className="mb-2 font-semibold">Inteligência sem caixas-pretas</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Cada insight, cada sinal, cada recomendação é rastreável até sua fonte. Transparência total sobre dados e metodologias.
              </p>
            </div>

            <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
              <span className="mb-1 block font-mono text-xs font-bold text-[var(--color-signal-green)]">02</span>
              <h4 className="mb-2 font-semibold">Infraestrutura, não dependência</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Construímos ferramentas que amplificam sua inteligência. A decisão sempre é sua. Nunca invertemos essa hierarquia.
              </p>
            </div>

            <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
              <span className="mb-1 block font-mono text-xs font-bold text-[var(--color-signal-green)]">03</span>
              <h4 className="mb-2 font-semibold">Evolução contínua</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                A infraestrutura cresce com os mercados. Dados em tempo real, modelos atualizados, sem obsolescência programada.
              </p>
            </div>
          </div>

          {/* Esperamos do usuário */}
          <div className="space-y-6">
            <h3 className="flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-widest text-[var(--text-primary)]">
              <Users size={14} />
              O que esperamos de você
            </h3>

            <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
              <span className="mb-1 block font-mono text-xs font-bold text-[var(--text-tertiary)]">01</span>
              <h4 className="mb-2 font-semibold">Disciplina operacional</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Dados sem disciplina são ruído. Ferramentas sem método são brinquedos. A OpenCapital entrega o poder — a responsabilidade é sua.
              </p>
            </div>

            <div className="glow-card rounded-2xl bg-[var(--bg-secondary)] p-6">
              <span className="mb-1 block font-mono text-xs font-bold text-[var(--text-tertiary)]">02</span>
              <h4 className="mb-2 font-semibold">Feedback aberto</h4>
              <p className="text-sm text-[var(--text-secondary)]">
                Compartilhe suas necessidades, desafios e resultados para que possamos construir uma infraestrutura cada vez melhor.
              </p>
            </div>
          </div>
        </div>

        {/* Pacto mútuo */}
        <div className="mt-12 rounded-2xl border border-[var(--border-active)] bg-[var(--bg-secondary)] p-8 text-center">
          <span className="mb-4 block font-mono text-xs font-bold uppercase tracking-widest text-[var(--color-signal-green)]">Pacto Mútuo</span>
          <blockquote className="text-lg font-semibold leading-relaxed md:text-xl">
            A OpenCapital trata cada usuário como parceiro na construção da nova era financeira.{" "}
            <span className="gradient-text">Ambos investem — ambos prosperam.</span>
          </blockquote>
        </div>
      </Section>

    </main>
  );
}
