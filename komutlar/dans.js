const Discord = require('discord.js');
const oneLine = require('common-tags').oneLine;
const ascii = require('figlet');

exports.run = function(client, message, args) {

  const db = require('quick.db');
    const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) { 

  
  
  var yazi = args.slice(0).join(' ');
  if (yazi.length < 1) return message.reply("Lütfen **1 ile 8** arasında yazı yaznz")
  if (yazi.length > 8) return message.reply("Lütfen **1 ile 8** arasında yazı yaznz")
  
   ascii(yazi, {
        font: 'Dancing Font',
        horizontalLayout: 'fitted',
        verticalLayout: 'fitted'
      },
      function(err, data) {
        if (err) {
          message.reply(`HATA ${err}`)
          console.error(err)
        }
     
     message.channel.send('```css\n' + data + '\n```');
      

     
      })
    } else {
let embed = new Discord.RichEmbed()
      .setTitle('HATA')
      .setColor('RANDOM')
      .setDescription(`${client.emojis.get(client.emojiler.hayır)} **Hata**, bu komutu kullanmak için **12 saat aralıkla** **[BURADAN](https://discordbots.org/bot/${client.user.id}/vote)**  botu oylamanız gerekmektedir. Onaylanması **1-4** dakikayı bulabilir, lütfen bekleyin. `)
    message.channel.send(embed)
      return }});
  
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ["dans-ascii"],
  permLevel: 0,
    kategori: "eğlence",
};

exports.help = {
  name: 'dans',
  description: 'Yazdığınız yazıyı dans🎉 ascii şekline çevirir.',
  usage: 'dans <yazı>',

};