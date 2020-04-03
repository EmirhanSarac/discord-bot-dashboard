const db = require('quick.db');

exports.run = (client, message, args, func) => {
  
  if(!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);
  
  let preffix = db.fetch(`prefix_${message.guild.id}`)
  
    if(args[0] === "sıfırla") {
    if(!preffix) {
      message.channel.send(`Ayarlanmayan şeyi sıfırlayamazsın.`)
      return
    }
    
    db.delete(`prefix_${message.guild.id}`)
    message.channel.send(`Başarılı. Mevcut prefix \`!!\``)
            message.react('617413726768988160')
    return
  }
  
  if (!args[0])
    return message.channel.send(`Bir prefix girmelisin.`)
  db.set(`prefix_${message.guild.id}`, args[0])
    message.channel.send(`Prefix başarıyla \`${args[0]}\` olarak ayarlandı.`)
        message.react('617413726768988160')
  
};

exports.conf = {
    enabled: true,
    guildOnly: true,
    aliases: ['prefix-ayarla'],
    kategori: 'ayarlar',
    permLevel: 3
};
  
  exports.help = {
    name: 'prefix',
    description: 'Bota eklenmesini istediğiniz şeyi tavsiye etmenizi sağlar',
    usage: 'prefix <prefix>'
};