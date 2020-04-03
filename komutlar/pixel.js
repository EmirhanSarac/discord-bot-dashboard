var Jimp = require('jimp');
const Discord = require('discord.js');
exports.run = (client, message, params) => {

      const snekfetch = require("snekfetch");
snekfetch.get(`https://discordbots.org/api/bots/${client.user.id}/check?userId=${message.author.id}`)
.set("Authorization", client.ayarlar.dbltoken)
.then(response => {
var check = response.body.voted;
if(check == 1) {
  let user = message.mentions.users.first() || message.author
  
      Jimp.read(user.avatarURL, function (err, image){
          image.resize(295, 295)
          if(err) return message.channel.send('Bir hata oluştu: ``'+err+'``\n Lütfen yapımcıya bildirin.');
          image.pixelate(10, 10, 10).write('./x/pixel.png');
          setTimeout(() => {
            message.channel.send({file: './x/pixel.png'});
                  message.react('617413726768988160')
          }, 500);
      });
  } else {
        let embed = new Discord.RichEmbed()
              .setTitle('HATA')
              .setColor('RANDOM')
              .setDescription(`${client.emojis.get(client.emojiler.hayır)} **Hata**, bu komutu kullanmak için **12 saat aralıkla** **[BURADAN](https://discordbots.org/bot/${client.user.id}/vote)**  botu oylamanız gerekmektedir. Onaylanması **1-4** dakikayı bulabilir, lütfen bekleyin. `)
            message.channel.send(embed)
              return }})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["invert"],
  permLevel: 0,
  kategori: "efekt"
};

exports.help = {
  name: 'pixel',
  description: 'Avatarınızı pixelleştirir.',
  usage: 'pixel ve pixel <@kullanıcı>'
};