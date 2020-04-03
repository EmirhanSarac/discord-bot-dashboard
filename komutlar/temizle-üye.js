const Discord = require('discord.js');
//const ayarlar = require('../ayarlar.json');

exports.run = async function(client, message, args) {
  
 //if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
  
  var u = message.mentions.users.first()
  var x = args[1]
  if (!u) return message.reply("Birisini etiketlemelisin!")
  
  if (!x) return message.reply("Temizlemek istediğin mesaj sayısını yazmalısın!")
  
  if (isNaN(x)) return message.reply("Temizlemek istediğin mesaj sayısını yazmalısın!")
  
  if (x < 1) return message.reply("**1** adetten az mesaj silemem!")
  if (x > 100) return message.reply("**100** adetten fazla mesaj silemem!")
  
 var fetched = await message.channel.fetchMessages({limit: x})
  
  if (u) {
    var fetched = fetched.filter(m => m.author.id === u.id)
    .array()
    .slice(0, x)
    }
    
  message.channel.bulkDelete(fetched)
  .catch(error => message.channel.send("`14` günden önceki mesajları silemem!"))
    
        
  message.channel.send(`**${u.tag}** adlı kullanıcının **${x}** adet mesajı başarıyla silindi!`)
  
	//message.delete();
    
};

exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["sil-üye", "mesaj-sil-üye", "mesajları-sil-üye"],
  permLevel: 2,
    kategori: "moderasyon"
};

exports.help = {
  name: 'temizle-üye',
  category: 'moderasyon',
  description: 'Belirtilen kişinin belirtilen miktarda mesajını siler.',
  usage: 'temizle-üye <@kullanıcı> <miktar>'
};