import { watchFile, unwatchFile } from 'fs';
import { fileURLToPath } from 'url';
import fs from 'fs';
import chalk from 'chalk';
import fetch from 'node-fetch';
import axios from 'axios';

// مطور
global.owner = [
  ['201020306059', 'FLEX-BOT', true], //مطور يحب🤖
];

global.mods = ['201020306059']; 
global.prems = ['201020306059', '201020306059', '201020306059']; 
global.allowed = ['201020306059', '201020306059', '201020306059'];
global.keysZens = ['c2459db922', '37CC845916', '6fb0eff124'];
//_____________________________________________________________________________________________________________
global.keysxxx = keysZens[Math.floor(keysZens.length * Math.random())];

global.keysxteammm = [
  '29d4b59a4aa687ca', 
  '5LTV57azwaid7dXfz5fzJu', 
  'cb15ed422c71a2fb', 
  '5bd33b276d41d6b4', 
  'HIRO', 
  'kurrxd09', 
  'ebb6251cc00f9c63'
];
global.keysxteam = keysxteammm[Math.floor(keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = keysneoxrrr[Math.floor(keysneoxrrr.length * Math.random())];
global.lolkeysapi = ['GataDiosV2'];

//الapi
global.APIs = {
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://zenzapis.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  nrtm: 'https://fg-nrtm.ddns.net',
  bg: 'http://bochil.ddns.net',
  fgmods: 'https://api-fgmods.ddns.net'
};

// ─────────────╮
// Claves de API
// ╰─────────────────────────────────────────────╮
global.APIKeys = {
  'https://api.xteam.xyz': 'd90a9e986e18778b',
  'https://api.lolhuman.xyz': '85faf717d0545d14074659ad',
  'https://api.neoxr.my.id': `${keysneoxr}`,
  'https://violetics.pw': 'beta',
  'https://zenzapis.xyz': `${keysxxx}`,
  'https://api-fgmods.ddns.net': 'fg-dylux'
};
global.id_canal = '120363274577422945@newsletter' // ايدي يا قمر
global.name_canal = 'FLEX-MD'
global.rcanal = 'https://whatsapp.com/channel/0029VaeQcFXEFeXtNMHk0D0n' // قناه يحب 💕
global.canal = 'https://whatsapp.com/channel/0029VaeQcFXEFeXtNMHk0D0n' // قناه يحب 💕
global.botname = 'FLEX';
global.premium = 'true';
global.packname = 'FLEX';
global.menuvid = 'https://telegra.ph/file/c92cd247a11a336199650.mp4';
global.igfg = '▢ Sigueme en Instagram\nhttps://www.instagram.com/Josecurisoto\n';
global.dygp = 'https://chat.whatsapp.com/BFfD1C0mTDDDfVdKPkxRAA';
global.fgsc = 'https://github.com/davidprospero123/REM-CHAM-MD';
global.fgyt = 'https://youtube.com/@holabb123';
global.fgpyp = 'https://youtube.com/@holabb123';
global.fglog = 'https://raw.githubusercontent.com/davidprospero123/REM-CHAM-MD/main/logo.jpg';
global.thumb = fs.readFileSync('./Assets/Remlogo.jpg');
global.wait = '*استنى يسطا*';
global.rwait = '⌛';
global.dmoji = '🤭';
global.done = '✅';
global.error = '❌';
global.xmoji = '🔥';
global.multiplier = 69;
global.maxwarn = '3';
global.wm = 'NIGHT-BOT';
global.author = 'FLEX';
global.botdate = `*التاريخ:*  ${moment.tz('Egypt/Sohag').format('DD/MM/YY')}`;
global.bottime = `*وقت:* ${moment.tz('Egypt/Sohag').format('HH:mm:ss')}`;

// ──────────────────────────────────────────────╮
// Ruta del archivo actual
// ──────────────────────────────────────────────╯
let file = fileURLToPath(import.meta.url);

// ──────────────────────────────────────────────╮
// Vigilar cambios en el archivo
// ──────────────────────────────────────────────╯
watchFile(file, () => {
  unwatchFile(file);
  console.log(chalk.redBright("Update 'system.js'"));
  import(`${file}?update=${Date.now()}`);
});
