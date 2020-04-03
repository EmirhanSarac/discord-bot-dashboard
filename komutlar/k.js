const Discord = require('discord.js');
exports.run = (client, message, args) => {

  let every = message.guild.roles.find(r => r.name === '@everyone')
message.channel.overwritePermissions(every, {
  'SEND_MESSAGES': false,
 
})
 

  message.channel.send('Sohbet kanalı ``Yazılamaz`` durumuna getirildi.\nSohbet kanalını açmak için ``!!aç`` yazmanız gerekmektedir.');
}
//Komut yusuf korucu tarafından hazırlanmıştır.
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['k','skapat','kapat'],
kategori: 'sohbet',
  permLevel: 3
};

exports.help = {
  name: 'sohbet-kapat',
  description: 'Sohbetinizi kapatmaya yarar. Açmak için !!aç.',
  usage: 'kapat'
};