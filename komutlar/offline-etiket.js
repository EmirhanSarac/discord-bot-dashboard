const Discord = require("discord.js");
const bot = new Discord.Client();
const db = require('quick.db');
exports.run = (client, message, args) => {
  try{
  if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Bu komutu kullanabilmek için `Yönetici` yetkisine sahip olmalısın!')

  const s2 = args[0]
  
  if(s2 === 'aç' || s2 === 'ac')
    {
      db.set(`offline_${message.guild.id}`, 1)
      message.reply("Offline Etiket **açıldı.**")
      
    }
  else if(s2 === 'kapa' || s2 === 'kapat')
    
    {
      db.set(`offline_${message.guild.id}`, 0)
       message.reply("Offline Etiket **kapatıldı.**")
    }
    
    else
      {
        message.reply("!!offline-etiket aç | !!offline-etiket kapat olarak kullanın")
        
      }


     }catch(err) { console.log(err + "hata bulundu")}
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['offline-etiket'],
    kategori: 'kullanıcı',
  permLevel: 0
};

exports.help = {
  name: 'offline',
  description: 'saane.',
  usage: 'offlineetiket'
};