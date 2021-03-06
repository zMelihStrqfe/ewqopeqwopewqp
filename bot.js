const Discord = require("discord.js")
const client = new Discord.Client();
const config = require("./ayarlar.json")
const fs = require("fs");                                        // serendia squad ❤ Piece ❤ Miaf 
require('./util/eventLoader.js')(client);

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./commands/', (err, files) => {
  if (err) console.error(err);
  console.log(`${files.length} komut yüklenecek.`);
  files.forEach(f => {
    let props = require(`./commands/${f}`);
    console.log(`${props.config.name} komutu yüklendi.`);
    console.log(`Bu altyapı Serendia Squad sunucusunda sizler için paylaşıldı.`)
    client.commands.set(props.config.name, props);
    props.config.aliases.forEach(alias => {
      client.aliases.set(alias, props.config.name);
    });
  });                                                                     // serendia squad ❤ Piece ❤ Miaf 
});


client.login(config.token)
