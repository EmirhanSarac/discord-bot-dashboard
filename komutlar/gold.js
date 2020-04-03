const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
    if(message.guild.id !== '627204002676736031') return message.channel.send('Bu komut sadece \`DESTEK\` sunucumda çalışmaktadır.')
 
    if(message.member.roles.has('632479296463831060') === true) return message.channel.send(`Zaten \`Gold\` rolün bulunuyor fazlasını ne yapacaksın`)

if (db.has(`üyelikk_${message.author.id}`)) {
      message.channel.send(`Başarıyla \`Gold\` rolünü aldınız. Gold durmunuza bakmak isterseniz !!gold-durum`)
  message.member.addRole('632479296463831060')
 } else
  message.channel.send('Sistemde sizin adınıza ait gold üye bulunamadı.')
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gold-kontrol','gold-ver','gold-oldum'],
  kategori: 'kullanıcı',
  permLevel: 0
};

exports.help = {
  name: 'gold-kontrol',
  description: 'gold sistemi',
  usage: 'gold'
};