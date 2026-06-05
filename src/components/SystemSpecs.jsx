import './SystemSpecs.css'

const specs = {
  minimum: [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <line x1="9" y1="2" x2="9" y2="4"/>
          <line x1="15" y1="2" x2="15" y2="4"/>
          <line x1="9" y1="20" x2="9" y2="22"/>
          <line x1="15" y1="20" x2="15" y2="22"/>
          <line x1="2" y1="9" x2="4" y2="9"/>
          <line x1="2" y1="15" x2="4" y2="15"/>
          <line x1="20" y1="9" x2="22" y2="9"/>
          <line x1="20" y1="15" x2="22" y2="15"/>
        </svg>
      ),
      label: 'Prosesor (CPU)',
      value: 'Intel Core i5 3470 @ 3.2GHz',
      note: 'AMD X8 FX-8350 @ 4GHz',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="6" width="20" height="12" rx="2"/>
          <path d="M6 6V4M10 6V4M14 6V4M18 6V4"/>
          <path d="M6 18v2M10 18v2M14 18v2M18 18v2"/>
        </svg>
      ),
      label: 'Kartu Grafis (GPU)',
      value: 'NVIDIA GTX 660 2GB',
      note: 'AMD HD 7870 2GB | DirectX 11',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="6" width="22" height="12" rx="2"/>
          <path d="M1 10h22"/>
        </svg>
      ),
      label: 'Memori (RAM)',
      value: '8 GB DDR3 / DDR4',
      note: 'Dual channel direkomendasikan',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
      label: 'Penyimpanan',
      value: '50 GB Ruang Kosong',
      note: 'SSD direkomendasikan',
    },
  ],
  recommended: [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="4" y="4" width="16" height="16" rx="2"/>
          <rect x="9" y="9" width="6" height="6"/>
          <line x1="9" y1="2" x2="9" y2="4"/>
          <line x1="15" y1="2" x2="15" y2="4"/>
          <line x1="9" y1="20" x2="9" y2="22"/>
          <line x1="15" y1="20" x2="15" y2="22"/>
          <line x1="2" y1="9" x2="4" y2="9"/>
          <line x1="2" y1="15" x2="4" y2="15"/>
          <line x1="20" y1="9" x2="22" y2="9"/>
          <line x1="20" y1="15" x2="22" y2="15"/>
        </svg>
      ),
      label: 'Prosesor (CPU)',
      value: 'Intel i5 Gen 7+ / AMD Ryzen 5',
      note: 'Optimal: Intel i7 / Ryzen 7',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="2" y="6" width="20" height="12" rx="2"/>
          <path d="M6 6V4M10 6V4M14 6V4M18 6V4"/>
          <path d="M6 18v2M10 18v2M14 18v2M18 18v2"/>
        </svg>
      ),
      label: 'Kartu Grafis (GPU)',
      value: 'NVIDIA GTX 1060 / RX 580',
      note: 'Optimal: RTX 2060 / RX 5700',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="6" width="22" height="12" rx="2"/>
          <path d="M1 10h22"/>
        </svg>
      ),
      label: 'Memori (RAM)',
      value: '16 GB DDR4',
      note: '3200 MHz atau lebih tinggi',
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <ellipse cx="12" cy="5" rx="9" ry="3"/>
          <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>
          <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>
        </svg>
      ),
      label: 'Penyimpanan',
      value: 'NVMe SSD 50 GB',
      note: 'NVMe untuk performa terbaik',
    },
  ],
}

const extras = [
  'Koneksi internet stabil minimal 10 Mbps',
  'Windows 10 / 11 64-bit (versi 1909 atau lebih baru)',
  'DirectX 11 dan Visual C++ Redistributable terbaru',
  'GTA V Original (Steam / Epic Games / Rockstar)',
]

export default function SystemSpecs() {
  return (
    <section className="specs-section section">
      <div className="container">
        <div className="specs-header">
          <p className="section-label">Persyaratan Sistem</p>
          <h2 className="section-title">Spesifikasi yang Dibutuhkan</h2>
          <div className="glow-divider" />
          <p className="section-desc">
            Pastikan perangkatmu memenuhi spesifikasi berikut untuk pengalaman bermain yang optimal di SOLSTICE ROLEPLAY.
          </p>
        </div>

        <div className="specs-grid">
          {/* Minimum */}
          <div className="specs-card glass-card">
            <div className="specs-card-header specs-min">
              <div className="specs-badge">MINIMUM</div>
              <p>Spesifikasi dasar untuk menjalankan game dengan pengaturan grafis rendah</p>
            </div>
            <div className="specs-list">
              {specs.minimum.map((item, i) => (
                <div className="spec-item" key={i}>
                  <div className="spec-icon">{item.icon}</div>
                  <div className="spec-info">
                    <span className="spec-label">{item.label}</span>
                    <span className="spec-value">{item.value}</span>
                    <span className="spec-note">{item.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended */}
          <div className="specs-card glass-card specs-rec-card">
            <div className="specs-card-header specs-rec">
              <div className="specs-badge specs-badge-rec">DIREKOMENDASIKAN</div>
              <p>Spesifikasi optimal untuk pengalaman bermain terbaik dengan grafis ultra</p>
            </div>
            <div className="specs-list">
              {specs.recommended.map((item, i) => (
                <div className="spec-item" key={i}>
                  <div className="spec-icon spec-icon-rec">{item.icon}</div>
                  <div className="spec-info">
                    <span className="spec-label">{item.label}</span>
                    <span className="spec-value">{item.value}</span>
                    <span className="spec-note">{item.note}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Extra requirements */}
        <div className="specs-extra glass-card">
          <h3 className="specs-extra-title">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            Persyaratan Tambahan
          </h3>
          <div className="specs-extra-grid">
            {extras.map((e, i) => (
              <div className="extra-item" key={i}>
                <span className="extra-dot">◆</span>
                {e}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
