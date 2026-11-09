'use client';

import { ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

const projects = [
  { slug: 'facility-management', number: '01', title: 'Facility Management System', status: 'In development', description: 'Eine zentrale Operations-Plattform für transparente Abläufe, schnellere Entscheidungen und weniger manuelle Abstimmung.', label: 'Operations' },
  { slug: 'case-management', number: '02', title: 'Digital Case Management', status: 'Selected work', description: 'Digitale Fallsteuerung für komplexe Prozesse — strukturiert, nachvollziehbar und konsequent auf den Alltag ausgerichtet.', label: 'Digital product' },
  { slug: 'ai-workflow', number: '03', title: 'AI Workflow Automation', status: 'Prototype', description: 'KI-gestützte Workflows, die Teams entlasten und aus wiederkehrenden Aufgaben belastbare Systeme machen.', label: 'AI systems' },
];

function InterfacePreview({ index }: { index: number }) {
  return <div className={`interface-preview preview-${index}`} aria-hidden="true"><div className="preview-top"><span /><span /><span /></div><div className="preview-body"><div className="preview-sidebar"><i /><i /><i /><i /></div><div className="preview-content"><b /><b /><div className="preview-row"><span /><span /><span /></div><div className="preview-row"><span /><span /><span /></div><div className="preview-row"><span /><span /><span /></div></div></div></div>;
}

export default function Home() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <main>
    <header className="site-header"><a className="brand" href="#top" aria-label="Sami Fraunholz home"><span className="brand-mark" aria-hidden="true" /> <span>SAMI FRAUNHOLZ</span></a><nav className={open ? 'nav nav-open' : 'nav'}><a href="#work" onClick={close}>Work</a><a href="#capabilities" onClick={close}>Capabilities</a><a href="#profile" onClick={close}>Profile</a><a href="#contact" onClick={close}>Contact</a></nav><button className="menu-toggle" onClick={() => setOpen(!open)} aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open}>{open ? <X size={20} /> : <Menu size={20} />}</button></header>

    <section id="top" className="hero page-width"><div className="eyebrow">Management · Digital Transformation · AI Systems</div><h1>Management.<br />Digitale Transformation.<br /><span>KI-Systeme.</span></h1><div className="hero-bottom"><p>Operative Führung, digitale Produktentwicklung und KI-gestützte Organisationslösungen.</p><a className="circle-arrow" href="#work" aria-label="Zu Projekten"><ArrowUpRight size={20} /></a></div></section>

    <section id="work" className="section page-width"><div className="section-head"><span>Selected projects</span><span>01 — 03</span></div><div className="project-grid">{projects.map((project, index) => <article className="project-card" key={project.slug}><InterfacePreview index={index} /><div className="project-card-meta"><div><span className="project-number">{project.number}</span><h2>{project.title}</h2><p>{project.description}</p></div><a href={`/projects/${project.slug}`} aria-label={`${project.title} ansehen`}><ArrowUpRight size={18} /></a></div><div className="project-footer"><span>{project.label}</span><span>{project.status}</span></div></article>)}</div></section>

    <section id="capabilities" className="section page-width"><div className="section-head"><span>Capabilities</span><span>02</span></div><div className="capability-list"><div><span>01</span><h2>Operational Management</h2><p>Führung, Priorisierung und Umsetzung dort, wo Strategie in tägliche Arbeit übersetzt wird.</p></div><div><span>02</span><h2>Digital Product Development</h2><p>Produkte und Systeme von der Problemdefinition bis zur verlässlichen Anwendung im Unternehmen.</p></div><div><span>03</span><h2>AI & Intelligent Automation</h2><p>KI sinnvoll integrieren — sicher, nachvollziehbar und mit einem klaren Beitrag zur Organisation.</p></div></div></section>

    <section id="approach" className="section page-width approach"><div className="section-head"><span>Approach & technology</span><span>03</span></div><div className="approach-grid"><h2>Technologie ist dann gut, wenn sie Verantwortung leichter macht.</h2><div><p>Ich entwickle digitale Lösungen mit einem klaren Blick auf Prozesse, Menschen und Umsetzung. Von der Architektur bis zum Rollout bleibt der operative Kontext der Maßstab.</p><p className="muted">Schwerpunkte: Produktentwicklung, Systemarchitektur, Datenschutz, lokale KI und belastbare Implementierung.</p></div></div></section>

    <section id="profile" className="section page-width profile"><div className="section-head"><span>Profile</span><span>04</span></div><div className="profile-grid"><h2>Management experience with technical depth.</h2><p>Als Manager und Product Builder verbinde ich operative Verantwortung mit der Fähigkeit, digitale Produkte selbst zu strukturieren, zu bewerten und in den Unternehmensalltag zu bringen.</p></div></section>

    <section id="contact" className="contact page-width"><div className="section-head"><span>Contact</span><span>05</span></div><h2>Ein gutes Gespräch<br />ist oft der beste<br /><span>erste Schritt.</span></h2><div className="contact-links"><a href="mailto:hello@samifraunholz.com">Management & Leadership <ArrowUpRight size={18} /></a><a href="mailto:hello@samifraunholz.com">Digitale Implementierung <ArrowUpRight size={18} /></a><a href="mailto:hello@samifraunholz.com">Strategische Zusammenarbeit <ArrowUpRight size={18} /></a></div></section>
    <footer className="page-width"><span>SAMI FRAUNHOLZ</span><span>Berlin · Germany</span><span>© 2026</span></footer>
  </main>;
}
