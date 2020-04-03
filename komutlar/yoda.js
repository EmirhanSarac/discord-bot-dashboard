const Discord = require("discord.js");
var yodasay = require('yodasay');
var db = require('quick.db');
exports.run = (client, msg, args) => {

    let text = args.join(" ");

if (db.has(`üyelikk_${msg.author.id}`)) {
  msg.channel.send("```" + yodasay.say({
        text : text
    }) + "```")
  msg.react('617413726768988160')
 } else
  msg.channel.send('Bu komut gold üyelere özel.')

    
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yodasay'],
    kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
  name: 'yoda',
  description: 'İstediğiniz Şeyi yoda Söylermiş Gibi Yazar.',
  usage: 'yodasay [yazı]'
};