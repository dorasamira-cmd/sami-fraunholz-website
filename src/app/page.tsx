'use client';

import { ArrowUpRight, ArrowDown, Menu, X, Mail } from 'lucide-react';
import { useState } from 'react';

const projects = [
  { number: '01', title: 'Aesop / Quiet rituals', type: 'Art direction · Digital', color: 'bg-[#d9d1c3]', accent: 'from-[#b7ab98] to-[#f0e6d8]' },
  { number: '02', title: 'Still / Object studies', type: 'Photography · Identity', color: 'bg-[#b8c6bd]', accent: 'from-[#6d8177] to-[#d8e2dc]' },
  { number: '03', title: 'Noma / New Nordic', type: 'Strategy · Editorial', color: 'bg-[#d5d9e2]', accent: 'from-[#929db2] to-[#eef0f5]' },
];

function Mark() {
  return <span className="mark" aria-hidden="true"><span /></span>;
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Lina Mora, Startseite"><Mark /><span>LINA<br />MORA</span></a>
        <nav className={menuOpen ? 'nav nav-open' : 'nav'} aria-label="Hauptnavigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </nav>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Menü schließen' : 'Menü öffnen'} aria-expanded={menuOpen}>{menuOpen ? <X size={20} /> : <Menu size={20} />}</button>
      </header>

      <section id="top" className="hero section-pad">
        <div className="eyebrow"><span className="dot" /> Independent creative studio · Berlin / Remote</div>
        <h1>Ideas with<br /><em>intention.</em></h1>
        <div className="hero-bottom">
          <p>Ich entwickle visuelle Identitäten und digitale Erfahrungen für Marken mit Haltung.</p>
          <a className="circle-link" href="#work" aria-label="Zu den Projekten scrollen"><ArrowDown size={22} /></a>
        </div>
        <div className="hero-shape" aria-hidden="true"><span>LM</span></div>
      </section>

      <section id="work" className="work section-pad">
        <div className="section-heading"><span className="index">01 /</span><h2>Selected work</h2><span className="line" /></div>
        <div className="project-list">
          {projects.map((project) => <article className="project" key={project.number}>
            <div className={`project-visual ${project.color}`}><div className={`visual-art bg-gradient-to-br ${project.accent}`}><span>{project.number}</span><div className="visual-orbit" /></div><a className="project-arrow" href="#contact" aria-label={`${project.title} ansehen`}><ArrowUpRight size={20} /></a></div>
            <div className="project-meta"><span className="index">{project.number}</span><div><h3>{project.title}</h3><p>{project.type}</p></div><span className="project-year">2024</span></div>
          </article>)}
        </div>
      </section>

      <section id="about" className="about section-pad"><div className="section-heading"><span className="index">02 /</span><h2>About</h2><span className="line" /></div><div className="about-grid"><h2>Design can be<br /><em>quietly powerful.</em></h2><div><p className="lead">Lina Mora ist ein unabhängiges Studio für Identität, digitale Produkte und visuelle Systeme.</p><p>Mit einem Auge für Details und einem Faible für klare Gedanken arbeite ich mit Menschen und Teams, die ihre Idee nicht nur zeigen, sondern spürbar machen wollen.</p><a className="text-link" href="mailto:hello@linamora.studio">Mehr über mich <ArrowUpRight size={16} /></a></div></div></section>

      <section id="contact" className="contact section-pad"><div className="section-heading"><span className="index">03 /</span><h2>Get in touch</h2><span className="line" /></div><div className="contact-content"><h2>Let&apos;s make<br /><em>something matter.</em></h2><a className="email-link" href="mailto:hello@linamora.studio">hello@linamora.studio <ArrowUpRight size={26} /></a></div></section>

      <footer><div className="footer-brand"><Mark /> <span>© 2024 Lina Mora</span></div><div className="socials"><a href="mailto:hello@linamora.studio" aria-label="E-Mail"><Mail size={17} /></a><a href="#contact" aria-label="Instagram">IG</a><a href="#contact" aria-label="LinkedIn">IN</a></div><span>Built with intention.</span></footer>
    </main>
  );
}
