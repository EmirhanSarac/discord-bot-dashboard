const Discord = require('discord.js');
const fs = require('fs');

exports.run = (client, message, args) => {

  const db = require('quick.db');
  

    
  if (!message.guild.members.get(client.user.id).hasPermission("BAN_MEMBERS")) return message.reply('Gerekli izin yok')
  //if (!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`Bu komutu kullanabilmek için **Üyeleri Yasakla** iznine sahip olmalısın!`);
  

  let user = args[0];
  let reason = args.slice(1).join(' ');
  //let modLog = JSON.parse(fs.readFileSync("./jsonlar/mLog.json", "utf8"));
  if (db.has(`log_${message.guild.id}`) === false) return message.reply('Mod log kanalı ayarlanmamış');
  let modlog = message.guild.channels.get(db.fetch(`log_${message.guild.id}`).replace("<#", "").replace(">", ""));
 if (isNaN(user)) return message.reply('Lütfen banını açmak istediğiniz üyeninin ID sini girin');
  if (reason.length < 1) return message.reply('Lütfen sebep giriniz');
 
  /*if (user.highestRole.calculatedPosition > message.member.highestRole.calculatedPosition - 1) {
			return message.reply(`Bu kişinin senin rollerinden/rolünden daha yüksek rolleri/rolü var.`);
		}*/
  //if (!message.guild.member(user).bannable) return message.channel.send(`Bu kişiyi sunucudan yasaklayamıyorum çünkü \`benden daha yüksek bir role sahip\` ya da \`bana gerekli yetkileri vermedin\`.`);
  
  const embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField('İşlem', 'UN-Ban')
  .addField('Banı Açılan üye', `(${user})`)
  .addField('Banı Açan yetkili', `${message.author.username}#${message.author.discriminator}`)
  .addField('Banı açma sebebi', "```" + reason + "```")
  modlog.send(embed);
  message.guild.unban(user)
  
   //if (!message.guild.member(user).bannable) return message.reply('Yetkilileri yasaklayamam!');

  
  const embed2 = new Discord.RichEmbed()
  .setColor("RANDOM")
  .setDescription(`Özel ban sistemi belirttiğiniz ID de açıldı.`)
  message.channel.send(embed2)

  
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['unban','yasak-kaldır','yasak-aç','ban-kaldır'],
  permLevel: 3,
  kategori: "moderasyon",
};

exports.help = {
  name: 'unban',
  description: 'İstediğiniz kişinin sunucudaki banını açar.',
  usage: 'unban <id> <sebep>',
 
};