const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
   client.user.setStatus('idle') 
   client.user.setActivity(`it kaan`);
   console.log(`[ BOT HAZIR ] - [ SUNUCULAR - ${client.guilds.cache.size} ] - [ KULLANICILAR - ${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()} ]`)
     

};