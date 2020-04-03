const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async(client, message, args) => {
if(message.author.id !== message.guild.owner.user.id) return message.channel.send('Yeterli Yetkiye Sahip Görünmüyorsun! '+client.emojis.get('673125251961323532'))
  const rol = message.mentions.roles.first()
  
  if (!rol)  {
    return message.channel.send(`
${client.emojis.get("673125251961323532")} Bancı Rolünü Ayarlamak İçin, Bancı Verilecek Rolü Etiketlemelisiniz
Örnek: \`!yasaklama-yetkilisi @bansorumlusu\`

Eğer Etiketlenmiyorsa Rol Ayarlarından \`O Role Herkese Bu Rolden Bahsetme Yetkisi Tanı Vermelisiniz.\`
`)
  }
  message.channel.send(`${client.emojis.get("672877646597586966")} ${rol} Rolü Olan Her Kullanıcı İnsanları !!ban Komutu İle Banlayabilicektir Rolü Verirken Dikkatli Olunuz.`)
  db.set(`yasaklamaRol_${message.guild.id}`, rol.id)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["yasaklama-yetkilisi"],
  permLevel: 0
};

exports.help = {
  name: 'yasaklamayetkilisi',
  description: 'Ban limiti.',
  usage: 'banlimit',
  kategori: 'yetkili'
};