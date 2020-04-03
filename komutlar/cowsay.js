const Discord = require("discord.js");
var cowsay = require("cowsay");
const db = require('quick.db');
exports.run = (client, msg, args) => {
  const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${msg.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) {
    let text = args.join(" ");
if (db.has(`üyelikk_${msg.author.id}`)) {
msg.channel.send("```" + cowsay.say({
        text : text
    }) + "```")

 } else
  msg.channel.send('Bu komut gold üyelere özel.')

    
 } else {
let embed = new Discord.RichEmbed()
      .setTitle('HATA')
      .setColor('RANDOM')
      .setDescription(`${client.emojis.get(client.emojiler.hayır)} **Hata**, bu komutu kullanmak için **12 saat aralıkla** **[BURADAN](https://discordbots.org/bot/${client.user.id}/vote)**  botu oylamanız gerekmektedir. Onaylanması **1-4** dakikayı bulabilir, lütfen bekleyin. `)
    msg.channel.send(embed)
      return }});
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
    kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
  name: 'cowsay',
  description: 'İstediğiniz Şeyi İnek Söylermiş Gibi Yazar.',
  usage: 'cowsay [yazı]'
};