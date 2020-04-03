var figlet = require('figlet');
const Discord = require('discord.js');

module.exports.run = (client, message, args, tools) => {
 const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) {  
  var maxLen = 75 // Kendiniz en yüksek harf sayısını ayarlayabilirsiniz
  
  if(args.join(' ').length > maxLen) return message.channel.send(`Çok karakter yazdınız. En fazla ${maxLen} karakter yazabilirsin!`) 
     if(!args[0]) return message.channel.send('Lütfen geçerli yazı giriniz.');
  
  figlet(`${args.join(' ')}`, function(err, data) {
      if (err) {
          console.log('Bir hata var...');
          console.dir(err);
          return;
      }

      message.channel.send(`${data}`, {code: 'AsciiArt'});

  });

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
  guildOnly: false,
  aliases: [],
    kategori: 'kullanıcı',
  permLevel: 0
};
exports.help = {
  name: 'ascii',
  isim: 'Ascii',
  süre: '5 saniye',
   description: 'Ascii şeklinde yazı yazmanızı sağlar.',
  usage: 'ascii <mesaj>'
};
