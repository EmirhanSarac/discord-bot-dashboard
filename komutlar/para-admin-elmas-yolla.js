const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {

 

  let user = message.mentions.users.first();

  if (!user) return message.reply('Kime elmas yollayacağını etiketlemen lazım!');
  if (user.bot === true) return message.reply('Elmas bir bota yollarsan sen zararlı çıkarsın!');
  
  let mesaj = args.slice(1).join(' ');
  if (!mesaj) return message.reply('Yollayacağın miktarı yazman gerek!');


if (isNaN(args[1])) return message.channel.send("Lütfen bir sayı gir.")

    
    

  let elmas = await db.fetch(`elmascıklar_${message.author.id}`);
  let altın = await db.fetch(`altıncıklar_${message.author.id}`);
  let para = await db.fetch(`paracık_${message.author.id}`);


  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

 



  const embed = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`${client.emojis.get(client.emojiler.paraGitti)} ${user} Adlı kullanıcıya elmas yollandı, yollanılan miktar: ${mesaj}`)
  message.channel.send(embed)
  db.add(`elmascıklar_${user.id}`, mesaj)

  

}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['admin-elmas-ver', 'adminelmasyolla'],
  permLevel: 5,
  kategori: "yapımcı"
};

exports.help = {
  name: 'admin-elmas-yolla',
  description: 'İstediğiniz kişiye elmas yollayabilirsiniz.',
  usage: 'admin-elmas-yolla <@üye> <miktar>'
};