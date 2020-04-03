const db = require('quick.db')
const Discord = require('discord.js')

exports.run = async (bot, message, args) => {
  
  if (!args[0]) return message.channel.send('<:ak:617145990742278144> Sa-as yazısını açmak için; `!!sa-as aç veya kapat`')
  
  if (args[0] == 'aç') {
    db.set(`ss_${message.guild.id}`, 'açık')
      message.channel.send(`Başarıyla botun \`Aleyküm selam\` yazmasını açtınız., Artık bot \`sa\` yazıldığında cevap verecek.`)
    
  }
  if (args[0] == 'kapat') {
    db.delete(`ss_${message.guild.id}`, 'kapat')
      message.channel.send(` Başarıyla \`Aleyküm selam\` yazmasını kapattınız, Artık bot \`sa\` yazıldığında cevap vermeyecek.`)
    
  }

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['sa','as'],
  kategori: 'ayarlar',
  permLevel: 3
};

exports.help = {
  name: 'sa-as',
  description: 'Selamün aleyküm, Aleyküm selam',
  usage: '!!sa-as'
};