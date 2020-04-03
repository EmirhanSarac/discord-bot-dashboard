const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let every = message.guild.roles.find(r => r.name === '@everyone')
message.channel.overwritePermissions(every, {
  VIEW_CHANNEL: false,
 
})

  message.channel.send('Sohbet kanalı ``Görünmez`` durumuna getirildi.\nSohbet kanalını görülebilir yapmak için ``!!sohbet-gizle-kapat`` yazmanız gerekmektedir.');
}
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sohbet-gizle-aç','s-aç','sohbet-aç','sss'],
kategori: 'sohbet',
  permLevel: 3
};

exports.help = {
  name: 'sohbet-gizle-aç',
  description: 'Sohbetinizi görünmez yapar. Açmak için !!s-kapat.',
  usage: 'kapat'
};