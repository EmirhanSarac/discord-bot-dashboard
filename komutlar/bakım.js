const Discord = require('discord.js');
const db = require('quick.db')
exports.run = async(client, message, args) => { 
if(message.author.id !== "282453998529806338") return message.channel.send('Bu komutu sadece sahibim kullanabilir :x:')
  
  if(args[0] === "kapalı") {
let veri = await db.fetch(`botbakım`)
if(!veri) return message.channel.send('Anlaşılan bot zaten bakımda değil. :x:')
message.channel.send('Bot bakım modundan çıkarıldı.!')
db.delete(`botbakım`)    
  return
}
 
    
if(args[0] === "açık") {

  
  let codeming = args.slice(1).join(' ');
  let codemings; 
  codemings = 'Vortex'
  if(!codeming) return message.channel.send(':x: Bir bakım sebebi girmelisin.')

  let yasin = new Discord.RichEmbed()
  .setTitle('Bot Bakıma Alındı!')
  .setDescription('Şu andan itibaren botu bakıma aldınız.Sizin dışında hiçbir kullanıcı siz bakımı kapayana kadar hiçbir bot komutunu kullanamayacak. \n\n **kapamak için:** !!bakım kapat \n\n Botu kullanmaya çalışan kişilere `'+codeming+'` sebebi ile bakımda olduğumu belirteceğim.')
  .setColor('RED')
  .setFooter(codemings + ' Bot Bakım Sistemi')
message.channel.send(yasin)
  message.delete()
  db.set(`botbakım`, codeming)
 return
}
message.reply('bir değer belirtmelisin \n\n `açık` / `kapalı`')
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  kategori: 'yapımcı',
  permLevel: 5
};

exports.help = {
  name: 'bakım',
  description: 'taslak', 
  usage: 'bakım'
};