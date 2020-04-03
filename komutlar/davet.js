const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  
  const db = require('quick.db');
    var s = 'tr'
  var a = client.commands.get('davet').help.name
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var a = client.commands.get('davet').help.enname
    }
    const dil = client[s]
    const o = a
    const msg = message

  const davet = new Discord.RichEmbed()
.setColor("RANDOM")
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setDescription(`[${dil.special.botinvite}](https://discordapp.com/oauth2/authorize?client_id=${client.user.id}&scope=bot&permissions=8)\n[${dil.special.panel}](${client.ayarlar.webpanel})\n[${dil.special.supportserver}](https://discordapp.com/invite/knESwdy) \n[${dil.special.DBLpage}](https://discordbots.org/bot/${client.user.id}) \n[${dil.special.DBLvote}](https://discordbots.org/bot/${client.user.id}/vote)
`)
message.channel.send(davet)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['linkler', 'destek', 'destek-sunucu', 'web', 'site', 'webpanel', 'web-panel', 'dashboard','invite'],
  permLevel: 0,
  kategori: "bot",
};

exports.help = {
  name: 'davet',
  description: 'Botun davet linklerini gösterir.',
  usage: 'davet',

};