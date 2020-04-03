const Discord = require('discord.js');

exports.run = (client, message, args) => {
    const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) {  

let mention = message.mentions.users.first();
let sender = "";

if (message.channel.guild.member(message.author).nickname == null) {
  sender = message.author.username;
} else {
  sender = message.channel.guild.member(message.author).nickname;
}

if (mention != null || mention != undefined) {
  var name = mention.username + "'s ";
  if (mention.username.endsWith("s")) {
    name = mention.username + "' ";
  }
  const avatarEmbedOther = new Discord.RichEmbed()
  .setAuthor(mention.username, mention.avatarURL)
  .setColor('RED')
  .setImage(mention.avatarURL)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
 // .setDescription(`[Avatarın büyük halini göster!](${message.author.avatarURL})`);
  message.channel.sendEmbed(avatarEmbedOther);
  
  return;
} else {
  const avatarEmbedYou = new Discord.RichEmbed()
  .setAuthor(sender, message.author.avatarURL)
  .setColor('RED')
  .setImage(message.author.avatarURL)
  .setFooter(`${message.author.tag} tarafından istendi.`, message.author.avatarURL)
  //.setDescription(`[Avatarın büyük halini göster!](${message.author.avatarURL})`);
  message.channel.sendEmbed(avatarEmbedYou);

  return;
}
message.channel.sendMessage("Render hatası yada bilinmeyen bir hata oldu.");
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
  guildOnly: false,
  aliases: ['avatarım'],
    kategori: 'kullanıcı',
  permLevel: 0
};

exports.help = {
  name: 'avatar',
  isim: 'Avatar',
  süre: 'Yok',

  description: 'Avatarınızı gösterir ve ya birini etiketlerseniz o kişinin avatarını gösterir.',
  usage: 'avatar <@kullanıcı>'
};