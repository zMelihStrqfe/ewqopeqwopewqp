const Discord = require('discord.js');
const client = new Discord.Client();

  exports.run = async (client, message, args) => {
	  
	  const melih = args[0]
	  const (!melih) return message.channel.send(new Discord.MessageEmbed().setColor('RED').setDescription(":x: **Eksik Kullanım: ?sil <sayı>**"));
	  
	  message.channel.send(new Discord.MessageEmbed().setColor('GREEN').setDescription(`:white_check_mark: **Başarıyla \`${melih}\` adet mesaj silindi.**`));
	  message.channel.bulkDelete(melih);
	  message.delete();
  }
  
  exports.config = {
  name: "sil",
  guildOnly: true,
  aliases: ["temizle"],
};