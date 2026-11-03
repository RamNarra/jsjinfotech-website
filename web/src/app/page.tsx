export default function MaintenancePage() {
  return (
    <div className="stage">
      <div className="aurora" aria-hidden="true">
        <i />
        <i />
        <i />
      </div>
      <div className="grid-lines" aria-hidden="true" />
      <div className="grain" aria-hidden="true" />

      <header className="bar rise" style={{ '--i': 0 } as React.CSSProperties}>
        <div className="brand">
          JSJ <span>Infotech</span>
        </div>
      </header>

      <main id="main" className="hero">
        <div className="pill rise" style={{ '--i': 1 } as React.CSSProperties}>
          <span className="pulse" aria-hidden="true" />
          Scheduled maintenance
        </div>

        <h1 className="title rise" style={{ '--i': 2 } as React.CSSProperties}>
          Something <em>better</em>
          <br />
          is on the way.
        </h1>

        <p className="lede rise" style={{ '--i': 3 } as React.CSSProperties}>
          We are rebuilding our website. JSJ Infotech is still here, delivering technology and project execution
          from Hyderabad. The new site launches soon.
        </p>

        <div className="track rise" style={{ '--i': 4 } as React.CSSProperties} role="presentation" />

        <a
          className="cta rise"
          style={{ '--i': 5 } as React.CSSProperties}
          href="mailto:support@jsjinfotech.co.in"
        >
          Get in touch
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true"><path d="M3 8h10m0 0L9 4m4 4L9 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" /></svg>
        </a>
      </main>

      <footer className="foot rise" style={{ '--i': 6 } as React.CSSProperties}>
        <span>© {new Date().getFullYear()} JSJ INFOTECH · Hyderabad, India</span>
        <a href="tel:+918943032965">+91 89430 32965</a>
      </footer>
    </div>
  );
}
