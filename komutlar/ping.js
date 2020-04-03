

const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  
  const db = require('quick.db');
  
  var s = 'tr'
  var a = client.commands.get('ping').help.name
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var a = client.commands.get('ping').help.enname
    }
    const dil = client[s]
    const o = a
    const msg = message
  
  var m = await message.channel.send(`${dil.wait}`)

  setTimeout(() => {
    const pingozel = new Discord.RichEmbed()
 .setColor(client.ayarlar.renk)
        .addField(`${dil.stat.pingshead}`, `${dil.stat.pings}`.replace("{ping1}", new Date().getTime() - message.createdTimestamp).replace("{ping2}", client.ping), true)
       
        .setAuthor(client.user.username, client.user.avatarURL)
    return m.edit(pingozel)
     }, 3000)
    
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['gecikme', 'gecikme-süresi'],
  permLevel: 0,
  kategori: "genel",
  category: "general"
};

exports.help = {
  name: 'ping',
  description: 'Botun gecikme süresini gösterir.',
  usage: 'ping',
  enname: 'ping',
  endescription: 'The bot indicates the delay time.',
  enusage: 'ping'
};