const Discord = require('discord.js');
const fs = require('fs');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  

  let y = await client.emojis.get(client.emojiler.yan);
  let prefix = await db.fetch(`prefix_${message.guild.id}`) || client.ayarlar.prefix;

  var ac = client.emojis.get(client.emojiler.evet);
  var ka = client.emojis.get(client.emojiler.hayır);
const yenilik = client.ayarlar.yenilik;

  

  
  const ayarReis = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setDescription(`${ac}\`Spam koruması eklendi.\`\n${ac}\`anti-raid sistemi eklendi.   \`\n${ac}\`gold üyelere özel mesaj eklendi     \`\``)
  .setTimestamp()
  message.channel.send(ayarReis)

  
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
    kategori: "bot",
  };
  
  exports.help = {
    name: 'yenilikler',
    description: 'Bota eklenmiş olan yenilikleri gösterir.',
    usage: 'yenilikler',
  };
