const Discord = require("discord.js");
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  let user = client.users.get(args.slice(0).join(' '));
  if (!user) {
    let e = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription("Kara listeden kaldırmak istediğin kullanıcının ID'ini yaz!")
    message.channel.send({embed: e})
    return;
  };
  
  //if (db.has(`karalist_${user.id}`) === false) return message.reply("Bu kullanıcı kara listede değil!")
  
  db.delete(`karalist_${user.id}`)
  
  let embed = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(`${user.tag} adlı kullanıcı başarıyla kara listeden çıkartıldı!`)
    message.channel.send({embed: embed})
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["blacklist", "kara-liste"],
  permLevel: 5,
  kategori: "yapımcı"
};

exports.help = {
  name: "beyazliste",
  description: "Belirtilen kullancıyı kara listeden çıkartır!",
  usage: "beyazliste <kullanıcı ID>"
};