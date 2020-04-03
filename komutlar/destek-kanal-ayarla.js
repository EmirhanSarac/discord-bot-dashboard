const Discord = require('discord.js')
//var ayarlar = require('../ayarlar.json');

exports.run = async (client, message, args) => {
  
  const db = require('quick.db');
  
 
  let kanal = message.mentions.channels.first(); 
  
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;
  
    if(args[0] === 'kapat') {
   if (db.has(`destekK_${message.guild.id}`) === true) {
     message.channel.send(`Destek kanalı başarıyla kaldırıldı`)
     db.delete(`destekK_${message.guild.id}`)
     return
}
  message.channel.send(`Destek kanalı ayarlanmamış.`)
    return
  
  }
    
  
    if (!kanal) {
      let e = new Discord.RichEmbed()
      .setDescription('Lütfen bir kanal etiketleyiniz')
      .setColor("RANDOM")
      message.channel.send(e)
      return;
    }
  
    var s = db.set(`destekK_${message.guild.id}`, kanal.id)
  
    const embed = new Discord.RichEmbed()
    .setDescription(`${client.emojis.get(client.emojiler.evet)} Destek kanalı ayarlandı: ${kanal}\nDestek kanalını kapatmak için **${prefix}destek-kanal kapat** yazmanız yeterlidir.`)
    .setColor("RANDOM")
    message.channel.send({embed})
}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["destek-kanal","destek-kanal-ayarla"],
    permLevel: 4,
    kategori: "ayarlar",
  };

  exports.help = {
    name: 'destek-kanal-ayarla',
    description: 'Gelişmiş Destek Sistemindeki destek kanalını değiştirmenizi sağlar.',
    usage: 'destek-kanal-ayarla <#kanal>',

  };