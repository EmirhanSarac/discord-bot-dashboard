const Discord = require('discord.js');
const fortnite = require('fortnitetracker-7days-stats');

exports.run = (client, message, args) => {
  
  const db = require('quick.db');
  let prefix = db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
    const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) { 
  
    if(args.length < 1){
        message.reply(`kullanımı ${prefix}fortnite pc <kullanıcı> `);
        return;
    }

  var name = args.slice(0).join(' ');
  
    var url = "https://fortnitetracker.com/profile/pc"
                                + encodeURIComponent(name);
    message.channel.startTyping();

    fortnite.getStats(name, "pc", (err, result) => {
        if(err){
            message.reply(`kullanımı ${prefix}fortnite pc <kullanıcı> `);
            message.channel.stopTyping();
            return;
        }
      
        var embed = new Discord.RichEmbed()
            .setAuthor(result.accountName, "", url)
            .setDescription('')
            .addField('Maçlar', result.wins)
            .addField('Toplam oyun', result.matches)
            .addField('Oran', ~~result.wr + "%")
            .addField('Toplam kill', + result.kills)
            .addField('kd', + result.kd)
            .setColor("RANDOM")
            .setURL(url)
            .setThumbnail(result.skinUrl);

        message.channel.stopTyping();
        message.channel.send(embed);
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
  aliases: ['fortnite-istatistik'],
  permLevel: 0,
  kategori: "oyun",
};

exports.help = {
  name: 'fortnite',
  description: 'İstediğiniz bir fortnite kullanıcısının istatistiklerini gösterir.',
  usage: 'fortnite pc <kullanıcı adı>',
 
};
