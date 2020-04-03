const Discord = require('discord.js');

exports.run = function(client, message) {
  const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) {

 message.channel.send('``'+message.guild.name +'`` adlı sunucunun kurucusu; ``'+ message.guild.owner.user.tag +'`` adlı kullanıcıdır.');
  
message.react('617413726768988160')
   } else {
        let embed = new Discord.RichEmbed()
              .setTitle('HATA')
              .setColor('RANDOM')
              .setDescription(`${client.emojis.get(client.emojiler.hayır)} **Hata**, bu komutu kullanmak için **12 saat aralıkla** **[BURADAN](https://discordbots.org/bot/${client.user.id}/vote)**  botu oylamanız gerekmektedir. Onaylanması **1-4** dakikayı bulabilir, lütfen bekleyin. `)
            message.channel.send(embed)
              return }})
}



exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: ['owner','kurucukim'],
    kategori: 'kullanıcı',
  permLevel: 0 
};

exports.help = {
  name: 'kurucu', 
  description: 'Kurucunun kim olduğunu söyler.',
  usage: 'kurucu'
};