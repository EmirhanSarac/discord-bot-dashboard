const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {


  let x = /(-)/

 


    let altın = await db.fetch(`altıncıklar_${message.author.id}`);
  let miktar = args.slice(0).join(' ');
  if (!miktar) return message.reply('Alacağın miktarı yazman gerek!');


  if (miktar.match(x)) return message.reply('Tek zeki sensin zaten!');
if (isNaN(args[0])) return message.channel.send("Lütfen bir sayı gir.")


  
  let para = await db.fetch(`paracık_${message.author.id}`);
  
  let eksilcek = -250
//  let sigara = 1
  let altinMiktar = 1
  let altinpara = 250
 
    if (para < altinpara*miktar) {
      message.channel.send(`:no_entry: ${miktar} Altın alabilmek için yeterli paran görünmüyor. \n Gerekli para **${miktar*altinpara} **`)
  } else if (para > miktar*altinpara) {
    
 const i = await db.add(`paracık_${message.member.id}`, -miktar*altinpara)
     db.add(`altıncıklar_${message.member.id}`, miktar)
     const aldıE2 = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(`${client.emojis.get(client.emojiler.evet)} Başarıyla marketten **${miktar}** altın aldınız\n Hesabınızdan eksilen para miktarı: **${miktar*altinpara}TL**`)
     .setTimestamp()
     message.channel.send(aldıE2)
 
  } else if (para = miktar*altinpara) {
    
    const i = await db.add(`paracık_${message.member.id}`, -miktar*altinpara)
   db.add(`altıncıklar_${message.member.id}`, miktar)
   const aldıE = new Discord.RichEmbed()
     .setColor('RANDOM')
     .setDescription(`${client.emojis.get(client.emojiler.evet)} Başarıyla marketten **${miktar}** altın aldınız\n Hesabınızdan eksilen para miktarı: **${miktar*altinpara}TL**`)
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
  name: 'altınal',
  description: 'Paranızla altın alıp marketten eşya satın alabilirsiniz.',
  usage: 'altınal'
};