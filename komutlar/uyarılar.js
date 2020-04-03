const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = (client, message, args) => {

 // if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
  let user = message.mentions.users.first();
  if (message.mentions.users.size < 1) return message.reply('Uyarısına bakacağın kişiyi etiketlemelisin!');

  if (db.has(`uyarılar_${user.id}`) === false) return message.reply("Bu kullanıcının hiç uyarısı bulunmuyor!")
  
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setAuthor(`${user.username} - Uyarı Bilgisi`, user.avatarURL)
  .addField("Uyarı Sayısı", db.has(`uyarılar_${user.id}`) ? db.fetch(`uyarılar_${user.id}`) : 0)
  .setFooter(`${client.user.username} - Uyarı Sistemi`, client.user.avatarURL)
  message.channel.send({embed})
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["warns"],
  permLevel: 1,
    kategori: "moderasyon"
};

exports.help = {
  name: 'uyarılar',
  category: 'moderasyon',
  description: 'İstediğiniz kişinin uyarılarını gösterir.',
  usage: 'uyarılar <@kullanıcı>'
};