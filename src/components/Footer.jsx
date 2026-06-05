import { Link } from 'react-router-dom'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-glow" />
      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
<div className="footer-logo">
              <img src={`${import.meta.env.BASE_URL}img/logo2.png`} alt="Solstice RP" style={{width: '36px', height: '36px', objectFit: 'contain'}} />

              <div>
                <div className="footer-logo-name">SOLSTICE</div>
                <div className="footer-logo-sub">ROLEPLAY</div>
              </div>
            </div>
            <p className="footer-desc">
              Komunitas roleplay GTA V terbaik di Indonesia. Bergabunglah dan ciptakan petualangan tak terlupakan bersama ribuan pemain.
            </p>
            <div className="footer-socials">
<a href="https://discord.gg/dBZFCJaNU2" className="social-btn" title="Discord">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03z"/>
                </svg>
              </a>
              <a href="#" className="social-btn" title="TikTok">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.74a4.85 4.85 0 0 1-1.01-.05z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-nav">
            <h4 className="footer-nav-title">Navigasi</h4>
            <ul>
              <li><Link to="/">Beranda</Link></li>
              <li><Link to="/jobs">Pekerjaan</Link></li>
              <li><Link to="/rules">Peraturan</Link></li>
              <li><a href="#">Donasi</a></li>
            </ul>
          </div>

          {/* Community */}
          <div className="footer-nav">
            <h4 className="footer-nav-title">Komunitas</h4>
            <ul>
<li><a href="https://discord.gg/dBZFCJaNU2">Server Discord</a></li>
              <li><a href="#">Forum Komunitas</a></li>
              <li><a href="#">Galeri Screenshot</a></li>
              <li><a href="#">Panduan Bermain</a></li>
              <li><a href="#">FAQ</a></li>
            </ul>
          </div>

          {/* Connect */}
          <div className="footer-connect">
            <h4 className="footer-nav-title">Bergabung Sekarang</h4>
            <p>Daftarkan diri dan mulai petualangan roleplaying-mu hari ini.</p>
            <a href="#" className="btn-primary" style={{ marginTop: '16px', display: 'inline-flex' }}>
              Mulai Bermain
            </a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-tagline">
            <span>RESPECT</span>
            <span className="dot">◆</span>
            <span>GOOD ATTITUDE</span>
            <span className="dot">◆</span>
            <span>ROLEPLAY</span>
          </div>
          <p className="footer-copy">© 2026 SOLSTICE ROLEPLAY. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
