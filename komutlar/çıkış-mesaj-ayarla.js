const Discord = require('discord.js')
const fs = require('fs');

const db = require('quick.db');

exports.run = async (client, message, args) => {
  
 const db = require('quick.db');
    let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

         if(args[0] === 'kapat') {
      
   if (db.has(`cikisM_${message.guild.id}`) === true) {
   
     db.delete(`cikisM_${message.guild.id}`)
    
     
     message.channel.send('Çıkış mesajı kaldırıldı.')
     return
}
  message.channel.send(`Çıkış mesajı ayarlanmamış.`)
    return
  
  }
  
  
  let cM = args.slice(0).join(' ');
  
    if (!cM) {
        return message.reply("Çıkış mesajı ayarlamak istediğiniz mesajı yazmalısınız! \n**NOT:** Mesajda kişinin geleceği yere **{kullanıcı}**, sunucu isminin geleceği yere **{sunucu}** veya sunucudaki kişi sayısının geleceği yere **{kişisayısı}** yazınız.")
    }
  
    db.set(`cikisM_${message.guild.id}`, cM)
  
    const embed = new Discord.RichEmbed()
    .setTitle(`» Çıkış Mesajı Değiştirildi!`)
    .setDescription(`Ayarlanan Mesaj **${cM}**\nÇıkış mesajını kapatmak isterseniz **${prefix}çıkışmesaj kapat** yazmanız yeterlidir.`)
    .setColor("RANDOM")
    message.channel.send({embed})

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['çıkışmesaj','çıkış-mesaj'],
    permLevel: 4,

    kategori: "ayarlar",
 
  };

  exports.help = {
    name: 'çıkış-mesaj-ayarla',
    
    description: 'Çıkış mesajını değiştirmenizi sağlar.',
    usage: 'çıkış-mesaj-ayarla <mesaj> \n**NOT:** Mesajda kişinin geleceği yere **{kullanıcı}** yazınız aksi taktirde kişiyi göstermez.',



  };
  