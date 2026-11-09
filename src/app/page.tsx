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

      <section id="projects" className="projects section-pad"><div className="section-heading"><span>01 / SELECTED WORK</span><span className="rule" /></div><div className="project-list">{projects.map((project) => <article className="project" key={project.no}><div className={`project-visual ${project.tone}`}><span className="project-no">{project.no}</span><LineMark /><a href="#contact" className="project-open" aria-label={`${project.title} öffnen`}><ArrowUpRight size={20} /></a></div><div className="project-meta"><div><h2>{project.title}</h2><p>{project.type}</p></div><span>{project.year}</span></div></article>)}</div></section>

      <section id="about" className="about section-pad"><div className="section-heading"><span>02 / ABOUT</span><span className="rule" /></div><div className="about-grid"><h2>Technological transformation<br />is not a question of <em>if</em>,<br />but <em>how.</em></h2><div className="about-copy"><p className="lead">Operative Führung und Prozessautomatisierung bilden den Kern meiner Arbeit.</p><p>Dabei geht es um die Entwicklung und Integration KI-gestützter Lösungen und Agentensysteme für die Anforderungen des Unternehmensalltags.</p><p>Datenschutz und Anbieterunabhängigkeit sind wesentliche Kriterien. Besondere Schwerpunkte liegen auf lokaler KI und On-Premises-Architekturen.</p><a className="text-link" href="mailto:hello@samifraunholz.com">Let&apos;s talk <ArrowUpRight size={16} /></a></div></div></section>

      <section id="contact" className="contact section-pad"><div className="section-heading"><span>03 / CONTACT</span><span className="rule" /></div><h2>Have a complex<br /><em>problem?</em></h2><a className="email-link" href="mailto:hello@samifraunholz.com">hello@samifraunholz.com <ArrowUpRight size={25} /></a></section>
      <footer className="section-pad"><span className="brand">SAMI FRAUNHOLZ</span><span>© 2025 · BERLIN</span><span>Built for what&apos;s next.</span></footer>
    </main>
  );
}
