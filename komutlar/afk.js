const db = require("quick.db")
const Discord = require('discord.js');

exports.run = function(client, message, args) {
const snekfetch = require("snekfetch");
     var s = 'tr'
  var a = client.commands.get('afk').help.name
    if(db.has(`dil_${message.guild.id}`) === true) {
        var s = 'en'
        var a = client.commands.get('afk').help.enname
    }
    const dil = client[s]
    const o = a
 
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) {
  var USER = message.author;
  var REASON = args.slice(0).join("  ");
  if(!REASON) return message.channel.send(`${client.emojis.get(client.emojiler.hayır)} ${dil.afk.hata}`).then(message => message.delete(7000));
  
  db.set(`afk_${USER.id}`, REASON);
  db.set(`afk_süre_${USER.id}`, Date.now());
  message.channel.send(`${client.emojis.get(client.emojiler.evet)} ${dil.afk.giris}`).then(message => message.delete(7000));

  } else {
let embed = new Discord.RichEmbed()
      .setTitle('HATA')
      .setColor('RANDOM')
      .setDescription(`${client.emojis.get(client.emojiler.hayır)} **Hata**, bu komutu kullanmak için **12 saat aralıkla** **[BURADAN](https://discordbots.org/bot/${client.user.id}/vote)**  botu oylamanız gerekmektedir. Onaylanması **1-4** dakikayı bulabilir, lütfen bekleyin. `)
    message.channel.send(embed)
      return }});
  
};
  
 

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  kategori: 'kullanıcı',
  permLevel: 0 
};

exports.help = {
  name: 'afk', 
  description: 'Afk moduna girmenizi sağlar.',
  usage: 'afk <sebep>'
};