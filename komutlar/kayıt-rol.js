const Discord = require('discord.js')
const fs = require('fs');


exports.run = async (client, message, args) => {

  const db = require('quick.db');
  

  let role = message.mentions.roles.first() || message.guild.roles.find(r => r.name === args.slice(0).join(' '));
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
  
  

    if(args[0] === 'kapat') {
   if (db.has(`kayıtR_${message.guild.id}`) === true) {
     message.channel.send(`Kayıt rolü başarıyla kaldırıldı`)
     db.delete(`kayıtR_${message.guild.id}`)
     return
}
  message.channel.send(`kayıt rolü ayarlanmamış.`)
    return
  
  }

  
  
    if (!role) {
        return message.reply(`Lütfen bir rol etiketleyin veya rol adını yazın örnek: **${prefix}kayıtrol @rol** veya **${prefix}kayıtrol rol-adı** `)
    }

  
     db.set(`kayıtR_${message.guild.id}`, role.id)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`${client.emojis.get(client.emojiler.evet)} Kayıt rolü başarıyla ayarlandı: **${role.name}**\nKayıt rolünü kapatmak isterseniz **${prefix}kayıtrol kapat** yazmanız yeterlidir.`)
    .setColor("RANDOM")
    message.channel.send({embed})
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['kayıt-rol', 'kayıt-rol-belirle'],
    permLevel: 5,
    kategori: "yapımcı",
}

exports.help = {
    name: 'kayıtrol',
    description: 'Kayıt olunca verilecek rolü ayarlar.',
    usage: 'kayıtrol <@rol> \ rol-adı',
}