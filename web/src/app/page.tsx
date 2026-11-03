import type { CSSProperties } from 'react';

const step = (i: number) => ({ '--i': i }) as CSSProperties;

export default function ComingSoonPage() {
  return (
    <div className="page">
      <header className="nav">JSJ INFOTECH</header>

      <main id="main" className="hero">
        <p className="eyebrow in" style={step(0)}>
          Our new website
        </p>
        <h1 className="title in" style={step(1)}>
          Coming soon.
        </h1>
        <p className="lede in" style={step(2)}>
          We are rebuilding jsjinfotech.co.in. Technology and project execution, from Hyderabad. Back shortly.
        </p>
        <a className="link in" style={step(3)} href="mailto:support@jsjinfotech.co.in">
          Contact us
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M5 2.5 9.5 7 5 11.5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </a>
      </main>

      <footer className="foot in" style={step(4)}>
        <span>© {new Date().getFullYear()} JSJ INFOTECH. Hyderabad, India.</span>
        <a href="tel:+918943032965">+91 89430 32965</a>
      </footer>
    </div>
  );
}
