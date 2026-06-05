import './Gallery.css'

// SVG placeholder "screenshots" with sage green art
const GalleryPlaceholder = ({ index, label }) => {
  const colors = [
    ['#1a2e1a', '#2d4d2d', '#3d6b3d'],
    ['#0f1f0f', '#1f3b1f', '#2d5b2d'],
    ['#162416', '#254025', '#335833'],
    ['#111e11', '#1e331e', '#2a4a2a'],
    ['#131f13', '#213621', '#2e4e2e'],
    ['#0e1a0e', '#1a2f1a', '#274427'],
  ]
  const c = colors[index % colors.length]

  return (
    <div className="gallery-item">
      <svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
        <defs>
          <linearGradient id={`g${index}`} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={c[0]}/>
            <stop offset="100%" stopColor={c[2]}/>
          </linearGradient>
          <filter id={`blur${index}`}>
            <feGaussianBlur stdDeviation="20"/>
          </filter>
        </defs>
        <rect width="400" height="260" fill={`url(#g${index})`}/>
        <circle cx="80" cy="60" r="60" fill={c[2]} filter={`url(#blur${index})`} opacity="0.5"/>
        <circle cx="320" cy="200" r="80" fill={c[1]} filter={`url(#blur${index})`} opacity="0.4"/>
        {/* Grid lines */}
        <line x1="0" y1="130" x2="400" y2="130" stroke="rgba(122,184,122,0.05)" strokeWidth="1"/>
        <line x1="200" y1="0" x2="200" y2="260" stroke="rgba(122,184,122,0.05)" strokeWidth="1"/>
        {/* Hexagon decoration */}
        <path d="M200 90 L230 108 L230 144 L200 162 L170 144 L170 108 Z"
              stroke="rgba(122,184,122,0.3)" strokeWidth="1" fill="rgba(90,138,90,0.1)"/>
        <circle cx="200" cy="130" r="8" fill="rgba(122,184,122,0.5)"/>
        {/* Label */}
        <text x="200" y="210" textAnchor="middle"
              fill="rgba(158,191,158,0.4)" fontSize="10" fontFamily="serif" letterSpacing="3">
          {label}
        </text>
      </svg>
      <div className="gallery-overlay">
        <span className="gallery-label">{label}</span>
      </div>
    </div>
  )
}

const items = [
  'City Life', 'Police Chase', 'Gang War', 'Car Meet', 'Night Club', 'Countryside'
]

export default function Gallery() {
  return (
    <section className="gallery-section section">
      <div className="container">
        <div className="gallery-header">
          <p className="section-label">Galeri</p>
          <h2 className="section-title">Momen dari Komunitas</h2>
          <div className="glow-divider" />
          <p className="section-desc">
            Setiap screenshot bercerita. Inilah potongan-potongan kehidupan yang lahir dari SOLSTICE ROLEPLAY.
          </p>
        </div>

        <div className="gallery-grid">
          {items.map((label, i) => (
            <GalleryPlaceholder key={i} index={i} label={label} />
          ))}
        </div>

        <div className="gallery-cta">
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="btn-secondary">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z"/>
            </svg>
            Lihat Instagram Kami
          </a>
        </div>
      </div>
    </section>
  )
}
