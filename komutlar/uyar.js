const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

  //if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
  const db = require('quick.db');
  

  
  let user = message.mentions.users.first();
  let reason = args.slice(1).join(' ');
  if (db.has(`log_${message.guild.id}`) === false) return message.reply('Mod log kanalı ayarlanmamış');
  let modlog = message.guild.channels.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
  if (message.mentions.users.size < 1) return message.reply('Uyaracağın kişiyi etiketlemelisin!');
  if (reason.length < 1) return message.reply('Uyarma sebebini yazmadın!');
  if (user.id === message.author.id) return message.reply('Kendini uyaramazsın!');
  
  //if (!message.guild.member(user).roles.has(muteRole)) return message.reply('Bu kişi zaten susturulmuş!');
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('Yapılan İşlem', 'Uyarma')
  .addField('Uyarılan Kullanıcı', `${user.tag} (${user.id})`)
  .addField('Uyaran Yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('Uyarı Sebebi', "```" + reason + "```")
  modlog.send(embed);
  
  message.guild.members.get(user.id).send(`<@${user.id}>, \n**${message.guild.name}** adlı sunucuda **${reason}** sebebi ile uyarıldın! \nKuralları çiğnemeye devam eder isen susturulabilir, atılabilir veya yasaklanabilirsin!`)
  
  db.add(`uyarılar_${user.id}`, 1)
  
  const embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`<@${user.id}> adlı kullanıcı **${reason}** sebebi ile başarıyla uyarıldı!`)
  message.channel.send(embed2)
  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["warn", "uyarı-ver"],
  permLevel: 1,
    kategori: "moderasyon"
};

exports.help = {
  name: 'uyar',
  category: 'moderasyon',
  description: 'İstediğiniz kişiyi uyarır.',
  usage: 'uyar <@kişi-etiket> <sebep>'
};