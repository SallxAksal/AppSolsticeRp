import './Rules.css'

const rules = [
  {
    number: '01',
    title: 'Respect & Good Attitude',
    desc: 'Semua pemain wajib saling menghormati. Tidak ada tempat untuk kebencian, diskriminasi, atau tindakan merendahkan sesama pemain baik di dalam game maupun di Discord.',
    icon: '🤝',
  },
  {
    number: '02',
    title: 'Full Roleplay (FRP)',
    desc: 'Selalu tetap dalam karakter selama sesi bermain. Jangan membicarakan hal-hal di luar roleplay (OOC) di dalam game tanpa menggunakan channel OOC yang tersedia.',
    icon: '🎭',
  },
  {
    number: '03',
    title: 'Dilarang Metagaming',
    desc: 'Menggunakan informasi dari luar game (Discord, YouTube, livestream, dll) untuk keuntungan karakter di dalam game adalah pelanggaran serius dan dapat mengakibatkan ban permanen.',
    icon: '🚫',
  },
  {
    number: '04',
    title: 'Dilarang Powergaming',
    desc: 'Tidak boleh memaksakan aksi yang tidak realistis pada karakter lain tanpa memberi mereka kesempatan untuk merespon secara wajar sesuai kondisi dunia nyata.',
    icon: '⚖️',
  },
  {
    number: '05',
    title: 'Value of Life (VoL)',
    desc: 'Karaktermu harus menghargai nyawanya sendiri. Jangan melakukan tindakan berani mati tanpa alasan roleplay yang masuk akal. Nyawa karaktermu berharga.',
    icon: '❤️',
  },
  {
    number: '06',
    title: 'New Life Rule (NLR)',
    desc: 'Setelah karaktermu meninggal, kamu tidak boleh mengingat apapun dari kejadian sebelum kematian. Jangan kembali ke lokasi yang sama dalam waktu 15 menit.',
    icon: '🔄',
  },
  {
    number: '07',
    title: 'Dilarang RDM / VDM',
    desc: 'Random Deathmatch (membunuh tanpa alasan RP) dan Vehicle Deathmatch (menabrak pemain dengan kendaraan) adalah pelanggaran berat yang langsung mengakibatkan sanksi.',
    icon: '🛑',
  },
  {
    number: '08',
    title: 'Combat Logging',
    desc: 'Keluar dari server secara sengaja saat berada dalam situasi roleplay aktif (ditangkap, dalam perkelahian, dll) merupakan pelanggaran yang akan ditindak tegas.',
    icon: '🔌',
  },
  {
    number: '09',
    title: 'Penggunaan Bug & Exploit',
    desc: 'Setiap bug atau exploit yang ditemukan wajib dilaporkan ke tim admin. Memanfaatkan bug untuk keuntungan pribadi akan mengakibatkan ban permanen tanpa peringatan.',
    icon: '🐛',
  },
  {
    number: '10',
    title: 'Patuhi Admin & Staff',
    desc: 'Keputusan tim admin adalah final. Jika merasa tidak adil, gunakan jalur banding resmi di Discord. Berdebat dengan admin di dalam game dapat memperburuk situasimu.',
    icon: '👮',
  },
]

export default function Rules() {
  return (
    <main className="rules-page">
      <div className="rules-hero">
        <div className="rules-hero-orb" />
        <div className="container">
          <p className="section-label" style={{ textAlign: 'center' }}>Tata Tertib Server</p>
          <h1 className="rules-title">Peraturan SOLSTICE</h1>
          <p className="rules-subtitle">
            Aturan ini dibuat untuk menjaga pengalaman bermain yang menyenangkan, adil, dan imersif
            bagi seluruh anggota komunitas. Dengan bergabung, kamu menyetujui seluruh peraturan di bawah ini.
          </p>
          <div className="rules-notice glass-card">
            <span className="notice-icon">⚠️</span>
            Ketidaktahuan akan peraturan tidak dapat dijadikan alasan pembelaan. Baca dan pahami semua aturan sebelum bermain.
          </div>
        </div>
      </div>

      <section className="rules-section section">
        <div className="container">
          <div className="rules-grid">
            {rules.map((rule, i) => (
              <div className="rule-card glass-card" key={i}>
                <div className="rule-number">{rule.number}</div>
                <div className="rule-icon">{rule.icon}</div>
                <h3 className="rule-title">{rule.title}</h3>
                <p className="rule-desc">{rule.desc}</p>
              </div>
            ))}
          </div>

          <div className="rules-footer-card glass-card">
            <h3>Sanksi Pelanggaran</h3>
            <div className="sanctions-grid">
              <div className="sanction-item">
                <div className="sanction-level level-1">Peringatan</div>
                <p>Pelanggaran ringan pertama kali. Diberikan teguran verbal oleh admin.</p>
              </div>
              <div className="sanction-item">
                <div className="sanction-level level-2">Kick</div>
                <p>Pelanggaran ringan berulang atau pelanggaran sedang pertama kali.</p>
              </div>
              <div className="sanction-item">
                <div className="sanction-level level-3">Ban Sementara</div>
                <p>Pelanggaran berat atau akumulasi pelanggaran sedang. Durasi 1–30 hari.</p>
              </div>
              <div className="sanction-item">
                <div className="sanction-level level-4">Ban Permanen</div>
                <p>Pelanggaran sangat berat: cheating, exploit, atau RDM massal.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
