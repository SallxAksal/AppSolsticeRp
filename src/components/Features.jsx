import './Features.css'

const features = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    title: 'Komunitas Aktif',
    desc: 'Bergabung dengan ribuan pemain aktif setiap hari. Bangun relasi, jalin persahabatan, dan ciptakan momen tak terlupakan bersama.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
        <path d="M7 8h10M7 12h6"/>
      </svg>
    ),
    title: 'Sistem RP Mendalam',
    desc: 'Sistem roleplay yang kaya dengan mekanik kehidupan nyata: pekerjaan, properti, kendaraan, dan interaksi sosial yang realistis.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
        <path d="M2 17l10 5 10-5"/>
        <path d="M2 12l10 5 10-5"/>
      </svg>
    ),
    title: 'Konten Berkualitas',
    desc: 'Map custom, MLO eksklusif, kendaraan import, dan pakaian unik yang tidak ditemukan di server lain. Diperbarui setiap minggu.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
      </svg>
    ),
    title: 'Anti Cheat Ketat',
    desc: 'Sistem keamanan berlapis memastikan lingkungan bermain yang fair dan nyaman bagi seluruh pemain tanpa gangguan cheater.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Event Reguler',
    desc: 'Event mingguan dan bulanan dengan hadiah menarik. Turnamen, konvoi, perayaan, dan masih banyak lagi kejutan dari tim.',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M18 20V10"/>
        <path d="M12 20V4"/>
        <path d="M6 20v-6"/>
      </svg>
    ),
    title: 'Ekonomi Seimbang',
    desc: 'Sistem ekonomi in-game yang dirancang cermat — raih kekayaan lewat kerja keras, bisnis legal, atau jalur karir profesional.',
  },
]

export default function Features() {
  return (
    <section className="features-section section">
      <div className="container">
        <div className="features-header">
          <p className="section-label">Kenapa Solstice?</p>
          <h2 className="section-title">Pengalaman Roleplay<br />yang Tak Tertandingi</h2>
          <div className="glow-divider" />
          <p className="section-desc">
            Kami membangun lebih dari sekadar server game — kami menciptakan dunia virtual
            yang hidup dengan cerita, karakter, dan momen yang akan kamu kenang.
          </p>
        </div>

        <div className="features-grid">
          {features.map((f, i) => (
            <div className="feature-card glass-card" key={i} style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="feature-icon">{f.icon}</div>
              <h3 className="feature-title">{f.title}</h3>
              <p className="feature-desc">{f.desc}</p>
              <div className="feature-line" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
