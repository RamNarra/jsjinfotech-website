export default function MaintenancePage() {
  return (
    <div className="page">
      <main id="main" className="hero">
        <h1 className="title">Under Maintenance</h1>
      </main>

      <footer className="foot">
        <div className="foot-col">
          <strong>JSJ INFOTECH</strong>
          <address>
            Plot No. 144, Road No. 72
            <br />
            Jubilee Hills, Hyderabad
            <br />
            Telangana, India
          </address>
        </div>
        <div className="foot-col">
          <strong>Contact</strong>
          <a href="tel:+918943032965">+91 89430 32965</a>
          <a href="mailto:support@jsjinfotech.co.in">support@jsjinfotech.co.in</a>
        </div>
        <p className="foot-copy">© {new Date().getFullYear()} JSJ INFOTECH. All rights reserved.</p>
      </footer>
    </div>
  );
}
