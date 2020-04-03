const Discord = require('discord.js');
//const ayarlar = require('../ayarlar.json');
const db = require("quick.db");
exports.run = async function(client, message, args) {
  
 //if (!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply(`Bu komutu kullanabilmek için **Mesajları Yönet** iznine sahip olmalısın!`);
    var x = args.slice(0).join(' ')
  var user = message.author;

  //var kanal = message.guild.channels.get(logA[message.guild.id].log);


     var s = 'tr'
  var a = client.commands.get('afk').help.name
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var a = client.commands.get('afk').help.enname
    }
    const dil = client[s]

  
  if (!x) return message.reply(`${dil.temizle.mesajsayı}`)
  
  2
  
  if (x < 2) return message.reply(`${dil.temizle.iki}`)
  if (x > 100) return message.reply(`${dil.temizle.yüz}`)
  
  let fetched = await message.channel.fetchMessages({limit: args[0]})
  
  message.channel.bulkDelete(fetched)
  .catch(error => message.channel.send(`${dil.temizle.hata}`))
   message.channel.fetchMessages({limit: args[0]}).then(mesajlar => {

 let silindi = mesajlar.array().length;
    message.channel.bulkDelete(mesajlar);
  message.channel.send(`${client.emojis.get(client.emojiler.konfeti)} \`${silindi}\` ${dil.temizle.silindi}`).then(msg => 	msg.delete(3000))

   })
	message.delete();
    
};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["sil", "mesaj-sil", "mesajları-sil",'clear','clean'],
  permLevel: 2,
    kategori: "moderasyon"
};

exports.help = {
  name: 'temizle',
  category: 'moderasyon',
  description: 'Belirtilen miktarda mesaj siler.',
  usage: 'temizle <miktar>'
};