import { useState, useEffect, useRef } from 'react'
import './Play.css'

const BACKEND_URL = 'http://localhost:3001'
const REFRESH_INTERVAL = 15000

// ── Sparkline ──
function generatePath(data, min, max, W, H) {
  if (!data || data.length < 2) return { line: '', fill: '' }
  const pts = data.map((v, i) => {
    const x = (i / (data.length - 1)) * W
    const y = H - ((Math.min(Math.max(v, min), max) - min) / (max - min || 1)) * (H - 8)
    return `${x},${y}`
  })
  const line = pts.join(' ')
  const fill = `${pts[0].split(',')[0]},${H} ${line} ${pts[pts.length-1].split(',')[0]},${H}`
  return { line, fill }
}

function Sparkline({ color, data, min, max, label, yMax, times }) {
  const W = 400, H = 110
  const { line, fill } = generatePath(data, min, max, W, H)
  const gradId = `grad-${color.replace('#', '')}`

  return (
    <div className="sparkline-wrap">
      <div className="sparkline-label">{label}</div>
      <svg viewBox={`0 0 ${W} ${H + 28}`} className="sparkline-svg" preserveAspectRatio="none">
        <defs>
          <linearGradient id={gradId} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.3" />
            <stop offset="100%" stopColor={color} stopOpacity="0.02" />
          </linearGradient>
        </defs>
        <line x1="0" y1="6" x2={W} y2="6" stroke={color} strokeOpacity="0.15" strokeDasharray="4 6" strokeWidth="1" />
        <text x="6" y="16" fill={color} fillOpacity="0.45" fontSize="11">{yMax}</text>
        <line x1="0" y1={H} x2={W} y2={H} stroke={color} strokeOpacity="0.1" strokeWidth="1" />
        <text x="6" y={H - 4} fill={color} fillOpacity="0.45" fontSize="11">0</text>
        {fill && <polygon points={fill} fill={`url(#${gradId})`} />}
        {line && <polyline points={line} fill="none" stroke={color} strokeWidth="2" strokeLinejoin="round" />}
        {times.map((t, i) => (
          <text key={i} x={(i / (times.length - 1)) * W} y={H + 20} fill={color} fillOpacity="0.35" fontSize="10" textAnchor="middle">{t}</text>
        ))}
      </svg>
    </div>
  )
}

function StatusDot({ online }) {
  return <span className={`status-dot ${online ? 'online' : 'offline'}`} />
}

export default function Play() {
  const [data, setData] = useState(null)
  const [players, setPlayers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [lastUpdate, setLastUpdate] = useState(null)

  const playerHistory = useRef([])
  const latencyHistory = useRef([])
  const timeLabels = useRef([])

  const fetchData = async () => {
    try {
      // Fetch via discord-backend proxy (port 3001) - no CORS issues
      const res = await fetch(`${BACKEND_URL}/fivem-stats`)
      const fivem = await res.json()

      const now = new Date()
      const timeStr = `${now.getHours().toString().padStart(2,'0')}:${now.getMinutes().toString().padStart(2,'0')}`

      const playerCount = fivem.playerCount ?? 0
      const maxPlayers = fivem.maxPlayers ?? 100
      const playerList = fivem.players ?? []
      const avgPing = fivem.avgPing ?? 0

      playerHistory.current = [...playerHistory.current, playerCount].slice(-30)
      latencyHistory.current = [...latencyHistory.current, avgPing].slice(-30)
      timeLabels.current = [...timeLabels.current, timeStr].slice(-30)

      setData({
        maxPlayers, playerCount, avgPing,
        serverName: fivem.hostname ?? 'Solstice Roleplay',
        minPing: fivem.minPing ?? 0,
        maxPing: fivem.maxPing ?? 0,
      })
      setPlayers(playerList)
      setError(false)
      setLastUpdate(now)
    } catch (e) {
      setError(true)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchData()
    const t = setInterval(fetchData, REFRESH_INTERVAL)
    return () => clearInterval(t)
  }, [])

  const playerCount = data?.playerCount ?? 0
  const maxPlayers = data?.maxPlayers ?? 100
  const playerPct = Math.round((playerCount / maxPlayers) * 100)
  const avgPing = data?.avgPing ?? 0
  const minPing = players.length > 0 ? Math.min(...players.map(p => p.ping || 0)) : 0
  const maxPing = players.length > 0 ? Math.max(...players.map(p => p.ping || 0)) : 0
  const isOnline = !error && !loading

  const getAxisTimes = () => {
    const h = timeLabels.current
    if (h.length < 4) return ['--:--', '--:--', '--:--', '--:--']
    const step = Math.floor((h.length - 1) / 3)
    return [h[0], h[step], h[step * 2], h[h.length - 1]]
  }

  return (
    <section className="play">
      <div className="play-grid" />

      {/* Stat Cards */}
      <div className="play-stats">
        <div className="stat-card">
          <div className="stat-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
              <circle cx="9" cy="7" r="4"/>
              <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
              <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
            </svg>
          </div>
          <div className="stat-main">
            <span className="stat-value">{loading ? '—' : playerCount.toLocaleString()}</span>
            <span className="stat-slash"> / {maxPlayers.toLocaleString()}</span>
            {!loading && <span className="stat-badge">{playerPct}%</span>}
          </div>
          <div className="stat-sub">CONNECTED PLAYERS</div>
          <div className="stat-bar"><div className="stat-bar-fill" style={{ width: `${playerPct}%` }} /></div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
            </svg>
          </div>
          <div className="stat-main">
            <span className="stat-value">{loading ? '—' : `${avgPing}ms`}</span>
            {!loading && maxPing > 0 && <span className="stat-badge stat-badge-warn">Max: {maxPing}ms</span>}
          </div>
          <div className="stat-sub">AVG / MAX PING</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
            </svg>
          </div>
          <div className="stat-main">
            <span className="stat-value">{loading ? '—' : `${minPing}ms`}</span>
          </div>
          <div className="stat-sub">MIN LATENCY</div>
        </div>

        <div className="stat-card">
          <div className="stat-icon">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <circle cx="12" cy="12" r="10"/>
              <line x1="2" y1="12" x2="22" y2="12"/>
              <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
            </svg>
          </div>
          <div className="stat-main">
            <StatusDot online={isOnline} />
            <span className="stat-value stat-value-sm">{loading ? 'CHECKING' : isOnline ? 'ONLINE' : 'OFFLINE'}</span>
          </div>
          <div className="stat-sub">SERVER STATUS</div>
          {lastUpdate && (
            <div className="stat-update">
              {lastUpdate.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit', second: '2-digit' })}
            </div>
          )}
        </div>
      </div>

      {/* Section title */}
      <div className="play-section-title">
        Game Servers
        <span className="section-refresh">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={loading ? 'spinning' : ''}>
            <polyline points="23 4 23 10 17 10"/>
            <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/>
          </svg>
          15s
        </span>
      </div>

      <div className="server-panel">
        {/* Header */}
        <div className="server-header">
          <div className="server-logo">
            <img src={`${import.meta.env.BASE_URL}img/logo2.png`} alt="Logo" />

          </div>
          <div className="server-info">
            <div className="server-name">
              {data?.serverName ? data.serverName.replace(/\^[0-9]/g, '') : 'SOLSTICE ROLEPLAY INDONESIA'}
            </div>
            <div className="server-address">170.64.204.96:30120</div>
          </div>
          <div className="server-status-pill">
            <StatusDot online={isOnline} />
            {loading ? 'Connecting...' : isOnline ? 'Server Online' : 'Server Offline'}
          </div>
        </div>

        {/* Body */}
        <div className="server-body">
          <div className="server-quick">
            <div className="quick-card">
              <div className="quick-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                </svg>
                PLAYERS
              </div>
              <div className="quick-value">
                {loading ? '—' : playerCount}
                <span className="quick-max"> / {maxPlayers}</span>
              </div>
              <div className="quick-bar">
                <div className="quick-bar-fill" style={{ width: `${playerPct}%` }} />
              </div>
            </div>

            <div className="quick-card">
              <div className="quick-label">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
                </svg>
                PING
              </div>
              <div className="quick-latency">
                <div>
                  <div className="quick-latency-label">MIN</div>
                  <div className="quick-latency-val sage">{loading ? '—' : `${minPing}ms`}</div>
                </div>
                <div>
                  <div className="quick-latency-label">AVG</div>
                  <div className="quick-latency-val amber">{loading ? '—' : `${avgPing}ms`}</div>
                </div>
                <div>
                  <div className="quick-latency-label">MAX</div>
                  <div className="quick-latency-val red">{loading ? '—' : `${maxPing}ms`}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="chart-card">
            <Sparkline
              color="#7ab87a"
              data={playerHistory.current.length ? playerHistory.current : [0]}
              min={0} max={maxPlayers}
              label="PLAYER HISTORY"
              yMax={maxPlayers}
              times={getAxisTimes()}
            />
          </div>

          <div className="chart-card">
            <Sparkline
              color="#5ba0a0"
              data={latencyHistory.current.length ? latencyHistory.current : [0]}
              min={0} max={300}
              label="PING HISTORY"
              yMax="300ms"
              times={getAxisTimes()}
            />
          </div>
        </div>

        {/* Player list */}
        {players.length > 0 && (
          <div className="player-list">
            <div className="player-list-title">
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
              </svg>
              Online Players ({players.length})
            </div>
            <div className="player-list-grid">
              {players.slice(0, 24).map(p => (
                <div key={p.id} className="player-row">
                  <span className="player-id">#{p.id}</span>
                  <span className="player-name">{p.name}</span>
                  <span className="player-ping">{p.ping}ms</span>
                </div>
              ))}
              {players.length > 24 && (
                <div className="player-more">+{players.length - 24} lainnya</div>
              )}
            </div>
          </div>
        )}

        {error && (
          <div className="server-error">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="8" x2="12" y2="12"/>
              <line x1="12" y1="16" x2="12.01" y2="16"/>
            </svg>
            Tidak dapat terhubung ke server. Mencoba ulang setiap 15 detik...
          </div>
        )}
      </div>
    </section>
  )
}