import { Bot, CheckCircle2, FileText, MapPin, Plane, Send, ShieldCheck, Thermometer, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/cn';

// Illustrative product screens drawn in HTML/CSS (no screenshots of third-party software, no fake data claims).
// They show the kind of work each vertical delivers, the way SaaS sites show product UI.

function Window({ title, children, className }: { title: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn('overflow-hidden rounded-2xl border border-line bg-white shadow-[0_24px_60px_-30px_rgba(11,21,48,0.45)]', className)}>
      <div className="flex items-center gap-2 border-b border-line bg-mist px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <span className="ml-2 truncate text-[12px] font-medium text-muted">{title}</span>
      </div>
      {children}
    </div>
  );
}

export function ErpScreen({ className }: { className?: string }) {
  const rows = [
    ['Purchase orders', '1,284', 'teal'],
    ['Invoices matched', '96%', 'blue'],
    ['Open deliveries', '312', 'violet'],
  ] as const;
  const bars = [42, 55, 48, 66, 61, 74, 70, 82];
  return (
    <Window title="ERP overview: finance and supply chain" className={className}>
      <div className="grid gap-3 p-4 sm:grid-cols-3">
        {rows.map(([k, v, c]) => (
          <div key={k} className="rounded-xl border border-line p-3">
            <p className="text-[11px] text-muted">{k}</p>
            <p className={cn('mt-1 font-display text-xl font-semibold', c === 'teal' && 'text-teal', c === 'blue' && 'text-blue', c === 'violet' && 'text-violet')}>{v}</p>
          </div>
        ))}
      </div>
      <div className="px-4 pb-4">
        <div className="rounded-xl border border-line p-3">
          <div className="flex items-center justify-between text-[11px] text-muted"><span>Monthly spend under control</span><TrendingUp aria-hidden className="size-3.5 text-teal" /></div>
          <div className="mt-3 flex h-20 items-end gap-1.5">
            {bars.map((b, i) => <span key={i} className="flex-1 rounded-t" style={{ height: `${b}%`, background: i === bars.length - 1 ? '#604b9f' : '#c9d6ee' }} />)}
          </div>
        </div>
      </div>
    </Window>
  );
}

export function CopilotScreen({ className }: { className?: string }) {
  return (
    <Window title="AI assistant for field and office teams" className={className}>
      <div className="space-y-3 p-4 text-[13px]">
        <p className="ml-auto max-w-[80%] rounded-2xl rounded-br-sm bg-violet px-3 py-2 text-white">Which chillers need service this week?</p>
        <div className="flex max-w-[88%] gap-2">
          <span className="inline-flex size-7 shrink-0 items-center justify-center rounded-full bg-mist text-violet"><Bot aria-hidden className="size-4" /></span>
          <div className="rounded-2xl rounded-bl-sm border border-line px-3 py-2 text-text">
            3 units show rising vibration. Block B chiller 2 is most urgent.
            <span className="mt-2 flex items-center gap-1.5 text-[12px] text-teal"><CheckCircle2 aria-hidden className="size-3.5" /> Work order drafted</span>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-line px-3 py-2 text-muted">
          <span className="flex-1 text-[12px]">Ask about assets, invoices, schedules</span>
          <Send aria-hidden className="size-4 text-violet" />
        </div>
      </div>
    </Window>
  );
}

export function DroneMapScreen({ className }: { className?: string }) {
  return (
    <Window title="Drone survey: site inspection" className={className}>
      <div className="relative h-56 bg-[linear-gradient(135deg,#e8eef7,#f4f6fa)]">
        <svg viewBox="0 0 400 220" className="absolute inset-0 h-full w-full" aria-hidden>
          <defs>
            <pattern id="g" width="20" height="20" patternUnits="userSpaceOnUse"><path d="M20 0H0V20" fill="none" stroke="#d7deea" strokeWidth="0.6" /></pattern>
          </defs>
          <rect width="400" height="220" fill="url(#g)" />
          <path d="M60 170 L120 60 L250 50 L330 130 L280 190 Z" fill="#4379bd14" stroke="#4379bd" strokeWidth="1.5" strokeDasharray="5 4" />
          <path d="M80 160 L130 75 M100 165 L150 70 M120 170 L175 62 M140 175 L200 58 M165 180 L225 55 M190 182 L255 60 M215 185 L290 95 M240 188 L310 120" stroke="#7761aa" strokeWidth="1" opacity="0.6" />
          <rect x="150" y="100" width="46" height="34" fill="#fff" stroke="#0b7f91" strokeWidth="1.5" />
          <rect x="215" y="90" width="38" height="44" fill="#fff" stroke="#0b7f91" strokeWidth="1.5" />
          <circle cx="232" cy="112" r="10" fill="none" stroke="#f3903f" strokeWidth="2" />
        </svg>
        <span className="absolute top-3 left-3 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium shadow-sm"><Plane aria-hidden className="size-3.5 text-violet" /> Mission 14: 82% complete</span>
        <span className="absolute right-3 bottom-3 inline-flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium shadow-sm"><MapPin aria-hidden className="size-3.5 text-orange" /> 1 roof defect flagged</span>
      </div>
    </Window>
  );
}

export function CodeScreen({ className }: { className?: string }) {
  const lines: [string, string][] = [
    ['#7761aa', 'export async function syncOrders() {'],
    ['#4a5573', '  const orders = await erp.purchaseOrders({ status: "open" });'],
    ['#4a5573', '  for (const order of orders) {'],
    ['#0b7f91', '    await portal.publish(order);'],
    ['#4a5573', '  }'],
    ['#a353a0', '  return { synced: orders.length };'],
    ['#7761aa', '}'],
  ];
  return (
    <Window title="api/sync-orders.ts" className={className}>
      <pre className="overflow-hidden p-4 font-mono text-[12px] leading-6">
        {lines.map(([c, l], i) => (
          <div key={i} className="flex gap-4"><span className="w-4 text-right text-muted/50 select-none">{i + 1}</span><span style={{ color: c }}>{l}</span></div>
        ))}
      </pre>
    </Window>
  );
}

export function HvacScreen({ className }: { className?: string }) {
  const units = [['Chiller 1', '6.8°C', 'ok'], ['Chiller 2', '9.4°C', 'warn'], ['AHU 3', '21.0°C', 'ok']] as const;
  return (
    <Window title="Facility dashboard: HVAC" className={className}>
      <ul className="divide-y divide-line">
        {units.map(([n, t, s]) => (
          <li key={n} className="flex items-center justify-between px-4 py-3 text-[13px]">
            <span className="flex items-center gap-2"><Thermometer aria-hidden className="size-4 text-teal" />{n}</span>
            <span className="flex items-center gap-3"><span className="font-mono">{t}</span><span className={cn('rounded-full px-2 py-0.5 text-[11px] font-medium', s === 'ok' ? 'bg-[#e9f6ec] text-[#2f7a3c]' : 'bg-[#fff1e3] text-[#a2531a]')}>{s === 'ok' ? 'Normal' : 'Service due'}</span></span>
          </li>
        ))}
      </ul>
    </Window>
  );
}

export function DocScreen({ className }: { className?: string }) {
  return (
    <Window title="Invoice processing" className={className}>
      <div className="flex gap-3 p-4 text-[12px]">
        <div className="flex size-14 shrink-0 items-center justify-center rounded-lg bg-mist text-violet"><FileText aria-hidden className="size-6" /></div>
        <div className="flex-1 space-y-1.5">
          <p className="font-semibold text-text">INV-20431 read and matched to PO</p>
          <p className="text-muted">Vendor, amount and tax checked automatically</p>
          <span className="inline-flex items-center gap-1 text-teal"><CheckCircle2 aria-hidden className="size-3.5" /> Ready to post</span>
        </div>
      </div>
    </Window>
  );
}

export function InfraScreen({ className }: { className?: string }) {
  const items = [
    ['On-premise servers', '42 nodes', 'ok'],
    ['Cloud workloads', '118 services', 'ok'],
    ['Security policies', 'Zero-trust active', 'ok'],
    ['Patch compliance', '2 hosts pending', 'warn'],
  ] as const;
  return (
    <Window title="Hybrid infrastructure and security" className={className}>
      <div className="grid grid-cols-[1fr_auto_1fr] items-center gap-3 p-4">
        <div className="rounded-xl border border-line p-3 text-center text-[12px]"><p className="font-semibold">Data centre</p><p className="text-muted">On-premise</p></div>
        <span className="inline-flex size-10 items-center justify-center rounded-full bg-violet/10 text-violet"><ShieldCheck aria-hidden className="size-5" /></span>
        <div className="rounded-xl border border-line p-3 text-center text-[12px]"><p className="font-semibold">Cloud</p><p className="text-muted">Public and private</p></div>
      </div>
      <ul className="divide-y divide-line border-t border-line">
        {items.map(([k, v, s]) => (
          <li key={k} className="flex items-center justify-between px-4 py-2.5 text-[13px]">
            <span>{k}</span>
            <span className={cn('rounded-full px-2 py-0.5 text-[11px] font-medium', s === 'ok' ? 'bg-[#e9f6ec] text-[#2f7a3c]' : 'bg-[#fff1e3] text-[#a2531a]')}>{v}</span>
          </li>
        ))}
      </ul>
    </Window>
  );
}
