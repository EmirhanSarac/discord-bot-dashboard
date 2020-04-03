const Discord = require('discord.js');
exports.run = function(client, message, args) {



    const çekiliş = new Discord.RichEmbed()
    .setAuthor(message.author.username, message.author.avatarURL)
    .setTitle("Vortex BOT Çekiliş Sistemi!", true)
    .addField("Çekilişi Yapan:", `<@${message.author.id}>`, true)
    .addField("Çekilişin Yapıldığı Kanal:", message.channel)
    .addField("Çekilişin Yapıldığı Zaman:", message.createdAt)
    .addField(`Çekilişi Kazanan:`, `<@${message.guild.members.random().id}>`, true)
     .addField(`Yedek Çekilişi Kazanan:`, `<@${message.guild.members.random().id}>`, true)
     .addField(`Yedek Çekilişi Kazanan (2):`, `<@${message.guild.members.random().id}>`, true)
    .setColor("RANDOM")
    .setDescription('')
      message.react('617750006862184493')
    return message.channel.sendEmbed(çekiliş);

    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çekilişyap","çekiliş-yap","klasik-çekiliş"],
  kategori: 'çekiliş',
  permLevel: 2
};

exports.help = {
  name: 'çekilişyap',
  description: 'Çekiliş yapar. (klasik)',
  usage: 'çekilişyap'
};