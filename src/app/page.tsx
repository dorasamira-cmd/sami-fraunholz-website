'use client';

import { ArrowDown, ArrowUpRight, Menu, X } from 'lucide-react';
import { useState } from 'react';

const projects = [
  { no: '01', title: 'Operational AI', type: 'AI systems · Automation', year: '2025', tone: 'blue' },
  { no: '02', title: 'Product foundations', type: 'Digital product · Strategy', year: '2024', tone: 'sand' },
  { no: '03', title: 'The human layer', type: 'Management · Transformation', year: '2024', tone: 'green' },
];

function LineMark() {
  return <span className="line-mark" aria-hidden="true"><i /><i /><i /></span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <main id="top">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Sami Fraunholz Startseite">SAMI<br />FRAUNHOLZ</a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Hauptnavigation">
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={menuOpen}>{menuOpen ? <X size={22} /> : <Menu size={22} />}</button>
      </header>

      <section className="hero section-pad">
        <div className="hero-card">
          <div className="hero-topline"><span className="brand-large">SAMI<br />FRAUNHOLZ</span><span>DIGITAL PRODUCT<br />PORTFOLIO</span></div>
          <div className="hero-copy"><p className="hero-kicker">Management · Digital Products · AI Systems</p><h1>Building digital solutions<br />for <em>real-world</em> operations.</h1><p className="hero-description">Digitale Anwendungen, KI-gestützte Systeme und Automatisierung — entwickelt aus realen operativen Anforderungen.</p></div>
          <div className="hero-image"><div className="portal" /><span className="image-note">01 / SYSTEMS IN MOTION</span></div>
          <div className="hero-actions"><a className="button-dark" href="#projects">Explore projects <ArrowUpRight size={20} /></a><a className="about-link" href="#about">About my work</a></div>
          <div className="hero-footer"><span>BERLIN · GERMANY</span><a className="scroll-button" href="#projects" aria-label="Zu Projekten scrollen"><ArrowDown size={21} /></a></div>
        </div>
      </section>

      <section id="problem" className="problem section-pad"><div className="section-heading"><span>01 / THE PROBLEM</span><span className="rule" /></div><div className="split-heading"><h2>Most digital transformation projects don&apos;t fail because of technology.</h2><p>They fail because the solution never makes it into the real operation.</p></div><div className="problem-grid"><div><LineMark /><p>Disconnected tools.<br />Manual workarounds.<br />Expensive inertia.</p></div><p className="large-note">The gap between a promising idea and a system people actually use is where I work.</p></div></section>

      <section id="projects" className="projects section-pad"><div className="section-heading"><span>02 / THE SOLUTION</span><span className="rule" /></div><div className="solution-intro"><h2>I build the operating layer between <em>strategy</em> and reality.</h2><p>From first principle to daily adoption: digital products, AI systems and automation designed around the people and processes that make a business move.</p></div><div className="project-list">{projects.map((project) => <article className="project" key={project.no}><div className={`project-visual ${project.tone}`}><span className="project-no">{project.no}</span><LineMark /><a href="#contact" className="project-open" aria-label={`${project.title} öffnen`}><ArrowUpRight size={20} /></a></div><div className="project-meta"><div><h2>{project.title}</h2><p>{project.type}</p></div><span>{project.year}</span></div></article>)}</div></section>

      <section id="about" className="about section-pad"><div className="section-heading"><span>03 / PROOF</span><span className="rule" /></div><div className="proof-layout"><h2>Built for the messy middle.</h2><div className="proof-copy"><p className="lead">The part after the workshop. Before the dashboard. When a system has to earn its place in someone&apos;s day.</p><p>My work combines operational leadership, product thinking and hands-on technical direction to turn complexity into an advantage.</p><a className="text-link" href="#contact">See how I work <ArrowUpRight size={16} /></a></div></div><div className="proof-stats"><div><strong>01</strong><span>Clear direction<br />before a line of code</span></div><div><strong>02</strong><span>Systems designed<br />for adoption</span></div><div><strong>03</strong><span>Technology that<br />keeps its promise</span></div></div></section>

      <section id="contact" className="contact section-pad"><div className="section-heading"><span>04 / NEXT MOVE</span><span className="rule" /></div><div className="cta-wrap"><h2>Make the next move<br /><em>the smart one.</em></h2><p>If the problem is complex, the decision shouldn&apos;t be. Tell me what needs to work better.</p><a className="button-dark" href="mailto:hello@samifraunholz.com">Start a conversation <ArrowUpRight size={20} /></a></div></section>
      <footer className="section-pad"><span className="brand">SAMI FRAUNHOLZ</span><span>© 2025 · BERLIN</span><span>Built for what&apos;s next.</span></footer>
    </main>
  );
}
