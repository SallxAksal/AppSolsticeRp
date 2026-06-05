import { useState } from 'react'
import './Jobs.css'

const categories = ['Semua', 'Legal', 'Pemerintah', 'Kriminal']

const jobs = [
  { 
    title: 'Pemerintah', 
    category: 'Pemerintah', 
    icon: <img src="/public/img/govSrp.png" alt="Pemerintah" width={100} height={100} />,
    desc: 'Bekerja sebagai aparatur negara untuk mengelola kota dan membantu operasional layanan publik.', 
    requirements: ['Surat Berkelakuan Baik (SKWB)', 'Kartu Tanda Penduduk (KTP)', 'Tidak memiliki catatan kriminal', 'Surat Sehat', 'Lolos tes seleksi'] 
  },
  { 
    title: 'Polisi', 
    category: 'Pemerintah', 
    icon: <img src="/public/img/polSrp.png" alt="Pemerintah" width={100} height={100} />,
    desc: 'Menegakkan hukum, menangkap pelaku kriminal, dan menjaga keamanan warga di seluruh kota.', 
    requirements: ['Surat Berkelakuan Baik (SKWB)', 'Kartu Tanda Penduduk (KTP)', 'Tidak memiliki catatan kriminal','Surat Sehat', 'Lolos tes seleksi'] 
  },
  { 
    title: 'EMS / Paramedik', 
    category: 'Pemerintah', 
    icon: <img src="/public/img/emsSrp.png" alt="Pemerintah" width={100} height={100} />,  
    desc: 'Memberikan pertolongan medis kepada pemain yang terluka dan menangani situasi darurat.',  
    requirements: ['Surat Berkelakuan Baik (SKWB)', 'Kartu Tanda Penduduk (KTP)', 'Tidak memiliki catatan kriminal', 'Surat Sehat', 'Lolos tes seleksi'] 
  },
  { 
    title: 'Mekanik', 
    category: 'Legal', 
    icon: <img src="/public/img/mechSrp.png" alt="Legal" width={100} height={100} />, 
    desc: 'Memperbaiki kendaraan, melakukan tuning, dan mengelola operasional bengkel.', 
    requirements: ['Surat Berkelakuan Baik (SKWB)', 'Kartu Tanda Penduduk (KTP)', 'Memiliki SIM', 'Memiliki STNK', 'Surat Sehat', 'Lolos tes seleksi'] 
  },
  { 
    title: 'Pedagang', 
    category: 'Legal', 
    icon: <img src="/public/img/selSrp.png" alt="Legal" width={100} height={100} />,  
    desc: 'Menjalankan bisnis jual beli barang dan melayani kebutuhan pelanggan.',  
    requirements: ['Surat Berkelakuan Baik (SKWB)', 'Kartu Tanda Penduduk (KTP)', 'Surat Sehat', 'Lolos tes seleksi'] 
  },
  { 
    title: 'Sopir Taksi', 
    category: 'Legal', 
    icon: <img src="/public/img/taxSrp.png" alt="Legal" width={100} height={100} />, 
    desc: 'Mengantar penumpang ke berbagai lokasi dan membantu pemain mengenal wilayah kota.', 
    requirements: ['Surat Berkelakuan Baik (SKWB)', 'Kartu Tanda Penduduk (KTP)', 'Memiliki SIM', 'Memiliki STNK', 'Surat Sehat', 'Lolos tes seleksi'] 
  },
  { 
    title: 'Hight table', 
    category: 'Kriminal', 
    icon: <img src="/public/img/logoD.png" alt="Kriminal" width={100} height={100} />, 
    desc: 'Organisasi kriminal elit tingkat tinggi yang mengendalikan berbagai jaringan ilegal dari balik layar. Berperan sebagai pengambil keputusan utama dengan pengaruh besar terhadap struktur dunia kriminal.',  
    requirements: ['Memiliki minimal 15 anggota aktif.', 'Wajib memiliki identitas outfit', 'Wajib memiliki latar cerita yang kuat', 'Wajib memiliki struktur organisasi yang jelas', 'Wajib memiliki rencana aksi kriminal yang terperinci'] 
  },
  { 
    title: 'Mafia', 
    category: 'Kriminal', 
    icon: <img src="/public/img/logoD.png" alt="Kriminal" width={100} height={100} />,  
    desc: 'Organisasi kriminal elit yang menguasai bisnis ilegal dengan struktur dan strategi tingkat tinggi.', 
    requirements: ['Memiliki minimal 15 anggota aktif.', 'Wajib memiliki identitas outfit', 'Wajib memiliki latar cerita yang kuat', 'Wajib memiliki struktur organisasi yang jelas', 'Wajib memiliki rencana aksi kriminal yang terperinci'] 
  },
  { 
    title: 'Yakuza', 
    category: 'Kriminal', 
    icon: <img src="/public/img/logoD.png" alt="Kriminal" width={100} height={100} />, 
    desc: 'Kelompok kriminal terorganisir dengan disiplin tinggi dan fokus pada kontrol bisnis ilegal.', 
    requirements: ['Memiliki minimal 15 anggota aktif.', 'Wajib memiliki identitas outfit', 'Wajib memiliki latar cerita yang kuat', 'Wajib memiliki struktur organisasi yang jelas', 'Wajib memiliki rencana aksi kriminal yang terperinci'] 
  },
  { 
    title: 'Cartel', 
    category: 'Kriminal', 
    icon: <img src="/public/img/logoD.png" alt="Kriminal" width={100} height={100} />, 
    desc: 'Organisasi kriminal besar yang mengendalikan distribusi barang ilegal dengan jaringan luas.',  
    requirements: ['Memiliki minimal 15 anggota aktif.', 'Wajib memiliki identitas outfit', 'Wajib memiliki latar cerita yang kuat', 'Wajib memiliki struktur organisasi yang jelas', 'Wajib memiliki rencana aksi kriminal yang terperinci'] 
  },
  { 
    title: 'Motor Club (MC)', 
    category: 'Kriminal', 
    icon: <img src="/public/img/logoD.png" alt="Kriminal" width={100} height={100} />,  
    desc: 'Kelompok berbasis kendaraan yang fokus pada kontrol wilayah dan aktivitas ilegal terorganisir.', 
    requirements: ['Memiliki minimal 15 anggota aktif.', 'Wajib memiliki identitas outfit', 'Wajib memiliki latar cerita yang kuat', 'Wajib memiliki struktur organisasi yang jelas', 'Wajib memiliki rencana aksi kriminal yang terperinci'] 
  },
  { 
    title: 'Street Gang', 
    category: 'Kriminal', 
    icon: <img src="/public/img/logoD.png" alt="Kriminal" width={100} height={100} />, 
    desc: 'Menguasai wilayah, menjalankan aktivitas ilegal skala jalanan, dan mempertahankan area dari gang lain.',  
    requirements: ['Memiliki minimal 15 anggota aktif.', 'Wajib memiliki identitas outfit', 'Wajib memiliki latar cerita yang kuat', 'Wajib memiliki struktur organisasi yang jelas', 'Wajib memiliki rencana aksi kriminal yang terperinci'] 
  },
]

export default function Jobs() {
  const [active, setActive] = useState('Semua')
  const [search, setSearch] = useState('')

  const filtered = jobs.filter(j => {
    const matchCat = active === 'Semua' || j.category === active
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.desc.toLowerCase().includes(search.toLowerCase())
    return matchCat && matchSearch
  })

  return (
    <main className="jobs-page">
<div className="jobs-hero">
        <div className="jobs-hero-orb" />
        <div style={{textAlign: 'center', marginBottom: '40px'}}>
<img src="/img/logo.png" alt="Solstice RP Logo" style={{maxWidth: '180px', height: 'auto'}} />
        </div>
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Karir & Pekerjaan</p>
          <h1 className="jobs-title">Temukan Jalanmu</h1>
          <p className="jobs-subtitle">
            Dari penegak hukum hingga gembong kriminal — setiap jalur karir menawarkan cerita
            dan pengalaman unik. Pilih peranmu dan ukir namamu di SOLSTICE ROLEPLAY.
          </p>
        </div>
      </div>

      <section className="jobs-section section">
        <div className="container">
          {/* Filters */}
          <div className="jobs-filters">
            <div className="jobs-categories">
              {categories.map(cat => (
                <button
                  key={cat}
                  className={`cat-btn ${active === cat ? 'active' : ''}`}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
            <div className="jobs-search">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/>
                <path d="M21 21l-4.35-4.35"/>
              </svg>
              <input
                type="text"
                placeholder="Cari pekerjaan..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
          </div>

          {/* Grid */}
          <div className="jobs-count">
            Menampilkan <strong>{filtered.length}</strong> pekerjaan
          </div>
          <div className="jobs-grid">
            {filtered.map((job, i) => (
              <div className="job-card glass-card" key={i}>
                <div className="job-card-top">
                  <div className="job-icon">{job.icon}</div>
                  <div className="job-category-badge">{job.category}</div>
                </div>
                <h3 className="job-title">{job.title}</h3>
                <p className="job-desc">{job.desc}</p>

                <div className="job-requirements">
                  <p className="req-label">Persyaratan:</p>
                  <ul>
                    {job.requirements.map((r, ri) => (
                      <li key={ri}>{r}</li>
                    ))}
                  </ul>
                </div>

                <a href="#" className="btn-primary job-apply-btn">Lamar Sekarang</a>
              </div>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="jobs-empty">
              <span>🔍</span>
              <p>Tidak ada pekerjaan yang ditemukan</p>
            </div>
          )}
        </div>
      </section>
    </main>
  )
}
