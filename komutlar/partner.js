const Discord = require('discord.js');
const Jimp = require('jimp');
const db = require('quick.db'),
      ms = require('parse-ms');

exports.run = async (bot, message, args) => {
  
   if(message.guild.id !== '627204002676736031') return message.channel.send('Bu komut sadece \`DESTEK\` sunucumda çalışmaktadır.')
 
  
    

     const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${bot.user.id}/check?userId=${message.author.id}`)
.set("Authorization", bot.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if (check == 1) {
    
    if(message.member.roles.has('658196534906716171') === true) return message.channel.send(`Zaten \`Partner\` rolün bulunuyor fazlasını ne yapacaksın`)

 
  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription('``Partner`` rolünüzü aldınız\nBotu oyladığınız için teşekkürler.')
.setTimestamp()
  message.channel.send(embed)
  message.member.addRole('658196534906716171')

    } else {
let embed = new Discord.RichEmbed()
      .setTitle('HATA')
      .setColor('RANDOM')
      .setDescription(`${bot.emojis.get(bot.emojiler.hayır)} **Hata**, Partner rolünü almak için \`12\` saat aralıkla **[BURADAN](https://discordbots.org/bot/${bot.user.id}/vote)**  botu oylamanız gerekmektedir. Onayladıktan sonra sisteme geçmesi **1-4** dakikayı bulabilir, lütfen bekleyin. `)
    message.channel.send(embed)
      return }});
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['partner','partner-rol'],

  kategori: "kullanıcı",
    permLevel: 0,
};

exports.help = {
  name: 'partner',
  description: 'Rol almanızı sağlar',
  usage: 'partner'
};
