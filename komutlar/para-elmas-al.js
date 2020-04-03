const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {


  let x = /(-)/


  let miktar = args.slice(0).join(' ');
  if (!miktar) return message.reply('Alacağın miktarı yazman gerek!');


  if (miktar.match(x)) return message.reply('Tek zeki sensin zaten!');
if (isNaN(args[0])) return message.channel.send("Lütfen bir sayı gir.")


  
  let para = await db.fetch(`paracık_${message.author.id}`);
  let altın = await db.fetch(`altıncıklar_${message.author.id}`);
  
  let eksilcek = -250
//  let sigara = 1
  let elmasMiktar = 1
  let elmaspara = 50
  let düşE = 49
 
    if (altın < elmaspara*miktar) {
      message.channel.send(`:no_entry: ${miktar} elmas alabilmek için yeterli altın görünmüyor. \n Gerekli altın **${miktar*elmaspara} **`)
  } else if (altın > miktar*elmaspara) {
    
      const i = await db.add(`altıncıklar_${message.member.id}`, -miktar*elmaspara)
     db.add(`elmascıklar_${message.member.id}`, miktar)
     const aldıE2 = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(`${client.emojis.get(client.emojiler.evet)} Başarıyla marketten **${miktar}** elmas aldınız\n Hesabınızdan eksilen altın miktarı: **${miktar*elmaspara}**`)
     .setTimestamp()
     message.channel.send(aldıE2)

} else if (altın = miktar*elmaspara) {
    
       const i = await db.add(`altıncıklar_${message.member.id}`, -miktar*elmaspara)
      db.add(`elmascıklar_${message.member.id}`, miktar)
     const aldıE = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(`${client.emojis.get(client.emojiler.evet)} Başarıyla marketten **${miktar}** elmas aldınız\n Hesabınızdan eksilen altın miktarı: **${miktar*elmaspara}**`)
     .setTimestamp()
     message.channel.send(aldıE)
 }

}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "profil"
};

exports.help = {
  name: 'elmasal',
  description: 'Altınınızla elmas alıp marketten eşya satın alabilirsiniz.',
  usage: 'elmasal'
};