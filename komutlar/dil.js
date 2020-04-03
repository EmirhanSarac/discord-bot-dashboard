const Discord = require('discord.js');
//var ayarlar = require('../ayarlar.json');
const db = require('quick.db');

exports.run = async (client, message, args) => {
  
  const ayarlar = client.ayarlar
  
  var s = 'tr'
  var a = client.commands.get('dil-değiştir').help.name
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var a = client.commands.get('dil-değiştir').help.enname
    }
    const dil = s
    const o = a
  
  var d = args.slice(0).join(' ');
  if (!d) {
    let e = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(client[dil].argerror.replace("{prefix}", ayarlar.prefix).replace("{komut}", o))
    message.channel.send(e)
    return;
  }
  
  if (d !== "en" && d !== "tr" && d !== "sıfırla" && d !== "reset") {
    let e = new Discord.RichEmbed()
    .setColor(client.ayarlar.renk)
    .setDescription(client[dil].argerror.replace("{prefix}", ayarlar.prefix).replace("{komut}", o))
    message.channel.send(e)
    return;
  }
  
  if (d === "en") {
    
    var w = db.set(`dil_${message.guild.id}`, "en")
    
    if (dil === "tr") w = "İngilizce"
    if (dil === "en") w = "English"
    
    let e = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(client[dil].dil.setd.replace("{dil}", w))
    message.channel.send(e)
    return;
    
  }
  
  if (d === "tr") {
    db.delete(`dil_${message.guild.id}`)
    
    let b = "tr"
    
    if (dil === "tr") b = "Türkçe"
    if (dil === "en") b = "Turkish"
    
    let e = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(client[dil].dil.setd.replace("{dil}", b))
    message.channel.send(e)
    return;
    
  }
  
  if (d === "sıfırla" || d === "reset") {
    
    db.delete(`dil_${message.guild.id}`)
    
    let e = new Discord.RichEmbed()
    .setColor("RANDOM")
    .setDescription(client[dil].dil.resetd)
    message.channel.send(e)
    return;
    
  }
  
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['dil', 'language'],
    permLevel: 4,
  kategori: "sunucu",
  category: "server"
  };
  
  exports.help = {
    name: 'dil-değiştir',
    description: 'Botun dilini değiştirir.',
    usage: 'dil-değiştir <en/tr/sıfırla>',
    enname: 'set-language',
    endescription: 'Bot changes the language.',
    enusage: 'set-language <en/tr/reset>'
  };