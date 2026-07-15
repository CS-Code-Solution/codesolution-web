import {
  Activity,
  ArrowUpRight,
  CheckCircle2,
  Database,
  ShieldCheck,
  Workflow,
} from 'lucide-react'

const bars = [42, 68, 55, 82, 74, 96]

export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none" aria-hidden="true">
      {/* Main dashboard card */}
      <div className="relative rounded-2xl border border-border bg-card p-5 shadow-xl">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex size-8 items-center justify-center rounded-lg bg-navy text-white">
              <Activity className="size-4" />
            </span>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-navy">Painel de operações</span>
              <span className="text-[11px] text-muted-foreground">Visão geral</span>
            </div>
          </div>
          <span className="inline-flex items-center gap-1 rounded-full bg-accent px-2 py-1 text-[11px] font-semibold text-primary">
            <ArrowUpRight className="size-3" />
            Ativo
          </span>
        </div>

        {/* Stats row */}
        <div className="mt-4 grid grid-cols-3 gap-3">
          {[
            { label: 'Processos', value: '128' },
            { label: 'Tarefas', value: '46' },
            { label: 'Eficiência', value: '92%' },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-secondary p-3">
              <p className="text-lg font-extrabold text-navy">{s.value}</p>
              <p className="text-[11px] text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>

        {/* Chart */}
        <div className="mt-4 rounded-xl border border-border bg-background p-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-semibold text-foreground/70">Produtividade</span>
            <span className="text-[11px] font-semibold text-primary">+18%</span>
          </div>
          <div className="mt-3 flex h-24 items-end gap-2">
            {bars.map((h, i) => (
              <div
                key={i}
                className="flex-1 rounded-t-md"
                style={{
                  height: `${h}%`,
                  background:
                    i === bars.length - 1
                      ? 'linear-gradient(180deg, #20b8e6, #0b5ed7)'
                      : 'rgba(11,94,215,0.18)',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Floating card: security */}
      <div className="absolute -left-4 -bottom-6 hidden w-48 rounded-xl border border-border bg-card p-3 shadow-lg sm:block">
        <div className="flex items-center gap-2">
          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-accent text-primary">
            <ShieldCheck className="size-4" />
          </span>
          <div>
            <p className="text-xs font-bold text-navy">Segurança</p>
            <p className="text-[10px] text-muted-foreground">Acesso protegido</p>
          </div>
        </div>
      </div>

      {/* Floating card: automation */}
      <div className="absolute -right-3 -top-5 hidden w-44 rounded-xl border border-border bg-card p-3 shadow-lg sm:block">
        <div className="flex items-center gap-2">
          <span className="inline-flex size-8 items-center justify-center rounded-lg bg-navy text-white">
            <Workflow className="size-4" />
          </span>
          <div>
            <p className="text-xs font-bold text-navy">Automação</p>
            <p className="text-[10px] text-muted-foreground">Fluxos digitais</p>
          </div>
        </div>
      </div>

      {/* Floating pill: data synced */}
      <div className="absolute right-6 bottom-2 hidden items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 shadow-lg md:flex">
        <CheckCircle2 className="size-4 text-primary" />
        <span className="text-[11px] font-semibold text-navy">Dados sincronizados</span>
        <Database className="size-3.5 text-muted-foreground" />
      </div>
    </div>
  )
}
