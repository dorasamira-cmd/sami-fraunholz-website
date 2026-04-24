'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, ShieldCheck, Building2, HeartHandshake, Laptop, CheckCircle2, Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const servicesPrivate = [
  'Coaching in herausfordernden Lebenslagen',
  'Orientierung bei Behörden, Jobcenter, Jugendamt & Unterbringung',
  'Berufliche Orientierung, Integration & Empowerment',
  'Traumasensibles Coaching für Frauen und Familien',
];

const servicesB2B = [
  'ASOG-Consulting für Unterkünfte & soziale Einrichtungen',
  'Schutzkonzepte, Kinderschutz & Gewaltschutz',
  'Team-Coaching, Fallbesprechungen & Workshops',
  'Digitale Prozessoptimierung & Fallmanagement-Strukturen',
];

const expertise = [
  {
    icon: ShieldCheck,
    title: 'Gewaltschutz & Kinderschutz',
    text: 'Spezialisierung auf gewaltbetroffene Frauen, Mutter-Kind-Kontexte und Schutzprozesse in sozialen Einrichtungen.',
  },
  {
    icon: Building2,
    title: 'ASOG & Berliner Hilfesystem',
    text: 'Sichere Navigation durch Unterbringung, Behördenlogik, Trägerstrukturen und operative Unterkunftsrealität.',
  },
  {
    icon: Laptop,
    title: 'Digitalisierung sozialer Arbeit',
    text: 'Entwicklung smarter Tools, Dashboards und Arbeitsprozesse, die Fachkräfte entlasten und Zeit für Menschen schaffen.',
  },
];

const imageBlocks = [
  {
    title: 'Coaching im Unterkunftskontext',
    text: 'Vertrauensvolle Gespräche, klare Orientierung und praktische Unterstützung im Alltag.',
  },
  {
    title: 'Alltag & Gemeinschaft',
    text: 'Integration entsteht in Begegnungen: in Gruppen, Familiengesprächen, Küchen, Höfen und Gärten.',
  },
  {
    title: 'B2B: Systeme verbessern',
    text: 'Strukturen analysieren, Teams stärken und Prozesse so gestalten, dass soziale Arbeit wieder beim Menschen ankommt.',
  },
];

function Button({ children, variant = 'primary' }: { children: React.ReactNode; variant?: 'primary' | 'secondary' }) {
  const base = 'inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition';
  const styles = variant === 'primary' ? 'bg-slate-950 text-white hover:bg-slate-800' : 'bg-white text-slate-950 ring-1 ring-slate-200 hover:bg-slate-50';
  return <button className={`${base} ${styles}`}>{children}</button>;
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return <div className="mb-4 inline-flex rounded-full bg-stone-100 px-4 py-2 text-sm font-medium text-slate-700 ring-1 ring-stone-200">{children}</div>;
}

function ImagePlaceholder({ className = '', label }: { className?: string; label: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-stone-100 via-white to-slate-100 ring-1 ring-slate-200 ${className}`}>
      <div className="absolute inset-0 opacity-40" style={{ backgroundImage: 'radial-gradient(circle at 20% 20%, rgba(15,23,42,.18), transparent 24%), radial-gradient(circle at 80% 30%, rgba(120,113,108,.22), transparent 28%), radial-gradient(circle at 50% 90%, rgba(15,23,42,.12), transparent 34%)' }} />
      <div className="absolute inset-x-6 bottom-6 rounded-2xl bg-white/75 p-4 backdrop-blur-md ring-1 ring-white/80">
        <p className="text-sm font-semibold text-slate-950">{label}</p>
        <p className="mt-1 text-xs text-slate-600">Bild in /public/images ersetzen</p>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fbfaf8] text-slate-950">
      <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/85 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
          <div className="flex items-baseline gap-3">
            <span className="text-lg font-bold tracking-tight">Sami Fraunholz</span>
            <span className="hidden text-sm text-slate-500 md:inline">Integration · Sozialcoaching · ASOG Consulting</span>
          </div>
          <nav className="hidden items-center gap-7 text-sm font-medium md:flex">
            <a href="#ueber">Über mich</a>
            <a href="#leistungen">Leistungen</a>
            <a href="#asog">ASOG Betreiber</a>
            <a href="#expertise">Expertise</a>
            <a href="#kontakt">Kontakt</a>
          </nav>
        </div>
      </header>

      <section className="mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 md:grid-cols-[1.05fr_.95fr] md:py-28">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .6 }}>
          <SectionLabel>Coaching für Einzelpersonen · Consulting für ASOG-Unterkünfte</SectionLabel>
          <h1 className="max-w-3xl text-5xl font-semibold tracking-tight md:text-7xl">Soziale Arbeit, die Menschen erreicht.</h1>
          <p className="mt-7 max-w-2xl text-xl leading-relaxed text-slate-600">
            Ich begleite Einzelpersonen in herausfordernden Lebenslagen und unterstütze ASOG-Betreiber dabei, Strukturen, Schutzkonzepte und Prozesse menschlicher, wirksamer und moderner zu gestalten.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#einzelpersonen"><Button><Calendar size={18} /> Coaching für Einzelpersonen</Button></a>
            <a href="#asog"><Button variant="secondary">Kontakt für ASOG-Betreiber <ArrowRight size={18} /></Button></a>
          </div>
          <div className="mt-8 flex flex-wrap gap-5 text-sm text-slate-600">
            <span>✓ Berlin & online</span><span>✓ Unterkunfts- & Hilfesystem-Kompetenz</span><span>✓ menschlich, klar, strukturiert</span>
          </div>
        </motion.div>
        <ImagePlaceholder className="h-[520px]" label="Hero-Bild: du im Gespräch, smart casual" />
      </section>

      <section id="ueber" className="border-y border-slate-200 bg-white py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-12 md:grid-cols-[.8fr_1.2fr]">
            <div><SectionLabel>Über mich</SectionLabel><h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Nahbar, klar und systemstark.</h2></div>
            <div className="text-lg leading-relaxed text-slate-600">
              <p>Meine Arbeit verbindet praktische Erfahrung im Berliner Hilfesystem mit Coaching-Kompetenz, Gewaltschutz, Kinderschutz und einem modernen Blick auf digitale Prozesse.</p>
              <p className="mt-5">Ich arbeite dort, wo soziale Arbeit konkret wird: im Gespräch, in Familien, in Unterkünften, in Teams und in Strukturen.</p>
              <p className="mt-5">Mein Anspruch ist, Menschen ernst zu nehmen und gleichzeitig Einrichtungen professionell dabei zu unterstützen, Qualität, Sicherheit und Wirkung im Alltag zu verbessern.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="leistungen" className="mx-auto max-w-7xl px-5 py-20">
        <div className="text-center"><SectionLabel>Leistungen</SectionLabel><h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Zwei Bereiche. Ein Ziel: wirksame Unterstützung.</h2></div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <div id="einzelpersonen" className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
            <HeartHandshake className="mb-6" size={34} />
            <h3 className="text-2xl font-semibold">Für Einzelpersonen</h3>
            <p className="mt-3 text-slate-600">Persönliches Coaching, Orientierung und Begleitung – empathisch, strukturiert und lösungsorientiert.</p>
            <ul className="mt-7 space-y-4">{servicesPrivate.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 shrink-0" size={18} /><span>{item}</span></li>)}</ul>
            <a href="#kontakt" className="mt-8 inline-flex"><Button>Coaching anfragen</Button></a>
          </div>
          <div id="asog" className="rounded-[2rem] bg-slate-950 p-8 text-white shadow-sm">
            <Building2 className="mb-6" size={34} />
            <h3 className="text-2xl font-semibold">Für ASOG-Betreiber & Träger</h3>
            <p className="mt-3 text-slate-300">Consulting für soziale Einrichtungen mit Fokus auf ASOG, Schutzkonzepte, Prozesse und Teamqualität.</p>
            <ul className="mt-7 space-y-4">{servicesB2B.map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="mt-1 shrink-0" size={18} /><span>{item}</span></li>)}</ul>
            <a href="#kontakt" className="mt-8 inline-flex"><Button variant="secondary">Kontakt für ASOG-Betreiber</Button></a>
          </div>
        </div>
      </section>

      <section className="bg-stone-100 py-20">
        <div className="mx-auto max-w-7xl px-5">
          <div className="grid gap-8 md:grid-cols-3">
            {imageBlocks.map((item, index) => (
              <div key={item.title} className="overflow-hidden rounded-[2rem] bg-white shadow-sm ring-1 ring-slate-200">
                <ImagePlaceholder className="h-72 rounded-none ring-0" label={`Bild ${index + 1}: ${item.title}`} />
                <div className="p-7"><h3 className="text-xl font-semibold">{item.title}</h3><p className="mt-2 text-slate-600">{item.text}</p></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="expertise" className="mx-auto max-w-7xl px-5 py-20">
        <div className="max-w-3xl"><SectionLabel>Expertise</SectionLabel><h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Fachliche Tiefe trifft moderne Umsetzung.</h2></div>
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {expertise.map(({ icon: Icon, title, text }) => (
            <div key={title} className="rounded-[2rem] bg-white p-8 shadow-sm ring-1 ring-slate-200">
              <div className="mb-6 inline-flex rounded-2xl bg-stone-100 p-4"><Icon size={28} /></div>
              <h3 className="text-xl font-semibold">{title}</h3><p className="mt-3 leading-relaxed text-slate-600">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="kontakt" className="mx-auto max-w-7xl px-5 py-20">
        <div className="rounded-[2rem] bg-slate-950 p-8 text-white md:p-12">
          <div className="grid gap-10 md:grid-cols-[1fr_.9fr]">
            <div>
              <SectionLabel>Kontakt</SectionLabel>
              <h2 className="text-4xl font-semibold tracking-tight md:text-5xl">Lassen Sie uns sprechen.</h2>
              <p className="mt-5 max-w-xl text-lg leading-relaxed text-slate-300">Ob Einzelcoaching, ASOG-Consulting oder ein erstes Kennenlernen: Ich freue mich auf Ihre Anfrage.</p>
              <div className="mt-8 flex flex-wrap gap-3"><Button variant="secondary"><Calendar size={18} /> Coaching anfragen</Button><Button variant="secondary">Kontakt für ASOG-Betreiber</Button></div>
            </div>
            <div className="rounded-[1.5rem] bg-white/10 p-6 ring-1 ring-white/10">
              <div className="space-y-5 text-slate-200"><p className="flex items-center gap-3"><Mail size={20} /> kontakt@sami-fraunholz.de</p><p className="flex items-center gap-3"><Phone size={20} /> +49 30 XXX XXXX</p><p className="flex items-center gap-3"><MapPin size={20} /> Berlin, Deutschland</p><p className="flex items-center gap-3"><Linkedin size={20} /> linkedin.com/in/sami-fraunholz</p></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
