require('dotenv').config();
const express = require('express');
const { default: fetch } = require('node-fetch');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3001;
const DISCORD_GUILD_ID = process.env.DISCORD_GUILD_ID;

console.log('🌿 Starting Solstice RP Discord Backend...');
console.log('Guild ID:', DISCORD_GUILD_ID);

if (!DISCORD_GUILD_ID) {
  console.error('❌ Missing DISCORD_GUILD_ID in .env');
  process.exit(1);
}

// ✅ FIX 1: Allow semua localhost port (5173, 5174, 5175, dll)
app.use(cors({
  origin: (origin, callback) => {
    if (!origin) return callback(null, true);
    if (/^http:\/\/localhost:\d+$/.test(origin)) return callback(null, true);
    if (origin === 'https://solsticerp.id') return callback(null, true);
    callback(new Error('Not allowed by CORS'));
  }
}));
app.use(express.json());

app.get('/discord-stats', async (req, res) => {
  console.log('📡 Request to /discord-stats');

  const DISCORD_BOT_TOKEN = process.env.DISCORD_BOT_TOKEN;

  // ✅ FIX 2: Coba Bot API dulu, fallback ke Widget API
  // Bot API butuh: Server Members Intent + Presence Intent diaktifkan
  if (DISCORD_BOT_TOKEN) {
    try {
      const guildRes = await fetch(
        `https://discord.com/api/v10/guilds/${DISCORD_GUILD_ID}?with_counts=true`,
        {
          headers: {
            'Authorization': `Bot ${DISCORD_BOT_TOKEN}`,
            'User-Agent': 'SolsticeRPBot/1.0'
          }
        }
      );

      if (guildRes.ok) {
        const guildData = await guildRes.json();
        const total = guildData.approximate_member_count ?? null;
        const online = guildData.approximate_presence_count ?? null;

        if (total !== null && online !== null) {
          console.log('✅ Bot API success:', { total, online });
          return res.json({ total, online, source: 'bot_api' });
        }

        console.warn('⚠️ Bot API returned null counts - Privileged Intents mungkin belum diaktifkan');
      } else {
        const errData = await guildRes.json().catch(() => ({}));
        console.warn('⚠️ Bot API failed:', guildRes.status, JSON.stringify(errData));
      }
    } catch (botErr) {
      console.warn('⚠️ Bot API error:', botErr.message);
    }
  }

  // ✅ Fallback: Widget API (tidak butuh auth, tidak butuh intents)
  // Syarat: Server Settings > Integrations > Widget > Enable Widget
  try {
    const widgetRes = await fetch(
      `https://discord.com/api/v10/guilds/${DISCORD_GUILD_ID}/widget.json`,
      { headers: { 'User-Agent': 'SolsticeRPBot/1.0' } }
    );

    if (widgetRes.status === 403) {
      return res.status(503).json({
        error: 'widget_disabled',
        message: 'Aktifkan Widget di: Server Settings > Integrations > Widget > Enable Widget',
        total: null,
        online: null
      });
    }

    if (!widgetRes.ok) {
      throw new Error(`Widget API error: ${widgetRes.status}`);
    }

    const widgetData = await widgetRes.json();
    const onlineVisible = widgetData.members?.length ?? 0;

    console.log('✅ Widget fallback, online visible:', onlineVisible);
    return res.json({ total: null, online: onlineVisible, source: 'widget' });

  } catch (error) {
    console.error('❌ All methods failed:', error.message);
    res.status(500).json({
      error: 'fetch_failed',
      message: error.message,
      total: null,
      online: null
    });
  }
});

// Backward compat
app.get('/discord-members', (req, res) => res.redirect('/discord-stats'));

app.get('/health', (req, res) => res.json({
  status: 'OK',
  guild_id: DISCORD_GUILD_ID,
  has_bot_token: !!process.env.DISCORD_BOT_TOKEN,
}));

app.get('/', (req, res) => res.json({
  name: 'Solstice RP Discord Backend',
  endpoints: ['/discord-stats', '/fivem-stats', '/health']
}));


// ── FiveM Proxy Routes ──
const FIVEM_IP = '170.64.204.96:30120';

app.get('/fivem-stats', async (req, res) => {
  try {
    const [dynRes, playersRes] = await Promise.allSettled([
      fetch(`http://${FIVEM_IP}/dynamic.json`),
      fetch(`http://${FIVEM_IP}/players.json`),
    ]);

    let dyn = null, players = [];

    if (dynRes.status === 'fulfilled' && dynRes.value.ok) {
      dyn = await dynRes.value.json();
    }
    if (playersRes.status === 'fulfilled' && playersRes.value.ok) {
      players = await playersRes.value.json();
    }

    const playerCount = dyn?.clients ?? players.length;
    const maxPlayers  = dyn?.sv_maxclients ?? 100;
    const hostname    = dyn?.hostname ?? 'Solstice Roleplay';
    const avgPing     = players.length > 0
      ? Math.round(players.reduce((s, p) => s + (p.ping || 0), 0) / players.length)
      : 0;
    const minPing = players.length > 0 ? Math.min(...players.map(p => p.ping || 0)) : 0;
    const maxPing = players.length > 0 ? Math.max(...players.map(p => p.ping || 0)) : 0;

    res.json({
      online: true,
      playerCount,
      maxPlayers,
      hostname: hostname.replace(/\^[0-9]/g, ''),
      avgPing,
      minPing,
      maxPing,
      players: players.map(p => ({ id: p.id, name: p.name, ping: p.ping })),
    });
  } catch (err) {
    console.error('FiveM fetch error:', err.message);
    res.status(503).json({ online: false, error: err.message });
  }
});

app.listen(PORT, () => {
  console.log(`\n🚀 Backend running on http://localhost:${PORT}`);
  console.log('\n📌 Checklist Discord:');
  console.log('   1. Bot sudah di-invite ke server');
  console.log('   2. Developer Portal > Bot > Privileged Gateway Intents:');
  console.log('      - Server Members Intent ✓');
  console.log('      - Presence Intent ✓');
  console.log('   3. Server Settings > Integrations > Widget > Enable ✓');
});
