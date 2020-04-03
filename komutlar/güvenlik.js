const Discord = require('discord.js');
const db = require('quick.db')


exports.run = async (bot, message, args) => {
	
	

  
    if (!message.member.hasPermission("ADMINISTRATOR")) return message.reply(`Bu komutu kullanabilmek için "\`Yönetici\`" yetkisine sahip olmalısın.`);

let logk = message.mentions.channels.first();
let logkanal = await db.fetch(`guvenlik3_${message.guild.id}`)
  
  if (args[0] === "sıfırla" || args[0] === "kapat") {
    if(!logkanal) return message.channel.send(`Güvenliği kapatmak için \`güvenlik kanalının\` seçili olması lazım örnek kullanım: \`!!güvenlik #kanal\``);
    
   db.delete(`guvenlik3_${message.guild.id}`)
  
   message.channel.send(`Güvenlik başarıyla kapatıldı.`);
 
  
    return
  }
  
if (!logk) return message.channel.send('Güvenlik kanalını bulamadım. Kullanım !!güvenlik #kanal');
 

   db.set(`guvenlik3_${message.guild.id}`, logk.id)
 
 message.channel.send(`Güvenlik kanalı ${logk} olarak ayarlandı\nSıfırlamak için !!güvenlik sıfırla`);





}


  
module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['güvenlik'],
    kategori: "ayarlar",
  permLevel: 3
};

module.exports.help = {
  name: 'güvenlik',
  description: 'Güvenlik kanalı ayarlar',
  usage: 'güvenlik'
};