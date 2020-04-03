const Discord = require('discord.js');
const Jimp = require('jimp'); 

exports.run = (client, message, args, dil) => {
  const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) { 
    let user = message.mentions.users.first() || message.author;

        Jimp.read(user.avatarURL || user.defaultAvatarURL, function (err, image){
            if(err) return message.channel.send(dil.error + err);
            image.resize(400, 400)
            image.blur(5).write(client.user.id+"-"+user.id+".png");
            setTimeout(() => {
              message.channel.send({file: client.user.id+"-"+user.id+".png"});
                
            }, 500);
        });
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
  aliases: [],
  permLevel: 0,
  kategori: "efekt",
  
};

exports.help = {
  name: 'bulanık',
  description: 'Avatarınızı bulanıklaştırıp gösterir.',
  usage: 'bulanık veya bulanık <@kullanıcı>',
 
};